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
          explanation: "'Mit' always takes the dative case. 'Mit dem Zug' = by train. Other transport preposition: 'mit dem Bus', 'mit dem Auto'.",
        },
        {
          sentence: "Sie wohnt ___ ihrer Mutter.",
          answer: "bei",
          hint: "preposition meaning 'at someone's place'",
          explanation: "'Bei' always takes dative and means 'at someone's place' or 'near'. 'Bei ihrer Mutter' = at her mother's place.",
        },
        {
          sentence: "Ich lerne seit zwei ___ Deutsch.",
          answer: "Jahren",
          hint: "dative plural of Jahr (year)",
          explanation: "After 'seit', the noun takes dative plural. Dative plural in German always adds -n to the plural form: Jahre → Jahren.",
        },
        {
          sentence: "Er gibt ___ Frau die Schlüssel.",
          answer: "der",
          hint: "dative article for feminine noun (die Frau → der Frau)",
          explanation: "In the dative case, feminine 'die' changes to 'der': die Frau → der Frau. This is a common point of confusion — the dative feminine looks like the masculine nominative!",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welcher Satz verwendet den Dativ richtig?",
          hint: "Which sentence uses the dative correctly?",
          options: [
            "Ich gehe zu der Arzt.",
            "Ich gehe zum Arzt.",
            "Ich gehe zu der Arzt.",
            "Ich gehe zu dem Arztes.",
          ],
          answer: "Ich gehe zum Arzt.",
          explanation: "'Zum' is a contraction of 'zu dem' (dative masculine). 'Arzt' is masculine, so 'zu dem Arzt' → 'zum Arzt'. Always use contractions in natural speech.",
        },
        {
          question: "Welche Präposition nimmt immer den Dativ?",
          hint: "Which preposition always takes the dative?",
          options: ["durch", "für", "mit", "ohne"],
          answer: "mit",
          explanation: "'Mit' always takes dative. Easy memory trick for dative prepositions: 'mit, nach, bei, von, seit, zu, aus, gegenüber' — learn them as a fixed list.",
        },
        {
          question: "Wie sagt man 'I have been here since three months'?",
          hint: "How do you say 'I have been here since three months'?",
          options: [
            "Ich bin seit drei Monaten hier.",
            "Ich bin für drei Monaten hier.",
            "Ich bin vor drei Monaten hier.",
            "Ich bin nach drei Monaten hier.",
          ],
          answer: "Ich bin seit drei Monaten hier.",
          explanation: "'Seit' + dative expresses an ongoing period of time still in progress. 'Monaten' is dative plural of Monat. Use present tense with 'seit' in German (not past tense like English).",
        },
      ],
    },
  ],
};

export default lesson;
