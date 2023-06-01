<script>
  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from './Scene.svelte'
</script>

<main class="w-full h-100vh">
  <Canvas>
    <World>
      <Scene/>
    </World>
  </Canvas>
</main>

<style>
  :global(body) { overflow: hidden }
</style>