import { useEffect, useRef } from "react";
// drei
import { useAnimations, useGLTF } from "@react-three/drei";
// assets

// ----------------------------------------------------------

export function Avatar(props: any) {
  const group = useRef();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF("model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Avatar_Transparent"
            geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
            material={materials["Wolf3D_Avatar_Transparent.001"]}
            skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Avatar"
            geometry={nodes.Wolf3D_Avatar.geometry}
            material={materials["Wolf3D_Avatar.002"]}
            skeleton={nodes.Wolf3D_Avatar.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}
