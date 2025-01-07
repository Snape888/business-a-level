export interface Question {
    id: number;
    year: number;
    question: string;
    options: string[];
    correct: number;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      year: 2023,
      question: "Which of the following is an internal source of finance for a sole trader?",
      options: ["Credit card", "Crowd funding", "Hire purchase", "Savings"],
      correct: 3
    },
    // ... Add all questions from the papers
  ];