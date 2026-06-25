import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "wohnen",
  screens: [
    {
      type: "intro",
      title: "Wohnen",
      body: "Learn vocabulary for your home, rooms, and furniture. Useful for finding an apartment or describing where you live in Germany.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "die Wohnung", back: "apartment / flat", example: "Ich suche eine Wohnung in Berlin." },
        { front: "das Zimmer", back: "room", example: "Die Wohnung hat drei Zimmer." },
        { front: "die Küche", back: "kitchen", example: "Die Küche ist modern." },
        { front: "das Badezimmer", back: "bathroom", example: "Das Badezimmer ist klein." },
        { front: "das Schlafzimmer", back: "bedroom", example: "Mein Schlafzimmer ist ruhig." },
        { front: "das Wohnzimmer", back: "living room", example: "Wir sitzen im Wohnzimmer." },
        { front: "die Tür", back: "door", example: "Bitte schließen Sie die Tür." },
        { front: "das Fenster", back: "window", example: "Das Fenster ist offen." },
        { front: "der Tisch", back: "table", example: "Der Tisch steht in der Küche." },
        { front: "das Bett", back: "bed", example: "Das Bett ist sehr bequem." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich suche eine ___ in München.", answer: "Wohnung", hint: "Apartment", explanation: "'Wohnung' is feminine (die Wohnung), so 'eine Wohnung' in the accusative. Use 'Wohnung' for a flat/apartment, 'Haus' for a whole house." },
        { sentence: "Das ___ hat zwei Betten.", answer: "Schlafzimmer", hint: "Bedroom", explanation: "'Schlafzimmer' is neuter (das Schlafzimmer). It's a compound word: 'schlafen' (to sleep) + 'Zimmer' (room). German loves compound nouns!" },
        { sentence: "Bitte öffnen Sie das ___.", answer: "Fenster", hint: "Window", explanation: "'Fenster' is neuter (das Fenster). The verb here is 'öffnen' (to open) — its opposite is 'schließen' (to close)." },
        { sentence: "Wir essen am ___.", answer: "Tisch", hint: "Table", explanation: "'Tisch' is masculine (der Tisch). 'Am Tisch' means 'at the table' — 'am' is a contraction of 'an dem' (Dative)." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was bedeutet 'die Küche'?",
          hint: "What does 'die Küche' mean?",
          options: ["bedroom", "bathroom", "kitchen", "living room"],
          answer: "kitchen",
          explanation: "'Küche' is kitchen. Memory tip: think of the English word 'cuisine' — both come from the Latin 'coquina' (cooking place).",
        },
        {
          question: "Welcher Satz ist richtig für 'The apartment has 3 rooms'?",
          hint: "How do you say 'The apartment has 3 rooms'?",
          options: ["Die Wohnung hat drei Zimmer.", "Das Haus hat drei Türen.", "Die Küche hat drei Fenster.", "Das Zimmer hat drei Betten."],
          answer: "Die Wohnung hat drei Zimmer.",
          explanation: "'Wohnung' (apartment) takes 'hat' (has). 'Zimmer' is neuter and stays the same in plural — no -s or -e added.",
        },
        {
          question: "Was ist 'das Badezimmer'?",
          hint: "What is 'das Badezimmer'?",
          options: ["kitchen", "living room", "bedroom", "bathroom"],
          answer: "bathroom",
          explanation: "'Badezimmer' = 'Baden' (bathing) + 'Zimmer' (room) = bathroom. German compound nouns always take the gender of the LAST word — Zimmer is neuter, so das Badezimmer.",
        },
      ],
    },
  ],
};

export default lesson;
