import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    // WE CANT USE HTML ELEMENTS INSIDE CANVAS
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {/* primitive acts as both a geometry and material */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
