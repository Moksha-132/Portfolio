import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Octahedron, Stars } from '@react-three/drei';

const AnimatedShapes = () => {
    return (
        <>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <Icosahedron args={[1.5, 1]} position={[3, 0, -2]} scale={1.2}>
                    <meshStandardMaterial color="var(--primary)" wireframe roughness={0.1} />
                </Icosahedron>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <Octahedron args={[1, 0]} position={[-3, -1, -1]} scale={1}>
                    <meshStandardMaterial color="var(--primary)" wireframe opacity={0.6} transparent />
                </Octahedron>
            </Float>

            <Float speed={1} rotationIntensity={1} floatIntensity={2}>
                <Icosahedron args={[0.8, 0]} position={[-1, 2, -3]}>
                    <meshStandardMaterial color="var(--primary)" wireframe opacity={0.4} transparent />
                </Icosahedron>
            </Float>
        </>
    );
};

export const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-80 dark:opacity-60">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="var(--primary)" />
                <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <AnimatedShapes />
            </Canvas>
        </div>
    );
};
