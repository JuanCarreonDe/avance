import React, { useState } from "react";
import { ComputersCanvas } from "./canvas";
import { PorsheCanvas } from "./canvas";
import { RetroComputersCanvas } from "./canvas"

const Hero = () => {
  const [activeComponent, setActiveComponent] = useState("ComputersCanvas");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <section className="section__hero hero">
      <div className="hero__text">
        <h1 className="hero__h1">
          Lorem, ipsum dolor.
        </h1>
        <p className="hero__p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
          quis sapiente ducimus quas assumenda iste explicabo voluptates tempora
          quisquam!
        </p>
      </div>

      {activeComponent === "ComputersCanvas" && <ComputersCanvas />}
      {activeComponent === "PorsheCanvas" && <PorsheCanvas />}
      {activeComponent === "RetroComputersCanvas" && <RetroComputersCanvas />}

      <div className="hero__models">
        <button
          className="hero__button"
          href="#"
          onClick={() => handleComponentChange("ComputersCanvas")
        }
        >
          1
        </button>
        <button
          className="hero__button"
          href="#"
          onClick={() => handleComponentChange("PorsheCanvas")}
        >
          2
        </button>
        <button
          className="hero__button"
          href="#"
          onClick={() => handleComponentChange("RetroComputersCanvas")}
        >
          3
        </button>
      </div>
    </section>
  );
};

export default Hero;
