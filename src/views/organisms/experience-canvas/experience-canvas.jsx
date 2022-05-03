import React, { useState, useRef, useContext, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MainAppModel } from "../../../models/main.model";
import { useGLTF } from "@react-three/drei";
import { Environment, OrbitControls } from "@react-three/drei";
import cokeBase from "../../../images/gltf/coke-base.gltf";
// import cokeJson from "../../../images/gltf/coke-base.json";

const ExperienceCanvas = () => {
  // Get app modal
  const { model } = useContext(MainAppModel);

  const [json, setJson] = useState(null);
  const [gltf, setGltf] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/server")
      .then((res) => res.json())
      .then(
        (result) => {
          setJson(JSON.stringify(result));
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const gltfLoader = new GLTFLoader()
  useEffect(() => {
    if(json) gltfLoader.parse(json, "/", (gltf) => {
      console.log(gltf)
      setGltf(gltf);
    });
  },[json])


  return (
    <Canvas>
      {gltf && gltf.scene && <primitive object={gltf.scene} />}
      <OrbitControls />
      <Environment preset="studio" />
    </Canvas>
  );
};

useGLTF.preload(cokeBase);

export default ExperienceCanvas;
