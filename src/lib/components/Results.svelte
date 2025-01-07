<script lang="ts">
    export let score: number;
    export let totalQuestions: number;
    export let timeElapsed: number;
    export let onReset: () => void;
  
    $: percentage = Math.round((score / totalQuestions) * 100);
    $: minutes = Math.floor(timeElapsed / 60);
    $: seconds = timeElapsed % 60;
  </script>
  
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg p-6 max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4">Quiz Complete!</h2>
      
      <div class="space-y-4 mb-6">
        <p class="text-lg">
          Score: <span class="font-bold">{score}/{totalQuestions}</span> 
          ({percentage}%)
        </p>
        
        <p class="text-lg">
          Time taken: <span class="font-bold">{minutes}m {seconds}s</span>
        </p>
  
        <div class="h-2 bg-gray-200 rounded-full">
          <div 
            class="h-full rounded-full {percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}"
            style="width: {percentage}%"
          ></div>
        </div>
      </div>
  
      <button
        on:click={onReset}
        class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>