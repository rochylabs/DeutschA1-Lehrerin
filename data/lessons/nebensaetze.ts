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
        { sentence: "Ich lerne Deutsch, ___ ich in Deutschland wohne.", answer: "weil", hint: "because", explanation: "'Weil' (because) introduces a reason. After 'weil', the verb moves to the end: … weil ich in Deutschland wohne. Don't forget the comma before 'weil'." },
        { sentence: "Er sagt, ___ er kein Auto hat.", answer: "dass", hint: "that", explanation: "'Dass' (that) introduces a reported thought or statement. The verb goes to the end: … dass er kein Auto hat. It's always written with double-s." },
        { sentence: "___ ich müde bin, gehe ich früh schlafen.", answer: "Wenn", hint: "When/If (starts the sentence)", explanation: "When 'wenn' starts the sentence, the whole subordinate clause occupies position 1, and the main verb comes right after the comma: Wenn…, [verb] [subject]." },
        { sentence: "Sie arbeitet viel, ___ sie wenig Freizeit hat.", answer: "obwohl", hint: "although", explanation: "'Obwohl' (although) shows a contrast or concession. The verb still goes to the end of the subordinate clause, just like with 'weil' and 'dass'." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wo steht das Verb im Nebensatz?",
          hint: "Where does the verb go in a subordinate clause?",
          options: ["At the beginning", "After the conjunction", "At the end", "In the middle"],
          answer: "At the end",
          explanation: "This is THE key rule for Nebensätze: the conjugated verb always goes to the very end. This applies after weil, dass, wenn, obwohl, and all subordinating conjunctions.",
        },
        {
          question: "Welche Konjunktion bedeutet 'because'?",
          hint: "Which conjunction means 'because'?",
          options: ["dass", "obwohl", "wenn", "weil"],
          answer: "weil",
          explanation: "'Weil' means because (reason). Don't confuse it with 'obwohl' (although) — obwohl introduces a contradiction, weil introduces a reason.",
        },
        {
          question: "Welches Satzzeichen steht vor einem Nebensatz?",
          hint: "What punctuation goes before a subordinate clause?",
          options: ["Semicolon", "Comma", "Colon", "Nothing"],
          answer: "Comma",
          explanation: "A comma always separates the main clause from the subordinate clause in German: Ich lerne Deutsch, weil ich hier wohne. This rule has no exceptions.",
        },
      ],
    },
  ],
};

export default lesson;
