import React, { useState } from "react";
import { ComputersCanvas } from "./canvas";
import { PorsheCanvas } from "./canvas";
import { PlanetCanvas } from "./canvas";
import Escene from "./Escene";

const Content = () => {
//   const [activeComponent, setActiveComponent] = useState(
//     "PlanetCanvas"
//   );

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <section className="section__hero hero">
        <Escene/>

      {/* {activeComponent === "ComputersCanvas" && <ComputersCanvas />}
      {activeComponent === "PorsheCanvas" && <PorsheCanvas />}
      {activeComponent === "PlanetCanvas" && <PlanetCanvas />} */}

      {/* <div className="hero__buttons">
        <button
          className={`hero__button ${
            activeComponent === "ComputersCanvas" ? "hero__button--active" : ""
          }`}
          href="#"
          onClick={() => handleComponentChange("ComputersCanvas")}
        >
          1
        </button>
        <button
          className={`hero__button ${
            activeComponent === "PorsheCanvas" ? "hero__button--active" : ""
          }`}
          href="#"
          onClick={() => handleComponentChange("PorsheCanvas")}
        >
          2
        </button>
        <button
          className={`hero__button ${
            activeComponent === "PlanetCanvas" ? "hero__button--active" : ""
          }`}
          href="#"
          onClick={() => handleComponentChange("PlanetCanvas")}
        >
          3
        </button>
      </div> */}
    </section>
  );
};

export default Content;
