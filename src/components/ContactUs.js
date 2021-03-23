import React from "react";
import IconButton from '@material-ui/core/IconButton';

const ContactUs = () => {
  return(
    <div className="container-contacto">
      <div className="logo-alfondo" />
      <div className="contactos-info">
        <ul>
          <li><h3>DIRECCION</h3><hr /><h5>Call Center 0800-VENEMED (8363633) Edif. Calle Cecilio Acosta, entre calles Páez y Sucre, Chacao, Caracas, Venezuela. info@grupov.com.ve</h5></li>
          <li><h3>FUNDACION VENEMERGENCIA</h3><hr /><h5>0212 263 5651</h5><h5>0212 264 1440</h5></li>
        </ul>
      </div>
      <div className="another-info">
        <h3>CONCTACT US</h3>
      </div>
      <div className="contactos-redes">
        <div className="icono-redes">
          <IconButton href="https://twitter.com/venemergencia/">
            <div className="twitter" />
          </IconButton>
          <IconButton href="https://es-la.facebook.com/venemergencia/">
            <div className="facebook" />
          </IconButton>
          <IconButton href="https://www.instagram.com/venemergencia/">
            <div className="instagram" />
          </IconButton>
        </div>
      </div>
      <div className="group-venemergencia">
        <p>Group Venemergencia. All rights reserved</p>
      </div>
      <div className="linea-horizontal" />
      <div className="linea-vertical" />
    </div>
  );
};

export default ContactUs;