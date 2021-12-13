import {contenedor} from "./ManArchivos";

const express = require ('express');
const path = require ('path');
const contenido = new contenedor ("productos.txt");
const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () =>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log (`Erorr en servidor ${error}`))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
    
}
)
app.get('/productos', (req, res)=>{
   let arrayProductos = obtenerProductos();
   res.send(arrayProductos);
    
}
)
app.get('/productoRandom', (req, res)=>{
    res.send(numeroRandom);
    
}
)
let obtenerProductos = () => {
    const lista = contenido.getAll();
    return lista;
}
let numeroRandom = () => {
    const numR= Math.random() * (contenedor.length() - 0) +0 ;
}
