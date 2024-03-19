const express = require('express');
const app = express();

//Configuraciones generales.
const port = process.env.PORT || 3000;

//Erutamiento.
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);
app.use('/agregarUsuario', userRoutes);


//Iniciar servidor.
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port}`);
});