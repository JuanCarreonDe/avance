import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Stars,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";
import { Plane, GridPlane } from "./Floor";
import CanvasLoader from "./Loader";
import Computers from "./canvas/Computers";
import Porshe from "./canvas/Porshe";
import Planet from "./canvas/Planet";
import { AmbientLight } from "three";

let unsetPolarAngle = true;

const Animate = ({ controls, lerping, positionCamera, target }) => {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(positionCamera, delta * 3);

      controls.current.target.lerp(target, delta * 3);
      // console.log(delta *2);
      if (unsetPolarAngle) {
        setTimeout(() => {
          controls.current.maxDistance = 40;
          controls.current.minPolarAngle = Math.PI / 2.8;

          controls.current.maxPolarAngle = Math.PI / 2.2;
          console.log("cambiado");
        }, 7000);
        unsetPolarAngle = false;
      }
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
        // onCreated={(state) =>{
          // state.gl.setClearColor("#0f0012")
        // }}
        camera={{ position: [0, -300, 0], fov: 30 }}
        // gl={{ preserveDrawingBuffer: true }}
        onPointerDown={() => setLerping(false)}
        onWheel={() => setLerping(false)}
        // onContextMenu={() =>setLerping(false)}
      >
        <fog attach="fog" args={["#000", 90, 110]} />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            onChange={(e) => {
              const maxX = 80;
              const minX = -80;
              const maxY = 2;
              const minY = -1;
              const maxZ = 80;
              const minZ = -80;
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
            console.log(e?.target.target);
            }

          }
            // target={[0, 0, 0]}
            // maxPolarAngle={Math.PI / 2.1}
            // minPolarAngle={Math.PI / 3}
            // maxDistance={50}
            ref={ref}
            minDistance={25}
            // enablePan={false}
            // screenSpacePanning={false}
          />
          {/* <fog attach="fog" color={"#262837"} near={1} far={15}/> */}
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={10000} // Amount of stars (default=5000)
            factor={6} // Size factor (defa0ult=4)
            saturation={1} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
          {/* <Porshe /> */}
          <ambientLight intensity={0.6} />
          <Planet />
          <Computers position={[50, .2, 50.28]}/>
          <Plane />
          <GridPlane />
          <Animate
            controls={ref}
            positionCamera={positionCamera}
            target={target}
            lerping={lerping}
          />
          {/* <ContactShadows
            // resolution={1024}
            // frames={1}
            // position={[1, 0, 0]}
            // scale={15}
            // blur={0.5}
            // opacity={1}
            // far={20}
            color={"#ffffff"}
          /> */}
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
