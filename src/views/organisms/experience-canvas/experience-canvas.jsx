import React, { useState, useContext, useEffect } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MainAppModel } from "../../../models/main.model";
import { Environment, OrbitControls } from "@react-three/drei";

const ExperienceCanvas = () => {
  // Get app modal
  const { model } = useContext(MainAppModel);
  const {
    showWireFrame,
    texture,
    flavors,
    selectedFlavor,
    gltf,
    hdri,
    showBackground,
    cameraPosition,
  } = model.current3DModel;

  // If no gltfs in model load the loading page
  const navigate = useNavigate();
  useEffect(() => {
    if (model.gltfs.length === 0) {
      navigate(`/loading-gltfs`);
    }
  }, [model.gltfs]);

  /**
   * This loads our model, note we must
   * do this in a useEffect hook thats why this code isn't in our
   * controller
   */
  const gltfLoader = new GLTFLoader();
  const [loadedGltf, setLoadedGltf] = useState(null);
  useEffect(() => {
    if (model.gltfs.length > 0) {
      gltfLoader.parse(
        JSON.stringify(model.current3DModel.gltf),
        "",
        (gltf) => {

          if (showWireFrame) {
            const newMaterial = new THREE.MeshStandardMaterial({
              color: 0xff0000,
              wireframe: true,
            });
            gltf.scene.traverse((o) => {
              if (o.isMesh) {
                o.material = newMaterial;
              }
            });
          }

          if (!showWireFrame) {
            //Set coke texture
            if (gltf.asset.name === "coke") {
              gltf.scene.children[2].children[0].material.map =
                new THREE.TextureLoader().load(texture);
              gltf.scene.children[2].children[0].material.map.flipY = false;
            }

            // Set costa texture
            if (gltf.asset.name === "costa") {
              gltf.scene.children[1].children[0].material.map =
                new THREE.TextureLoader().load(texture);
              gltf.scene.children[1].children[0].material.map.flipY = false;
            }

            // Set coke glaceau textures
            if (gltf.asset.name === "glaceau") {
              gltf.scene.children[2].children[0].material.map =
                new THREE.TextureLoader().load(texture);
              gltf.scene.children[2].children[0].material.map.flipY = false;
              // Set correct liquid color
              const meshOne =
                gltf.scene.children[1].children[0].children[1].material;
              const flavorColor = flavors.find(
                (flavor) => flavor.name === selectedFlavor
              ).color;
              meshOne.color = new THREE.Color(flavorColor);
            }
          }

          setLoadedGltf(gltf);
        }
      );
    }
  }, [model.gltfs, gltf, showWireFrame, selectedFlavor]);

  const handleRotation = () => {
    if (cameraPosition === 'top') return [Math.PI / 2, 0, 0];
    if (cameraPosition === "bottom") return [Math.PI / -2, 0, 0];
     return [0, 0, 0];
  }

  return (
    <Canvas>
      {loadedGltf && (
        <primitive object={loadedGltf.scene} rotation={handleRotation()} />
      )}
      <OrbitControls />
      <Environment preset={hdri} background={showBackground} />
    </Canvas>
  );
};

export default ExperienceCanvas;
