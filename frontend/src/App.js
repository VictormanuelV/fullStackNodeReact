import React, { useEffect, useState } from 'react';

const HomePage = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/')
      .then(response => {
        if(!response.ok){
          throw new Error('Error al obtener lista de usuarios (Fetch React)');
        }
        // Parsear la respuesta JSON
        return response.json();
      })
      .then(data => {
        setUsers(data.usuarios);
      })
      .catch(error => {
        console.log(error);
      })

  }, []);

return (
    <div>
      <h1>Lista de Usuarios</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>           
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
              </tr>
            ))
          } 
        </tbody>
      </table>
    </div>
  );

};

export default HomePage;
