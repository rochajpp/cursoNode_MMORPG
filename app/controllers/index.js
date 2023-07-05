module.exports.index = function(application, req, res){
    res.render('index', {validacao: {}, credencialErr: false});
}

module.exports.autenticar = (application, req, res) => {
    var dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("index", {validacao: erros, credencialErr: false});
        return;
    }


    const context = require("../../config/dbConnection");
    const model = new application.app.models.UsuariosDAO(context);

    model.autenticar(dadosForm, req, res);

}