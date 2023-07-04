// import React, { Suspense, useEffect, useState, useRef } from "react";
import {useGLTF} from "@react-three/drei";

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
      <primitive 
      object={computer.scene} 
      scale={2.5} 
      rotation={[0, 0, 0]}
      position={[-50,2.5,-50]}
      />
    </mesh>
  );
};

export default Porshe;
