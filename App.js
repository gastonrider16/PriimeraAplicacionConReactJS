import react from 'react';
import Buscador from './components/Buscador';

class App extends react.Component {
  datosBusqueda = (termino) => {
    console.log(termino);
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de imágenes
          </p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
      </div>
    );
  }
}

/*function App() {
  datosBusqueda = (termino) => {
    alert(termino);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imágenes
        </p>
        <Buscador 
          datosBusqueda={this.datosBusqueda}
        />
      </div>
    </div>
  );
}*/

export default App;
