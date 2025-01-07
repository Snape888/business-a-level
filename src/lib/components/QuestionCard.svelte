<script lang="ts">
    import type { Question } from '$lib/data/questionsOld';
  
    export let question: Question;
    export let onAnswer: (index: number) => void;
    export let selectedAnswer: number | null = null;
    export let showFeedback = false;
  
    const letters = ['A', 'B', 'C', 'D'];
</script>
  
<div class="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  <p class="text-lg mb-6">{question.question}</p>
  
  <!-- Render additional info if it exists -->
  {#if question.additionalInfo}
    <div class="p-4 mb-6 bg-gray-100 rounded-lg border border-gray-200">
      <h3 class="text-sm font-semibold mb-2">Additional Information:</h3>
      <pre class="text-sm whitespace-pre-wrap">{question.additionalInfo}</pre>
    </div>
  {/if}

  <div class="space-y-2">
    {#each question.options as option, i}
      <button
        on:click={() => onAnswer(i)}
        disabled={showFeedback}
        class="w-full p-3 text-left rounded-lg border transition-colors
          {showFeedback
            ? i === question.correct
              ? 'bg-green-100 border-green-500'
              : i === selectedAnswer
              ? 'bg-red-100 border-red-500'
              : 'bg-gray-50 border-gray-200'
            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}"
      >
        {letters[i]}. {option}
      </button>
    {/each}
  </div>
</div>
