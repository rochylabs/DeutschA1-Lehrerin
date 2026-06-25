import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "wohnung-suchen",
  screens: [
    {
      type: "intro",
      title: "Wohnung suchen",
      body: "Finding an apartment in Germany means reading rental ads full of abbreviations. Key numbers to know: Kaltmiete (rent without utilities), Nebenkosten (utilities on top), and Kaution (deposit — usually 2–3 months). WG = Wohngemeinschaft, a shared flat.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "die Miete", back: "the rent", example: "Die Miete beträgt 800 Euro pro Monat." },
        { front: "die Nebenkosten", back: "additional costs / utilities", example: "Die Nebenkosten sind 150 Euro im Monat." },
        { front: "die Kaution", back: "the deposit", example: "Die Kaution ist drei Monatsmieten." },
        { front: "die WG (Wohngemeinschaft)", back: "shared flat / house share", example: "Ich wohne in einer WG mit drei anderen Leuten." },
        { front: "der Vermieter / die Vermieterin", back: "the landlord / landlady", example: "Der Vermieter ist sehr freundlich." },
        { front: "der Mietvertrag", back: "the rental contract / lease", example: "Ich unterschreibe den Mietvertrag morgen." },
        { front: "die Kaltmiete", back: "rent without utilities (cold rent)", example: "Die Kaltmiete ist 650 Euro." },
        { front: "die Warmmiete", back: "rent including utilities (warm rent)", example: "Die Warmmiete beträgt 800 Euro." },
        { front: "die Besichtigung", back: "the viewing (of a flat)", example: "Ich habe eine Besichtigung am Dienstag." },
        { front: "das Zimmer frei", back: "room available", example: "Ab 1. Juli ist ein Zimmer frei." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Die ___ ist 700 Euro, plus 120 Euro Nebenkosten.",
          answer: "Kaltmiete",
          hint: "rent without utilities",
        },
        {
          sentence: "Ich möchte gerne eine ___ für die Wohnung vereinbaren.",
          answer: "Besichtigung",
          hint: "to view the flat in person",
        },
        {
          sentence: "Vor dem Einzug muss ich die ___ von zwei Monatsmieten bezahlen.",
          answer: "Kaution",
          hint: "security deposit",
        },
        {
          sentence: "Wir suchen eine Mitbewohnerin für unsere ___.",
          answer: "WG",
          hint: "shared flat abbreviation",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "What does 'Warmmiete' include?",
          options: [
            "Rent plus utilities",
            "Only the base rent",
            "Deposit only",
            "Internet and TV",
          ],
          answer: "Rent plus utilities",
        },
        {
          question: "You see an ad: '2 ZKB, 60m², KM 750€, NK 130€'. What is the total monthly cost?",
          options: [
            "880 Euro",
            "750 Euro",
            "130 Euro",
            "620 Euro",
          ],
          answer: "880 Euro",
        },
        {
          question: "What is a 'Mietvertrag'?",
          options: [
            "A rental contract",
            "A deposit receipt",
            "A utility bill",
            "A moving company",
          ],
          answer: "A rental contract",
        },
      ],
    },
  ],
};

export default lesson;
