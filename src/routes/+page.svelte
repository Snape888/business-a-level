<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { questions } from '$lib/data/questions';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ProgressBar from '$lib/components/ProgressBar.svelte';
    import QuestionCard from '$lib/components/QuestionCard.svelte';
    import Results from '$lib/components/Results.svelte';
  
    let timeLimit = 20;
    let timeElapsed = 0;
    let currentQuestion = 0;
    let selectedAnswer: number | null = null;
    let showFeedback = false;
    let timer: number;
    let score = 0;
    let totalAnswered = 0;
    let showResults = false;
  
    function handleKeypress(event: KeyboardEvent) {
      if (!showFeedback) {
        const key = event.key.toLowerCase();
        const keyMap = { a: 0, b: 1, c: 2, d: 3 };
        if (key in keyMap) {
          handleAnswer(keyMap[key]);
        }
      } else if (event.key === 'Enter' || event.key === ' ') {
        nextQuestion();
      }
    }
  
    onMount(() => {
      startTimer();
      window.addEventListener('keydown', handleKeypress);
    });
  
    onDestroy(() => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeypress);
    });
  
    function startTimer() {
      timer = setInterval(() => {
        timeElapsed += 1;
        if (timeElapsed >= timeLimit * 60) {
          clearInterval(timer);
          endQuiz();
        }
      }, 1000);
    }
  
    function handleAnswer(index: number) {
      selectedAnswer = index;
      showFeedback = true;
      totalAnswered++;
      if (index === questions[currentQuestion].correct) {
        score++;
      }
    }
  
    function nextQuestion() {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        selectedAnswer = null;
        showFeedback = false;
      } else {
        endQuiz();
      }
    }
  
    function endQuiz() {
      showResults = true;
      clearInterval(timer);
    }
  
    function resetQuiz() {
      currentQuestion = 0;
      selectedAnswer = null;
      showFeedback = false;
      timeElapsed = 0;
      score = 0;
      totalAnswered = 0;
      showResults = false;
      clearInterval(timer);
      startTimer();
    }
  
    function handleTimeChange(newTime: number) {
      timeLimit = newTime;
      resetQuiz();
    }
  
    $: timeRemaining = timeLimit * 60 - timeElapsed;
    $: minutes = Math.floor(timeRemaining / 60);
    $: seconds = timeRemaining % 60;
  </script>
  
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <ProgressBar {timeLimit} {timeElapsed} />
    
    <main class="flex-1 p-4">
      <div class="max-w-2xl mx-auto mb-4 flex justify-between items-center">
        <div class="text-sm font-medium text-gray-600">
          Score: {score}/{totalAnswered}
        </div>
        <div class="text-sm font-medium text-gray-600">
          Time: {minutes}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>
  
      <QuestionCard
        question={questions[currentQuestion]}
        {selectedAnswer}
        {showFeedback}
        onAnswer={handleAnswer}
      />
  
      <div class="max-w-2xl mx-auto mt-6 flex justify-between">
        <button
          on:click={resetQuiz}
          class="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300 transition-colors"
        >
          Reset Quiz
        </button>
        
        {#if showFeedback}
          <button
            on:click={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
              disabled:opacity-50 transition-colors"
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next Question'}
          </button>
        {/if}
      </div>
  
      <div class="max-w-2xl mx-auto mt-4 text-sm text-gray-500 text-center">
        Press A, B, C, or D to select an answer. Press Enter or Space for next question.
      </div>
    </main>
  
    <Footer {timeLimit} onTimeChange={handleTimeChange} />
  
    {#if showResults}
      <Results 
        {score}
        totalQuestions={questions.length}
        {timeElapsed}
        onReset={resetQuiz}
      />
    {/if}
  </div>