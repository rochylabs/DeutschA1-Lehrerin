import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "reflexive-verben",
  screens: [
    {
      type: "intro",
      title: "Reflexive Verben",
      body: "Reflexive verbs describe actions you do to yourself. They use a reflexive pronoun: mich (ich), dich (du), sich (er/sie/es), uns (wir), euch (ihr), sich (sie/Sie). Common in daily routines and emotions: sich waschen, sich anziehen, sich freuen.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "sich waschen", back: "to wash oneself", example: "Ich wasche mich jeden Morgen." },
        { front: "sich anziehen", back: "to get dressed", example: "Er zieht sich schnell an." },
        { front: "sich freuen", back: "to be happy / look forward to", example: "Ich freue mich auf das Wochenende." },
        { front: "sich vorstellen", back: "to introduce oneself", example: "Darf ich mich vorstellen? Ich bin Maria." },
        { front: "sich erinnern", back: "to remember", example: "Ich erinnere mich nicht an seinen Namen." },
        { front: "sich beeilen", back: "to hurry", example: "Beeil dich! Der Bus kommt gleich." },
        { front: "sich setzen", back: "to sit down", example: "Bitte setzen Sie sich." },
        { front: "sich fühlen", back: "to feel", example: "Ich fühle mich heute nicht gut." },
        { front: "sich treffen", back: "to meet up", example: "Wir treffen uns um 18 Uhr." },
        { front: "sich interessieren für", back: "to be interested in", example: "Sie interessiert sich für Musik." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich wasche ___ jeden Morgen.", answer: "mich", hint: "Reflexive pronoun for ich" },
        { sentence: "Er freut ___ auf den Urlaub.", answer: "sich", hint: "Reflexive pronoun for er" },
        { sentence: "Wir treffen ___ um 8 Uhr.", answer: "uns", hint: "Reflexive pronoun for wir" },
        { sentence: "Ich fühle ___ heute nicht gut.", answer: "mich", hint: "Reflexive pronoun for ich" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What is the reflexive pronoun for 'er/sie/es'?", options: ["mich", "dich", "sich", "uns"], answer: "sich" },
        { question: "What does 'Ich freue mich' mean?", options: ["I introduce myself.", "I hurry.", "I am happy.", "I remember."], answer: "I am happy." },
        { question: "How do you say 'We meet up at 6'?", options: ["Wir treffen euch um 6.", "Wir treffen sich um 6.", "Wir treffen uns um 6.", "Wir treffen dich um 6."], answer: "Wir treffen uns um 6." },
      ],
    },
  ],
};

export default lesson;
