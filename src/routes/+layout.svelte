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

<div class="h-screen flex flex-col justify-center items-center dotted-background p-4 lg:p-8 font-mono text-foreground bg-background">
  <div class="border-3 border-accent rounded-xl bgbackground py-12 px-4 lg:px-[6rem] 2xl:px-[24rem] overflow-auto w-full h-full space-y-8">
    <Navbar />

    <slot />
  </div>
</div>
