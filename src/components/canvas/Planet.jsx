import {useGLTF} from "@react-three/drei";


const Planet = () => {
  const model = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      {/* Luz hemisférica */}
      {/* <hemisphereLight
        intensity={0.1}
        skyColor="#ffffff"
        groundColor="#000000"
      /> */}

      <spotLight
        position={[-15, 0, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        distance={100}
        castShadow
      />

      <primitive 
      object={model.scene} 
      scale={0.5} 
      rotation={[0, 0, 0]}
      position={[0,2.8,0]}
      />
    </mesh>
  );
};

export default Planet;