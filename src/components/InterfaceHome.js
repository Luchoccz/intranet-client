import React, { Component } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import NavbarInterface from "./NavbarI";
import AddIcon from '@material-ui/icons/Add';
import CheckboxListSecondary from './AddressBook';
import Grid from "@material-ui/core/Grid";

class Home extends Component {

  render() {
    return (
      <div className="cuadro1d">
        <NavbarInterface />
        <Grid container>
          <div className="containerI1">
            <Grid xs={12} sm={6} md={4}>
            <div className="cont1">
              <h3 style={{ marginLeft:"1.5em" }}>Noticias</h3>
              <div className="containerNoticias">
                  <div className="cont1add">
                  <a style={{ textDecoration: 'none', color: '#948a8a' }} href={ `/interfaz/noticias` }>
                    <AddIcon style={{ fontSize: 70, color: '#948a8a', marginLeft: '0.8em', marginTop: '1.2em' }} />
                    <h4 style={{ paddingLeft: '1em', fontWeight: 'lighter' }}>Añadir un nuevo articulo</h4>
                    </a>
                  </div>
              </div>
            </div>
            </Grid>
          </div>
          <div className="containerI2">
            <Calendar />
          </div>
          <div className="containerI3">
          </div>
          <div className="containerI4">
            <div className="cont2add">
              <h3 style={{ marginLeft:"1.5em" }}>Contactos Recientes</h3>
              <CheckboxListSecondary />
            </div>
          </div>
          </Grid>
      </div>
    )
  }
}





export default Home;