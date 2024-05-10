<script lang="ts">
  import { onMount } from "svelte";

  const WAVE_SPEED = 0.25

  let waves: HTMLDivElement;
  let wave_pos = 0;

  function tick() {
    waves.style.backgroundPositionX = `${wave_pos}px`;
    wave_pos += WAVE_SPEED
    requestAnimationFrame(tick);
  }

  onMount(() => {
    tick()
  });
</script>

<nav class="w-full flex items-center justify-center gap-8 bg-bumblebee text-white px-8 font-figtree font-semibold pt-6 pb-4">
  <a href="/">home</a>
  <a href="/projects">projects</a>
</nav>

<div
  bind:this={waves}
  class="bg-waves bg-bottom bg-repeat-x w-full bg-bumblebee -scale-100 h-5"
/>
