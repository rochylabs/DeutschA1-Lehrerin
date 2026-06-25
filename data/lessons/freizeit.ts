import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "freizeit",
  screens: [
    {
      type: "intro",
      title: "Freizeit",
      body: "Talking about hobbies and making plans is key to building friendships in German. To invite someone, use 'Hast du Lust, …?' (Do you feel like …?) or 'Wollen wir …?' (Shall we …?). Hobbies go with 'gern' — Ich schwimme gern — or as a noun — Mein Hobby ist Lesen.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "schwimmen", back: "to swim", example: "Ich gehe am Wochenende gern schwimmen." },
        { front: "lesen", back: "to read", example: "Mein Hobby ist Lesen. Ich lese jeden Abend." },
        { front: "kochen", back: "to cook", example: "Er kocht sehr gern — besonders italienisch." },
        { front: "reisen", back: "to travel", example: "Sie reist gern. Letzten Sommer war sie in Portugal." },
        { front: "Musik hören", back: "to listen to music", example: "Ich höre abends gern Musik." },
        { front: "Hast du Lust, …?", back: "Do you feel like …? / Do you want to …?", example: "Hast du Lust, heute Abend ins Kino zu gehen?" },
        { front: "Wollen wir …?", back: "Shall we …? / Do you want to …?", example: "Wollen wir zusammen einen Kaffee trinken?" },
        { front: "das Hobby", back: "the hobby", example: "Was sind deine Hobbys?" },
        { front: "die Verabredung", back: "the date / meet-up / appointment", example: "Ich habe morgen eine Verabredung mit Freunden." },
        { front: "leider keine Zeit", back: "unfortunately no time / can't make it", example: "Schade, ich habe leider keine Zeit." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Hast du ___, am Samstag ins Kino zu gehen?",
          answer: "Lust",
          hint: "Do you feel like…?",
        },
        {
          sentence: "___ wir zusammen Sport machen? Ich gehe zum Schwimmbad.",
          answer: "Wollen",
          hint: "Shall we…?",
        },
        {
          sentence: "Mein Lieblingshoby ist Musik ___. Ich höre jeden Tag Podcasts.",
          answer: "hören",
          hint: "listening to music",
        },
        {
          sentence: "Tut mir leid, ich habe leider keine ___. Vielleicht nächste Woche?",
          answer: "Zeit",
          hint: "I have no … to come",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "How do you invite a friend to go swimming in German?",
          options: [
            "Hast du Lust, schwimmen zu gehen?",
            "Magst du Schwimmen?",
            "Gehen wir Schwimmen jetzt.",
            "Du sollst schwimmen kommen.",
          ],
          answer: "Hast du Lust, schwimmen zu gehen?",
        },
        {
          question: "How do you say 'My hobby is cooking' in German?",
          options: [
            "Mein Hobby ist Kochen.",
            "Ich habe Hobby Kochen.",
            "Mein Hobby kocht.",
            "Ich Hobby bin Kochen.",
          ],
          answer: "Mein Hobby ist Kochen.",
        },
        {
          question: "Someone says 'Ich habe leider keine Zeit.' What do they mean?",
          options: [
            "They unfortunately can't make it.",
            "They are running late.",
            "They need more time to decide.",
            "They have plenty of free time.",
          ],
          answer: "They unfortunately can't make it.",
        },
      ],
    },
  ],
};

export default lesson;
