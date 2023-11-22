const express = require('express');
const router = express.Router();

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios');
const Usuarios_FilmesController = require('../controllers/usuarios_filmes');
const PerfisController = require('../controllers/perfis');
const FilmesController = require('../controllers/filmes');
const Filme_AtoresController = require('../controllers/filme_atores');
const AtoresController = require('../controllers/atores');

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.CadastrarUsuarios);
router.patch('/usuarios/:usu_cod', UsuariosController.EditarUsuarios);
router.delete('/usuarios/:usu_cod', UsuariosController.ApagarUsuarios);
// post
// patch
// delete
router.get('/usuarios_filmes', Usuarios_FilmesController.listarUsuarios_Filmes);
router.post('/usuarios_filmes', Usuarios_FilmesController.CadastrarUsuarios_Filmes);
router.patch('/usuarios_filmes/:usfm_cod', Usuarios_FilmesController.EditarUsuarios_Filmes);
router.delete('/usuarios_filmes/:usfm_cod', Usuarios_FilmesController.ApagarUsuarios_Filmes);
// post
// patch
// delete
router.get('/perfis', PerfisController.listarPerfis);
router.post('/perfis', PerfisController.CadastrarPerfis);
router.patch('/perfis/:perf_cod', PerfisController.EditarPerfis);
router.delete('/perfis/:perf_cod', PerfisController.ApagarPerfis);
// post
// patch
// delete
router.get('/filmes', FilmesController.listarFilmes);
router.post('/filmes', FilmesController.CadastrarFilmes);
router.patch('/filmes/:fme_cod', FilmesController.EditarFilmes);
router.delete('/filmes/:fme_cod', FilmesController.ApagarFilmes);
// post
// patch
// delete
router.get('/filme_atores', Filme_AtoresController.listarFilme_Atores);
router.post('/filme_atores', Filme_AtoresController.CadastrarFilme_Atores);
router.patch('/filme_atores/:fme_cod/:at_cod', Filme_AtoresController.EditarFilme_Atores);
router.delete('/filme_atores/:fme_cod/:at_cod', Filme_AtoresController.ApagarFilme_Atores);
// post
// patch
// delete
router.get('/atores', AtoresController.listarAtores);
router.post('/atores', AtoresController.CadastrarAtores);
router.patch('/atores/:at_cod', AtoresController.EditarAtores);
router.delete('/atores/:at_cod', AtoresController.ApagarAtores);
// post
// patch
// delete

module.exports = router;