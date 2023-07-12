const floorWidth = 500;
const floorHeight = 500;

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
      args={[floorWidth, floorHeight, "#333", "#333"]}
    />    
  );
}
export {Plane, GridPlane};