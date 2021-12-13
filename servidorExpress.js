const express = require ('express');
const path = require ('path');

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log (`Erorr en servidor ${error}`))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})