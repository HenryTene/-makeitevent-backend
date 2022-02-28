const { Console } = require("console");
const http = require("http"); //common js

//import http from 'http' //ES6
const notes = [
    { id: 1, title: 'Express'},
    { id: 2, title: 'Mongo' },
    { id: 3, title: 'Docker' }
  ]

const app = http.createServer((request, response)=>{
    //construir toda la respuesta de backend al frontend
    //consulta a bd , transformar , CRUD

    response.writeHead(200,{'Content-type':'application/json'})
    response.write(JSON.stringify(notes))
    response.end();

    
});
const PORT=8080;

app.listen(PORT,()=>{

    console.log("Server is running on localhost:8080")
})

