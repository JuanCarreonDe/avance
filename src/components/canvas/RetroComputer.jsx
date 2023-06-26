import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const RetroComputer = () => {
  const computer = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      {/* Luz hemisférica */}
      <hemisphereLight intensity={.1} skyColor="#ffffff" groundColor="#000000" />

      <spotLight
        position={[10, 0, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        distance={100}
        castShadow
      />
      <spotLight
        position={[10, 2, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        distance={100}
        castShadow
      />
      <spotLight
        position={[10, -2, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        distance={100}
        castShadow
      />
      <spotLight
        position={[10, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        distance={100}
        castShadow
      />

      <primitive 
      object={computer.scene} 
      scale={.5}
      rotation={[0, 3, 0]}
      />
    </mesh>
  );
};

const RetroComputerCanvas = () => {
  return (
    <div className="hero__canvas">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 50 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            // enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <RetroComputer />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default RetroComputerCanvas;
