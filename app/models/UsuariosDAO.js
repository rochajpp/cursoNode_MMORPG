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
        if(result[0].senha == usuario.senha){       
            req.session.autorizado = true;
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;

            res.redirect('/jogo')
        } else{
            res.render('index', {credencialErr: true, validacao: {}});
        }
    }else{
        res.render('index', {credencialErr: true, validacao: {}})
    }


    this._context.desconnectDb();
}

module.exports = () => {
    return UsuariosDAO;
}