import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import poinandress from "../../../images/gltf/coke-can.gltf";

console.log(poinandress);

const Model = () => {
  const gltf = useLoader(GLTFLoader, poinandress);
  return (
      <primitive object={gltf.scene} scale={3} />
  );
};


const ExperienceCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
        <Environment preset="sunset"  />
      </Suspense>
    </Canvas>
  );
};

export default ExperienceCanvas;
