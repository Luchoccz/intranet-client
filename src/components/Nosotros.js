import React, { Component } from "react";
import ButtonUs from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const outherTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f44336',
    },
  },
});

const tituloT = [
  'MISION', 'VISION', 'VALORES'
];

const textFill = [
  'Desarrollar servicios innovadores de salud que generen valor y calidad de vida para nuestros clientes y usuarios.',
  'Ser la empresa de servicios de salud más reconocida y admirada en Venezuela con empleados orgullosos, clientes leales, usuarios sanos, liderazgo e innovación científica y negocios exitosos.',
  'Excelencia, Calidad, Innovación, Dinamismo, Personalización, Compromiso, Responsabilidad.',
];

export default class Nosotros extends Component {
    state = {
      idx: null,
    }

    us = (idx) => {
      this.setState({
        idx: idx,
      })
    }

    render(){
    return(
      <div className="nosotros">
        <div className="fcuadro1">
          <div className="quienesSomos">
            <h1>QUIENES SOMOS</h1>
          </div>
          <ThemeProvider theme={outherTheme}>
          <div className="mvv">
            <ul>
              <li>
                <ButtonUs style={{ width:'8em', height: '4em', borderRadius: '5px' }} className="boton1uss" onClick={() => this.us(0)} variant="contained" color="secondary" disableRipple>
                Mision
                </ButtonUs>
              </li>
              <li>
                <ButtonUs style={{ width:'8em', height: '4em', borderRadius: '5px' }} onClick={() => this.us(1)} variant="contained" color="secondary" disableRipple>
                  Vision
                </ButtonUs>
              </li>
              <li>
                <ButtonUs style={{ width:'8em', height: '4em', borderRadius: '5px' }} onClick={() => this.us(2)} variant="contained" color="secondary" disableRipple>
                  Valores
                </ButtonUs>
              </li>
            </ul>
          </div>
          </ThemeProvider>
          <div className="contenedorMvv">
            <div className="botonSubtituloUs">
              <p>{textFill[this.state.idx]}</p>
            </div>
            <div className="botonTituloUs">
              <p>{tituloT[this.state.idx]}</p>
            </div>
          </div>
          <div className="contenedor-usfondo">
            <div className="tittle-us2">
              <h1>ELEMENTOS DIFERENCIADORES</h1>
            </div>
            <div className="contenedor-lius">
              <ul>
                <li>
                  <h3>Capacidad Operativa</h3>
                  <p>- Disponibilidad las 24 horas del día, 7 días a la semana y 365 días del año</p>
                  <p>- Flota propia más grande Caracas</p>
                  <p>- Dos sedes propias en Caracas</p>
                  <p>- Red de 57 aliados a escala nacional</p>
                </li>
                <li>
                  <h3>Tiempo de Respuesta</h3>
                  <p>- El 88% de los casos se responden en 45 minutos o menos y el 99% en menos de 60 minutos</p>
                  <p>- En el interior del país tenemos un modelo de negocio óptimo con aliados que siguen nuestro estándar de calidad</p>
                </li>
                <li>
                  <h3>Basados en la Evidencia</h3>
                  <p>- Red de especialistas reconocidos</p>
                  <p>- Análisis financieros y estadísticos con frecuencia personalizada</p>
                  <p>- Análisis de calidad percibida por sus usuarios (Índice Global de Satisfacción)</p>
                </li>
                <li>
                  <h3>Innovación</h3>
                  <p>- Inversión continua en innovación</p>
                  <p>- Pioneros en Mi Agenda de Salud</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}