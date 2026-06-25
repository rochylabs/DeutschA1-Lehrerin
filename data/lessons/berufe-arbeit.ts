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
          explanation: "'Sich bewerben' is a reflexive verb meaning 'to apply'. The ich-form is 'bewerbe' + reflexive pronoun 'mich': Ich bewerbe mich.",
        },
        {
          sentence: "Bitte schicken Sie uns Ihren ___ und ein Anschreiben.",
          answer: "Lebenslauf",
          hint: "your work history document",
          explanation: "'Lebenslauf' (literally 'life's course') is the German CV/résumé. It's masculine (der Lebenslauf), hence 'Ihren' in the accusative.",
        },
        {
          sentence: "Das ___ für diese Stelle beträgt 3.000 Euro brutto.",
          answer: "Gehalt",
          hint: "what you earn monthly",
          explanation: "'Gehalt' (salary) is neuter (das Gehalt). 'Brutto' means before tax deductions; 'netto' means take-home pay after taxes.",
        },
        {
          sentence: "Haben Sie Erfahrung als ___? — Ja, ich habe drei Jahre in einer Klinik gearbeitet.",
          answer: "Ärztin",
          hint: "female doctor",
          explanation: "In German, job titles change by gender. Female forms usually add -in: Arzt → Ärztin, Lehrer → Lehrerin. Always match the article and ending to the person's gender.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wie sagt man 'I am applying for the job' auf Deutsch?",
          hint: "How do you say 'I am applying for the job' in German?",
          options: [
            "Ich bewerbe mich auf die Stelle.",
            "Ich suche die Stelle.",
            "Ich nehme den Job.",
            "Ich finde die Arbeit.",
          ],
          answer: "Ich bewerbe mich auf die Stelle.",
          explanation: "'Sich bewerben auf + Akkusativ' is the fixed phrase for applying for a job. The reflexive pronoun 'mich' is required — don't leave it out.",
        },
        {
          question: "Was ist ein 'Lebenslauf'?",
          hint: "What is a 'Lebenslauf'?",
          options: [
            "A CV / résumé",
            "A job interview",
            "A salary slip",
            "A work contract",
          ],
          answer: "A CV / résumé",
          explanation: "'Lebenslauf' = life (Leben) + course/run (Lauf). It's your career history document — what you send when applying for a job in Germany.",
        },
        {
          question: "Welcher Satz verwendet einen weiblichen Berufstitel korrekt?",
          hint: "Which sentence correctly uses a gendered job title?",
          options: [
            "Sie ist Ingenieurin bei Siemens.",
            "Sie ist Ingenieur bei Siemens.",
            "Er ist Ingenieurin bei Siemens.",
            "Er ist die Ingenieur bei Siemens.",
          ],
          answer: "Sie ist Ingenieurin bei Siemens.",
          explanation: "When talking about a woman, use the feminine form: Ingenieur → Ingenieurin. In German, job titles after 'sein' (to be) take no article: Sie ist Ärztin (not: eine Ärztin).",
        },
      ],
    },
  ],
};

export default lesson;
