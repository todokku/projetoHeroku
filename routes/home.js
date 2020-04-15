const { check, validationResult } = require('express-validator');
module.exports = function(app){
    var home = app.controller.home;
    app.get('/', home.index);
    app.get('/noticias_all', home.index);
    app.get('/noticia:id?', home.find);
    app.post('/cadastro', home.register);
    app.get('/delete:id?', home.delete);
    app.post('/alterar', home.update);
    app.get('/register', function(req,res){
        res.render('register',{ header: 'header.ejs', footer: 'footer.ejs'});
    });
    app.get('/login', function(req,res){
        res.render('login',{ header: 'header.ejs', footer: 'footer.ejs'});
    });
    app.post('/authentication',home.authentication);
    app.get('/interno', function(req,res){
        if(req.session.autorizado){
            res.render('interno',{ header: 'header.ejs', footer: 'footer.ejs'});
        }else{
            res.send('Sem sessão !!!!');
        }
    });
    app.get('/sair',function(req,res){
        req.session.destroy( function(err){
            res.render('login',{ header: 'header.ejs', footer: 'footer.ejs'});
        })
    })
}
