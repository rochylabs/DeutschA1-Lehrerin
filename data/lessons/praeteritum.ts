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
          explanation: "'War' is the Präteritum of 'sein'. Even in casual spoken German, use 'war' and 'hatte' instead of Perfekt — 'ist gewesen' sounds unnatural.",
        },
        {
          sentence: "Er ___ keine Krankenversicherung.",
          answer: "hatte",
          hint: "Präteritum of 'haben' (to have)",
          explanation: "'Hatte' is the Präteritum of 'haben'. Like 'war', it is always used in speech — even informal. Never say 'hat gehabt' in conversation.",
        },
        {
          sentence: "Sie ___ nicht, wo das Amt ist.",
          answer: "wusste",
          hint: "Präteritum of 'wissen' (to know)",
          explanation: "'Wusste' is the Präteritum of 'wissen' (to know facts). In spoken German, modal-like verbs (wissen, kennen) also often appear in Präteritum.",
        },
        {
          sentence: "Wir ___ um 9 Uhr zur Schule.",
          answer: "gingen",
          hint: "Präteritum of 'gehen', wir-form",
          explanation: "'Gingen' is the wir/sie-form of 'gehen' in Präteritum. The wir-form of irregular verbs = the ich-form + -en: ging → gingen.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was ist das Präteritum von 'können' in der ich-Form?",
          hint: "What is the Präteritum of 'können' (ich-form)?",
          options: ["konnte", "gekannt", "kann", "könnten"],
          answer: "konnte",
          explanation: "Modal verbs form their Präteritum by removing the umlaut and adding -te: können → konnte, müssen → musste, wollen → wollte.",
        },
        {
          question: "Welcher Satz verwendet das Präteritum korrekt?",
          hint: "Which sentence uses Präteritum correctly?",
          options: [
            "Gestern ich war im Supermarkt.",
            "Gestern war ich im Supermarkt.",
            "Gestern bin ich im Supermarkt war.",
            "Gestern habe ich war im Supermarkt.",
          ],
          answer: "Gestern war ich im Supermarkt.",
          explanation: "In German, the verb must always be in position 2. When 'Gestern' starts the sentence, the verb 'war' comes next, then the subject 'ich'.",
        },
        {
          question: "Wann verwenden Deutsche das Präteritum in der gesprochenen Sprache?",
          hint: "When do Germans use Präteritum in spoken language?",
          options: [
            "For all past actions",
            "Only for 'sein' and 'haben' and modals",
            "Only in formal writing",
            "Never — only Perfekt is spoken",
          ],
          answer: "Only for 'sein' and 'haben' and modals",
          explanation: "In everyday speech, Germans use Perfekt for most verbs, but always use Präteritum for war/hatte and the modal verbs (konnte, musste, wollte, etc.).",
        },
      ],
    },
  ],
};

export default lesson;
