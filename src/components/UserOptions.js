import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from "react-router-dom";
import { MenuItem } from '@material-ui/core';
import NavbarI from "./NavbarI";
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";

const styles = theme => ({
  table: {
    borderCollapse: "collapse",
    margin: "0 auto",
    textAlign: "center",
    overflow: "auto"
  },
});

class userOptions extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavbarI />
        <div className="cuadro1d">
          <div className="containerWhiteI3" noWrap>
            <Grid>
            <Typography paragraph variant='h2' style={{ position: 'relative', paddingTop: '2em', paddingRight: '4em', left: '30%', width:'100%', fontSize: 'xx-large',  color: '#e60000', fontWeight: '900' }} noWrap>Opciones de Empleado</Typography>
            </Grid>
            <Grid>
            <MenuItem component= { RouterLink } to="/interfaz/opcionesdeusuario/añadirempleado" style={{ top: '3em', placeContent: 'center', color: '#696969', padding:'1em', '&:hover':{ color:'#e60000' }}}>Anadir</MenuItem>
            </Grid>
            <Grid>
            <MenuItem component= { RouterLink } to="/interfaz" style={{ top: '3em', placeContent: 'center', color: '#696969', padding:'1em', '&:hover':{ color:'#e60000' }}}>Modificar</MenuItem>
            </Grid>
            <Grid>
            <MenuItem component= { RouterLink } to="/interfaz" style={{ top: '3em', placeContent: 'center', color: '#696969', padding:'1em' }}>Eliminar</MenuItem>
            </Grid>
        </div>
      </div>
    </div>
    )
  }
}

  export default userOptions;