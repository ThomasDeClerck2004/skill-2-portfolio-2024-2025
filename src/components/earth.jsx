import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Earth() {
    const { scene } = useGLTF('/models/scene.gltf'); // Path to your GLTF file
    const earthRef = useRef();

    // Rotate the Earth slowly
    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.0005; 
        }
    });
    
    return <primitive ref={earthRef} object={scene} scale={0.0025} position={[0, 0, 0]} />;
}