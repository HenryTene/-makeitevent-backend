const { Console } = require("console");
const http = require("http"); //common js

//import http from 'http' //ES6

const app = http.createServer((request, response)=>{
    //construir toda la respuesta de backend al frontend
    //consulta a bd , transformar , CRUD

    response.writeHead(200,{'Content-type':'text/plain'})
    response.write('Hola Henry')
    response.end();

    
});
const PORT=8080;

app.listen(PORT,()=>{

    console.log("Server is running on localhost:8080")
})

