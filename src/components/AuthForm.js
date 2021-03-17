import React, { Component } from "react";
import { login } from '../store/actions/auth'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class AuthFrom extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, 'state');
    const authType = this.props.singin ? "signin" : "signout";
    this.props.login(authType, this.state)
    .then(() => {
      this.props.history.push("/interfaz");
    })
    .catch (() => {
      return;
    })
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render(){
    const { username, password } = this.state;
    const { iniciar, ingresar, errors, history, removeError } = this.props;

    history.listen(() => {
      removeError();
    })
    return(
      <div id="contenedor-iniciasesion">
        <div className="row justify-content-md-center md-center text-center">
          <div className="fdepantallaIS" />
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h1 style={{ marginRight: '4.7em' }}>Login</h1>
              { errors.message && (
              <div className="alert alert-danger">{errors.message}</div>) 
              }
              <TextField login={login} style={{ backgroundColor: '#F4F4F4', margin: '1em' }} label="Usuario" autoComplete="off" type='text' onChange={ this.handleChange } id="username" name="username" value={ username } color="primary" variant="outlined" />
              <TextField login={login} style={{ backgroundColor: '#F4F4F4' }} label="Password" autoComplete="off" type='password' onChange={ this.handleChange } id="password" name="password" value={ password } variant="outlined" />
                {iniciar && (
                <div className="ISforget">
                  <a href="https://www.google.com/">Olvidaste tu Contrasena?</a>
                  <button style={{ paddingLeft: '5em', paddingRight: '5em', paddingTop: '.5em', paddingBottom: '.5em' }}>{ingresar} Entrar</button>
                </div>
              )}        
            </form>          
          </div>
        </div>
      </div>
    );
  };
};