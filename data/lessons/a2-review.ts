import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "a2-review",
  screens: [
    {
      type: "intro",
      title: "A2 Rückblick",
      body: "This review covers the key grammar and vocabulary from the full A2 course: Dativ, Perfekt, Präteritum, separable verbs, Konjunktiv II, relative clauses, and everyday A2 vocabulary. Take it as a self-check — if something feels shaky, go back to that lesson.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "Perfekt (haben/sein + Partizip II)", back: "present perfect — main past tense in spoken German", example: "Ich habe gestern gearbeitet. Er ist nach Hause gegangen." },
        { front: "Präteritum (war, hatte, konnte…)", back: "simple past — mainly for written German and sein/haben/modals", example: "Als Kind hatte ich einen Hund. Es war schön." },
        { front: "Dativ: mit, bei, nach, von, seit, aus, zu, gegenüber", back: "prepositions that always take Dative", example: "Ich fahre mit dem Bus. Sie wohnt bei ihrer Schwester." },
        { front: "Trennbare Verben (anrufen, aufstehen…)", back: "separable verbs — prefix goes to end in main clause", example: "Ich stehe um 7 auf. Er ruft seinen Chef an." },
        { front: "Konjunktiv II: würde / könnte / müsste", back: "Konjunktiv II for wishes and polite requests", example: "Könnten Sie mir helfen? Ich würde gern kommen." },
        { front: "Relativsatz: Das ist die Stadt, die…", back: "relative clause — pronoun matches noun gender, verb to end", example: "Das ist die Stadt, die ich liebe." },
        { front: "die Miete / die Kaution / der Mietvertrag", back: "rent / deposit / rental contract", example: "Ich habe den Mietvertrag unterschrieben." },
        { front: "das Vorstellungsgespräch / der Lebenslauf", back: "job interview / CV", example: "Ich schicke meinen Lebenslauf heute noch ab." },
        { front: "Mir tut … weh. / Ich habe Schmerzen.", back: "my … hurts / I'm in pain", example: "Mir tut der Rücken weh. Haben Sie Schmerzen?" },
        { front: "Hast du Lust, …? / Wollen wir …?", back: "invitations and making plans", example: "Hast du Lust, heute schwimmen zu gehen?" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Gestern ___ ich sehr früh aufgestanden. Der Zug fuhr um 6 Uhr ___.",
          answer: "bin … ab",
          hint: "aufstehen uses sein in Perfekt; abfahren splits",
        },
        {
          sentence: "Das ist das Formular, ___ Sie bitte ausfüllen müssen.",
          answer: "das",
          hint: "das Formular → neuter relative pronoun",
        },
        {
          sentence: "Ich ___ gern einen Termin beim Arzt machen. Wann haben Sie Zeit?",
          answer: "würde",
          hint: "Konjunktiv II with würde",
        },
        {
          sentence: "Seit ___ Jahren wohne ich in Deutschland. Ich spreche jetzt gut Deutsch.",
          answer: "zwei",
          hint: "seit + Dativ; any plausible number works — here: zwei",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Which past tense is most common in everyday spoken German?",
          options: [
            "Perfekt",
            "Präteritum",
            "Futur II",
            "Plusquamperfekt",
          ],
          answer: "Perfekt",
        },
        {
          question: "Which sentence uses Konjunktiv II correctly?",
          options: [
            "Könnten Sie mir bitte helfen?",
            "Können Sie mir bitte helfen würden?",
            "Sie könnten helfen mir bitte?",
            "Helfen könnten Sie mir?",
          ],
          answer: "Könnten Sie mir bitte helfen?",
        },
        {
          question: "Choose the correct relative pronoun: 'Das ist der Kollege, ___ neben mir sitzt.'",
          options: [
            "der",
            "die",
            "das",
            "den",
          ],
          answer: "der",
        },
      ],
    },
  ],
};

export default lesson;
