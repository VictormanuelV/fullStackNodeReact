import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Usuarios from './components/usuarios';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Website</h1>
        <p>This is a simple landing page created with React.</p>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><a href="/agregarUsuario">Agregar Usuario</a></li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          {/* Agrega más características según sea necesario */}
        </ul>
      </section>
      <section className="cta">
        <h2>Call to Action</h2>
        <p>Place your call to action here.</p>
        {/* Agrega botones u otro contenido de llamada a la acción */}
      </section>
      <footer>
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default HomePage;



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
