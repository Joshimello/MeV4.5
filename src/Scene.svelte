<script>
  import { T, useThrelte, useFrame } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { Color } from 'three/src/math/Color'

  import Ground from './obj/Ground.svelte'
  import Keyboard from './obj/Keyboard.svelte'
  import Mouse from './obj/Mouse.svelte'

  const { scene } = useThrelte()
  scene.background = new Color('#22223B')
</script>

<T.HemisphereLight args={['#4A4E69', '#080820', 2]}/>
<T.PointLight args={['#F2E9E4', 3, 15]} position={[8, 4, -2]} castShadow/>

<T.PerspectiveCamera makeDefault position={[0, 4, 10]}>
  <OrbitControls/>
</T.PerspectiveCamera>

<Keyboard/>
<Mouse/>
<Ground/>


<!--
#22223B #4A4E69 #9A8C98 #C9ADA7 #F2E9E4
-->