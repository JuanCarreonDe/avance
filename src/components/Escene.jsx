import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

const Animate = ({ controls, lerping, positionCamera, target }) => {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(positionCamera, delta * 2);

      controls.current.target.lerp(target, delta * 2);
      setTimeout(() => {
        controls.current.maxDistance = 70;
        controls.current.minPolarAngle = Math.PI / 3;

        controls.current.maxPolarAngle = Math.PI / 2.1;
        console.log("cambiao");
      }, 5000);
    }
  });
};
const Escene = () => {
  const [positionCamera, setPositionCamera] = useState();
  const [target, setTarget] = useState();

  const ref = useRef();
  const [lerping, setLerping] = useState(false);

  useEffect(() => {
    setPositionCamera({
      x: -15,
      y: 5,
      z: 0,
    });
    setTarget({ x: 0, y: 0, z: 0 });
    setLerping(true);
  }, []);

  return (
    <div className="hero__canvas">
      <Canvas
        // frameloop="demand"
        // shadows
        // dpr={[1, 2]}
        camera={{ position: [0, -400, 0], fov: 30 }}
        // gl={{ preserveDrawingBuffer: true }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={ref}
            // target={camera === "Pc" ? [50, 0, 50] : [0, 0, 0]}
            // target={[100, 50, 100]}
            target={[0, 0, 0]}
            // enableZoom={false}
            // maxPolarAngle={Math.PI / 2.1}
            // minPolarAngle={Math.PI / 3}
            // maxDistance={50}
            minDistance={25}
            // enablePan={false}
            // screenSpacePanning={false}
          />
          <fog attach="fog" color="#111" near={1} far={180} />
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={10000} // Amount of stars (default=5000)
            factor={6} // Size factor (defa0ult=4)
            saturation={1} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
          {/* <Porshe /> */}
          <Planet />
          <Computers />
          {/* <Plane /> */}
          <GridPlane />
          <Animate
            controls={ref}
            positionCamera={positionCamera}
            target={target}
            lerping={lerping}
          />
        </Suspense>
        <Preload all />
      </Canvas>

      <div className="escene__btns">
        <button
          className="btnEscene"
          onClick={() => {
            setTarget({ x: 0, y: 0, z: 0 });
            setPositionCamera({
              x: -15,
              y: 5,
              z: 0,
            });
            setLerping(true);
          }}
        >
          Planet
        </button>
        <button
          className="btnEscene"
          onClick={() => {
            setTarget({ x: 50, y: 0, z: 50 });
            setPositionCamera({
              x: 30,
              y: 5,
              z: 50,
            });
            setLerping(true);
          }}
        >
          Pc
        </button>
      </div>
    </div>
  );
};

export default Escene;
