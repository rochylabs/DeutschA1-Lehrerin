import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "a1-review",
  screens: [
    {
      type: "intro",
      title: "A1 Review",
      body: "Congratulations on reaching the final unit! This is a full review of everything you've learned across A1. Let's make sure you're ready for real-life German.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "Guten Tag! Ich heiße…", back: "Hello! My name is…", example: "Guten Tag! Ich heiße Maria und ich komme aus Spanien." },
        { front: "Ich bin / Ich habe", back: "I am / I have", example: "Ich bin Studentin. Ich habe eine Wohnung in München." },
        { front: "der / die / das → den", back: "Masculine changes in accusative", example: "Ich kaufe den Kaffee und das Brot." },
        { front: "können / müssen / wollen", back: "can / must / want to", example: "Ich kann Deutsch. Ich muss zum Amt gehen." },
        { front: "Wie spät ist es?", back: "What time is it?", example: "Es ist halb neun. Ich muss jetzt gehen." },
        { front: "Wo wohnen Sie?", back: "Where do you live?", example: "Ich wohne in Berlin, in einer kleinen Wohnung." },
        { front: "Ich möchte… / Was kostet…?", back: "I'd like… / How much is…?", example: "Ich möchte einen Kaffee. Was kostet das?" },
        { front: "Links, rechts, geradeaus", back: "Left, right, straight ahead", example: "Gehen Sie geradeaus, dann links zum Bahnhof." },
        { front: "Meine Familie", back: "My family", example: "Ich habe eine Schwester und einen Bruder." },
        { front: "Auf Wiedersehen!", back: "Goodbye!", example: "Auf Wiedersehen und viel Erfolg!" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Ich ___ einen Kaffee, bitte. (would like)", answer: "möchte", hint: "Ordering at a café", explanation: "'Möchte' is the polite form for ordering — always use it in shops and restaurants. The main verb comes right after the subject in polite requests." },
        { sentence: "Er ___ heute nicht kommen. (can't)", answer: "kann", hint: "Modal verb können", explanation: "'Kann' is the ich/er/sie/es-form of 'können'. Modal verbs send the infinitive to the end: Er kann heute nicht kommen." },
        { sentence: "Ich sehe ___ Mann. (the man, accusative)", answer: "den", hint: "Masculine accusative", explanation: "Masculine 'der' changes to 'den' in the accusative (direct object). Only masculine articles change: der → den. Feminine and neuter stay the same." },
        { sentence: "Wie ___ ist es? Es ist zehn Uhr.", answer: "spät", hint: "Asking for the time", explanation: "'Wie spät ist es?' = What time is it? (literally: How late is it?). This is the standard way to ask for the time in German." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Welcher Satz ist richtig für 'I must work today'?",
          hint: "Which is correct: 'I must work today'?",
          options: ["Ich kann heute arbeiten.", "Ich muss heute arbeiten.", "Ich will heute arbeiten.", "Ich muss heute Arbeit."],
          answer: "Ich muss heute arbeiten.",
          explanation: "'Müssen' expresses obligation. With modal verbs, the infinitive goes to the end: Ich muss heute arbeiten. 'Muss' + noun (Arbeit) without a verb would be incomplete.",
        },
        {
          question: "Was ändert sich im Akkusativ?",
          hint: "What changes in the accusative case?",
          options: ["die → der", "das → den", "der → den", "Nothing changes"],
          answer: "der → den",
          explanation: "Only the masculine definite article changes in the accusative: der → den. Feminine (die) and neuter (das) stay the same. This is the most important accusative rule.",
        },
        {
          question: "Wie sagt man 'straight ahead' auf Deutsch?",
          hint: "How do you say 'straight ahead' in German?",
          options: ["links", "rechts", "geradeaus", "zurück"],
          answer: "geradeaus",
          explanation: "'Geradeaus' = straight ahead. 'Links' = left, 'rechts' = right, 'zurück' = back. These four direction words are essential for navigating German cities.",
        },
      ],
    },
  ],
};

export default lesson;
