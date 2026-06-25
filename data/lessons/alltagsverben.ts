import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "alltagsverben",
  screens: [
    {
      type: "intro",
      title: "Alltagsverben",
      body: "Learn everyday verbs in the present tense. German regular verbs follow a predictable pattern — master the endings and you can conjugate hundreds of verbs!",
    },
    {
      type: "flashcard",
      cards: [
        { front: "arbeiten", back: "to work", example: "Ich arbeite von 9 bis 17 Uhr." },
        { front: "wohnen", back: "to live / reside", example: "Wir wohnen in Hamburg." },
        { front: "lernen", back: "to learn / study", example: "Sie lernt Deutsch." },
        { front: "kaufen", back: "to buy", example: "Ich kaufe Brot im Supermarkt." },
        { front: "spielen", back: "to play", example: "Die Kinder spielen im Park." },
        { front: "machen", back: "to do / make", example: "Was machst du heute?" },
        { front: "kommen", back: "to come", example: "Er kommt aus der Türkei." },
        { front: "gehen", back: "to go", example: "Wir gehen ins Kino." },
        { front: "trinken", back: "to drink", example: "Ich trinke Kaffee am Morgen." },
        { front: "essen", back: "to eat", example: "Was isst du zum Mittagessen?" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich ___ in einer Schule.", answer: "arbeite", hint: "I work (arbeiten, ich form)", explanation: "Regular verbs drop -en from the infinitive and add endings. Ich + stem = ich arbeite (-e ending)." },
        { sentence: "Wir ___ in Berlin.", answer: "wohnen", hint: "We live (wohnen, wir form)", explanation: "The wir-form of regular verbs is the same as the infinitive: wohnen → wir wohnen. Easy to remember!" },
        { sentence: "Sie ___ jeden Tag Deutsch.", answer: "lernt", hint: "She learns (lernen, sie form)", explanation: "The er/sie/es form adds -t to the stem: lern- + t = lernt. This is the most common ending you'll use when talking about others." },
        { sentence: "Was ___ du heute?", answer: "machst", hint: "What do you do? (machen, du form)", explanation: "The du-form adds -st to the stem: mach- + st = machst. If the stem ends in -t or -d, an extra -e is added for pronunciation." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welche Form ist richtig: 'Er ___ Kaffee.'?",
          hint: "What is the correct form: 'Er ___ Kaffee.'?",
          options: ["trinken", "trinkst", "trinkt", "trinke"],
          answer: "trinkt",
          explanation: "For er/sie/es, add -t to the verb stem: trink- + t = trinkt. This is the standard third-person singular ending.",
        },
        {
          question: "Was bedeutet 'Wir gehen ins Kino'?",
          hint: "What does 'Wir gehen ins Kino' mean?",
          options: ["We buy a ticket.", "We go to the cinema.", "We eat at a restaurant.", "We work at home."],
          answer: "We go to the cinema.",
          explanation: "'Gehen' means 'to go'. 'Ins Kino' is a contraction of 'in das Kino' (into the cinema). 'Ins' = in + das.",
        },
        {
          question: "Welche Endung bekommt 'ich' bei regulären Verben?",
          hint: "Which ending does 'ich' take with regular verbs?",
          options: ["-st", "-t", "-en", "-e"],
          answer: "-e",
          explanation: "The ich-form always ends in -e: ich arbeite, ich lerne, ich kaufe. This -e ending is unique to the first person singular.",
        },
      ],
    },
  ],
};

export default lesson;
