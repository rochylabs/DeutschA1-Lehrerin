import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "dativ",
  screens: [
    {
      type: "intro",
      title: "Der Dativ",
      body: "The dative case marks the indirect object — the person or thing receiving the action. Articles change: der → dem, die → der, das → dem, ein → einem, eine → einer. Many prepositions always take dative: mit, zu, bei, von, aus, nach, seit. You'll use dative every day — giving something to someone, saying where you live, talking about since when.",
    },
    {
      type: "flashcard",
      cards: [
        {
          front: "mit dem Bus",
          back: "by bus",
          example: "Ich fahre mit dem Bus zur Arbeit.",
        },
        {
          front: "zu der / zur Ärztin",
          back: "to the (female) doctor",
          example: "Ich gehe morgen zur Ärztin.",
        },
        {
          front: "bei meiner Schwester",
          back: "at my sister's place",
          example: "Ich wohne bei meiner Schwester.",
        },
        {
          front: "von dem / vom Bahnhof",
          back: "from the train station",
          example: "Der Bus fährt vom Bahnhof ab.",
        },
        {
          front: "aus der Türkei",
          back: "from Turkey",
          example: "Meine Familie kommt aus der Türkei.",
        },
        {
          front: "nach Hause",
          back: "home (direction)",
          example: "Ich gehe jetzt nach Hause.",
        },
        {
          front: "seit einem Jahr",
          back: "for a year (since one year)",
          example: "Ich lerne seit einem Jahr Deutsch.",
        },
        {
          front: "Ich gebe dem Mann das Formular.",
          back: "I give the man the form.",
          example: "dem Mann = dative (indirect object, masculine)",
        },
        {
          front: "mit einer Freundin",
          back: "with a (female) friend",
          example: "Ich bin mit einer Freundin im Café.",
        },
        {
          front: "gegenüber dem Supermarkt",
          back: "across from the supermarket",
          example: "Die Apotheke ist gegenüber dem Supermarkt.",
        },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Ich fahre ___ dem Zug nach Berlin.",
          answer: "mit",
          hint: "preposition meaning 'by/with' (transport)",
        },
        {
          sentence: "Sie wohnt ___ ihrer Mutter.",
          answer: "bei",
          hint: "preposition meaning 'at someone's place'",
        },
        {
          sentence: "Ich lerne seit zwei ___ Deutsch.",
          answer: "Jahren",
          hint: "dative plural of Jahr (year)",
        },
        {
          sentence: "Er gibt ___ Frau die Schlüssel.",
          answer: "der",
          hint: "dative article for feminine noun (die Frau → der Frau)",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Which sentence uses the dative correctly?",
          options: [
            "Ich gehe zu der Arzt.",
            "Ich gehe zum Arzt.",
            "Ich gehe zu der Arzt.",
            "Ich gehe zu dem Arztes.",
          ],
          answer: "Ich gehe zum Arzt.",
        },
        {
          question: "Which preposition always takes the dative?",
          options: ["durch", "für", "mit", "ohne"],
          answer: "mit",
        },
        {
          question: "How do you say 'I have been here since three months'?",
          options: [
            "Ich bin seit drei Monaten hier.",
            "Ich bin für drei Monaten hier.",
            "Ich bin vor drei Monaten hier.",
            "Ich bin nach drei Monaten hier.",
          ],
          answer: "Ich bin seit drei Monaten hier.",
        },
      ],
    },
  ],
};

export default lesson;
