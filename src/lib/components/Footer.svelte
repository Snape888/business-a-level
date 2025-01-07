<script lang="ts">
    export let timeLimit: number;
    export let onTimeChange: (newTime: number) => void;
  </script>
  
  <footer class="w-full bg-slate-100 p-4 border-t">
    <div class="max-w-4xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-4">
        <label for="timeLimit" class="text-sm font-medium">
          Time limit (minutes):
        </label>
        <input
          id="timeLimit"
          type="number"
          min="1"
          max="60"
          bind:value={timeLimit}
          on:change={() => onTimeChange(timeLimit)}
          class="w-20 p-2 border rounded"
        />
      </div>
    </div>
  </footer>