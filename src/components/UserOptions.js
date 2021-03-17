import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from "react-router-dom";
import { MenuItem } from '@material-ui/core';
import NavbarI from "./NavbarI";

  const userOptions = () => {
    return (
      <div>
        <NavbarI />
        <div className="cuadro1d">
          <div className="containerWhiteI1">
            <Typography paragraph variant='h2' style={{fontSize: 'xx-large', marginLeft: '10em', color: '#e60000', fontWeight: '900', marginRight: '8em', marginTop: '2em' }} noWrap>Opciones de Empleado</Typography>
            <br />
            <MenuItem component= { RouterLink } to="/interfaz/opcionesdeusuario/añadirempleado" style={{ placeContent: 'center', color: '#696969', padding:'1em', '&:hover':{ color:'#e60000' }}}>Anadir</MenuItem>
            <MenuItem component= { RouterLink } to="/interfaz" style={{ placeContent: 'center', color: '#696969', padding:'1em', '&:hover':{ color:'#e60000' }}}>Modificar</MenuItem>
            <MenuItem component= { RouterLink } to="/interfaz" style={{ placeContent: 'center', color: '#696969', padding:'1em' }}>Eliminar</MenuItem>
        </div>
      </div>
    </div>
    )
  }
    

export default userOptions;