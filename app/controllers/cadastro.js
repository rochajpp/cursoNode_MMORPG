module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}});
}

module.exports.cadastrar = function (application, req, res){
    var dadosform = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

   var erros = req.validationErrors();

    if(erros){
        res.render('cadastro', {validacao: erros});
        return;
    }

    res.send('podemos cadastrar');

}