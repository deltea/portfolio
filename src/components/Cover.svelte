<script lang="ts">
  import { onMount } from "svelte";

  let cover: HTMLDivElement;

  onMount(() => cover.style.backgroundColor = "rgb(0 0 0 / 0)");
</script>

<div
  bind:this={cover}
  class="bg-[#111] fixed w-screen h-screen z-50 duration-500 pointer-events-none"
/>
