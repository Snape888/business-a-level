<script lang="ts">
    export let timeLimit: number;
    export let timeElapsed: number;
    // Removed unused isRunning export
    
    $: progress = (timeElapsed / (timeLimit * 60)) * 100;
  </script>
  
  <div class="w-full h-1 bg-slate-200">
    <div 
      class="h-full bg-blue-500 transition-all duration-1000 {progress > 75 ? 'bg-red-500' : ''}"
      style="width: {progress}%">
    </div>
  </div>