<script lang="ts">
  import { T, extend } from '@threlte/core'
  import { useTexture } from '@threlte/extras'
  import { AutoColliders } from '@threlte/rapier'
  import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
  extend({ RoundedBoxGeometry })

  const wood = [
    useTexture('wood/Wood09_1K_BaseColor.png'),
    useTexture('wood/Wood09_1K_Normal.png'),
  ]

</script>

<T.Group position={[0, -4, 0]}>
  <AutoColliders shape={'cuboid'}>
    <T.Mesh receiveShadow>
      <T.RoundedBoxGeometry args={[50, 0.75, 10, 1, 1]}/>
      {#await Promise.all(wood) then [base, normal]}
      <T.MeshPhongMaterial map={base} normalMap={normal} shininess={1000} />
      {/await}
    </T.Mesh>
  </AutoColliders>
</T.Group>
