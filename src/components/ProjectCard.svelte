<script lang="ts">
  import { cn } from "$lib/utils";

  export let name: string;
  export let url: string;
  export let github: string;
  export let thumbnail: string;
  export let description = "this is a project card";
  export let tags: Tag[] = [];
  export let type: "game" | "website";

  type Tag = "jam game" | "unfinished" | "website";
</script>

<a
  href={url}
  class="flex flex-col gap-4 p-6 border-3 border-muted hover:border-accent duration-100 rounded-xl w-full group relative bg-background"
>
  <div class="flex justify-between items-center lg:px-2.5 z-10">
    <div class="space-y-2">
      <a
        href={url}
        class="text-2xl hover:text-accent hover:underline text-wrap"
      >
        {name}
      </a>

      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <div class={cn(
            "px-2 py-1 rounded-full text-xs inline-block",
            {
              "bg-accent text-background": tag === "jam game",
              "bg-secondary": tag === "unfinished",
              "bg-foreground text-background": tag === "website",
            }
          )}>
            {tag}
          </div>
        {/each}
      </div>

      <p class="text-muted-text">{description}</p>
    </div>

    <div class="lg:flex items-center h-full gap-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 duration-100 hidden">
      <a
        href={github}
        class="text-muted hover:text-foreground duration-100 flex justify-center items-center"
      >
        <iconify-icon icon="mdi:github" class="text-4xl"></iconify-icon>
      </a>

      <a
        href={url}
        class="text-muted hover:text-foreground duration-100 flex justify-center items-center"
      >
        <iconify-icon icon="mdi:arrow-right-circle" class="text-4xl"></iconify-icon>
      </a>
    </div>
  </div>

  <div class="w-full h-full relative">
    <div
      class="bg-cover bg-center w-full h-40 rounded-xl grayscale"
      style:background-image="url('{thumbnail}')"
    >
    </div>
    <div class="absolute w-full h-full rounded-xl opacity-60 bg-muted z-10 top-0 left-0"></div>
  </div>

  <iconify-icon
    icon={type === "game" ? "mdi:gamepad-variant" : "mdi:web"}
    class="absolute -left-6 -top-6 lg:-left-9 lg:-top-9 -rotate-45 lg:-rotate-90 group-hover:-left-6 group-hover:-top-6 opacity-100 lg:opacity-0 group-hover:opacity-100 group-hover:-rotate-45 bg-background rounded-full duration-200 text-[50px] p-3"
  ></iconify-icon>
</a>
