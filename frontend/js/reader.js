document.getElementById("all").addEventListener("click", ()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8888/API/v1/quotes", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("quotes").innerHTML = '';
            let response = JSON.parse(this.response);
            for(let i = 0; i < response.data.length; i++){
                let txtQuote = document.createElement("p");
                let txtSrc = document.createElement("p");
                let divQuote = document.createElement("div");
                let quote = response.data[i].quote;
                let src = response.data[i].src;
                txtQuote.innerHTML = quote;
                txtSrc.innerHTML = src;
                divQuote.appendChild(txtQuote);
                divQuote.appendChild(txtSrc);
                document.getElementById("quotes").append(divQuote);
            }
        }
    };
});

document.getElementById("latest").addEventListener("click", ()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8888/API/v1/quotes/1", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("quotes").innerHTML = '';
            let response = JSON.parse(this.response);
            let txtQuote = document.createElement("p");
            let txtSrc = document.createElement("p");
            let divQuote = document.createElement("div");
            let quote = response.data[0].quote;
            let src = response.data[0].src;
            txtQuote.innerHTML = quote;
            txtSrc.innerHTML = src;
            divQuote.appendChild(txtQuote);
            divQuote.appendChild(txtSrc);
            document.getElementById("quotes").append(divQuote);
        }
    };
});