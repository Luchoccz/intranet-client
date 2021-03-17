import React, { useState } from 'react';
import imagen1 from "../images/venemergencia-imagen1.jpg";
import imagen2 from "../images/venemergencia-imagen2.jpg";
import imagen3 from "../images/venemergencia-imagen3.jpg";
import imagen4 from "../images/venemergencia-imagen4.jpg";
import imagen5 from "../images/venemergencia-imagen5.jpg";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const images = [
  { subtittle: "Nosotros somos Venemergencia", img: imagen1, anotherTittle: "EL MEJOR PERSONAL CAPACITADO", anotherSubtittle: "Contamos con el mejor equipo y asi ofrecerte el mejor servicio"  },
  { img: imagen2, anotherTittle: "CONOCES EL ALCANCE DE NUESTRA COBERTURA?", anotherSubtittle: "Enterate de esto y mucho mas en nuestros planes" },
  { subtittle: "Ahora cuidamos tu Vehiculo", img: imagen3, anotherTittle: "QUE SABES SOBRE NUESTRA POLIZA?", anotherSubtittle: "Enterate mas sobre nuestra cobertura en pa pa pa"},
  { subtittle: "Poseemos el Equipo Medico que necesitas", img: imagen4, anotherTittle: "QUE ESTAS ESPERANDO?", anotherSubtittle: "Aprovecha y obten una poliza con tu seguro preferido" },
  { img: imagen5, anotherTittle: "EL MEJOR SERVICIO GARANTIZADO", anotherSubtittle: "Tenemos amplia experiencia ofreciendo lo mejor para ti." },
]


function Carousel() {

  const [ currImg, setCurrImg ] = useState(0);

  return(
    <div className="carousel">
      <div className="carouselInner" 
        style={{ backgroundImage: `url(${images[currImg].img})`}}>
        <div className="izquierda" onClick={() => { currImg > 0 && setCurrImg(currImg - 1) }}>
          <ArrowBackIosIcon style={{ fontSize: 40 }} />
        </div>
        <div className="centro">
          <h1>{ images[currImg].tittle }</h1>
          <p>{ images[currImg].subtittle }</p>
        </div>
        <div className="derecha" onClick={() => { currImg < images.length -1 && setCurrImg(currImg + 1)}}>
          <ArrowForwardIosIcon style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="contenedorTexto">
        <div className="iconodesalud">
        </div>
        <div className="Texto">
          <ul>
            <li><h3>{images[currImg].anotherTittle}</h3></li>
            <li><p>{images[currImg].anotherSubtittle}</p></li>
          </ul>
        </div>
      </div>
  </div>
  );
};

export default Carousel;