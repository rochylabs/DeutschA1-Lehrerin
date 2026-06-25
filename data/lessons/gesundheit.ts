import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "gesundheit",
  screens: [
    {
      type: "intro",
      title: "Gesundheit",
      body: "At the doctor (beim Arzt) or pharmacy (in der Apotheke), you need to describe what hurts and where. German uses 'Ich habe Schmerzen' (I have pain) or 'Mir tut … weh' (my … hurts). Always bring your Krankenversicherungskarte (health insurance card) to appointments.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "der Kopf", back: "the head", example: "Mir tut der Kopf weh. Ich habe Kopfschmerzen." },
        { front: "der Bauch", back: "the stomach / belly", example: "Ich habe Bauchschmerzen seit gestern." },
        { front: "der Arm / die Arme", back: "the arm / arms", example: "Ich kann meinen Arm nicht heben." },
        { front: "das Bein / die Beine", back: "the leg / legs", example: "Mein Bein tut sehr weh." },
        { front: "der Rücken", back: "the back", example: "Ich habe starke Rückenschmerzen." },
        { front: "das Fieber", back: "fever", example: "Ich habe Fieber — 39 Grad." },
        { front: "der Husten", back: "cough", example: "Ich habe seit einer Woche Husten." },
        { front: "die Schmerzen (pl.)", back: "pain / aches", example: "Haben Sie Schmerzen? — Ja, hier." },
        { front: "die Apotheke", back: "the pharmacy", example: "Ich kaufe das Medikament in der Apotheke." },
        { front: "der Termin", back: "the appointment", example: "Ich brauche einen Termin beim Arzt." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Mir tut der ___ weh. Ich glaube, ich habe zu viel getragen.",
          answer: "Rücken",
          hint: "the body part between shoulders and hips",
        },
        {
          sentence: "Ich habe ___ — 38,5 Grad. Ich bleibe heute zu Hause.",
          answer: "Fieber",
          hint: "high body temperature",
        },
        {
          sentence: "Können Sie mir etwas gegen ___ geben? Ich huste schon seit drei Tagen.",
          answer: "Husten",
          hint: "a cough",
        },
        {
          sentence: "Ich brauche einen ___ beim Arzt. Wann haben Sie Zeit?",
          answer: "Termin",
          hint: "an appointment",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "How do you say 'My leg hurts' in German?",
          options: [
            "Mein Bein tut weh.",
            "Ich habe Bein.",
            "Das Bein ist krank.",
            "Mein Bein hat Schmerz.",
          ],
          answer: "Mein Bein tut weh.",
        },
        {
          question: "Where do you go to pick up prescription medicine in Germany?",
          options: [
            "In die Apotheke",
            "In das Krankenhaus",
            "Zum Zahnarzt",
            "In die Schule",
          ],
          answer: "In die Apotheke",
        },
        {
          question: "What do you need to bring to a doctor's appointment in Germany?",
          options: [
            "Krankenversicherungskarte",
            "Führerschein",
            "Reisepass immer",
            "Bargeld nur",
          ],
          answer: "Krankenversicherungskarte",
        },
      ],
    },
  ],
};

export default lesson;
