<script lang="ts">
  import "@fontsource-variable/ubuntu-sans-mono";
  import "../global.css";
  import "iconify-icon";
  import { currentPalettte } from "$lib/colors";

  import Navbar from "$components/Navbar.svelte";
</script>

<svelte:head>
  <title>my portfolio</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center items-center dotted-background p-12 font-mono text-foreground bg-background">
  <div class="border-3 border-accent rounded-lg bg-background py-12 px-[20rem] overflow-auto w-full h-full space-y-8">
    <Navbar />

    <slot />
  </div>
</div>
