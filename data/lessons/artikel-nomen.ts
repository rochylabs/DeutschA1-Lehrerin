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
        { sentence: "___ Mann kommt aus Österreich.", answer: "Der", hint: "Mann is masculine", explanation: "'Mann' is masculine, so it takes 'der'. Always learn a noun together with its article — 'der Mann', not just 'Mann'." },
        { sentence: "___ Frau heißt Petra.", answer: "Die", hint: "Frau is feminine", explanation: "'Frau' is feminine, so it takes 'die'. Nouns ending in -in, -ung, -heit, -keit are almost always feminine (die)." },
        { sentence: "___ Kind spielt im Garten.", answer: "Das", hint: "Kind is neuter", explanation: "'Kind' is neuter and takes 'das'. Diminutives ending in -chen or -lein are always neuter: das Mädchen, das Brötchen." },
        { sentence: "___ Hund ist sehr groß.", answer: "Der", hint: "Hund is masculine", explanation: "'Hund' is masculine. Most male animals are masculine in German, matching biological gender." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welcher Artikel gehört zu 'Haus'?",
          hint: "What is the correct article for 'Haus'?",
          options: ["der", "die", "das", "ein"],
          answer: "das",
          explanation: "'Haus' is neuter — das Haus. There's no simple rule, so learn each noun with its article from the start.",
        },
        {
          question: "Welches Nomen ist feminin?",
          hint: "Which noun is feminine?",
          options: ["Mann", "Hund", "Tisch", "Stadt"],
          answer: "Stadt",
          explanation: "'Stadt' (city) is feminine — die Stadt. Tip: nouns ending in -dt or -ft are often feminine.",
        },
        {
          question: "Was zeigt der Artikel 'der' über ein Nomen?",
          hint: "What does 'der' indicate about a noun?",
          options: ["It is feminine", "It is neuter", "It is masculine", "It is plural"],
          answer: "It is masculine",
          explanation: "'Der' marks masculine nouns in the nominative case. Note: 'die' is used for both feminine AND plural nouns.",
        },
      ],
    },
  ],
};

export default lesson;
