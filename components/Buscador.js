import React, { Component } from 'react';

class Buscador extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) => { //Metodo
        e.preventDefault();
        //Tomamos el valor del input
        alert(this.busquedaRef.current.value);
        //Lo enviamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}> {/*Invocacion submit */}
                <div className="row">
                    {/*{this.props.mensaje} PARA QUE NO DE ERROR*/}
                    <div className="form-group col-md-7"> {/*De boostrap. Para que tome de las 8 columnas que vienen por default*/}
                        <input ref={this.busquedaRef} type="text" className="form-control
                        form-control-lg" placeholder="Busca tu imagen.
                        Ejemplo: Futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-dange btn-block" 
                        value="Buscar.."/>
                        {/*<link rel="stylesheet" href="estiloBoton.css"/>*/}
                        <style>{".btn { background-color: red; }"}</style>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;