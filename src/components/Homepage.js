import { Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";
import fdepantalla1 from "../images/fdepantalla1.png";
import NavbarI from '../components/NavbarI';

const medium = '/home/luiszrita/Workspace/Intranet/intranet-client/src/images/fdepantalla1.png';

let theme = createMuiTheme();
theme =responsiveFontSizes(theme);

const Homepage = () => {
  return (
    <div className="contenedor-inicio">
      <div className="paginicio">
          <div className="fdepantalla1">
            <img src={fdepantalla1} />
          </div>
        <div className="fondodepantalla2">
        </div>
        <div className="eslogan">
          <MuiThemeProvider theme={ theme }>
            <Typography variant="h5">Bienvenido a nuestra Intranet</Typography>
            <Typography variant="h3">CONTIGO EN </Typography>
            <Typography variant="h3">TODO MOMENTO</Typography>
          </MuiThemeProvider>
        </div>
        <a href={`/nosotros`}>
          <div div className="contenedor-windows1" />
            <div className="windows1">
                <div className="icono1" />
                <h4 style={{ color: '#fa3939' }}>Quienes Somos</h4>
                <p>Breve resena de la vision y mision</p>
            </div>
        </a>
        <a href={`/contacto`}>
          <div className="contenedor-windows2" />
            <div className="windows2">
              <div className="icono2" />
              <h4 style={{ color: '#fa3939' }}>Contactanos</h4>
              <p>Contigo las 24 horas para brindarte la mejor atención.</p>
            </div>
        </a>
      </div>
      <div className="container-carousel">
        <Carousel />
      </div>
    </div>
   );
};

const mostrar = ({ currentUser }) => {
if (!currentUser.isAuthenticated){
  return (Homepage())
  }
  return ({ NavbarI })
}

export default mostrar;