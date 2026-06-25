import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "negation-possessiv",
  screens: [
    {
      type: "intro",
      title: "Negation & Possessiv",
      body: "Two essential tools: how to say 'no' and how to say what belongs to whom. Negation: use 'nicht' for verbs/adjectives (Ich arbeite nicht.) and 'kein/keine/kein' for nouns (Ich habe keinen Hund.). Possessives: mein/meine (my), dein/deine (your), sein/seine (his), ihr/ihre (her). Add -e for feminine nouns.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "nicht", back: "not (negates verbs/adjectives)", example: "Ich wohne nicht in Berlin." },
        { front: "kein / keine / kein", back: "no / not a (negates nouns)", example: "Ich habe kein Auto." },
        { front: "keinen (masc. Akk.)", back: "no / not a — masculine accusative", example: "Ich habe keinen Hund." },
        { front: "mein / meine", back: "my (masc./neut. / fem.)", example: "Mein Vater heisst Peter. Meine Mutter heisst Anna." },
        { front: "dein / deine", back: "your (masc./neut. / fem.)", example: "Wo ist dein Schlüssel? Ist das deine Tasche?" },
        { front: "sein / seine", back: "his (masc./neut. / fem.)", example: "Sein Bruder ist Arzt. Seine Schwester studiert." },
        { front: "ihr / ihre", back: "her (masc./neut. / fem.)", example: "Ihr Mann arbeitet hier. Ihre Tochter ist 5 Jahre alt." },
        { front: "nicht vs. kein", back: "nicht = verbs/adj, kein = nouns", example: "Das ist nicht gut. Das ist kein Problem." },
        { front: "unser / unsere", back: "our (masc./neut. / fem.)", example: "Unser Lehrer ist nett. Unsere Wohnung ist klein." },
        { front: "kein Geld", back: "no money", example: "Ich habe leider kein Geld dabei." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich habe ___ Auto. (no car)", answer: "kein", hint: "Negation of a neuter noun" },
        { sentence: "Er wohnt ___ in München. (not in Munich)", answer: "nicht", hint: "Negation of a verb/location" },
        { sentence: "___ Mutter ist Ärztin. (My mother)", answer: "Meine", hint: "Possessive — feminine noun" },
        { sentence: "Das ist ___ Hund von Maria. (her dog)", answer: "ihr", hint: "Possessive — her, masculine noun" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "Which word negates a noun?", options: ["nicht", "nein", "kein", "nie"], answer: "kein" },
        { question: "How do you say 'my mother' in German?", options: ["mein Mutter", "meine Mutter", "meinen Mutter", "meiner Mutter"], answer: "meine Mutter" },
        { question: "Complete: 'Ich habe ___ Geschwister.' (no siblings)", options: ["nicht", "keine", "kein", "keinen"], answer: "keine" },
      ],
    },
  ],
};

export default lesson;
