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
        { sentence: "Ich kaufe ___ Apfel. (der Apfel)", answer: "einen", hint: "Masculine indefinite article in accusative" },
        { sentence: "Ich sehe ___ Frau. (die Frau)", answer: "die", hint: "Feminine article — no change in accusative" },
        { sentence: "Er braucht ___ Stift. (der Stift)", answer: "einen", hint: "Masculine indefinite article in accusative" },
        { sentence: "Wir kaufen ___ Brot. (das Brot)", answer: "das", hint: "Neuter article — no change in accusative" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "Which article changes in the accusative case?", options: ["die", "das", "der", "All of them"], answer: "der" },
        { question: "Complete: 'Ich sehe ___ Mann.'", options: ["der", "die", "den", "dem"], answer: "den" },
        { question: "What does accusative mark?", options: ["The subject", "The indirect object", "The direct object", "Possession"], answer: "The direct object" },
      ],
    },
  ],
};

export default lesson;
