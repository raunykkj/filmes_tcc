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
// post
// patch
// delete
router.get('/usuarios_filmes', Usuarios_FilmesController.listarUsuarios_Filmes);
// post
// patch
// delete
router.get('/perfis', PerfisController.listarPerfis);
// post
// patch
// delete
router.get('/filmes', FilmesController.listarFilmes);
// post
// patch
// delete
router.get('/filme_atores', Filme_AtoresController.listarFilme_Atores);
// post
// patch
// delete
router.get('/atores', AtoresController.listarAtores);
// post
// patch
// delete

module.exports = router;