import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Authform from "../components/AuthForm";
import Nosotros from "../components/Nosotros";
import Contacto from "../components/Contacto";
import InterfaceHome from "../components/InterfaceHome";
import UserOptions from "../components/UserOptions";
import { login } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import AddEmployer from "../components/AddEmployer";
import News from "../components/News";
import AddressBook from "../components/AddressBook";
import Services from '../components/Services';

const Main = props => {
  const { login, currentUser, errors, removeError } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser{ ...currentUser }{ ...props } />} />
        
        <Route exact path="/iniciarsesion" render={props => {
          return(
            <Authform removeError={ removeError } errors={ errors } login={ login } iniciar {...props} />
          )
        }} />

        <Route exact path="/nosotros" render={props => <Nosotros currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/contacto" render={props => <Contacto currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz" render={props => <InterfaceHome currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz/opcionesdeusuario" render={props => <UserOptions currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz/opcionesdeusuario/añadirempleado" render={props => <AddEmployer currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz/noticias" render={props => <News currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz/servicios" render={props => <Services currentUser{ ...currentUser }{ ...props } />} />

        <Route exact path="/interfaz/libretadedirecciones" render={props => <AddressBook currentUser{ ...currentUser }{ ...props } />} />

      </Switch>
    </div>
  );
};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};

export default withRouter(connect(mapStateToProps, { login, removeError })(Main));