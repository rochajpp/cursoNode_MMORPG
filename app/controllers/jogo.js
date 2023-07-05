module.exports.jogo = function(application, req, res){

    if(req.session.autorizado){
        res.render('jogo', {casa: req.session.casa});
    } else{
        res.send("Usuário precisa fazer login!");
    }
}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
        if(err){
            res.send(err);
        } else{
            res.redirect('/');
        }
    });
}