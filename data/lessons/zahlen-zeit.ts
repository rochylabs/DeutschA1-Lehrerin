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
        { sentence: "Es ist ___ Uhr. (9:00)", answer: "neun", hint: "The number 9", explanation: "German tells time with 'Es ist [number] Uhr'. Just put the hour number and add Uhr after it." },
        { sentence: "Am ___ habe ich frei.", answer: "Sonntag", hint: "Sunday", explanation: "Days of the week use 'am' + day: am Montag, am Dienstag… They are always capitalised in German." },
        { sentence: "Ich bin ___ Jahre alt. (20)", answer: "zwanzig", hint: "The number 20", explanation: "'Zwanzig' is 20. German numbers above 12 follow a pattern: dreißig (30), vierzig (40), fünfzig (50) — add -zig to the base." },
        { sentence: "Wie ___ ist es?", answer: "spät", hint: "What time is it?", explanation: "'Wie spät ist es?' literally asks 'How late is it?' — this is the standard way to ask for the time in German." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was bedeutet 'Es ist halb neun'?",
          hint: "What does 'Es ist halb neun' mean?",
          options: ["It is 9:00", "It is 9:30", "It is 8:30", "It is 8:00"],
          answer: "It is 8:30",
          explanation: "'Halb neun' means half an hour BEFORE nine, so 8:30. German counts towards the next hour, not from the last one — this trips many learners up!",
        },
        {
          question: "Welcher Tag kommt nach Mittwoch?",
          hint: "Which day comes after Mittwoch?",
          options: ["Dienstag", "Freitag", "Montag", "Donnerstag"],
          answer: "Donnerstag",
          explanation: "The days in order: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. Donnerstag follows Mittwoch.",
        },
        {
          question: "Wie sagt man 'twenty' auf Deutsch?",
          hint: "How do you say 'twenty' in German?",
          options: ["zehn", "dreißig", "zwanzig", "zwölf"],
          answer: "zwanzig",
          explanation: "'Zwanzig' is 20. 'Zehn' is 10, 'zwölf' is 12, 'dreißig' is 30. Notice the -zig suffix pattern for tens in German.",
        },
      ],
    },
  ],
};

export default lesson;
