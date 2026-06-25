import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "artikel-nomen",
  screens: [
    {
      type: "intro",
      title: "Artikel & Nomen",
      body: "Every German noun has a gender: der (masculine), die (feminine), or das (neuter). Learning the article with the noun is essential!",
    },
    {
      type: "flashcard",
      cards: [
        { front: "der Mann", back: "the man (masculine)", example: "Der Mann ist freundlich." },
        { front: "die Frau", back: "the woman (feminine)", example: "Die Frau arbeitet hier." },
        { front: "das Kind", back: "the child (neuter)", example: "Das Kind schläft." },
        { front: "der Tisch", back: "the table (masculine)", example: "Der Tisch ist groß." },
        { front: "die Stadt", back: "the city (feminine)", example: "Die Stadt ist schön." },
        { front: "das Haus", back: "the house (neuter)", example: "Das Haus ist neu." },
        { front: "der Hund", back: "the dog (masculine)", example: "Der Hund heißt Max." },
        { front: "die Schule", back: "the school (feminine)", example: "Die Schule beginnt um 8 Uhr." },
        { front: "das Auto", back: "the car (neuter)", example: "Das Auto ist rot." },
        { front: "die Arbeit", back: "the work (feminine)", example: "Die Arbeit beginnt um 9 Uhr." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "___ Mann kommt aus Österreich.", answer: "Der", hint: "Mann is masculine" },
        { sentence: "___ Frau heißt Petra.", answer: "Die", hint: "Frau is feminine" },
        { sentence: "___ Kind spielt im Garten.", answer: "Das", hint: "Kind is neuter" },
        { sentence: "___ Hund ist sehr groß.", answer: "Der", hint: "Hund is masculine" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What is the correct article for 'Haus'?", options: ["der", "die", "das", "ein"], answer: "das" },
        { question: "Which noun is feminine?", options: ["Mann", "Hund", "Tisch", "Stadt"], answer: "Stadt" },
        { question: "What does 'der' indicate about a noun?", options: ["It is feminine", "It is neuter", "It is masculine", "It is plural"], answer: "It is masculine" },
      ],
    },
  ],
};

export default lesson;
