import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "praeteritum",
  screens: [
    {
      type: "intro",
      title: "Das Präteritum",
      body: "Präteritum is the written/narrative past tense. In everyday speech Germans use Perfekt for most verbs, but war (was), hatte (had), and a handful of modals always use Präteritum even in conversation. You'll also see it in news articles, stories, and official documents. Learning the key irregular forms first gets you very far.",
    },
    {
      type: "flashcard",
      cards: [
        {
          front: "war",
          back: "was (sein → war)",
          example: "Gestern war ich krank.",
        },
        {
          front: "hatte",
          back: "had (haben → hatte)",
          example: "Er hatte keine Zeit.",
        },
        {
          front: "ging",
          back: "went (gehen → ging)",
          example: "Sie ging um 8 Uhr zur Arbeit.",
        },
        {
          front: "kam",
          back: "came (kommen → kam)",
          example: "Der Brief kam nicht an.",
        },
        {
          front: "konnte",
          back: "could (können → konnte)",
          example: "Ich konnte nicht schlafen.",
        },
        {
          front: "musste",
          back: "had to (müssen → musste)",
          example: "Sie musste früh aufstehen.",
        },
        {
          front: "wollte",
          back: "wanted to (wollen → wollte)",
          example: "Er wollte ein Zimmer mieten.",
        },
        {
          front: "wusste",
          back: "knew (wissen → wusste)",
          example: "Ich wusste die Adresse nicht.",
        },
        {
          front: "blieb",
          back: "stayed (bleiben → blieb)",
          example: "Sie blieb drei Tage im Krankenhaus.",
        },
        {
          front: "gab",
          back: "gave (geben → gab)",
          example: "Die Behörde gab mir ein Formular.",
        },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Gestern ___ ich sehr müde.",
          answer: "war",
          hint: "Präteritum of 'sein' (to be)",
        },
        {
          sentence: "Er ___ keine Krankenversicherung.",
          answer: "hatte",
          hint: "Präteritum of 'haben' (to have)",
        },
        {
          sentence: "Sie ___ nicht, wo das Amt ist.",
          answer: "wusste",
          hint: "Präteritum of 'wissen' (to know)",
        },
        {
          sentence: "Wir ___ um 9 Uhr zur Schule.",
          answer: "gingen",
          hint: "Präteritum of 'gehen', wir-form",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "What is the Präteritum of 'können' (ich-form)?",
          options: ["konnte", "gekannt", "kann", "könnten"],
          answer: "konnte",
        },
        {
          question: "Which sentence uses Präteritum correctly?",
          options: [
            "Gestern ich war im Supermarkt.",
            "Gestern war ich im Supermarkt.",
            "Gestern bin ich im Supermarkt war.",
            "Gestern habe ich war im Supermarkt.",
          ],
          answer: "Gestern war ich im Supermarkt.",
        },
        {
          question: "When do Germans use Präteritum in spoken language?",
          options: [
            "For all past actions",
            "Only for 'sein' and 'haben' and modals",
            "Only in formal writing",
            "Never — only Perfekt is spoken",
          ],
          answer: "Only for 'sein' and 'haben' and modals",
        },
      ],
    },
  ],
};

export default lesson;
