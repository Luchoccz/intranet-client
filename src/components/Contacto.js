import React, { Component } from "react";
import cruzBlanca from "../images/cruzBlanca.png";

export default class Contacto extends Component{
  constructor(props){
    super(props);
    this.state = {
      nombre:"",
      telefono:"",
      email:"",
      comentario:""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { Nombre, Telefono, Email, Comentario } = this.state;
    const { enviar, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    });

    return(
    <div className="container-B-contacto">
      <div className="tittle-contacto">
        <h1>CONTACTANOS</h1>
        <div className="cruzBlanca">
          <img src={cruzBlanca} />
        </div>
      </div>
      <div className="windows-contacto">
        <form onSubmit={this.handleSubmit}>
          <div className="T-contacto">
            <h2>Datos de Contacto</h2>
          </div>
          <input type='text' onChange={ this.handleChange } value={ Nombre }placeholder='Nombre y Apellido:'  />
          <input type='number' onChange={ this.handleChange } value={ Telefono }placeholder='Telefono:'  />
          <input type='email' onChange={ this.handleChange } value={ Email }placeholder='Email:'  />
          <input type='text' onChange={ this.handleChange } value={ Comentario }placeholder='Comentario:'  />
          <div className="B-contacto">
            <button type='submit'>{enviar}Enviar</button>
          </div>
        </form>
      </div>
      <div className="googleMap">
      </div>
    </div>
    );
  };
};