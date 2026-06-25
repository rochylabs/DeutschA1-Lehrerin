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
        { sentence: "Ich ___ Student.", answer: "bin", hint: "I am (sein)", explanation: "'Sein' is irregular. The ich-form is 'bin' — memorise it because it's used constantly for introductions and descriptions." },
        { sentence: "Du ___ sehr freundlich.", answer: "bist", hint: "You are (sein)", explanation: "The du-form of 'sein' is 'bist'. It's completely irregular, so you just have to learn it by heart." },
        { sentence: "Wir ___ aus Deutschland.", answer: "sind", hint: "We are (sein)", explanation: "The wir-form of 'sein' is 'sind'. It looks like the English 'are' sounds — a useful memory hook." },
        { sentence: "Sie ___ eine Katze.", answer: "hat", hint: "She has (haben)", explanation: "The er/sie/es-form of 'haben' is 'hat'. Notice it drops the -b from the stem unlike 'ich habe' or 'du hast'." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wie sagt man 'We are from Spain'?",
          hint: "How do you say 'We are from Spain'?",
          options: ["Wir bist aus Spanien.", "Wir sind aus Spanien.", "Wir haben aus Spanien.", "Ihr sind aus Spanien."],
          answer: "Wir sind aus Spanien.",
          explanation: "The wir-form of 'sein' is 'sind'. 'Haben' means 'have', not 'be', so 'wir haben' would be wrong here.",
        },
        {
          question: "Welcher Satz ist richtig für 'He has a car'?",
          hint: "Which is correct: 'He has a car'?",
          options: ["Er bin ein Auto.", "Er habe ein Auto.", "Er hat ein Auto.", "Er ist ein Auto."],
          answer: "Er hat ein Auto.",
          explanation: "'Hat' is the er/sie/es form of 'haben' (to have). 'Ist' means 'is', which would say 'He IS a car' — quite different!",
        },
        {
          question: "Was bedeutet 'ihr seid'?",
          hint: "What does 'ihr seid' mean?",
          options: ["I am", "they are", "you are (plural)", "we are"],
          answer: "you are (plural)",
          explanation: "'Ihr' is the plural informal 'you' — used when speaking to a group of friends or people you know well. 'Seid' is its form of 'sein'.",
        },
      ],
    },
  ],
};

export default lesson;
