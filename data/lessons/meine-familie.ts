import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "meine-familie",
  screens: [
    {
      type: "intro",
      title: "Meine Familie",
      body: "Learn vocabulary for family members and how to talk about your family in German.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "die Mutter", back: "mother", example: "Meine Mutter heißt Anna." },
        { front: "der Vater", back: "father", example: "Mein Vater ist Arzt." },
        { front: "die Schwester", back: "sister", example: "Ich habe eine Schwester." },
        { front: "der Bruder", back: "brother", example: "Mein Bruder ist 10 Jahre alt." },
        { front: "die Eltern", back: "parents", example: "Meine Eltern wohnen in München." },
        { front: "die Großmutter", back: "grandmother", example: "Meine Großmutter ist 70 Jahre alt." },
        { front: "der Großvater", back: "grandfather", example: "Mein Großvater kommt aus Italien." },
        { front: "die Tante", back: "aunt", example: "Meine Tante wohnt in Berlin." },
        { front: "der Onkel", back: "uncle", example: "Mein Onkel hat drei Kinder." },
        { front: "das Kind", back: "child", example: "Das Kind spielt im Park." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        { sentence: "Meine ___ heißt Maria.", answer: "Mutter", hint: "Mother", explanation: "'Mutter' is feminine (die Mutter), so the possessive is 'meine'. Feminine nouns use 'meine', masculine use 'mein'." },
        { sentence: "Ich habe einen ___.", answer: "Bruder", hint: "Brother", explanation: "'Bruder' is masculine (der Bruder). In the accusative case after 'haben', it becomes 'einen Bruder' — masculine changes in accusative." },
        { sentence: "Meine ___ wohnen in Hamburg.", answer: "Eltern", hint: "Parents", explanation: "'Eltern' (parents) is always plural in German — there is no singular form. Plural nouns use 'meine' for the possessive." },
        { sentence: "Mein ___ ist sehr alt.", answer: "Großvater", hint: "Grandfather", explanation: "'Großvater' is masculine (der Großvater), so the possessive is 'mein' (without -e). Masculine and neuter nouns use 'mein'." },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Was bedeutet 'die Schwester'?",
          hint: "What does 'die Schwester' mean?",
          options: ["brother", "mother", "sister", "aunt"],
          answer: "sister",
          explanation: "'Schwester' means sister. The feminine article 'die' is a clue — most female family members are feminine: die Mutter, die Tochter, die Tante.",
        },
        {
          question: "Wie sagt man 'my parents' auf Deutsch?",
          hint: "How do you say 'my parents' in German?",
          options: ["mein Kind", "meine Eltern", "meine Tante", "mein Onkel"],
          answer: "meine Eltern",
          explanation: "'Eltern' is plural, so the possessive is 'meine'. The plural possessive for all genders is 'meine': meine Eltern, meine Kinder.",
        },
        {
          question: "Was bedeutet 'der Großvater'?",
          hint: "What does 'der Großvater' mean?",
          options: ["uncle", "father", "brother", "grandfather"],
          answer: "grandfather",
          explanation: "'Groß' means big/great, 'Vater' means father — so 'Großvater' is literally 'great-father', i.e. grandfather.",
        },
      ],
    },
  ],
};

export default lesson;
