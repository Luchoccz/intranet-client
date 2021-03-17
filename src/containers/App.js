import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store/index";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";
import Main from "./Main";
import ContactUs from "../components/ContactUs";


const store = configureStore();

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
