import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
