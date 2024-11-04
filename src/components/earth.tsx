"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls, Stars } from "@react-three/drei";
import type { Mesh } from "three";

interface ModelProps {
  rotationSpeed?: number;
  size?: number;
  resolution?: number;
}

interface SceneProps {
  className?: string;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
}

const configs = {
  rotation: {
    speed: 0.1,
  },
  geometry: {
    size: 2,
    resolution: 32,
  },
  textures: {
    dayMap: "/institut-le-rosey/2k_earth_daymap.jpg",
    normalMap: "/institut-le-rosey/2k_earth_normal_map.tif",
    specularMap: "/institut-le-rosey/2k_earth_specular_map.tif",
  },
  camera: {
    position: [0, 0, 8] as [number, number, number],
    fov: 45,
  },
};

function Model({
  rotationSpeed = configs.rotation.speed,
  size = configs.geometry.size,
  resolution = configs.geometry.resolution,
}: ModelProps) {
  const ref = useRef<Mesh>(null);

  const textures = useTexture({
    map: configs.textures.dayMap,
    normalMap: configs.textures.normalMap,
    specularMap: configs.textures.specularMap,
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, resolution, resolution]} />
      <meshPhongMaterial
        map={textures.map}
        normalMap={textures.normalMap}
        specularMap={textures.specularMap}
        shininess={50}
      />
    </mesh>
  );
}

function LoadingFallback(): JSX.Element {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color="gray" wireframe />
    </mesh>
  );
}

export default function Scene({
  className,
  cameraPosition = configs.camera.position,
  cameraFov = configs.camera.fov,
}: SceneProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        background: "#000000",
      }}
    >
      <Canvas camera={{ position: cameraPosition, fov: cameraFov }}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.1} />
          <directionalLight
            position={[5, 3, 5]}
            intensity={1.5}
            color="#ffffff"
            castShadow
          />
          <pointLight
            position={[-10, 0, -10]}
            intensity={0.5}
            color="#4169e1"
          />
          <pointLight position={[-5, -2, -5]} intensity={0.2} color="#ffffff" />
          <pointLight
            position={[0, 0, -10]}
            intensity={0.3}
            color="#4169e1"
            distance={20}
          />
          <Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
          <Model
            rotationSpeed={configs.rotation.speed}
            size={configs.geometry.size}
            resolution={configs.geometry.resolution}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            minDistance={4}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
