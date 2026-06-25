import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "guten-tag",
  screens: [
    {
      type: "intro",
      title: "Guten Tag!",
      body: "In this unit you'll learn how to greet people, introduce yourself, and say goodbye in German.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "Hallo", back: "Hello", example: "Hallo! Ich bin Maria." },
        { front: "Guten Morgen", back: "Good morning", example: "Guten Morgen! Wie geht es Ihnen?" },
        { front: "Guten Tag", back: "Good day / Hello (formal)", example: "Guten Tag, Herr Müller!" },
        { front: "Guten Abend", back: "Good evening", example: "Guten Abend! Willkommen." },
        { front: "Auf Wiedersehen", back: "Goodbye (formal)", example: "Auf Wiedersehen, bis morgen!" },
        { front: "Tschüss", back: "Bye (informal)", example: "Tschüss! Schönen Tag noch!" },
        { front: "Wie heißen Sie?", back: "What is your name? (formal)", example: "Wie heißen Sie, bitte?" },
        { front: "Ich heiße…", back: "My name is…", example: "Ich heiße Anna Schmidt." },
        { front: "Woher kommen Sie?", back: "Where are you from? (formal)", example: "Woher kommen Sie?" },
        { front: "Ich komme aus…", back: "I come from…", example: "Ich komme aus Spanien." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "___ Morgen! Wie geht es Ihnen?", answer: "Guten", hint: "Good morning greeting", explanation: "'Guten' is the accusative form of 'gut' used in time-of-day greetings: Guten Morgen, Guten Tag, Guten Abend." },
        { sentence: "Ich ___ Klaus Fischer.", answer: "heiße", hint: "My name is…", explanation: "'Ich heiße' comes from the verb 'heißen' (to be called). It's the standard way to give your name in German." },
        { sentence: "Ich komme ___ Polen.", answer: "aus", hint: "From (origin)", explanation: "Use 'aus' to say where you come from. It always takes the Dative case: Ich komme aus der Türkei, aus Polen, aus Spanien." },
        { sentence: "___ Wiedersehen! Bis morgen.", answer: "Auf", hint: "Formal goodbye", explanation: "'Auf Wiedersehen' literally means 'until we see each other again' — it is the standard formal goodbye in German." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wie sagt man 'Good evening' auf Deutsch?",
          hint: "How do you say 'Good evening' in German?",
          options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Tschüss"],
          answer: "Guten Abend",
          explanation: "German time-of-day greetings follow the pattern Guten + time: Morgen (morning), Tag (day/afternoon), Abend (evening).",
        },
        {
          question: "Was bedeutet 'Woher kommen Sie?'",
          hint: "What does 'Woher kommen Sie?' mean?",
          options: ["What is your name?", "Where are you from?", "How are you?", "Where do you live?"],
          answer: "Where are you from?",
          explanation: "'Woher' means 'from where'. 'Woher kommen Sie?' is the formal way to ask someone's origin — you answer with 'Ich komme aus…'",
        },
        {
          question: "Welche Begrüßung ist informell?",
          hint: "Which greeting is informal?",
          options: ["Guten Tag", "Auf Wiedersehen", "Tschüss", "Guten Morgen"],
          answer: "Tschüss",
          explanation: "'Tschüss' is casual and used with friends or peers. 'Auf Wiedersehen' is the formal goodbye, used with strangers or in professional settings.",
        },
      ],
    },
  ],
};

export default lesson;
