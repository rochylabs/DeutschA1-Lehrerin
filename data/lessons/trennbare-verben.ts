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
        },
        {
          sentence: "Kannst du mich bitte ___? Meine Nummer ist 0176 123456. (anrufen)",
          answer: "anrufen",
          hint: "anrufen stays together after modal verbs",
        },
        {
          sentence: "Wir ___ jeden Freitag im Supermarkt ___. (einkaufen)",
          answer: "kaufen … ein",
          hint: "einkaufen → kaufen … ein",
        },
        {
          sentence: "Der neue Job ___ nächsten Montag ___. (anfangen)",
          answer: "fängt … an",
          hint: "anfangen → fängt … an",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Where does the separable prefix go in a main clause?",
          options: [
            "At the very end of the sentence",
            "Directly before the verb",
            "Right after the subject",
            "It stays attached to the verb",
          ],
          answer: "At the very end of the sentence",
        },
        {
          question: "Which sentence is correct?",
          options: [
            "Ich stehe um 7 auf.",
            "Ich aufstehe um 7.",
            "Ich stehe auf um 7.",
            "Ich stehe um auf 7.",
          ],
          answer: "Ich stehe um 7 auf.",
        },
        {
          question: "After a modal verb (kann, muss…), the separable verb…",
          options: [
            "goes to the end as one word",
            "splits and the prefix goes last",
            "drops the prefix",
            "moves to second position",
          ],
          answer: "goes to the end as one word",
        },
      ],
    },
  ],
};

export default lesson;
