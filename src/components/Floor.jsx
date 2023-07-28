import * as THREE from 'three'
import img from "../assets/pattern.png"
import { useLoader } from '@react-three/fiber'

const floorWidth = 1000;
const floorHeight = 1000;

const Plane2 = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  texture.wrapS = THREE.RepeatWrapping; 

  texture.wrapT = THREE.RepeatWrapping; 

  texture.repeat.set(30, 30); // Repetir la textura 2 veces en dirección horizontal y vertical
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} >
      <planeGeometry attach="geometry" args={[floorWidth, floorHeight]} />
      <meshStandardMaterial map={texture} alphaMap={texture} transparent={true} fog={true} />
    </mesh>
  );
};


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
      args={[floorWidth, 100, "#d300d6", "#d300d6"]}
    />    
  );
}
export {Plane, GridPlane};