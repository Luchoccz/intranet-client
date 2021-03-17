import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import NavbarInterface from "./NavbarI";

const Home = () => {
  return (
    <div className="cuadro1d">
      <NavbarInterface />
        <div className="containerI1">
        </div>
        <div className="containerI2">
          <Calendar />
        </div>
        <div className="containerI3">
        </div>
        <div className="containerI4">
        </div>
    </div>
  )
}


export default Home;