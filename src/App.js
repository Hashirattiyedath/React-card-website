import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "../src/component/pages/HomePage/Home";
import Services from "../src/component/pages/ServicePage/Service";
import Products from "../src/component/pages/ProductsPage/Products";
import Footer from "./component/Footer"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
