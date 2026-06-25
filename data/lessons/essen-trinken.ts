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
        { sentence: "Ich ___ einen Kaffee, bitte.", answer: "möchte", hint: "I would like…", explanation: "'Möchte' is the polite form of 'mögen' used for ordering. It's softer than 'will' (want) and is always the right choice in a café or restaurant." },
        { sentence: "Die ___, bitte!", answer: "Rechnung", hint: "The bill", explanation: "'Rechnung' (bill) is feminine — die Rechnung. To ask for the bill, just say 'Die Rechnung, bitte!' — simple and universally understood." },
        { sentence: "Was ___ ein Wasser?", answer: "kostet", hint: "How much does it cost?", explanation: "'Kosten' means 'to cost'. The er/sie/es form is 'kostet'. 'Was kostet…?' is the standard way to ask the price of something." },
        { sentence: "Ich kaufe ___ beim Bäcker.", answer: "Brot", hint: "Bread", explanation: "'Brot' is neuter (das Brot) but often used without an article when bought in general — similar to 'I buy bread' in English." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wie bittet man um die Rechnung auf Deutsch?",
          hint: "How do you ask for the bill in German?",
          options: ["Was kostet das?", "Ich möchte essen.", "Die Rechnung, bitte!", "Zum Mitnehmen?"],
          answer: "Die Rechnung, bitte!",
          explanation: "'Die Rechnung, bitte!' (The bill, please!) is all you need. In Germany, the waiter won't bring the bill until you ask — so you have to request it.",
        },
        {
          question: "Was bedeutet 'Ich möchte einen Tee'?",
          hint: "What does 'Ich möchte einen Tee' mean?",
          options: ["I have tea.", "I would like a tea.", "I buy tea.", "I drink tea."],
          answer: "I would like a tea.",
          explanation: "'Möchte' = would like. It's the polite go-to for ordering. 'Einen Tee' is the accusative of 'ein Tee' — the object of your wanting.",
        },
        {
          question: "Was ist 'das Gemüse'?",
          hint: "What is 'das Gemüse'?",
          options: ["meat", "bread", "milk", "vegetables"],
          answer: "vegetables",
          explanation: "'Gemüse' means vegetables. It is always singular in German — 'das Gemüse' — even when referring to multiple types. There is no plural form.",
        },
      ],
    },
  ],
};

export default lesson;
