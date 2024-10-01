import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Navigation from "./components/Navigation";
import MainComponent from "./components/MainComponent";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/*" Component={LandingPage} />
        <Route path="/productDetails" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
