import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'


const Fat = (props) => {
  const obj = useLoader(OBJLoader, '/assets/avatars/fat/fatfart.obj')
  return (
    <primitive object={obj} position={props.position} visible={props.visible} />
  )
}

export default Fat