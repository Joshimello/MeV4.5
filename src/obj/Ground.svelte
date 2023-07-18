<script lang="ts">
  import { T, extend } from '@threlte/core'
  import { useTexture } from '@threlte/extras'
  import { Color } from 'three/src/math/Color'
  import { AutoColliders } from '@threlte/rapier'
</script>

<AutoColliders shape={'cuboid'}>
  <T.Mesh rotation.x={-Math.PI/2} receiveShadow>
    <T.PlaneGeometry args={[100, 100]}/>
    <T.MeshPhongMaterial/>
  </T.Mesh>
</AutoColliders>