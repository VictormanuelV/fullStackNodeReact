const userModel = require('../models/userModel');
//const path = require('path');

const controller = {};

controller.createUser = (request, response) =>{
    console.log('Formulario Nuevo Usuario');
};

controller.readAll = (request, response) => {
    console.log('Home Page');

    userModel.readAll((error, users) => {
        if(error){
            console.log('Error al recuperar usuarios (por el Controller)', error);
            return response.status(500).json({error: 'Error interno al listar usuarios.'});
        }
        response.json({usuarios: users});
    })
};

module.exports = controller;