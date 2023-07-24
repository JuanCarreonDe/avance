// imports
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import { Plane, GridPlane } from "./Floor";

// import components
import CanvasLoader from "./Loader";
import Computers from "./canvas/Computers";
import Porshe from "./canvas/Porshe";
import Planet from "./canvas/Planet";
import Buttons from "./Buttons";
import Annotations from "./Annotations";
import Data from "./Data"
import { models } from "../constants";
// import { Html } from "@react-three/drei";

    // consts
    const radius = 100; // Radio del círculo
    const center = { x: 0, z: 0 }; // Centro del círculo (coordenadas x y z)

// 
    function estaCerca(numero1, numero2, tolerancia) {
      const diferencia = Math.sqrt(
        (numero2.x - numero1.x) * (numero2.x - numero1.x) +
          (numero2.z - numero1.z) * (numero2.z - numero1.z)
      );
      return diferencia <= tolerancia;
    }


// animation to camera and target
const Animate = ({ controls, lerping, positionCamera, target }) => {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      if (controls.current.maxDistance === Infinity) {
        camera.position.lerp(positionCamera, 0.05);
        controls.current.target.lerp(target, 0.05);
        setTimeout(() => {
          controls.current.maxDistance = 60;
        }, 7000);
      } else {
        if (!estaCerca(camera.position, positionCamera, 1.5)) {
          camera.position.lerp(positionCamera, 0.05);
        }

        if (!estaCerca(controls.current.target, target, 1.5)) {
          controls.current.target.lerp(target, 0.05);
        }
      }
    }
  });
};

// function to calculate the position of the models in a circle
const calculateTargetCoordinates = (model, radius, center) => {
  const angle = (360 / models.length) * model.id;
  const x = center.x + radius * Math.cos((angle * Math.PI) / 180);
  const z = center.z + radius * Math.sin((angle * Math.PI) / 180);
  return { x, y: model.target.y, z };
};

// jsx and return
const Escene = () => {
  
  // effect to welcome animation
  useEffect(() => {
    setPositionCamera({
      x: 15,
      y: 5,
      z: 10,
    });
    setTarget({ x: 0, y: 0, z: 0 });
    setLerping(true);
  }, []);

  // states
  const [positionCamera, setPositionCamera] = useState();
  const [target, setTarget] = useState();
  const [lerping, setLerping] = useState(false);
  const ref = useRef();
  const [active, setActive] = useState();



  // function to move the camera, change the target and add the active class to the button
  const handleButtonClick = (model) => {
    const { x, y, z } = calculateTargetCoordinates(model, radius, center);

    setActive(model.id);
    setTarget({ x, y, z });
    setPositionCamera(model.camera);
    setLerping(true);
    console.log({x, y, z});
  };

  // return
  return (
    <div className="hero__canvas">
      <Canvas
        camera={{ position: [0, 700, 10], fov: 30 }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
      >
        <fog attach="fog" args={["#000", 90, 300]} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            ref={ref}
            minDistance={25}
            maxPolarAngle={Math.PI / 2.2}
            
            // set panning limits
            onChange={(e) => {
              const maxX = 120;
              const minX = -120;
              const maxY = 2;
              const minY = -1;
              const maxZ = 120;
              const minZ = -120;
              const x = e?.target.target.x;
              const y = e?.target.target.y;
              const z = e?.target.target.z;
              if (x < minX || x > maxX) {
                e?.target.target.setX(x < minX ? minX : maxX);
              }
              if (y < minY || y > maxY) {
                e?.target.target.setY(y < minY ? minY : maxY);
              }
              if (z < minZ || z > maxZ) {
                e?.target.target.setZ(z < minZ ? minZ : maxZ);
              }
              // console.log(e?.target.target);
            }}
          />

          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={10000} // Amount of stars (default=5000)
            factor={6} // Size factor (defa0ult=4)
            saturation={1} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />

          {/* ambientlight */}
          <ambientLight intensity={0.6} />

          {/* models */}
          <Planet />
          <Computers position={[31.5, 0.2, 94]} />
          <Porshe />

          {/* plane */}
          <Plane />
          <GridPlane />

          {/* call animate function */}
          <Animate
            controls={ref}
            positionCamera={positionCamera}
            target={target}
            lerping={lerping}
          />
<Annotations handleButtonClick={handleButtonClick} calculateTargetCoordinates={calculateTargetCoordinates} models={models} radius={radius} center={center}/>
        </Suspense>
        <Preload all />
      </Canvas>

      {/* navbar */}
      <nav className="escene__btns">
        <Buttons
          models={models}
          active={active}
          // setActive={setActive}
          handleButtonClick={handleButtonClick}
        />
      </nav>
      <Data
          models={models}
          active={active}
          // setActive={setActive}
        />
    </div>
  );
};

export default Escene;
