import react from 'react';
import Buscador from './components/Buscador';

class App extends react.Component {
  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }
  state = { //state es un objeto
    termino : 'HOLA MUNDO'
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
        {this.state.termino}
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
