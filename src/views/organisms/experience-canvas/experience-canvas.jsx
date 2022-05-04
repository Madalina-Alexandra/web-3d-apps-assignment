import React, { useState, useContext, useEffect } from "react";
import { TextureLoader } from "three";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MainAppModel } from "../../../models/main.model";
import { Environment, OrbitControls } from "@react-three/drei";

const ExperienceCanvas = () => {
  // Get app modal
  const { model } = useContext(MainAppModel);
  const { name, texture } = model.current3DModel;

  // If no gltfs in model load the loading page
  const navigate = useNavigate();
  useEffect(() => {
    if (model.gltfs.length === 0) {
      navigate(`/loading-gltfs`);
    }
  }, [model.gltfs]);

  const gltfLoader = new GLTFLoader();
  const [scene, setScene] = useState(null);
  useEffect(() => {
    if (model.gltfs.length > 0)
      gltfLoader.parse(
        JSON.stringify(model.current3DModel.gltf),
        "",
        (gltf) => {
          setScene(gltf.scene);
        }
      );
  }, [model.gltfs]);

  // If the flavor is updated update the texture
  useEffect(() => {
    // Set coke texture
    // if (scene && name === "coke") {
    //   console.log('i Fired')
    //   scene.children[2].children[0].material.map = new TextureLoader().load(
    //     texture
    //   );
    //   scene.children[2].children[0].material.map.flipY = false;
    // }
    // Set costa texture
    if (scene && name === "costa") {
      scene.children[1].children[0].material.map = new TextureLoader().load(
        texture
      );
      scene.children[1].children[0].material.map.flipY = false;
    }
  }, [scene, name, texture]);

  return (
    <Canvas>
      {scene && <primitive object={scene} />}
      <OrbitControls />
      <Environment preset="studio" />
    </Canvas>
  );
};

export default ExperienceCanvas;
