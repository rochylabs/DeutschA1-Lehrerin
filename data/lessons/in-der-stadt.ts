import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "in-der-stadt",
  screens: [
    {
      type: "intro",
      title: "In der Stadt",
      body: "Navigate German cities! Learn directions, transport, and important places you'll need as a newcomer in Germany.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "links", back: "left", example: "Biegen Sie links ab." },
        { front: "rechts", back: "right", example: "Das Amt ist rechts." },
        { front: "geradeaus", back: "straight ahead", example: "Gehen Sie geradeaus." },
        { front: "der Bahnhof", back: "train station", example: "Der Bahnhof ist in der Stadtmitte." },
        { front: "die Bushaltestelle", back: "bus stop", example: "Die Bushaltestelle ist um die Ecke." },
        { front: "der Supermarkt", back: "supermarket", example: "Der Supermarkt ist montags bis samstags geöffnet." },
        { front: "die Apotheke", back: "pharmacy", example: "Ich brauche eine Apotheke." },
        { front: "das Krankenhaus", back: "hospital", example: "Das Krankenhaus ist in der Nähe." },
        { front: "das Amt", back: "government office", example: "Ich muss zum Amt gehen." },
        { front: "Wie komme ich zu…?", back: "How do I get to…?", example: "Wie komme ich zum Bahnhof?" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Gehen Sie ___, dann links.", answer: "geradeaus", hint: "Straight ahead", explanation: "'Geradeaus' means straight ahead. When giving directions in German, the verb 'gehen' (go) or 'biegen ab' (turn) is used with Sie for formal address." },
        { sentence: "Wie komme ich zur ___?", answer: "Apotheke", hint: "Pharmacy", explanation: "'Zur' is a contraction of 'zu der' (Dative feminine). 'Wie komme ich zu…?' is the standard phrase to ask for directions to a place." },
        { sentence: "Der ___ ist in der Nähe.", answer: "Bahnhof", hint: "Train station", explanation: "'Bahnhof' is masculine (der Bahnhof). 'In der Nähe' means 'nearby' — a very useful phrase for everyday navigation." },
        { sentence: "Biegen Sie ___ ab.", answer: "rechts", hint: "Right", explanation: "'Rechts abbiegen' means to turn right. The separable verb 'abbiegen' splits: 'Biegen Sie … ab'. 'Links' is left, 'rechts' is right." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was bedeutet 'geradeaus'?",
          hint: "What does 'geradeaus' mean?",
          options: ["left", "right", "straight ahead", "behind"],
          answer: "straight ahead",
          explanation: "'Geradeaus' = gerade (straight) + aus (out/through). It literally means 'straight through' — a very common word when asking for directions.",
        },
        {
          question: "Wohin gehst du, wenn du Medikamente brauchst?",
          hint: "Where do you go if you need medicine?",
          options: ["das Krankenhaus", "der Bahnhof", "die Apotheke", "das Amt"],
          answer: "die Apotheke",
          explanation: "In Germany, you get medicine at 'die Apotheke' (pharmacy), not at a supermarket. Prescription drugs are only available at pharmacies.",
        },
        {
          question: "Wie fragt man 'How do I get to the station?'",
          hint: "How do you ask 'How do I get to the station?'",
          options: ["Wo ist der Zug?", "Wie komme ich zum Bahnhof?", "Was kostet die Bahn?", "Wann fährt der Bus?"],
          answer: "Wie komme ich zum Bahnhof?",
          explanation: "'Wie komme ich zu…?' is THE phrase for asking directions. 'Zum' = zu + dem (Dative masculine). Bahnhof is masculine, so 'zum Bahnhof'.",
        },
      ],
    },
  ],
};

export default lesson;
