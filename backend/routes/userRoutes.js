const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Procesar rutas solicitadas.
router.get('/', userController.readAll);
router.get('/agregarUsuario', userController.createUser);

module.exports = router;