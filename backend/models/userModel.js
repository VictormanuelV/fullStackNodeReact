const connection = require('../database/connect');

// Listar usuarios.
const readAll = (callback) => {
    const query = 'SELECT * FROM cliente';

    connection.query(query, (error, results, fields) => {
        if(error){
            return callback(error, null);
        }
        return callback(null, results);
    });
}

module.exports = {
    readAll
};