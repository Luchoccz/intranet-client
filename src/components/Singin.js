import React, { Component } from "react";
import { login } from '../store/actions/auth'
import { Button } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const outherTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});
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
    this.props.login(this.state)
    .then(() => {
      this.props.history.push("/interfaz");
    })
    .catch ((errors) => {
       throw alert(errors.message)
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
            <form onSubmit={this.handleSubmit}>
              <h1 style={{ marginRight: '4.7em' }}>Login</h1>
              { errors.message && (
              <div className="alert-danger">{errors.message}</div>) 
              }
              <ThemeProvider theme={ outherTheme }>
                <TextField login={login} style={{ backgroundColor: '#F4F4F4', margin: '1em' }} label="Usuario" autoComplete="off" type='text' onChange={ this.handleChange } id="username" name="username" value={ username } color="primary" variant="outlined" />
              </ThemeProvider>
              <ThemeProvider theme={ outherTheme }>
                <TextField login={login} style={{ backgroundColor: '#F4F4F4' }} label="Password" autoComplete="off" type='password' onChange={ this.handleChange } id="password" name="password" value={ password } variant="outlined" />
              </ThemeProvider>
              <div className="ISforget">
                <a href="https://www.google.com/">Olvidaste tu Contrasena?</a>
                <div className="ingresarI">
                  <Button type="submit">{ ingresar } Entrar</Button>
                </div>
              </div>        
            </form>         
          </div>
        </div>
    );
  };
};