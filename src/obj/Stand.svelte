<script>
  import { AutoColliders, RigidBody } from '@threlte/rapier'
  import { useGltf } from '@threlte/extras'
  import { T } from '@threlte/core'

  const gltf = useGltf('stand.glb')
</script>

{#if $gltf}
<T.Group
  position={[0, -2.5, -0.7]}
  rotation={[0, 0, 0]}
  scale={1.5}>
  <RigidBody>
    <AutoColliders>
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].geometry}
        material={$gltf.nodes['Scene'].children[0].material}
      />
    </AutoColliders>
  </RigidBody>
</T.Group>
{/if}