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
        { sentence: "Ich ___ einen Kaffee, bitte. (would like)", answer: "möchte", hint: "Ordering at a café" },
        { sentence: "Er ___ heute nicht kommen. (can't)", answer: "kann", hint: "Modal verb können" },
        { sentence: "Ich sehe ___ Mann. (the man, accusative)", answer: "den", hint: "Masculine accusative" },
        { sentence: "Wie ___ ist es? Es ist zehn Uhr.", answer: "spät", hint: "Asking for the time" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "Which is correct: 'I must work today'?", options: ["Ich kann heute arbeiten.", "Ich muss heute arbeiten.", "Ich will heute arbeiten.", "Ich muss heute Arbeit."], answer: "Ich muss heute arbeiten." },
        { question: "What changes in the accusative case?", options: ["die → der", "das → den", "der → den", "Nothing changes"], answer: "der → den" },
        { question: "How do you say 'straight ahead' in German?", options: ["links", "rechts", "geradeaus", "zurück"], answer: "geradeaus" },
      ],
    },
  ],
};

export default lesson;
