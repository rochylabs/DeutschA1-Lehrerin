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
          explanation: "'Kaltmiete' (cold rent) is rent without utilities. Add Nebenkosten (heating, water etc.) to get the Warmmiete (total monthly cost).",
        },
        {
          sentence: "Ich möchte gerne eine ___ für die Wohnung vereinbaren.",
          answer: "Besichtigung",
          hint: "to view the flat in person",
          explanation: "'Besichtigung' (viewing) is feminine (die Besichtigung). 'Vereinbaren' means to arrange/schedule — a key verb for dealing with landlords.",
        },
        {
          sentence: "Vor dem Einzug muss ich die ___ von zwei Monatsmieten bezahlen.",
          answer: "Kaution",
          hint: "security deposit",
          explanation: "'Kaution' (deposit) is usually 2–3 months of cold rent in Germany. It is refunded when you move out, provided there is no damage.",
        },
        {
          sentence: "Wir suchen eine Mitbewohnerin für unsere ___.",
          answer: "WG",
          hint: "shared flat abbreviation",
          explanation: "'WG' stands for Wohngemeinschaft (shared flat). In German rental ads, abbreviations like WG, ZKB (Zimmer, Küche, Bad), and qm (Quadratmeter) are very common.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was ist in der 'Warmmiete' enthalten?",
          hint: "What does 'Warmmiete' include?",
          options: [
            "Rent plus utilities",
            "Only the base rent",
            "Deposit only",
            "Internet and TV",
          ],
          answer: "Rent plus utilities",
          explanation: "'Warmmiete' (warm rent) = Kaltmiete + Nebenkosten. It is the total monthly amount you pay, including heating and other utility costs.",
        },
        {
          question: "Anzeige: '2 ZKB, 60m², KM 750€, NK 130€'. Was sind die monatlichen Gesamtkosten?",
          hint: "You see an ad: '2 ZKB, 60m², KM 750€, NK 130€'. What is the total monthly cost?",
          options: [
            "880 Euro",
            "750 Euro",
            "130 Euro",
            "620 Euro",
          ],
          answer: "880 Euro",
          explanation: "KM (Kaltmiete) + NK (Nebenkosten) = total: 750 + 130 = 880 Euro. Always add NK to KM when calculating the real monthly cost of a German rental.",
        },
        {
          question: "Was ist ein 'Mietvertrag'?",
          hint: "What is a 'Mietvertrag'?",
          options: [
            "A rental contract",
            "A deposit receipt",
            "A utility bill",
            "A moving company",
          ],
          answer: "A rental contract",
          explanation: "'Mietvertrag' = Miete (rent) + Vertrag (contract). It is the legal agreement between tenant and landlord. Read it carefully before signing!",
        },
      ],
    },
  ],
};

export default lesson;
