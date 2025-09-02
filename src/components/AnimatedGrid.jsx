import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';

function Scene() {
  const gridRef = useRef();

  useFrame((state, delta) => {
    // Animate the grid's rotation for a constant, subtle movement
    if (gridRef.current) {
      gridRef.current.rotation.x += delta * 0.1;
      gridRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <Grid
        ref={gridRef}
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.4}
        cellColor="#0c7c88"
        sectionSize={3.3}
        sectionThickness={1.5}
        sectionColor="#2E6B8E"
        fadeDistance={25}
        fadeStrength={1}
      />
      {/* Optional: Add some lighting or other effects */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} castShadow />
    </>
  );
}

const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 8], fov: 65 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default AnimatedGrid;