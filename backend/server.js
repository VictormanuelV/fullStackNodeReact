const express = require('express');
const app = express();
const cors = require('cors');

const allowedOrigins = ['http://localhost:3001'];

const corsOptions = {
  //!origin "Si esta solicitud no viene con un origen (no es una solicitud CORS o solicitud del mismo origen) entonces permítela.
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'] // Puedes ajustar los métodos según tus necesidades
}

//Configuraciones generales.
const port = process.env.PORT || 3000;
app.use(cors(corsOptions));

//Erutamiento.
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);
app.use('/agregarUsuario', userRoutes);


//Iniciar servidor.
app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port}`);
});