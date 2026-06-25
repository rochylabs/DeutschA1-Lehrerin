import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "berufe-arbeit",
  screens: [
    {
      type: "intro",
      title: "Berufe & Arbeit",
      body: "German job titles usually change by gender: der Arzt / die Ärztin. In a job interview, you'll need to talk about your Ausbildung (training/degree), your Erfahrung (experience), and your Stärken (strengths). Knowing the key vocabulary gives you confidence at the Vorstellungsgespräch.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "der Arzt / die Ärztin", back: "doctor (male / female)", example: "Sie ist Ärztin in einem Krankenhaus." },
        { front: "der Ingenieur / die Ingenieurin", back: "engineer", example: "Er arbeitet als Ingenieur bei BMW." },
        { front: "der Verkäufer / die Verkäuferin", back: "salesperson / shop assistant", example: "Die Verkäuferin hilft mir gerne." },
        { front: "der Lehrer / die Lehrerin", back: "teacher", example: "Meine Deutschlehrerin kommt aus Wien." },
        { front: "der Kellner / die Kellnerin", back: "waiter / waitress", example: "Der Kellner bringt die Rechnung." },
        { front: "das Vorstellungsgespräch", back: "job interview", example: "Ich habe morgen ein Vorstellungsgespräch." },
        { front: "der Lebenslauf", back: "CV / résumé", example: "Schicken Sie bitte Ihren Lebenslauf per E-Mail." },
        { front: "die Ausbildung", back: "vocational training / qualification", example: "Ich habe eine Ausbildung als Elektriker gemacht." },
        { front: "die Stelle / der Job", back: "the position / job", example: "Ich bewerbe mich auf die Stelle als Buchhalter." },
        { front: "das Gehalt", back: "salary", example: "Das Gehalt ist 2.800 Euro netto im Monat." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Ich ___ mich auf die Stelle als Verkäuferin.",
          answer: "bewerbe",
          hint: "sich bewerben = to apply",
        },
        {
          sentence: "Bitte schicken Sie uns Ihren ___ und ein Anschreiben.",
          answer: "Lebenslauf",
          hint: "your work history document",
        },
        {
          sentence: "Das ___ für diese Stelle beträgt 3.000 Euro brutto.",
          answer: "Gehalt",
          hint: "what you earn monthly",
        },
        {
          sentence: "Haben Sie Erfahrung als ___? — Ja, ich habe drei Jahre in einer Klinik gearbeitet.",
          answer: "Ärztin",
          hint: "female doctor",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "How do you say 'I am applying for the job' in German?",
          options: [
            "Ich bewerbe mich auf die Stelle.",
            "Ich suche die Stelle.",
            "Ich nehme den Job.",
            "Ich finde die Arbeit.",
          ],
          answer: "Ich bewerbe mich auf die Stelle.",
        },
        {
          question: "What is a 'Lebenslauf'?",
          options: [
            "A CV / résumé",
            "A job interview",
            "A salary slip",
            "A work contract",
          ],
          answer: "A CV / résumé",
        },
        {
          question: "Which sentence correctly uses a gendered job title?",
          options: [
            "Sie ist Ingenieurin bei Siemens.",
            "Sie ist Ingenieur bei Siemens.",
            "Er ist Ingenieurin bei Siemens.",
            "Er ist die Ingenieur bei Siemens.",
          ],
          answer: "Sie ist Ingenieurin bei Siemens.",
        },
      ],
    },
  ],
};

export default lesson;
