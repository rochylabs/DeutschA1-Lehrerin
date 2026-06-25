import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "akkusativ",
  screens: [
    {
      type: "intro",
      title: "Akkusativ",
      body: "The accusative case is used for the direct object — the thing receiving the action. Only masculine articles change: der → den, ein → einen.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "den (masc.)", back: "the — accusative masculine", example: "Ich sehe den Mann." },
        { front: "die (fem.)", back: "the — accusative feminine (no change)", example: "Ich kaufe die Zeitung." },
        { front: "das (neut.)", back: "the — accusative neuter (no change)", example: "Ich esse das Brot." },
        { front: "einen (masc.)", back: "a / an — accusative masculine", example: "Ich brauche einen Stift." },
        { front: "eine (fem.)", back: "a / an — accusative feminine (no change)", example: "Ich habe eine Frage." },
        { front: "ein (neut.)", back: "a / an — accusative neuter (no change)", example: "Ich kaufe ein Buch." },
        { front: "kaufen + Akkusativ", back: "to buy + direct object", example: "Ich kaufe einen Kaffee." },
        { front: "haben + Akkusativ", back: "to have + direct object", example: "Ich habe einen Bruder." },
        { front: "sehen + Akkusativ", back: "to see + direct object", example: "Ich sehe den Bus." },
        { front: "brauchen + Akkusativ", back: "to need + direct object", example: "Ich brauche einen Arzt." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich kaufe ___ Apfel. (der Apfel)", answer: "einen", hint: "Masculine indefinite article in accusative", explanation: "'Apfel' is masculine (der Apfel). In the accusative case, 'ein' becomes 'einen' for masculine nouns — the only indefinite article that changes." },
        { sentence: "Ich sehe ___ Frau. (die Frau)", answer: "die", hint: "Feminine article — no change in accusative", explanation: "Feminine articles don't change in the accusative: die → die. Only masculine definite 'der' and indefinite 'ein' change." },
        { sentence: "Er braucht ___ Stift. (der Stift)", answer: "einen", hint: "Masculine indefinite article in accusative", explanation: "'Stift' is masculine (der Stift), so the accusative indefinite article is 'einen'. Masculine is the only gender that changes: ein → einen." },
        { sentence: "Wir kaufen ___ Brot. (das Brot)", answer: "das", hint: "Neuter article — no change in accusative", explanation: "Neuter articles don't change in the accusative: das → das. Only masculine changes (der → den, ein → einen)." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welcher Artikel ändert sich im Akkusativ?",
          hint: "Which article changes in the accusative case?",
          options: ["die", "das", "der", "All of them"],
          answer: "der",
          explanation: "Only masculine 'der' changes in the accusative: der → den. Feminine (die) and neuter (das) stay the same. This is a key rule to memorise.",
        },
        {
          question: "Ergänze: 'Ich sehe ___ Mann.'",
          hint: "Complete: 'Ich sehe ___ Mann.'",
          options: ["der", "die", "den", "dem"],
          answer: "den",
          explanation: "'Mann' is masculine (der Mann). As the direct object of 'sehen', it is in the accusative: der → den. 'Dem' is dative, not accusative.",
        },
        {
          question: "Was markiert der Akkusativ?",
          hint: "What does accusative mark?",
          options: ["The subject", "The indirect object", "The direct object", "Possession"],
          answer: "The direct object",
          explanation: "The accusative marks the direct object — the person or thing directly receiving the action. Ask 'Wen? Was?' (Whom? What?) to find it.",
        },
      ],
    },
  ],
};

export default lesson;
