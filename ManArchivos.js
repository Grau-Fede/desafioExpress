class contenedor {
    constructor (nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }
    async save (object){
        try{
            const archivo = await this.getAll().then((res)=> res).catch((err)=> {throw err});
            if (archivo.length <= 0){
                object.id=1;
                archivo.push(object);
                const data = JSON.stringify(archivo);
                fs.writeFileSync(this.nombreArchivo, data, 'utf-8');
                return object;
            }
            object.id = file.length +1;
            file.push(object);
            fs.writeFileSync(this.nombreArchivo, data, 'utf-8');
            return object;
        }
        catch (error){
            throw error;
        }
    }
    getById(id){
        try {
            const archivo = await this.getAll().then((res)=> res).catch((err)=> {throw err});
            if (archivo.find(id)!= null)
            {   
                return archivo.find(id);
            }
            else 
            return null;
        }
        catch (error){
            throw error;
        }

    }
    async getAll(){
        try {
            const contenido = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            if(!contenido) {
                const productos = []
                fs.writeFileSync(this.archivo, JSON.stringify(productos))
                return productos
              }
            const datos = JSON.parse(contenido);
            return datos;
        }
        catch(err){
            console.log('Error', err)
        }

    }
    deleteById(Id){
        try {
            const archivo = await this.getAll().then((res)=> res).catch((err)=> {throw err});
            let index = archivo.indexOf(Id);
            archivo.splice(index,1);
        }
        catch(error){
            throw error;
        }
    }
    deleteAll(){
        try {
            const archivo = await this.getAll().then((res)=> res).catch((err)=> {throw err});
            archivo.splice(0,archivo.length);
        }
        catch(error){
            throw error;
        }
    

    }
}