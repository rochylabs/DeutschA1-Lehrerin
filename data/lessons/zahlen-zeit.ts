import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "zahlen-zeit",
  screens: [
    {
      type: "intro",
      title: "Zahlen & Zeit",
      body: "Numbers, days of the week, and telling the time — essential for appointments, shopping, and daily life in Germany.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "eins, zwei, drei", back: "one, two, three", example: "Ich habe drei Kinder." },
        { front: "vier, fünf, sechs", back: "four, five, six", example: "Der Bus fährt um fünf Uhr." },
        { front: "sieben, acht, neun, zehn", back: "seven, eight, nine, ten", example: "Das Geschäft öffnet um neun Uhr." },
        { front: "zwanzig, dreißig", back: "twenty, thirty", example: "Ich bin zwanzig Jahre alt." },
        { front: "Montag, Dienstag", back: "Monday, Tuesday", example: "Am Montag habe ich Arbeit." },
        { front: "Mittwoch, Donnerstag", back: "Wednesday, Thursday", example: "Am Donnerstag gehe ich zum Arzt." },
        { front: "Freitag, Samstag, Sonntag", back: "Friday, Saturday, Sunday", example: "Am Sonntag schlafe ich lange." },
        { front: "Wie spät ist es?", back: "What time is it?", example: "Wie spät ist es? — Es ist drei Uhr." },
        { front: "Es ist … Uhr", back: "It is … o'clock", example: "Es ist acht Uhr morgens." },
        { front: "halb, Viertel", back: "half past, quarter", example: "Es ist halb neun. (= 8:30)" },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Es ist ___ Uhr. (9:00)", answer: "neun", hint: "The number 9" },
        { sentence: "Am ___ habe ich frei.", answer: "Sonntag", hint: "Sunday" },
        { sentence: "Ich bin ___ Jahre alt. (20)", answer: "zwanzig", hint: "The number 20" },
        { sentence: "Wie ___ ist es?", answer: "spät", hint: "What time is it?" },
      ],
    },
    {
      type: "quiz",
      questions: [
        { question: "What does 'Es ist halb neun' mean?", options: ["It is 9:00", "It is 9:30", "It is 8:30", "It is 8:00"], answer: "It is 8:30" },
        { question: "Which day comes after Mittwoch?", options: ["Dienstag", "Freitag", "Montag", "Donnerstag"], answer: "Donnerstag" },
        { question: "How do you say 'twenty' in German?", options: ["zehn", "dreißig", "zwanzig", "zwölf"], answer: "zwanzig" },
      ],
    },
  ],
};

export default lesson;
