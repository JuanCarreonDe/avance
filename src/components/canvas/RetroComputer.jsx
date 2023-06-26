import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const RetroComputer = () => {
  const computer = useGLTF("./retro_computer/scene.gltf");

  return (
    <mesh>
      {/* Luz hemisférica */}
      <hemisphereLight intensity={.5} skyColor="#ffffff" groundColor="#000000" />

      {/* Luz puntual */}
      <pointLight position={[10, 10, 10]} intensity={.5} />

      {/* Luz focal */}

      <spotLight
        position={[0, 50, 0]}
        angle={0.5}
        penumbra={2}
        intensity={1.5}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, 40]}
        angle={0.5}
        penumbra={2}
        intensity={1.5}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, -40]}
        angle={0.5}
        penumbra={2}
        intensity={1.5}
        distance={200}
        castShadow
      />
      <spotLight
        position={[40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={1.5}
        distance={200}
        castShadow
      />
      <spotLight
        position={[-40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={1.5}
        distance={200}
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
        camera={{ position: [0, 0, 10], fov: 10 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
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
