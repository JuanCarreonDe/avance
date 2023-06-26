import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Porshe = () => {
  const computer = useGLTF("./free_porsche_911_carrera_4s/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        position={[0, 0, 0]}
        intensity={1}
        groundColor="black"
      />

      <spotLight
        position={[0, 50, 0]}
        angle={0.5}
        penumbra={2}
        intensity={2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, 40]}
        angle={0.5}
        penumbra={2}
        intensity={2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, -40]}
        angle={0.5}
        penumbra={2}
        intensity={2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[40, 0, 0]}
        angle={0.5}
        penumbra={2}
        intensity={2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[-40, 0, 0]}
        angle={0.5}
        penumbra={2}
        intensity={2}
        distance={200}
        castShadow
      />
      <pointLight intensity={1} position={[0, -5, 0]} />
      <primitive object={computer.scene} scale={2.5} rotation={[0, 3, 0]} />
    </mesh>
  );
};

const PorsheCanvas = () => {
  return (
    <div className="hero__canvas">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 0, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.5} />
          <Porshe />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default PorsheCanvas;
