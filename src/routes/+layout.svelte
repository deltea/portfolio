<script lang="ts">
  import "../global.css";
  import "iconify-icon";
  import { onMount } from "svelte";
  import { currentPalettte } from "$lib/colors";

  import Navbar from "$components/Navbar.svelte";
</script>

<svelte:head>
  <title>my portfolio</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center items-center dotted-background p-10 font-mono text-foreground bg-background">
  <div class="border-2 border-accent rounded-md bg-background py-12 px-[20rem] overflow-auto w-full h-full space-y-8">
    <Navbar />

    <slot />
  </div>
</div>
