import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "perfekt",
  screens: [
    {
      type: "intro",
      title: "Das Perfekt",
      body: "Perfekt is the go-to spoken past tense in German. It's formed with haben or sein + past participle (Partizip II). Most verbs take haben. Verbs of motion or change of state (gehen, fahren, kommen, werden, bleiben) take sein. Regular participles: ge- + stem + -t (gemacht, gelernt). Irregular ones must be memorised (gegessen, geschrieben, gefahren).",
    },
    {
      type: "flashcard",
      cards: [
        {
          front: "gemacht",
          back: "done / made (machen → hat gemacht)",
          example: "Ich habe meine Hausaufgaben gemacht.",
        },
        {
          front: "gegessen",
          back: "eaten (essen → hat gegessen)",
          example: "Wir haben Pizza gegessen.",
        },
        {
          front: "getrunken",
          back: "drunk (trinken → hat getrunken)",
          example: "Sie hat Kaffee getrunken.",
        },
        {
          front: "gefahren",
          back: "driven / travelled (fahren → ist gefahren)",
          example: "Er ist mit dem Auto gefahren.",
        },
        {
          front: "gegangen",
          back: "gone (gehen → ist gegangen)",
          example: "Ich bin gestern zum Amt gegangen.",
        },
        {
          front: "gekommen",
          back: "come (kommen → ist gekommen)",
          example: "Der Arzt ist schnell gekommen.",
        },
        {
          front: "geschrieben",
          back: "written (schreiben → hat geschrieben)",
          example: "Sie hat eine E-Mail geschrieben.",
        },
        {
          front: "gesprochen",
          back: "spoken (sprechen → hat gesprochen)",
          example: "Ich habe mit dem Vermieter gesprochen.",
        },
        {
          front: "geblieben",
          back: "stayed (bleiben → ist geblieben)",
          example: "Er ist drei Wochen im Krankenhaus geblieben.",
        },
        {
          front: "eingekauft",
          back: "shopped (einkaufen → hat eingekauft)",
          example: "Wir haben im Supermarkt eingekauft.",
        },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Ich ___ gestern Deutsch gelernt.",
          answer: "habe",
          hint: "auxiliary verb for lernen (haben or sein?)",
        },
        {
          sentence: "Sie ___ mit dem Bus gefahren.",
          answer: "ist",
          hint: "auxiliary verb for fahren (motion verb)",
        },
        {
          sentence: "Wir haben das Formular ___.",
          answer: "ausgefüllt",
          hint: "past participle of ausfüllen (to fill out)",
        },
        {
          sentence: "Er hat lange auf den Arzt ___.",
          answer: "gewartet",
          hint: "past participle of warten (to wait), regular",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Which auxiliary verb does 'gehen' use in Perfekt?",
          options: ["haben", "sein", "werden", "both"],
          answer: "sein",
        },
        {
          question: "What is the Perfekt of 'Sie schreibt eine E-Mail'?",
          options: [
            "Sie hat eine E-Mail geschrieben.",
            "Sie ist eine E-Mail geschrieben.",
            "Sie hat eine E-Mail geschreibt.",
            "Sie hat eine E-Mail geskrieben.",
          ],
          answer: "Sie hat eine E-Mail geschrieben.",
        },
        {
          question: "How do you form the Partizip II of regular verbs?",
          options: [
            "ge- + stem + -en",
            "ge- + stem + -t",
            "stem + -te",
            "ge- + infinitive",
          ],
          answer: "ge- + stem + -t",
        },
      ],
    },
  ],
};

export default lesson;
