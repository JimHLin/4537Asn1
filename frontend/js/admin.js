const xhttp = new XMLHttpRequest();
xhttp.open("GET", "http://localhost:8888/API/v1/quotes", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let response = JSON.parse(this.response);
        console.log(response.data.length);
        for(let i = 0; i < response.data.length; i++){
            const divQuote = document.createElement("div");
            const txtQuote = document.createElement("textarea");
            const txtPerson = document.createElement("textarea");
            const btnDelete = document.createElement("button");
            let quote = document.createTextNode(response.data[i].quote);
            txtQuote.appendChild(quote);
            let src = document.createTextNode(response.data[i].src);
            txtPerson.appendChild(src);
            divQuote.appendChild(txtQuote);
            divQuote.appendChild(txtPerson);
            divQuote.appendChild(btnDelete);
            btnDelete.appendChild(document.createTextNode("Delete"));
            btnDelete.onclick = function(){
                divQuote.remove();
            }
            document.getElementById("quotes").appendChild(divQuote);
        }
    }
};



const btnAdd = document.createElement("button");
let txtAdd = document.createTextNode("Add new quote");
btnAdd.appendChild(txtAdd);
btnAdd.onclick = function(){
    add();
}
document.body.appendChild(btnAdd);

const btnSave = document.createElement("button");
let txtSave = document.createTextNode("save all");
btnSave.appendChild(txtSave);
btnSave.onclick = function(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8888/", true);
    xhttp.send("clear=true");
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let children = document.getElementById("quotes").childNodes;
            for(let i = 0; i < children.length; i++){
                let quote = children[i].childNodes[0].value;
                let src = children[i].childNodes[1].value;
                console.log(children[i].childNodes[0].value + " " + children[i].childNodes[1].value)
                submit("quote=" + quote +"&src=" + src);
            }
        }
    };   
}
document.body.appendChild(btnSave);

function add(){
    const divQuote = document.createElement("div");
    const txtQuote = document.createElement("textarea");
    const txtPerson = document.createElement("textarea");
    const btnDelete = document.createElement("button");
    divQuote.appendChild(txtQuote);
    divQuote.appendChild(txtPerson);
    divQuote.appendChild(btnDelete);
    btnDelete.appendChild(document.createTextNode("Delete"));
    btnDelete.onclick = function(){
        divQuote.remove();
    }
    document.getElementById("quotes").appendChild(divQuote);
}


function submit(value){
            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost:8888/", true);
            xhttp.send(value);
            xhttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200){
                    location.reload();
                }
            };    
    }