const { check, validationResult } = require('express-validator');
module.exports = function(app){
      var result ={
            index: function(req,res){
                  var connection =  app.db.db;
                  var origem = req.path.replace( '/', '');;
                  var home = new app.model.Noticias;
                  home.getData(connection, function(error,result){
                        origem === "noticias_all" ? res.render("noticias/noticias", { header: '../header.ejs', footer: '../footer.ejs', noticias: result}) : res.render("index", { header: 'header.ejs', footer: 'footer.ejs', noticias: result});
                  });
            },
            register: function(req,res){
                  let noticia = req.body;
                  
                  var connection =  app.db.db();
                  var home = new app.model.Noticias;
                  home.getInsert(noticia,connection, function(error,result){
                        res.redirect('/');
                  });
            },
            find: function(req,res){
                  let search = req.query;
                  var connection =  app.db.db();
                  var home = new app.model.Noticias;
                  home.getSearch(search,connection, function(error,result){
                        res.render("noticias/noticia", { header: '../header.ejs', footer: '../footer.ejs', search: result}); 
                  });
            },
            update: function(req,res){
                  let update = req.body;
                  var connection =  app.db.db();
                  var home = new app.model.Noticias;
                  home.getUpdate(update,connection, function(error,result){
                        console.log(error)
                        console.log(result)
                        res.redirect('/');
                  });
            },
            delete: function(req,res){
                  let id = req.query
                  var connection =  app.db.db();
                  var home = new app.model.Noticias;
                  home.getDelete(id,connection, function(error,result){
                        console.log(error)
                        console.log(result)
                        res.redirect('/');
                  });
            },
            authentication: function(req,res){
                  let user = req.body;
                  var connection =  app.db.db();
                  var home = new app.model.Noticias;
                  home.getAuthentication(user,connection, function(error,result){
                        console.log(result);
                        console.log(error);
                        if(result == '') {
                              res.send("Usuario nao encontrado !!!");
                        }
                        else {
                              req.session.autorizado = true;
                                    res.redirect('interno');
                                    console.log(req.session.id);
                        }
                        
                  });
            }
      }
     return result;
}     