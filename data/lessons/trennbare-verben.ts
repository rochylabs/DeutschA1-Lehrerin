import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "trennbare-verben",
  screens: [
    {
      type: "intro",
      title: "Trennbare Verben",
      body: "Separable verbs have a prefix that splits off and moves to the END of the sentence. Example: aufstehen → Ich stehe um 7 Uhr auf. The prefix (auf-, an-, ein-, aus-, ab-…) carries meaning — learn the pair together.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "aufstehen", back: "to get up / to stand up", example: "Ich stehe jeden Morgen um 6 Uhr auf." },
        { front: "anrufen", back: "to call (by phone)", example: "Ich rufe meinen Chef heute an." },
        { front: "einkaufen", back: "to go shopping / to buy groceries", example: "Wir kaufen am Samstag ein." },
        { front: "ausfüllen", back: "to fill out (a form)", example: "Bitte füllen Sie das Formular aus." },
        { front: "anfangen", back: "to start / to begin", example: "Der Kurs fängt um 9 Uhr an." },
        { front: "abfahren", back: "to depart / to leave (transport)", example: "Der Zug fährt um 10:15 ab." },
        { front: "mitnehmen", back: "to take along / to bring", example: "Nimmst du deinen Ausweis mit?" },
        { front: "zurückkommen", back: "to come back / to return", example: "Wann kommst du zurück?" },
        { front: "einladen", back: "to invite", example: "Ich lade dich zum Essen ein." },
        { front: "vorstellen", back: "to introduce / to imagine", example: "Ich stelle mich kurz vor." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Der Bus ___ um 8:30 Uhr ___. (abfahren)",
          answer: "fährt … ab",
          hint: "abfahren → fährt … ab",
          explanation: "In a main clause, separable verbs split: the conjugated verb stays in position 2, the prefix goes to the very end. 'Abfahren' → 'fährt … ab'.",
        },
        {
          sentence: "Kannst du mich bitte ___? Meine Nummer ist 0176 123456. (anrufen)",
          answer: "anrufen",
          hint: "anrufen stays together after modal verbs",
          explanation: "After a modal verb (kann, muss, will…), the separable verb stays together as one infinitive at the end: kannst … anrufen.",
        },
        {
          sentence: "Wir ___ jeden Freitag im Supermarkt ___. (einkaufen)",
          answer: "kaufen … ein",
          hint: "einkaufen → kaufen … ein",
          explanation: "'Einkaufen' splits into 'kaufen' (stays in position 2) and 'ein' (goes to the end). The prefix 'ein-' tells us this is shopping, not just buying.",
        },
        {
          sentence: "Der neue Job ___ nächsten Montag ___. (anfangen)",
          answer: "fängt … an",
          hint: "anfangen → fängt … an",
          explanation: "'Anfangen' is irregular: the stem 'fang' gets an umlaut → 'fängt'. The prefix 'an' goes to the end. Irregular stems are worth memorising.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wohin geht das trennbare Präfix im Hauptsatz?",
          hint: "Where does the separable prefix go in a main clause?",
          options: [
            "At the very end of the sentence",
            "Directly before the verb",
            "Right after the subject",
            "It stays attached to the verb",
          ],
          answer: "At the very end of the sentence",
          explanation: "The separable prefix always goes to the very end of the main clause. Everything else — objects, adverbs, negation — comes before the prefix.",
        },
        {
          question: "Welcher Satz ist grammatisch richtig?",
          hint: "Which sentence is correct?",
          options: [
            "Ich stehe um 7 auf.",
            "Ich aufstehe um 7.",
            "Ich stehe auf um 7.",
            "Ich stehe um auf 7.",
          ],
          answer: "Ich stehe um 7 auf.",
          explanation: "'Aufstehen' → 'stehe … auf'. The prefix 'auf' goes to the very end. 'Um 7' (at 7) comes before the prefix because the prefix is always last.",
        },
        {
          question: "Nach einem Modalverb (kann, muss…) wird das trennbare Verb…",
          hint: "After a modal verb (kann, muss…), the separable verb…",
          options: [
            "goes to the end as one word",
            "splits and the prefix goes last",
            "drops the prefix",
            "moves to second position",
          ],
          answer: "goes to the end as one word",
          explanation: "After a modal, the separable verb stays intact as an infinitive at the end: Ich muss früh aufstehen. It only splits in simple sentences without a modal.",
        },
      ],
    },
  ],
};

export default lesson;
