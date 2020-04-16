function Noticias(){

}
Noticias.prototype.getData = function(connection, callback){
    connection.pool('select * from noticias',callback);
}
Noticias.prototype.getInsert = function(noticia,connection,callback){
    connection.query('insert into noticias set ?',noticia, callback);
}
Noticias.prototype.getSearch = function(search,connection,callback){
    connection.query('select * from noticias where idnoticias = ?',[search.idnoticias],callback);
}
Noticias.prototype.getUpdate = function(update,connection,callback){
    connection.query('update noticias set titulo=?, noticia=? where idnoticias = ?',[update.titulo, update.noticia, update.idnoticias],callback);
}
Noticias.prototype.getDelete = function(id,connection,callback){
    connection.query('delete from noticias where idnoticias=?', [id.find],callback);
}
Noticias.prototype.getAuthentication = function(user,connection,callback){
    connection.query('select * from users where user = ? and pass = ?',[user.user, user.senha], callback);
}
module.exports = function(){
        return Noticias;
}