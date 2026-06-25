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
          explanation: "'Lernen' is not a motion verb, so it takes 'haben'. Rule: if you can't move somewhere with the verb, use haben. Ich habe gelernt.",
        },
        {
          sentence: "Sie ___ mit dem Bus gefahren.",
          answer: "ist",
          hint: "auxiliary verb for fahren (motion verb)",
          explanation: "'Fahren' is a motion verb (movement from A to B), so it takes 'sein'. Motion verbs: gehen, fahren, kommen, fliegen, laufen — all use 'sein'.",
        },
        {
          sentence: "Wir haben das Formular ___.",
          answer: "ausgefüllt",
          hint: "past participle of ausfüllen (to fill out)",
          explanation: "For separable verbs, 'ge-' is inserted BETWEEN the prefix and the stem: aus-ge-füllt. The participle still ends in -t for regular verbs.",
        },
        {
          sentence: "Er hat lange auf den Arzt ___.",
          answer: "gewartet",
          hint: "past participle of warten (to wait), regular",
          explanation: "'Warten' is regular: ge- + wart- + -et = gewartet. Verbs whose stem ends in -t or -d add -et (not just -t) in the participle.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welches Hilfsverb benutzt 'gehen' im Perfekt?",
          hint: "Which auxiliary verb does 'gehen' use in Perfekt?",
          options: ["haben", "sein", "werden", "both"],
          answer: "sein",
          explanation: "'Gehen' (to go) is a motion verb and takes 'sein' in Perfekt: Ich bin gegangen. A tip: if you can ask 'Wohin?' (where to?), the verb likely takes 'sein'.",
        },
        {
          question: "Was ist das Perfekt von 'Sie schreibt eine E-Mail'?",
          hint: "What is the Perfekt of 'Sie schreibt eine E-Mail'?",
          options: [
            "Sie hat eine E-Mail geschrieben.",
            "Sie ist eine E-Mail geschrieben.",
            "Sie hat eine E-Mail geschreibt.",
            "Sie hat eine E-Mail geskrieben.",
          ],
          answer: "Sie hat eine E-Mail geschrieben.",
          explanation: "'Schreiben' takes 'haben' and has an irregular participle: geschrieben (not 'geschreibt'). Irregular participles end in -en, not -t.",
        },
        {
          question: "Wie bildet man das Partizip II von regulären Verben?",
          hint: "How do you form the Partizip II of regular verbs?",
          options: [
            "ge- + stem + -en",
            "ge- + stem + -t",
            "stem + -te",
            "ge- + infinitive",
          ],
          answer: "ge- + stem + -t",
          explanation: "Regular Partizip II = ge- + verb stem + -t: machen → gemacht, lernen → gelernt, kaufen → gekauft. Irregular verbs change the stem and end in -en.",
        },
      ],
    },
  ],
};

export default lesson;
