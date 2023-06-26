import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        position={[0, 0, 0]}
        intensity={0.2}
        groundColor="black"
      />

<spotLight
        position={[0, 50, 0]}
        angle={0.5}
        penumbra={2}
        intensity={.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, 40]}
        angle={0.5}
        penumbra={2}
        intensity={.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, -40]}
        angle={0.5}
        penumbra={2}
        intensity={.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[-40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={.2}
        distance={200}
        castShadow
      />
      <pointLight intensity={1}
      position={[0, -5, 0]} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -2, -1.5]}
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
