import { useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

const FatTshirt = (props) => {
  const mtl = useLoader(MTLLoader, "/assets/clothes/tshirt/fat/fatfart-tshirt.mtl")
  const obj = useLoader(OBJLoader, '/assets/clothes/tshirt/fat/fatfart-tshirt.obj', loader => {
    mtl.preload()
    loader.setMaterials(mtl)
  })
  return (
    <primitive object={obj} position={props.position} scale={props.scale} />
  );
};

export default FatTshirt;
