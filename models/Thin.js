import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'


const Thin = (props) => {
  const obj = useLoader(OBJLoader, '/assets/avatars/thin/smallfart.obj')
  return (
    <primitive object={obj} position={props.position} visible={props.visible} />
  )
}

export default Thin