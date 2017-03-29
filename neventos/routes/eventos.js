module.exports = function (app) {
 var valida = require('./../middlewares/valida');
 var eventos = app.controllers.eventos;
 
 app.get('/menu', valida, eventos.menu);
 app.get('/cadCurso', valida, eventos.cadastroCurso);
 app.get('/cadCurso', valida, eventos.newCombo);
 app.get('/listaCursos', valida, eventos.listaCursos);
}; 