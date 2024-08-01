<script lang="ts">
  import ProjectCard from "$components/ProjectCard.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 place-items-stretch gap-4 lg:gap-8">
  <ProjectCard
    type="game"
    name="power cut"
    icon="mdi:lightning-bolt"
    url="https://example.com"
    tags={["jam game"]}
  />
  <ProjectCard
    type="game"
    name="catalyst"
    icon="mdi:leaf"
    url="https://example.com"
    tags={["jam game"]}
  />
  <ProjectCard
    type="website"
    name="the movie game"
    icon="mdi:movie-open"
    url="https://example.com"
    tags={[]}
  />
  <ProjectCard
    type="website"
    name="atlas academy"
    icon="mdi:earth"
    url="https://example.com"
    tags={["unfinished"]}
  />
  <ProjectCard
    type="game"
    name="jetcat"
    icon="mdi:cat"
    url="https://example.com"
    tags={["jam game"]}
  />
  <ProjectCard
    type="game"
    name="grapple"
    icon="mdi:hook"
    url="https://example.com"
    tags={["jam game"]}
  />
  <ProjectCard
    type="website"
    name="youguess"
    icon="mdi:youtube"
    url="https://example.com"
    tags={[]}
  />
</div>
