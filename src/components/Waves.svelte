<script lang="ts">
  import { onMount } from "svelte";

  const WAVE_SPEED = 0.25;

  export let type: "round" | "sharp" = "round";

  let waves: HTMLDivElement;
  let wavePos = 0;
  let waveColor: string;

  function tick() {
    waves.style.backgroundPositionX = `${wavePos}px`;
    wavePos += WAVE_SPEED
    requestAnimationFrame(tick);
  }

  onMount(() => {
    const style = getComputedStyle(document.documentElement);
    waveColor = style.getPropertyValue("--color-dark");

    tick();
  });
</script>

{#if type === "round"}
  <div
    bind:this={waves}
    class="bg-bottom bg-repeat-x w-full bg-accent -scale-100 h-5"
    style={`background-image: url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 614 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 306 110 C 460.5 110 460.5 0 614 0 L 306 0 L 306 110 Z' %3E%3C/path%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 0 0 C 153.5 0 153.5 110 308 110 L 308 110 L 308 0 Z'%3E%3C/path%3E%3C/svg%3E\");`}
  />
{:else if type === "sharp"}
  <div
    bind:this={waves}
    class="bg-bottom bg-repeat-x w-full bg-accent -scale-100 h-6"
    style={`background-image: url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 307 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 151.5 110 L 307 0 L 151.5 0 L 151.5 110 Z' %3E%3C/path%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 0 0 L 155.5 110 L 155.5 110 L 155.5 0 Z'%3E%3C/path%3E%3C/svg%3E\");`}
  />
{/if}
