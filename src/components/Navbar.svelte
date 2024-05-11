<script lang="ts">
	import { currentTheme } from "$lib/stores";
  import { pickRandom } from "$lib/utils";
  import { themes, type Theme } from "$lib/types";
  import Waves from "$components/Waves.svelte";

  function switchTheme() {
    currentTheme.set(pickRandom<Theme>([...themes], $currentTheme));
  }
</script>

<nav class="w-full flex items-center justify-between bg-primary text-white px-8 font-figtree font-semibold pt-6 pb-4">
  <button
    on:click={switchTheme}
    class="size-8 rounded-full duration-150 hover:scale-110 active:scale-100 bg-white"
  ></button>

  <div class="flex items-center gap-12">
    <a href="/">home</a>
    <a href="/projects">projects</a>
    <a href="https://github.com/deltea">github</a>
    <a href="https://deltea.itch.io">itch.io</a>
  </div>

  <button
    on:click={switchTheme}
    class="size-8 rounded-full duration-150 hover:scale-110 active:scale-100 bg-white"
  ></button>
</nav>

<Waves />
