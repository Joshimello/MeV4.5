<script>
  import { AutoColliders, RigidBody } from '@threlte/rapier'
  import { useGltf, HTML } from '@threlte/extras'
  import { T } from '@threlte/core'

  const gltf = useGltf('laptop.glb')

  let rectLight
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
  position={[0, 0, -3.5]}
  rotation={[0, 0, 0]}
  scale={[1, 1, 1]}>
  <RigidBody>
    <AutoColliders>
      {#if display > 2}
      <HTML
        transform
        position={[0, 2.6, -1.7]}>
        <div class="w-66 h-38.9 overflow-hidden bg-blue-600">
          {#if display > 3}
          <iframe class="transform scale-25 origin-top-left" height="630" width="1060" src="http://acm.cs.nthu.edu.tw/"/>
          {/if}
        </div>
      </HTML>
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

