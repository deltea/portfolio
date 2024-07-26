<script lang="ts">
  export let text: string;
</script>

<div class="p-8">
  <div class="flex justify-center items-center border-3 border-foreground rounded-full w-[400px] aspect-square relative">
    <svg width={400} height={400} viewBox="0 0 400 400" class="text-lg">
      <path id="curve" fill="transparent" d="M 200,200 m 150,0 a 150,150 0 1,0 -300,0 a 150,150 0 1,0 300,0" />
      <text fill="currentColor">
        <textPath xlink:href="#curve">
          {text}
        </textPath>
      </text>
    </svg>

    <div class="border-3 border-foreground rounded-full size-1/4 text-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
</div>
