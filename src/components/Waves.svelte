<script lang="ts">
  import { currentTheme } from "$lib/stores";
  import { cn } from "$lib/utils";
  import { onMount } from "svelte";

  export let type: "round" | "sharp" = "round";
  export let speed = 0.25;
  export let direction: -1 | 0 | 1 = 1;
  export let color = "--color-dark";
  export let flipped = false;

  let className = "";
  export { className as class };

  let waves: HTMLDivElement;
  let wavePos = 0;
  let waveColor: string;

  function tick() {
    if (!waves) return;

    waves.style.backgroundPositionX = `${wavePos}px`;
    wavePos += speed * direction;
    requestAnimationFrame(tick);
  }

  onMount(() => {
    currentTheme.subscribe(_ => {
      const style = getComputedStyle(document.documentElement);
      waveColor = style.getPropertyValue(color);
    });

    tick();
  });
</script>

{#if type === "round"}
  <div
    bind:this={waves}
    class={cn(
      "bg-bottom bg-repeat-x w-full bg-primary h-5",
      { "-scale-100": !flipped },
      className
    )}
    style={`background-image: url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 614 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 305 110 C 460.5 110 460.5 0 614 0 L 305 0 L 305 110 Z' %3E%3C/path%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 0 0 C 153.5 0 153.5 110 309 110 L 309 110 L 309 0 Z'%3E%3C/path%3E%3C/svg%3E\");`}
  />
{:else if type === "sharp"}
  <div
    bind:this={waves}
    class={cn(
      "bg-bottom bg-repeat-x w-full bg-primary h-6",
      { "-scale-100": !flipped },
      className
    )}
    style={`background-image: url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 307 200' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 151.5 110 L 307 0 L 151.5 0 L 151.5 110 Z' %3E%3C/path%3E%3Cpath fill='rgb(${waveColor})' stroke-width='0' d='M 0 0 L 155.5 110 L 155.5 110 L 155.5 0 Z'%3E%3C/path%3E%3C/svg%3E\");`}
  />
{/if}
