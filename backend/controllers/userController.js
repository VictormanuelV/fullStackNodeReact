const userModel = require('../models/userModel');
const path = require('path');

const controller = {};

controller.createUser = (request, response) =>{
    const user = request.body;
    console.log('Agregar Usuario...');
};

controller.readAll = (request, response) => {
    console.log('Home Page');

    const pathPage = path.join(__dirname,'../..', 'frontend', 'public', 'index.html');
    response.sendFile(pathPage);
};

module.exports = controller;