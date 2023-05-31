<script>
  import { AutoColliders, RigidBody } from '@threlte/rapier'
  import { useGltf } from '@threlte/extras'
  import { T } from '@threlte/core'

  const gltf = useGltf('mouse.glb')
</script>

{#if $gltf}
<T.Group
  position={[4, 10, 2]}
  rotation={[0.3, 0, 0.3]}
  scale={[1, 1, 1]}>
  <RigidBody>
    <AutoColliders>
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].children[0].geometry}
        material={$gltf.nodes['Scene'].children[0].children[0].material}
      />
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].children[1].geometry}
        material={$gltf.nodes['Scene'].children[0].children[1].material}
      />
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].children[2].geometry}
        material={$gltf.nodes['Scene'].children[0].children[2].material}
      />
    </AutoColliders>
  </RigidBody>
</T.Group>
{/if}

