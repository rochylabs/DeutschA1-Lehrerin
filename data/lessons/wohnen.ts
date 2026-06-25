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
        { sentence: "Ich suche eine ___ in München.", answer: "Wohnung", hint: "Apartment" },
        { sentence: "Das ___ hat zwei Betten.", answer: "Schlafzimmer", hint: "Bedroom" },
        { sentence: "Bitte öffnen Sie das ___.", answer: "Fenster", hint: "Window" },
        { sentence: "Wir essen am ___.", answer: "Tisch", hint: "Table" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What does 'die Küche' mean?", options: ["bedroom", "bathroom", "kitchen", "living room"], answer: "kitchen" },
        { question: "How do you say 'The apartment has 3 rooms'?", options: ["Die Wohnung hat drei Zimmer.", "Das Haus hat drei Türen.", "Die Küche hat drei Fenster.", "Das Zimmer hat drei Betten."], answer: "Die Wohnung hat drei Zimmer." },
        { question: "What is 'das Badezimmer'?", options: ["kitchen", "living room", "bedroom", "bathroom"], answer: "bathroom" },
      ],
    },
  ],
};

export default lesson;
