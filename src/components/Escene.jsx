import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Stars,
  PerspectiveCamera,
} from "@react-three/drei";
import { Plane, GridPlane } from "./Floor";
import CanvasLoader from "./Loader";
import Computers from "./canvas/Computers";
import Porshe from "./canvas/Porshe";
import Planet from "./canvas/Planet";
var distance = 0;

const Escene = () => {
  const [camera, setCamera] = useState("");
  return (
    <div className="hero__canvas">
      <Canvas
      // frameloop="demand"
      // shadows
      // dpr={[1, 2]}
      // // camera={{ position: camera === "Computer" ? [0, 10, 50] : [10,10,10], fov: 60}}
      // gl={{ preserveDrawingBuffer: true }}
      >
        {camera == "Planet" && (
          <PerspectiveCamera position={[30, 10, 0]} makeDefault />
        )}
        {camera == "Pc" && (
          <PerspectiveCamera position={[30, 10, 50]} makeDefault
          //  lookAt={[10, 10, 10]}
           />
        )}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            // enableZoom={false}
            maxPolarAngle={Math.PI / 2.1}
            // minPolarAngle={Math.PI / 3}
            // maxDistance={50}
            // minDistance={25}
            // // enablePan={false}
            // screenSpacePanning={false}
          />
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={10000} // Amount of stars (default=5000)
            factor={6} // Size factor (defa0ult=4)
            saturation={1} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
          {/* <Porshe/> */}
          <Planet />
          <Computers />
          <Plane />
          <GridPlane />
        </Suspense>
        <Preload all />
      </Canvas>

      <div className="escene__btns">
        <button className="btnEscene" onClick={() => setCamera("Planet")}>
          Planet
        </button>
        <button className="btnEscene" onClick={() => setCamera("Pc")}>
          Pc
        </button>
      </div>
    </div>
  );
};

export default Escene;
