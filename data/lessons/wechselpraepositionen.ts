import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "wechselpraepositionen",
  screens: [
    {
      type: "intro",
      title: "Wechselpräpositionen",
      body: "These 9 prepositions take Akkusativ or Dativ depending on meaning: an, auf, in, vor, hinter, neben, über, unter, zwischen. The key question: Wohin? (Where to? = movement) uses Akkusativ. Wo? (Where? = location) uses Dativ. Example: Ich lege das Buch auf den Tisch. (Akk) vs. Das Buch liegt auf dem Tisch. (Dat)",
    },
    {
      type: "flashcard",
      cards: [
        { front: "Wohin? → Akkusativ", back: "Movement / direction", example: "Ich stelle die Flasche auf den Tisch." },
        { front: "Wo? → Dativ", back: "Location / state", example: "Die Flasche steht auf dem Tisch." },
        { front: "auf den Tisch (Akk)", back: "onto the table", example: "Leg das Buch auf den Tisch!" },
        { front: "auf dem Tisch (Dat)", back: "on the table", example: "Das Buch liegt auf dem Tisch." },
        { front: "in die Küche (Akk)", back: "into the kitchen", example: "Ich gehe in die Küche." },
        { front: "in der Küche (Dat)", back: "in the kitchen", example: "Ich bin in der Küche." },
        { front: "an die Wand (Akk)", back: "onto the wall", example: "Er hängt das Bild an die Wand." },
        { front: "an der Wand (Dat)", back: "on the wall", example: "Das Bild hängt an der Wand." },
        { front: "vor dem Haus (Dat)", back: "in front of the house", example: "Das Auto steht vor dem Haus." },
        { front: "zwischen den Stühlen (Dat)", back: "between the chairs", example: "Der Hund sitzt zwischen den Stühlen." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich lege die Tasche ___ den Stuhl. (onto)", answer: "auf", hint: "Two-way preposition — Wohin? movement", explanation: "'Wohin?' signals movement → Akkusativ. 'Auf + Akkusativ' means movement onto a surface. 'Auf den Stuhl' (masc. Akk.) — der → den." },
        { sentence: "Die Tasche liegt ___ dem Stuhl.", answer: "auf", hint: "Same preposition — Wo? location", explanation: "'Wo?' signals location → Dativ. 'Auf dem Stuhl' (masc. Dat.) — der → dem. Same preposition 'auf', but the case changes based on movement vs. location." },
        { sentence: "Er geht ___ die Küche. (into)", answer: "in", hint: "Movement — Akkusativ follows", explanation: "'In + Akkusativ' expresses movement into a space. 'Küche' is feminine: die Küche → in die Küche (Akk., no change for feminine)." },
        { sentence: "Sie sitzt ___ dem Sofa. (on the sofa)", answer: "auf", hint: "Location — Dativ follows", explanation: "'Auf + Dativ' expresses location on a surface. 'Sofa' is neuter (das Sofa) → dem Sofa in dative. 'Sitzen' is a position verb (location), not movement." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welchen Kasus nimmt eine Wechselpräposition bei Bewegung?",
          hint: "Which case follows a Wechselpräposition when indicating movement?",
          options: ["Nominativ", "Genitiv", "Dativ", "Akkusativ"],
          answer: "Akkusativ",
          explanation: "Movement (Wohin?) → Akkusativ. Location (Wo?) → Dativ. This is the core rule for all 9 Wechselpräpositionen (an, auf, in, vor, hinter, neben, über, unter, zwischen).",
        },
        {
          question: "Ergänze: 'Das Buch liegt ___ dem Tisch.'",
          hint: "Complete: 'Das Buch liegt ___ dem Tisch.'",
          options: ["auf", "in", "an", "vor"],
          answer: "auf",
          explanation: "'Liegen' (to lie/be located) describes a location → Dativ. 'Das Buch liegt auf dem Tisch' = The book is lying on the table. 'Dem' confirms it's Dativ masculine.",
        },
        {
          question: "Welches Fragewort zeigt an, dass der Akkusativ folgt?",
          hint: "Which question word tells you to use Akkusativ?",
          options: ["Wo?", "Wann?", "Wohin?", "Woher?"],
          answer: "Wohin?",
          explanation: "'Wohin?' (Where to?) asks about direction/movement → Akkusativ follows. 'Wo?' asks about location → Dativ follows. This Wo?/Wohin? trick works every time.",
        },
      ],
    },
  ],
};

export default lesson;
