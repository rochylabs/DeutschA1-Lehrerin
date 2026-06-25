import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "ich-bin",
  screens: [
    {
      type: "intro",
      title: "Ich bin…",
      body: "Learn the verbs sein (to be) and haben (to have), plus personal pronouns. These are the two most important verbs in German.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "ich bin", back: "I am", example: "Ich bin Maria." },
        { front: "du bist", back: "you are (informal)", example: "Du bist mein Freund." },
        { front: "er / sie / es ist", back: "he / she / it is", example: "Er ist Lehrer." },
        { front: "wir sind", back: "we are", example: "Wir sind aus Polen." },
        { front: "ihr seid", back: "you are (plural)", example: "Ihr seid sehr nett." },
        { front: "sie / Sie sind", back: "they / you are (formal)", example: "Sie sind Ärztin." },
        { front: "ich habe", back: "I have", example: "Ich habe eine Wohnung." },
        { front: "du hast", back: "you have", example: "Du hast einen Bruder." },
        { front: "er / sie hat", back: "he / she has", example: "Sie hat zwei Kinder." },
        { front: "wir haben", back: "we have", example: "Wir haben einen Hund." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich ___ Student.", answer: "bin", hint: "I am (sein)" },
        { sentence: "Du ___ sehr freundlich.", answer: "bist", hint: "You are (sein)" },
        { sentence: "Wir ___ aus Deutschland.", answer: "sind", hint: "We are (sein)" },
        { sentence: "Sie ___ eine Katze.", answer: "hat", hint: "She has (haben)" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "How do you say 'We are from Spain'?", options: ["Wir bist aus Spanien.", "Wir sind aus Spanien.", "Wir haben aus Spanien.", "Ihr sind aus Spanien."], answer: "Wir sind aus Spanien." },
        { question: "Which is correct: 'He has a car'?", options: ["Er bin ein Auto.", "Er habe ein Auto.", "Er hat ein Auto.", "Er ist ein Auto."], answer: "Er hat ein Auto." },
        { question: "What does 'ihr seid' mean?", options: ["I am", "they are", "you are (plural)", "we are"], answer: "you are (plural)" },
      ],
    },
  ],
};

export default lesson;
