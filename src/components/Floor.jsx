import React, { Suspense, useEffect, useState, useRef  } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Stars } from "@react-three/drei";

const floorWidth = 200;
const floorHeight = 200;

const Plane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
      <planeGeometry attach="geometry" args={[floorWidth, floorHeight]} />
      <meshBasicMaterial
        color="#000"
      />
    </mesh>
  );
};

function GridPlane() {
  return (
    <gridHelper
      position={[0, 0, 0]}
      args={[floorWidth, floorHeight, "#111", "#111"]}
    />    
  );
}
export {Plane, GridPlane};