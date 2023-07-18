<script>
  import { EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset, ChromaticAberrationEffect, BloomEffect } from 'postprocessing'
  import { T, useThrelte, useRender } from '@threlte/core'
  import { OrbitControls, Text } from '@threlte/extras'
  import { Vector2 } from 'three/src/math/Vector2'
  import { Color } from 'three/src/math/Color'
  import { Fog } from 'three/src/scenes/Fog'
  import Laptop from './obj/Laptop.svelte'
  import Ground from './obj/Ground.svelte'

  const { scene, renderer, camera } = useThrelte()
  scene.background = new Color(0xffffff)
  scene.fog = new Fog(0xffffff, 20, 50)

  const composer = new EffectComposer(renderer)
  const setupEffectComposer = camera => {
    composer.removeAllPasses()
    composer.addPass(new RenderPass(scene, camera))
    // composer.addPass(new EffectPass(camera, new ChromaticAberrationEffect({ offset: new Vector2(0.005) })))
    composer.addPass(new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.LOW })))
    // composer.addPass(new EffectPass(camera, new BloomEffect()))
  }

  $: setupEffectComposer($camera)
  useRender((_, delta) => {
    composer.render(delta)
  })
</script>

<T.AmbientLight args={[0x404040, 1]}/>
<T.DirectionalLight args={[0xffffff, 1]} position={[5, 20, 20]} castShadow/>

<T.PerspectiveCamera
  makeDefault
  position={[0, 15, 20]}>
  <OrbitControls enableDamping enablePan={false} maxPolarAngle={1.5} maxDistance={25}/>
</T.PerspectiveCamera>

<Laptop/>

<Text 
  position={[0, 0.1, 0]}
  rotation={[-Math.PI/2, 0, 0]}
  font="Architectural.ttf"
  text="wuddap im"
  anchorX="center"
  anchorY="middle"
  fontSize="5"
  color="black"
/>

<Ground/>