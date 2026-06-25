import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "essen-trinken",
  screens: [
    {
      type: "intro",
      title: "Essen & Trinken",
      body: "Learn food and drink vocabulary plus key phrases for ordering at a café or restaurant — essential for daily life in Germany.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "das Brot", back: "bread", example: "Ich kaufe Brot beim Bäcker." },
        { front: "die Milch", back: "milk", example: "Ich trinke Milch zum Frühstück." },
        { front: "der Kaffee", back: "coffee", example: "Einen Kaffee, bitte!" },
        { front: "das Wasser", back: "water", example: "Ein Glas Wasser, bitte." },
        { front: "das Fleisch", back: "meat", example: "Ich esse kein Fleisch." },
        { front: "das Gemüse", back: "vegetables", example: "Ich esse viel Gemüse." },
        { front: "die Rechnung", back: "the bill", example: "Die Rechnung, bitte!" },
        { front: "Ich möchte…", back: "I would like…", example: "Ich möchte einen Tee, bitte." },
        { front: "Was kostet…?", back: "How much does… cost?", example: "Was kostet ein Kaffee?" },
        { front: "Zum Mitnehmen", back: "To take away", example: "Zum Mitnehmen oder hier essen?" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich ___ einen Kaffee, bitte.", answer: "möchte", hint: "I would like…" },
        { sentence: "Die ___, bitte!", answer: "Rechnung", hint: "The bill" },
        { sentence: "Was ___ ein Wasser?", answer: "kostet", hint: "How much does it cost?" },
        { sentence: "Ich kaufe ___ beim Bäcker.", answer: "Brot", hint: "Bread" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "How do you ask for the bill in German?", options: ["Was kostet das?", "Ich möchte essen.", "Die Rechnung, bitte!", "Zum Mitnehmen?"], answer: "Die Rechnung, bitte!" },
        { question: "What does 'Ich möchte einen Tee' mean?", options: ["I have tea.", "I would like a tea.", "I buy tea.", "I drink tea."], answer: "I would like a tea." },
        { question: "What is 'das Gemüse'?", options: ["meat", "bread", "milk", "vegetables"], answer: "vegetables" },
      ],
    },
  ],
};

export default lesson;
