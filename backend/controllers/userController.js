const userModel = require('../models/userModel');
const path = require('path');

const controller = {};

controller.createUser = (request, response) =>{
    console.log('Formulario Nuevo Usuario');
};

controller.readAll = (request, response) => {
    console.log('Home Page');
    response.json({"usuarios": ['usuario 1', 'usuario 2', 'usuario 3']});
};

module.exports = controller;