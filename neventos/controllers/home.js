module.exports = function (app) {
 var HomeController = {
 index: function (request, response) {
 response.render('home/index');
 },
 login: function (request, response) {
 var nome = request.body.usuario.nome;
 var senha = request.body.usuario.senha;
 if (nome == 'admin' && senha == 'admin') {
 var usuario = request.body.usuario;
 request.session.usuario = usuario;
 response.redirect('/menu');
 }
 else {
 response.redirect('/');
 }
 }, 
 logout: function (request, response) {
 request.session.destroy();
 response.redirect('/');
 },
 //cadastro de curso
 novoCurso: function (request, response) {
 var codigo = request.body.curso.codigo;
 var descricao = request.body.curso.descricao;
 var ch = request.body.curso.ch;
 var categoria = request.body.curso.categoria;

 //código a ser implementado
 response.redirect('/menu');
 },
 };
 return HomeController;
}; 