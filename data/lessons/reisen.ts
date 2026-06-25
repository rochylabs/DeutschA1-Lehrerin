import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "reisen",
  screens: [
    {
      type: "intro",
      title: "Reisen",
      body: "Travelling in German-speaking countries is smooth if you know the key verbs: buchen (to book), reservieren (to reserve), and umsteigen (to change trains). At the hotel, you'll check in at der Empfang (reception). When lost, 'Können Sie mir helfen?' opens every door.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "buchen", back: "to book", example: "Ich habe das Hotel online gebucht." },
        { front: "reservieren", back: "to reserve", example: "Ich möchte einen Tisch reservieren." },
        { front: "der Zug", back: "the train", example: "Der Zug nach München fährt um 14:30 ab." },
        { front: "der Bus", back: "the bus", example: "Welcher Bus fährt zum Flughafen?" },
        { front: "das Flugzeug", back: "the plane / airplane", example: "Das Flugzeug landet in zwei Stunden." },
        { front: "das Gleis", back: "the platform / track", example: "Ihr Zug fährt von Gleis 7 ab." },
        { front: "der Empfang", back: "the reception desk", example: "Bitte melden Sie sich am Empfang an." },
        { front: "das Gepäck", back: "the luggage", example: "Ich habe nur ein Handgepäck." },
        { front: "die Verspätung", back: "the delay", example: "Der Zug hat 20 Minuten Verspätung." },
        { front: "umsteigen", back: "to change (trains/buses)", example: "Sie müssen in Frankfurt umsteigen." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Mein Zug hat leider 30 Minuten ___.",
          answer: "Verspätung",
          hint: "the train is running late",
        },
        {
          sentence: "In Mannheim müssen Sie ___. Nehmen Sie dann die S3 Richtung Heidelberg.",
          answer: "umsteigen",
          hint: "change to another train",
        },
        {
          sentence: "Ich möchte ein Zimmer für zwei Nächte ___.",
          answer: "reservieren",
          hint: "to reserve a room",
        },
        {
          sentence: "Ihr Flug geht von ___ 12B. Bitte gehen Sie zur Sicherheitskontrolle.",
          answer: "Gleis",
          hint: "platform / gate number",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "You hear: 'Der ICE 507 hat heute leider 45 Minuten Verspätung.' What does this mean?",
          options: [
            "The train is 45 minutes late.",
            "The train leaves in 45 minutes.",
            "The train is cancelled.",
            "The train is 45 minutes early.",
          ],
          answer: "The train is 45 minutes late.",
        },
        {
          question: "How do you politely ask for help when lost?",
          options: [
            "Können Sie mir helfen?",
            "Helfen Sie jetzt!",
            "Wo ist Hilfe?",
            "Ich brauche Hilfe sofort.",
          ],
          answer: "Können Sie mir helfen?",
        },
        {
          question: "What does 'umsteigen' mean in the context of public transport?",
          options: [
            "To change trains or buses",
            "To buy a ticket",
            "To check in at the hotel",
            "To book a flight",
          ],
          answer: "To change trains or buses",
        },
      ],
    },
  ],
};

export default lesson;
