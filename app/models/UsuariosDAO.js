function UsuariosDAO(context){
    this._context = context
};

UsuariosDAO.prototype.inserirUsuario = async function(usuario){
    const db = await this._context.connectDb();
    const collection = db.collection('usuarios');
    await collection.insertOne(usuario);
    this._context.desconnectDb();
}

UsuariosDAO.prototype.autenticar = async function(usuario, req, res){
    const db = await this._context.connectDb();
    const collection = db.collection('usuarios');
    const result = await collection.find({usuario: usuario.usuario}).toArray();
    
    if(result[0] != undefined){
        req.session.autorizado = true;
    }else{
        
    }
}

module.exports = () => {
    return UsuariosDAO;
}