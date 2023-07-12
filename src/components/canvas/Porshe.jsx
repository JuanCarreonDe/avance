// import React, { Suspense, useEffect, useState, useRef } from "react";
import {useGLTF} from "@react-three/drei";

const Porshe = () => {
  const model = useGLTF("./cerro/cerromitad2.gltf");

  return (
    <group
    position={[40, -74, -300]}
    scale={[50, 50, 50]}
    rotation={[(-2 * Math.PI) / 180, (110 * Math.PI) / 180, 0]}
  >
    <mesh {...model.nodes["EXPORT_GOOGLE_SAT_WM"]}>
      <meshBasicMaterial attach="material" color="#448AFF" wireframe fog={false}/>
    </mesh>
    {/* <hemisphereLight
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
      /> */}
      
      {/* <primitive 
      object={cerro.scene} 
      scale={2.5} 
      rotation={[0, 0, 0]}
      position={[-50,2.5,-50]}
      /> */}
  </group>
    // <mesh>

    // </mesh>
  );
};

export default Porshe;
