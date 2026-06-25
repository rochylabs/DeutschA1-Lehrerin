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
        },
        {
          sentence: "___ Sie mir bitte sagen, wo der Bahnhof ist?",
          answer: "Könnten",
          hint: "polite 'could you'",
        },
        {
          sentence: "Wenn ich mehr Geld ___, würde ich eine größere Wohnung mieten.",
          answer: "hätte",
          hint: "Konjunktiv II of haben",
        },
        {
          sentence: "Das ___ wirklich praktisch! Danke für den Tipp.",
          answer: "wäre",
          hint: "Konjunktiv II of sein",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Which sentence is the most polite way to ask for help?",
          options: [
            "Könnten Sie mir helfen?",
            "Hilf mir!",
            "Können Sie helfen?",
            "Du musst mir helfen.",
          ],
          answer: "Könnten Sie mir helfen?",
        },
        {
          question: "How do you say 'I would like to go to Berlin' using Konjunktiv II?",
          options: [
            "Ich würde gern nach Berlin fahren.",
            "Ich werde gern nach Berlin fahren.",
            "Ich will gern nach Berlin fahren.",
            "Ich möchte gern nach Berlin fahren worden.",
          ],
          answer: "Ich würde gern nach Berlin fahren.",
        },
        {
          question: "'Hätte' is the Konjunktiv II form of which verb?",
          options: [
            "haben",
            "sein",
            "helfen",
            "halten",
          ],
          answer: "haben",
        },
      ],
    },
  ],
};

export default lesson;
