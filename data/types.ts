export interface IntroScreen {
  type: "intro";
  title: string;
  body: string;
}

export interface FlashCard {
  front: string;
  back: string;
  example: string;
}

export interface FlashcardScreen {
  type: "flashcard";
  cards: FlashCard[];
}

export interface FillBlankExercise {
  sentence: string;
  answer: string;
  hint: string;
}

export interface FillBlankScreen {
  type: "fill_blank";
  exercises: FillBlankExercise[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizScreen {
  type: "quiz";
  questions: QuizQuestion[];
}

export type LessonScreen = IntroScreen | FlashcardScreen | FillBlankScreen | QuizScreen;

export interface Lesson {
  slug: string;
  screens: LessonScreen[];
}
