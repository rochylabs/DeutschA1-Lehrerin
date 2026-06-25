import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "modal-verben",
  screens: [
    {
      type: "intro",
      title: "Modal Verben",
      body: "Modal verbs express ability, necessity, and desire. The three key ones at A1: können (can), müssen (must), wollen (want to). The main verb goes to the end.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "können", back: "can / to be able to", example: "Ich kann Deutsch sprechen." },
        { front: "müssen", back: "must / to have to", example: "Ich muss heute arbeiten." },
        { front: "wollen", back: "to want to", example: "Ich will Kaffee trinken." },
        { front: "ich kann", back: "I can", example: "Ich kann schwimmen." },
        { front: "du kannst", back: "you can", example: "Du kannst kommen." },
        { front: "er / sie kann", back: "he / she can", example: "Sie kann gut kochen." },
        { front: "ich muss", back: "I must", example: "Ich muss um 8 Uhr aufstehen." },
        { front: "ich will", back: "I want to", example: "Ich will nach Berlin fahren." },
        { front: "wir können", back: "we can", example: "Wir können morgen treffen." },
        { front: "Verb goes to the end", back: "Modal + infinitive at the end", example: "Ich kann heute nicht kommen." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich ___ Deutsch sprechen.", answer: "kann", hint: "I can (können, ich form)" },
        { sentence: "Du ___ jetzt gehen.", answer: "musst", hint: "You must (müssen, du form)" },
        { sentence: "Er ___ nach Hause fahren.", answer: "will", hint: "He wants to (wollen, er form)" },
        { sentence: "Wir ___ heute nicht arbeiten.", answer: "können", hint: "We can (können, wir form)" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "Where does the main verb go with a modal verb?", options: ["At the beginning", "After the modal", "At the end", "In the middle"], answer: "At the end" },
        { question: "What does 'Ich muss arbeiten' mean?", options: ["I can work.", "I want to work.", "I must work.", "I like to work."], answer: "I must work." },
        { question: "Complete: 'Sie ___ gut kochen.' (can)", options: ["kann", "muss", "will", "kannst"], answer: "kann" },
      ],
    },
  ],
};

export default lesson;
