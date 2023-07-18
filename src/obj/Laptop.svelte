<script>
  import { AutoColliders, RigidBody } from '@threlte/rapier'
  import { useGltf, HTML, Text } from '@threlte/extras'
  import { T, useFrame } from '@threlte/core'

  const gltf = useGltf('laptop.glb')

  // let rectLight
  // import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
  // $: if(rectLight){
  //   const rectLightHelper = new RectAreaLightHelper( rectLight )
  //   rectLight.add(rectLightHelper)
  // }

  let display = 0
  setInterval(() => display++, 1000)
</script>

{#if $gltf}
<T.Group
  position={[0, 15, 0]}
  rotation={[0.1, -0.7, -0.1]}
  scale={[1, 1, 1]}>
  <RigidBody>
    <AutoColliders>
      {#if display > 3}
      <Text 
        position={[0, 2.3, -1.75]}
        font="Architectural.ttf"
        text="joshua lean"
        anchorX="center"
        anchorY="middle"
        fontSize="1.5"
        color="black"
      />
      {/if}
      {#if display > 2}
      <T.RectAreaLight
        args={[0xFFFFFF, 5, 6.6, 3.8]}
        position={[0, 2.5, -1.75]}
        rotation={[0, 0, 0]}
      />
      <T.Mesh position={[0, 2.5, -1.76]}>
        <T.PlaneGeometry args={[6.6, 3.8]}/>
        <T.MeshStandardMaterial/>
      </T.Mesh>
      {/if}
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[0].geometry}
        material={$gltf.nodes['Scene'].children[0].material}
      />
      <T.Mesh
        castShadow
        geometry={$gltf.nodes['Scene'].children[1].geometry}
        material={$gltf.nodes['Scene'].children[1].material}
      />
      <T.RectAreaLight
        args={[0xFFFFFF, 3, 6.4, 3]}
        position={[0, 0, 0]}
        rotation={[Math.PI/2, 0, 0]}
      />
    </AutoColliders>
  </RigidBody>
</T.Group>
{/if}