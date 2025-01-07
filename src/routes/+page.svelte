<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { questions } from '$lib/data/questionsOld';
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
  
    function shuffleArray<T>(array: T[]): T[] {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  
    let shuffledQuestions = shuffleArray(questions);
  
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
  
      // Correct answer logic updated for shuffledQuestions
      if (index === shuffledQuestions[currentQuestion].correct) {
        score++;
      }
    }
  
    function nextQuestion() {
      if (currentQuestion < shuffledQuestions.length - 1) {
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
      shuffledQuestions = shuffleArray(questions);
      clearInterval(timer);
      startTimer();
    }
  
    function handleTimeChange(newTime: number) {
      timeLimit = newTime;
      resetQuiz();
    }
  
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
      if (browser) {
        startTimer();
        window.addEventListener('keydown', handleKeypress);
      }
    });
  
    onDestroy(() => {
      if (browser) {
        clearInterval(timer);
        window.removeEventListener('keydown', handleKeypress);
      }
    });
  
    $: timeRemaining = timeLimit * 60 - timeElapsed;
    $: minutes = Math.floor(timeRemaining / 60);
    $: seconds = timeRemaining % 60;
  </script>
  
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
    <Header />
    <ProgressBar {timeLimit} {timeElapsed} />
  
    <main class="flex-1 p-6">
      <div class="max-w-2xl mx-auto mb-6 flex justify-between items-center bg-white rounded-lg shadow-sm p-4">
        <div class="flex items-center gap-2">
          <div class="text-sm font-medium text-gray-600">Score</div>
          <div class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-semibold">
            {score}/{totalAnswered}
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-sm font-medium text-gray-600">Time</div>
          <div class="px-3 py-1 bg-slate-50 text-slate-600 rounded-full font-semibold">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
  
      <QuestionCard
        question={shuffledQuestions[currentQuestion]}
        {selectedAnswer}
        {showFeedback}
        onAnswer={handleAnswer}
      />
  
      <div class="max-w-2xl mx-auto mt-8 flex justify-between items-center">
        <button
          on:click={resetQuiz}
          class="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 
          transition-all duration-200 font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
          </svg>
          Reset Quiz
        </button>
  
        {#if showFeedback}
          <button
            on:click={nextQuestion}
            disabled={currentQuestion === shuffledQuestions.length - 1}
            class="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600
            disabled:opacity-50 transition-all duration-200 font-medium flex items-center gap-2"
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Finish' : 'Next Question'}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        {/if}
      </div>
  
      <div class="max-w-2xl mx-auto mt-6 text-sm text-gray-500 text-center bg-white rounded-lg shadow-sm p-4">
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs mr-1">A</kbd>
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs mr-1">B</kbd>
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs mr-1">C</kbd>
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs mr-4">D</kbd>
        to select an answer.
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs mr-1">Enter</kbd> or
        <kbd class="px-2 py-1 bg-slate-100 rounded text-xs">Space</kbd>
        for next question.
      </div>
    </main>
  
    <Footer {timeLimit} onTimeChange={handleTimeChange} />
  
    {#if showResults}
      <Results
        {score}
        totalQuestions={shuffledQuestions.length}
        {timeElapsed}
        onReset={resetQuiz}
      />
    {/if}
  </div>