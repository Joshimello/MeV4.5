<script>
  import { AutoColliders, RigidBody } from '@threlte/rapier'
  import { useGltf } from '@threlte/extras'
  import { T } from '@threlte/core'

  const gltf = useGltf('keyboard.glb')

  let rectLight
  // import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
  // $: if(rectLight){
  //   const rectLightHelper = new RectAreaLightHelper( rectLight )
  //   rectLight.add(rectLightHelper)
  // }
</script>

{#if $gltf}
<T.Group
  position={[-2, 10, 2]}
  rotation={[0.3, 0, 0.3]}
  scale={[1, 1, 1]}>
  <RigidBody>
    <AutoColliders>
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].geometry}
        material={$gltf.nodes['Scene'].children[0].material}
      />
<!--       <T.RectAreaLight
        args={[0xFFA500, 1, 1.8, 0.05]}
        position={[3.26, 0.21, 0]}
        rotation={[0, Math.PI/2, 0.035]}
      />
      <T.RectAreaLight
        args={[0xFFA500, 1, 1.8, 0.05]}
        position={[-3.26, 0.21, 0]}
        rotation={[0, -Math.PI/2, -0.035]}
      /> -->
      <T.RectAreaLight
        args={[0xFFA500, 2, 6.3, 1.8]}
        position={[0, 0.2, 0]}
        rotation={[Math.PI/2, 0, 0]}
        bind:ref={rectLight}
      />
    </AutoColliders>
  </RigidBody>
</T.Group>
{/if}

