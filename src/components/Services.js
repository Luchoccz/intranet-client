import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavbarInterface from './NavbarI';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const outherTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});
class Services extends Component {

  render() {
    return (
      <div className="cuadro1d">
        <NavbarInterface />
        <div className="containerWhiteI4">
            <Grid container spacing={3}>
              <Grid item xs={12} style={{ marginLeft: '1em' }}>
                <h2 >Constancia de Trabajo</h2>
                <p>Llene el formulario con sus datos y envie su solicitud, en las próximas 24 horas le enviaremos un email con la respuesta. </p>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <ThemeProvider theme={ outherTheme }>
                  <TextField style={{ left: '1em', backgroundColor:'#F4F4F4', width: '90%' }} label="Nombre" variant="outlined" color="primary" />
                </ThemeProvider>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <ThemeProvider theme={ outherTheme }>
                  <TextField style={{ backgroundColor:'#F4F4F4', width: '90%' }} label="Apellido" variant="outlined" color="primary" />
                </ThemeProvider>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <ThemeProvider theme={ outherTheme }>
                  <TextField style={{ left: '1em', backgroundColor:'#F4F4F4', width: '90%' }} type="email" label="Correo" variant="outlined" color="primary" />
                </ThemeProvider>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <ThemeProvider theme={ outherTheme }>
                  <TextField style={{ backgroundColor:'#F4F4F4', width: '90%' }} type="number" label="Telefono movil" variant="outlined" color="primary" />
                </ThemeProvider>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <ThemeProvider theme={ outherTheme }>
                  <TextField style={{ left: '1em', backgroundColor:'#F4F4F4', width: '90%' }} type="text" label="Puesto que ocupa" variant="outlined" color="primary" />
                </ThemeProvider>
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                  <Button style={{ left:'70%', backgroundColor:'#F4F4F4', borderColor:'#E32726', color:'#E32726', fontSize:'small' }} variant="outlined">Guardar PDF</Button>
              </Grid>
              <Grid item xs={6} zeroMinWidth>
                <Button className="B2" style={{ left:'25%', backgroundColor:'#E32726', fontSize:'small', color:'#ffffff', paddingLeft:'12%', paddingRight:'12%' }}>Imprimir</Button>
              </Grid>
            </Grid>
      </div>
    </div>
    )
  }
}

export default Services;