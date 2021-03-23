import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";
import Main from "./Main";
import ContactUs from "../components/ContactUs";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth"; 
import jwtDecode from "jwt-decode";

const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch(e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Main />
      <ContactUs />
    </Router>
  </Provider>
)

export default App;
