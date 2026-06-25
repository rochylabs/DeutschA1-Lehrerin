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
        { sentence: "Ich habe ___ Auto. (no car)", answer: "kein", hint: "Negation of a neuter noun", explanation: "Use 'kein' to negate nouns. 'Auto' is neuter (das Auto), so 'kein' has no extra ending here. Use 'nicht' only for verbs and adjectives." },
        { sentence: "Er wohnt ___ in München. (not in Munich)", answer: "nicht", hint: "Negation of a verb/location", explanation: "'Nicht' negates verbs, adjectives, and prepositional phrases. Here it negates the location — he does NOT live in Munich." },
        { sentence: "___ Mutter ist Ärztin. (My mother)", answer: "Meine", hint: "Possessive — feminine noun", explanation: "'Mutter' is feminine, so the possessive 'mein' adds -e: meine. This -e ending on possessives signals a feminine noun." },
        { sentence: "Das ist ___ Hund von Maria. (her dog)", answer: "ihr", hint: "Possessive — her, masculine noun", explanation: "'Ihr' means 'her' as a possessive. 'Hund' is masculine (nominative), so no ending is added: ihr Hund." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welches Wort verneint ein Nomen?",
          hint: "Which word negates a noun?",
          options: ["nicht", "nein", "kein", "nie"],
          answer: "kein",
          explanation: "'kein' negates nouns directly (kein Hund, keine Zeit). Use 'nicht' for verbs and adjectives. 'Nein' is a standalone 'no', not used within sentences.",
        },
        {
          question: "Wie sagt man 'my mother' auf Deutsch?",
          hint: "How do you say 'my mother' in German?",
          options: ["mein Mutter", "meine Mutter", "meinen Mutter", "meiner Mutter"],
          answer: "meine Mutter",
          explanation: "'Mutter' is feminine, so the possessive 'mein' takes an -e ending: meine. Masculine and neuter nouns use 'mein' without -e.",
        },
        {
          question: "Ergänze: 'Ich habe ___ Geschwister.' (no siblings)",
          hint: "Complete: 'Ich habe ___ Geschwister.' (no siblings)",
          options: ["nicht", "keine", "kein", "keinen"],
          answer: "keine",
          explanation: "'Geschwister' (siblings) is plural. 'Kein' becomes 'keine' in the plural accusative — the same form as for feminine nouns.",
        },
      ],
    },
  ],
};

export default lesson;
