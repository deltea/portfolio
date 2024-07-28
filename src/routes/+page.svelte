<script lang="ts">
  import ProjectCard from "$components/ProjectCard.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
  <ProjectCard
    name="heloooooo world!"
    url="https://example.com"
    github="https://github.com"
    thumbnail="https://picsum.photos/1000/500?random=1"
    tags={["jam game", "unfinished", "website"]}
    type="website"
  />
  <ProjectCard
    name="the movie game"
    url="https://example.com"
    github="https://github.com"
    thumbnail="https://picsum.photos/1000/500?random=2"
    tags={["jam game", "unfinished", "website"]}
    type="game"
  />
  <ProjectCard
    name="jiwj fkwalj sfdlkjkf mwasdf asdfas dfas fasfl"
    url="https://example.com"
    github="https://github.com"
    thumbnail="https://picsum.photos/1000/500?random=3"
    tags={["jam game", "unfinished", "website"]}
    type="website"
  />
  <ProjectCard
    name="cool"
    url="https://example.com"
    github="https://github.com"
    thumbnail="https://picsum.photos/1000/500?random=4"
    tags={["jam game", "unfinished", "website"]}
    type="game"
  />
  <ProjectCard
    name="catalyst"
    url="https://example.com"
    github="https://github.com"
    thumbnail="https://picsum.photos/1000/500?random=5"
    tags={["jam game", "unfinished", "website"]}
    type="website"
  />
</div>
