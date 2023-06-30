import { useGLTF } from "@react-three/drei";

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
        intensity={0.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, 40]}
        angle={0.5}
        penumbra={2}
        intensity={0.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[0, 50, -40]}
        angle={0.5}
        penumbra={2}
        intensity={0.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={0.2}
        distance={200}
        castShadow
      />
      <spotLight
        position={[-40, 10, 0]}
        angle={0.5}
        penumbra={2}
        intensity={0.2}
        distance={200}
        castShadow
      />
      <pointLight intensity={1} position={[0, -5, 0]} />
      <primitive object={computer.scene} scale={.5} position={[0, 0, 50]} />
    </mesh>
  );
};

export default Computers;
