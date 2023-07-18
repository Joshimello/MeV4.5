<script>
  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from './Scene.svelte'
</script>

<main class="w-full h-100vh">
  <Canvas rendererParameters={{ antialias: false, stencil: false, depth: false }}>
    <World>
      <Scene/>
    </World>
  </Canvas>
</main>

<style>
  :global(body) { overflow: hidden }
  @font-face { font-family: architectural; src: url('./font/Architectural.ttf') }
</style>