// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import poinandress from "../../../images/gltf/coke-can.gltf";

// console.log(poinandress);

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, poinandress);
//   console.log(gltf.nodes)
//   return (
//     // <primitive wireframe object={gltf.scene} scale={3} />
//     <group>
//       <mesh geometry={gltf.nodes.Mesh} />
//       {/* <meshStandardMaterial wireframe wireframeLinewidth={0.5} /> */}
//     </group>
//   );
// };

// const ExperienceCanvas = () => {
//   return (
//     <Canvas>
//       <Suspense fallback={null}>
//         <Model />
//         <OrbitControls />
//         <Environment preset="sunset"  />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ExperienceCanvas;

import React, { useRef, Suspense, useContext } from "react";
import { MainAppModel } from "../../../models/main.model";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Environment, OrbitControls } from "@react-three/drei";
import poinandress from "../../../images/gltf/coke-can.gltf";

const ExperienceCanvas = () => {
  // Get app modal
  const { model } = useContext(MainAppModel);

  const group = useRef();
  const { nodes, materials } = useGLTF(poinandress);
  const material = materials[Object.keys(materials)[0]];

  const { showWireFrame } = model.current3DModel;


  return (
    <Canvas>
      <Suspense fallback={null}>
        <group ref={group} dispose={null}>
          {showWireFrame && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              scale={3}
            >
              <meshStandardMaterial wireframe color="red" />
            </mesh>
          )}
          {!showWireFrame && (
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={material}
              scale={3}
            />
          )}
        </group>
        <OrbitControls />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
};

export default ExperienceCanvas;
