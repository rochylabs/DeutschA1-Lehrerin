import { Lesson } from "../types";

const lesson: Lesson = {
  slug: "relativsaetze",
  screens: [
    {
      type: "intro",
      title: "Relativsätze",
      body: "A relative clause describes a noun and is introduced by a relative pronoun (der, die, das — matching the noun's gender). The verb goes to the END of the relative clause. Example: Das ist der Mann, der hier arbeitet. A comma always separates the relative clause from the main sentence.",
    },
    {
      type: "flashcard",
      cards: [
        { front: "der (Relativpronomen, maskulin)", back: "who / that / which (masc.)", example: "Das ist der Kollege, der aus Polen kommt." },
        { front: "die (Relativpronomen, feminin)", back: "who / that / which (fem.)", example: "Das ist die Frau, die neben mir wohnt." },
        { front: "das (Relativpronomen, neutrum)", back: "which / that (neut.)", example: "Das ist das Formular, das ich ausfüllen muss." },
        { front: "die (Relativpronomen, Plural)", back: "who / that / which (pl.)", example: "Das sind die Leute, die uns geholfen haben." },
        { front: "Verb geht ans Ende", back: "verb goes to the end of the relative clause", example: "Der Mann, der dort steht, ist mein Chef." },
        { front: "Komma vor dem Relativsatz", back: "comma before the relative clause", example: "Ich suche eine Wohnung, die günstig ist." },
        { front: "… den … (Akkusativ)", back: "relative pronoun in accusative (masc.)", example: "Der Bus, den ich nehme, fährt um 8 Uhr." },
        { front: "… dem … (Dativ)", back: "relative pronoun in dative (masc./neut.)", example: "Der Arzt, dem ich vertraue, ist sehr gut." },
        { front: "… der … (Dativ feminin)", back: "relative pronoun in dative (fem.)", example: "Die Lehrerin, der ich geholfen habe, war dankbar." },
        { front: "… dessen / deren …", back: "whose (masc./neut. / fem. or pl.)", example: "Das ist der Mann, dessen Frau Ärztin ist." },
      ],
    },
    {
      type: "fill_blank",
      exercises: [
        {
          sentence: "Das ist die Wohnung, ___ ich mieten möchte.",
          answer: "die",
          hint: "die Wohnung is feminine",
          explanation: "The relative pronoun matches the gender of the noun it refers to. 'Wohnung' is feminine (die), so the relative pronoun is also 'die'.",
        },
        {
          sentence: "Ich habe den Brief, ___ du geschrieben hast, bekommen.",
          answer: "den",
          hint: "der Brief → accusative relative pronoun",
          explanation: "'Brief' is masculine (der Brief). Inside the relative clause, the pronoun is the direct object → accusative masculine: den. Same change as der → den.",
        },
        {
          sentence: "Das ist das Restaurant, ___ meine Kollegin empfohlen hat.",
          answer: "das",
          hint: "das Restaurant is neuter",
          explanation: "'Restaurant' is neuter (das Restaurant). As the direct object in the relative clause (accusative), neuter stays 'das' — neuter doesn't change in accusative.",
        },
        {
          sentence: "Die Leute, ___ neben uns wohnen, sind sehr freundlich.",
          answer: "die",
          hint: "plural relative pronoun",
          explanation: "Plural nouns use 'die' as the relative pronoun in the nominative — regardless of the gender of the individual nouns.",
        },
      ],
    },
    {
      type: "quiz",
      questions: [
        {
          question: "Wo steht das Verb im Relativsatz?",
          hint: "Where does the verb go in a relative clause?",
          options: [
            "At the end of the relative clause",
            "In second position, as usual",
            "Right after the relative pronoun",
            "At the beginning of the relative clause",
          ],
          answer: "At the end of the relative clause",
          explanation: "Like all subordinate clauses, the verb goes to the end of the relative clause. The relative pronoun comes first, then everything else, then the verb.",
        },
        {
          question: "Welches Relativpronomen passt? 'Das ist der Mann, ___ hier arbeitet.'",
          hint: "Which relative pronoun fits? 'Das ist der Mann, ___ hier arbeitet.'",
          options: [
            "der",
            "die",
            "das",
            "den",
          ],
          answer: "der",
          explanation: "'Mann' is masculine (der Mann). As the subject of the relative clause, the pronoun is nominative masculine: 'der'. Use 'den' only when it's the direct object.",
        },
        {
          question: "Welcher Satz ist grammatisch korrekt?",
          hint: "Which sentence is grammatically correct?",
          options: [
            "Das ist die Frau, die neben mir wohnt.",
            "Das ist die Frau, der neben mir wohnt.",
            "Das ist die Frau, das neben mir wohnt.",
            "Das ist die Frau, den neben mir wohnt.",
          ],
          answer: "Das ist die Frau, die neben mir wohnt.",
          explanation: "'Frau' is feminine (die Frau). As the subject of the relative clause (nominative), the pronoun is 'die'. Only 'die' matches the gender here.",
        },
      ],
    },
  ],
};

export default lesson;
