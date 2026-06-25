import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "konjunktiv-ii",
  screens: [
    {
      type: "intro",
      title: "Konjunktiv II",
      body: "Konjunktiv II expresses wishes, polite requests, and hypotheticals. The easiest way: würde + infinitive (= would). For common verbs, use the special forms directly: könnte (could), müsste (should/would have to), sollte (should), hätte (would have). These make you sound much more polite instantly.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "würde + Infinitiv", back: "would + verb (general Konjunktiv II)", example: "Ich würde gern mehr Sport machen." },
        { front: "könnte", back: "could (Konjunktiv II of können)", example: "Könnten Sie mir bitte helfen?" },
        { front: "müsste", back: "would have to / should (Konjunktiv II of müssen)", example: "Ich müsste eigentlich mehr schlafen." },
        { front: "sollte", back: "should (Konjunktiv II of sollen)", example: "Du solltest mehr Wasser trinken." },
        { front: "hätte", back: "would have (Konjunktiv II of haben)", example: "Ich hätte gern einen Kaffee, bitte." },
        { front: "wäre", back: "would be (Konjunktiv II of sein)", example: "Das wäre wirklich toll!" },
        { front: "Ich würde gern …", back: "I would like to …", example: "Ich würde gern nach Berlin fahren." },
        { front: "Könnten Sie …?", back: "Could you …? (polite)", example: "Könnten Sie das bitte wiederholen?" },
        { front: "Dürfte ich …?", back: "May I …? (very polite)", example: "Dürfte ich kurz fragen?" },
        { front: "Wenn ich Zeit hätte, …", back: "If I had time, …", example: "Wenn ich Zeit hätte, würde ich mehr reisen." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Ich ___ gern ein Zimmer reservieren. Haben Sie noch etwas frei?",
          answer: "würde",
          hint: "würde + infinitiv = would like to",
          explanation: "'Würde + infinitive' is the go-to Konjunktiv II pattern. It's like English 'would': Ich würde = I would. The infinitive 'reservieren' goes to the end.",
        },
        {
          sentence: "___ Sie mir bitte sagen, wo der Bahnhof ist?",
          answer: "Könnten",
          hint: "polite 'could you'",
          explanation: "'Könnten Sie…?' (Could you…?) is a very polite way to make a request. It is the Konjunktiv II of 'können'. Always more polite than 'Können Sie…?'",
        },
        {
          sentence: "Wenn ich mehr Geld ___, würde ich eine größere Wohnung mieten.",
          answer: "hätte",
          hint: "Konjunktiv II of haben",
          explanation: "'Hätte' is the Konjunktiv II of 'haben'. In 'wenn' clauses expressing hypotheticals, Konjunktiv II is used: Wenn ich … hätte, würde ich…",
        },
        {
          sentence: "Das ___ wirklich praktisch! Danke für den Tipp.",
          answer: "wäre",
          hint: "Konjunktiv II of sein",
          explanation: "'Wäre' is the Konjunktiv II of 'sein'. 'Das wäre toll/super/praktisch' is a common way to express that something would be great.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welcher Satz ist die höflichste Art, um Hilfe zu bitten?",
          hint: "Which sentence is the most polite way to ask for help?",
          options: [
            "Könnten Sie mir helfen?",
            "Hilf mir!",
            "Können Sie helfen?",
            "Du musst mir helfen.",
          ],
          answer: "Könnten Sie mir helfen?",
          explanation: "'Könnten Sie…?' (Konjunktiv II) is more polite than 'Können Sie…?' (present tense). The Konjunktiv II adds a softening, hypothetical quality that signals politeness.",
        },
        {
          question: "Wie sagt man 'I would like to go to Berlin' mit Konjunktiv II?",
          hint: "How do you say 'I would like to go to Berlin' using Konjunktiv II?",
          options: [
            "Ich würde gern nach Berlin fahren.",
            "Ich werde gern nach Berlin fahren.",
            "Ich will gern nach Berlin fahren.",
            "Ich möchte gern nach Berlin fahren worden.",
          ],
          answer: "Ich würde gern nach Berlin fahren.",
          explanation: "'Würde + infinitive' is the standard Konjunktiv II pattern for most verbs. 'Gern' softens the wish further. The infinitive 'fahren' goes to the end.",
        },
        {
          question: "'Hätte' ist die Konjunktiv-II-Form von welchem Verb?",
          hint: "'Hätte' is the Konjunktiv II form of which verb?",
          options: [
            "haben",
            "sein",
            "helfen",
            "halten",
          ],
          answer: "haben",
          explanation: "'Hätte' = Konjunktiv II of 'haben'. Key Konjunktiv II forms to know: hätte (haben), wäre (sein), könnte (können), würde (werden/general).",
        },
      ],
    },
  ],
};

export default lesson;
