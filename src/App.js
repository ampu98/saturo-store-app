import React from "react";
import Header from "./components/Header";
import "./App.scss";
import Navigation from "./components/Navigation";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainComponent />
    </div>
  );
}

export default App;
