<script lang="ts">
	import { currentTheme } from "$lib/stores";
  import { pickRandom } from "$lib/utils";
  import { type Theme } from "$lib/types";
  import { themes } from "$lib/themes";
  import "iconify-icon";
  import Waves from "$components/Waves.svelte";

  function switchTheme() {
    currentTheme.set(pickRandom<Theme>(themes, $currentTheme));
    localStorage.setItem("theme", $currentTheme.name);
  }
</script>

<div class="fixe top-0 w-full">
  <nav class="w-full flex items-center justify-between bg-primary text-white px-8 font-grotesk font-semibold pt-6 pb-4 selection:bg-black">
    <a
      href="/"
      class="size-8 duration-200 hover:scale-110 active:scale-100 flex justify-center items-center"
    >
      <iconify-icon icon="gravity-ui:triangle-up-fill" class="text-3xl"></iconify-icon>
    </a>

    <div class="flex items-center gap-12">
      <a href="/">home</a>
      <a href="/projects">projects</a>
      <a href="/about">about</a>
    </div>

    <button
      on:click={switchTheme}
      class="size-8 rounded-full duration-150 hover:scale-110 active:scale-100 border-[5px] border-white"
      style:background="conic-gradient(rgb({$currentTheme.light}) 120deg, rgb({$currentTheme.dark}) 120deg 240deg, rgb({$currentTheme.primary}) 240deg 360deg)"
    ></button>
  </nav>

  <Waves />
</div>
