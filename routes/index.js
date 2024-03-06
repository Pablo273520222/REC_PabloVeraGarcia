var express = require('express');
var router = express.Router();
const Personaje = require('../models/Personaje'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/mosaico/personajes');
});

router.get('/listado', async (req, res, next) => {
  try {
    const personajes = await Personaje.find({}, 'name');
    res.render('index', { title: '[Alumno: Pablo Vera]', personajes });
  } catch (error) {
    next(error);
  }
});

router.get('/mosaico/personajes', async function(req, res) {
  try {
    const personajes = await Personaje.find();
    res.render('personaje', { title: '[Alumno: Pablo Vera]', personajes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

