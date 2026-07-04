import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a shape roughly resembling India for the wireframe effect
const generatePoints = (count: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Rough bounding box for India shape (simplified)
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 12;
    // Keep it relatively flat
    const z = (Math.random() - 0.5) * 2;
    
    // Filter to make a rough triangle/diamond shape
    if (Math.abs(x) < (6 - Math.abs(y)) * 0.8) {
      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }
  }
  return points;
};

const MapParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const points = useMemo(() => generatePoints(1500), []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      // Subtle floating
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F5A93F"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

export const MapScene = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#0A0E1A', 10, 25]} />
        <MapParticles />
      </Canvas>
    </div>
  );
};
