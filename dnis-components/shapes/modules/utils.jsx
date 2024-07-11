import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { gsap } from "gsap";

export default function Geometries() {
  const Geometries = [
    {
      position: [2.5, 1, 5],
      r: 0.3,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), //Pill
    },
    {
      position: [0, 0, 4],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), //GEM
    },
    {
      position: [-3, 2, 1],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), //Fotball
    },
    {
      position: [-2, -0.75, 6],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.4, 16, 32), //Torus
    },
  ];

  const materials = [
    // new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0xcdff00, roughness: 0 }),
    // new THREE.MeshStandardMaterial({
    //   color: 0x3a86ff,
    //   roughness: 0,
    //   metalness: 0.3,
    // }),
    // new THREE.MeshStandardMaterial({
    //   color: 0xfa0105,
    //   roughness: 0,
    //   metalness: 0.3,
    // }),
    // new THREE.MeshStandardMaterial({ color: 0xbc00dd, roughness: 0 }),
  ];

  return Geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 1.5)}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, materials }) {
  const mesh = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      // yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(mesh.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
    });

    return () => ctx.revert(); //cleanup
  }, []);

  return (
    <group position={position} ref={mesh}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
