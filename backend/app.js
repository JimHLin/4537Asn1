const mysql = require("mysql");
const url = require('url');
const http = require("http");
const { parse } = require('querystring');
const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "webdev" 
});
var data = "";
var server = http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    res.writeHead(200, {
        "Content-type": "text/html",
        "Access-Control-Allow-Origin" : "*"
    });
    if (req.method === 'POST') {
        console.log("posted");
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let data = parse(body);
            console.log(
                data.quote
            );
            con.getConnection((err, connection) => {
            if (err) throw err;
            console.log("conencted!");
            if(data.clear){
                connection.query("DELETE FROM quotes");
            }else{
                connection.query("INSERT INTO quotes(quote, src) values('" + data.quote + "', '" + data.src + "')", (err, result, fields) => {
                    connection.release();
                    if (err) throw err;
                    data = result;
                });
            }
        });
            res.end('ok');
        });
        
    }else if(q.pathname.startsWith('/API/v1/quotes/1')){
        let myPromise = new Promise(function(myResolve, myReject) {
            setTimeout(()=>myReject("timeout"), 10000);
            con.getConnection((err, connection) => {
                if (err) throw err;
                console.log("conencted!");
                connection.query("SELECT row FROM quotes WHERE quoteID=(SELECT max(quoteID) FROM quotes)",
                                 (err, result) => {
                    connection.release();
                    if (err) throw err;
                    myResolve(result);
                    
                });
            });
        });
        
        myPromise.then(
            function(value) {
                console.log(JSON.stringify(value));
                res.write('{"data" : ' + JSON.stringify(value) + "}");
                res.end();
            }
        ).catch((error) =>{
            res.write(error);
            res.end();
        });
        
        
    }else if(q.pathname.startsWith('/API/v1/quotes')){
        let myPromise = new Promise(function(myResolve, myReject) {
            setTimeout(()=>myReject("timeout"), 10000);
            con.getConnection((err, connection) => {
                if (err) throw err;
                console.log("conencted!");
                connection.query("SELECT * FROM quotes", (err, result) => {
                    connection.release();
                    if (err) throw err;
                    myResolve(result);
                    
                });
            });
        });
        
        myPromise.then(
            function(value) {
                console.log(JSON.stringify(value));
                res.write('{"data" : ' + JSON.stringify(value) + "}");
                res.end();
            }
        ).catch((error) =>{
            res.write(error);
            res.end();
        });
        
        
    }else{
        res.write("none reached");
        res.end();
    }
});

server.listen(8888);