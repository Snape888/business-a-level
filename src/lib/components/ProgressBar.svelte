<script lang="ts">
    export let timeLimit: number;
    export let timeElapsed: number;
  
    $: progress = Math.min((timeElapsed / (timeLimit * 60)) * 100, 100);
  </script>
  
  <div class="w-full h-1 bg-slate-200 rounded">
    <div
      class="h-full transition-all duration-500 rounded"
      class:bg-blue-500={progress <= 75}
      class:bg-yellow-500={progress > 75 && progress <= 90}
      class:bg-red-500={progress > 90}
      style="width: {progress}%">
    </div>
  </div>