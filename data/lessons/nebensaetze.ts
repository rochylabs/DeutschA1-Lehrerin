import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "nebensaetze",
  screens: [
    {
      type: "intro",
      title: "Nebensätze",
      body: "Subordinate clauses give extra information — a reason, a thought, or a condition. The key rule: the verb goes to the END of the subordinate clause. Conjunctions: weil (because), dass (that), wenn (when/if), obwohl (although). Always use a comma before the conjunction.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "weil", back: "because", example: "Ich lerne Deutsch, weil ich in Deutschland wohne." },
        { front: "dass", back: "that", example: "Ich glaube, dass du Recht hast." },
        { front: "wenn", back: "when / if", example: "Wenn ich müde bin, trinke ich Kaffee." },
        { front: "obwohl", back: "although", example: "Er geht zur Arbeit, obwohl er krank ist." },
        { front: "Verb goes to the end", back: "Rule for subordinate clauses", example: "Ich weiß, dass er heute nicht kommen kann." },
        { front: "weil + Verb am Ende", back: "because + verb at end", example: "Sie bleibt zu Hause, weil sie krank ist." },
        { front: "damit", back: "so that", example: "Ich lerne, damit ich die Prüfung bestehe." },
        { front: "ob", back: "whether / if", example: "Ich weiß nicht, ob er kommt." },
        { front: "als", back: "when (past, single event)", example: "Als ich jung war, lebte ich in Berlin." },
        { front: "Komma vor Nebensatz", back: "Always a comma before the conjunction", example: "Sie sagt, dass sie Deutsch lernt." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich lerne Deutsch, ___ ich in Deutschland wohne.", answer: "weil", hint: "because" },
        { sentence: "Er sagt, ___ er kein Auto hat.", answer: "dass", hint: "that" },
        { sentence: "___ ich müde bin, gehe ich früh schlafen.", answer: "Wenn", hint: "When/If (starts the sentence)" },
        { sentence: "Sie arbeitet viel, ___ sie wenig Freizeit hat.", answer: "obwohl", hint: "although" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "Where does the verb go in a subordinate clause?", options: ["At the beginning", "After the conjunction", "At the end", "In the middle"], answer: "At the end" },
        { question: "Which conjunction means 'because'?", options: ["dass", "obwohl", "wenn", "weil"], answer: "weil" },
        { question: "What punctuation goes before a subordinate clause?", options: ["Semicolon", "Comma", "Colon", "Nothing"], answer: "Comma" },
      ],
    },
  ],
};

export default lesson;
