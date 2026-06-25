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
        { sentence: "Gehen Sie ___, dann links.", answer: "geradeaus", hint: "Straight ahead" },
        { sentence: "Wie komme ich zur ___?", answer: "Apotheke", hint: "Pharmacy" },
        { sentence: "Der ___ ist in der Nähe.", answer: "Bahnhof", hint: "Train station" },
        { sentence: "Biegen Sie ___ ab.", answer: "rechts", hint: "Right" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What does 'geradeaus' mean?", options: ["left", "right", "straight ahead", "behind"], answer: "straight ahead" },
        { question: "Where do you go if you need medicine?", options: ["das Krankenhaus", "der Bahnhof", "die Apotheke", "das Amt"], answer: "die Apotheke" },
        { question: "How do you ask 'How do I get to the station?'", options: ["Wo ist der Zug?", "Wie komme ich zum Bahnhof?", "Was kostet die Bahn?", "Wann fährt der Bus?"], answer: "Wie komme ich zum Bahnhof?" },
      ],
    },
  ],
};

export default lesson;
