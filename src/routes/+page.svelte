<script lang="ts">
  import ProjectCard from "$components/ProjectCard.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 place-items-stretch gap-4 lg:gap-8">
  <ProjectCard
    type="game"
    name="power cut"
    icon="mdi:lightning-bolt"
    url="https://deltea.itch.io/power-cut"
    tags={["jam game"]}
  />
  <ProjectCard
    type="game"
    name="catalyst"
    icon="mdi:leaf"
    url="https://deltea.itch.io/catalyst"
    tags={["jam game"]}
  />
  <ProjectCard
    type="website"
    name="the movie game"
    icon="mdi:movie-open"
    url="https://the-movie-game.vercel.app"
    tags={[]}
  />
  <ProjectCard
    type="website"
    name="atlas academy"
    icon="mdi:earth"
    url="https://atlasacademy.blog"
    tags={["unfinished"]}
  />
  <ProjectCard
    type="game"
    name="jetcat"
    icon="mdi:cat"
    url="https://deltea.itch.io/jetcat"
    tags={["jam game"]}
  />
  <ProjectCard
    type="game"
    name="grapple"
    icon="mdi:hook"
    url="https://deltea.itch.io/grapple"
    tags={["jam game"]}
  />
  <ProjectCard
    type="website"
    name="youguess"
    icon="mdi:youtube"
    url="https://youguess.vercel.app"
    tags={[]}
  />
</div>
