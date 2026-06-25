import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "meine-familie",
  screens: [
    {
      type: "intro",
      title: "Meine Familie",
      body: "Learn vocabulary for family members and how to talk about your family in German.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "die Mutter", back: "mother", example: "Meine Mutter heißt Anna." },
        { front: "der Vater", back: "father", example: "Mein Vater ist Arzt." },
        { front: "die Schwester", back: "sister", example: "Ich habe eine Schwester." },
        { front: "der Bruder", back: "brother", example: "Mein Bruder ist 10 Jahre alt." },
        { front: "die Eltern", back: "parents", example: "Meine Eltern wohnen in München." },
        { front: "die Großmutter", back: "grandmother", example: "Meine Großmutter ist 70 Jahre alt." },
        { front: "der Großvater", back: "grandfather", example: "Mein Großvater kommt aus Italien." },
        { front: "die Tante", back: "aunt", example: "Meine Tante wohnt in Berlin." },
        { front: "der Onkel", back: "uncle", example: "Mein Onkel hat drei Kinder." },
        { front: "das Kind", back: "child", example: "Das Kind spielt im Park." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Meine ___ heißt Maria.", answer: "Mutter", hint: "Mother" },
        { sentence: "Ich habe einen ___.", answer: "Bruder", hint: "Brother" },
        { sentence: "Meine ___ wohnen in Hamburg.", answer: "Eltern", hint: "Parents" },
        { sentence: "Mein ___ ist sehr alt.", answer: "Großvater", hint: "Grandfather" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What does 'die Schwester' mean?", options: ["brother", "mother", "sister", "aunt"], answer: "sister" },
        { question: "How do you say 'my parents' in German?", options: ["mein Kind", "meine Eltern", "meine Tante", "mein Onkel"], answer: "meine Eltern" },
        { question: "What does 'der Großvater' mean?", options: ["uncle", "father", "brother", "grandfather"], answer: "grandfather" },
      ],
    },
  ],
};

export default lesson;
