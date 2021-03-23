import React, { Component } from 'react';
import NavbarI from "./NavbarI";
import FormInput from "./FormInput";

class MediaCard extends Component {

  render(){
    
  return (
    <div className="cuadro1d">
      <NavbarI />
      <div className="containerWhiteI1">
        <FormInput/>
      </div>
    </div>
  );
  }
}

export default MediaCard;