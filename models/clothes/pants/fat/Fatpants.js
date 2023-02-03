import { useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useLoader } from "@react-three/fiber";

const Fatpants = (props) => {
  const mtl = useLoader(
    MTLLoader,
    "/assets/clothes/pants/fat/fatfart-pants.mtl"
  );
  const obj = useLoader(
    OBJLoader,
    "/assets/clothes/pants/fat/fatfart-pants.obj",
    (loader) => {
      mtl.preload();
      loader.setMaterials(mtl);
    }
  );
  return (
    <primitive
      object={obj}
      position={props.position}
      scale={props.scale}
      visible={props.visible}
    />
  );
};

export default Fatpants;
