const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_system'
});

//Conectarse a la base de datos.
connection.connect((error) => {
    if(error){
        console.log('Error de conexión a la base de datos:', error);
    }else{
        console.log('Conexión exitosa.')
    }
});

module.exports = connection;