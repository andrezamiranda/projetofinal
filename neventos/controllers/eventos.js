module.exports = function (app) {

    var categories = [
        { id: 0, name: 'Desenvolvimento' },
        { id: 1, name: 'Arquitetura Java' },
        { id: 2, name: 'Arquitetura .Net' },
        { id: 3, name: 'Projetos Integrados' },
        { id: 4, name: 'Gestão de Processos' }
      ];

 var EventosController = {
 //chamadas a páginas via get
 menu: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('eventos/menu', params);
 },
 cadastroCurso: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('eventos/cadCurso', params);
},
newCombo: function(req, res){
    var params = { categories: categories };
    res.render('eventos/cadCurso', params);
},
 listaCursos: function (request, response) {
 var usuario = request.session.usuario,
 params = { usuario: usuario };
 response.render('eventos/listaCursos', params);
 }
 };
 return EventosController;
}; 
