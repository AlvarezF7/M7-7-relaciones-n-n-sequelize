
const express = require('express');
const router = express.Router();

const peliculaCtrl = require('../controllers/peliculaController');
const actorCtrl = require('../controllers/actorController');
const asignacionCtrl = require('../controllers/asignacionController');

router.get('/pelicula', peliculaCtrl.getPeliculas);
router.post('/pelicula', peliculaCtrl.createPelicula);

router.get('/actor', actorCtrl.getActores);
router.post('/actor', actorCtrl.createActor);

router.post('/asignar-actor', asignacionCtrl.asignarActor);
router.delete('/pelicula/:id', peliculaCtrl.deletePelicula);

module.exports = router;