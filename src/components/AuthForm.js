import React, { Component } from "react";
import { login } from '../store/actions/auth'
import { Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
    const authType = this.props.ingresar;
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
    const { ingresar, errors, history, removeError } = this.props;
  
    history.listen(() => {
      removeError();
    })
    return(
      <div id="contenedor-iniciasesion">
          <div className="fdepantallaIS" />
          <div className="col-md-6">
          <Grid container>
            <form onSubmit={this.handleSubmit}>
              <Grid item xs={12} spacing={3}>
              <h1 style={{ marginRight: '4.7em' }}>Login</h1>
              </Grid>
              { errors.message && (
              <div className="alert alert-danger">{errors.message}</div>) 
              }
              <TextField login={login} style={{ backgroundColor: '#F4F4F4', margin: '1em' }} label="Usuario" autoComplete="off" type='text' onChange={ this.handleChange } id="username" name="username" value={ username } color="primary" variant="outlined" />
              <TextField login={login} style={{ backgroundColor: '#F4F4F4' }} label="Password" autoComplete="off" type='password' onChange={ this.handleChange } id="password" name="password" value={ password } variant="outlined" />
              <div className="ISforget">
                <a href="https://www.google.com/">Olvidaste tu Contrasena?</a>
                <Button type="submit" style={{ paddingLeft: '5em', paddingRight: '5em', paddingTop: '.5em', paddingBottom: '.5em' }}>{ ingresar } Entrar</Button>

              </div>        
            </form>
            </Grid>          
          </div>
        </div>
    );
  };
};