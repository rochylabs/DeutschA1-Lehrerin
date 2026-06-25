export type Picker = "A1" | "A2";

export interface Question {
  id: number;
  type: "vocab" | "grammar" | "reading";
  question: string;
  options: string[];
  answer: string;
}

export const A1_QUESTIONS: Question[] = [
  // Vocab (5)
  { id: 1, type: "vocab", question: "What does 'Hund' mean?", options: ["Cat", "Dog", "Bird", "Fish"], answer: "Dog" },
  { id: 2, type: "vocab", question: "What is 'Wasser' in English?", options: ["Wine", "Juice", "Water", "Milk"], answer: "Water" },
  { id: 3, type: "vocab", question: "What does 'Haus' mean?", options: ["Street", "City", "Garden", "House"], answer: "House" },
  { id: 4, type: "vocab", question: "What is 'Buch' in English?", options: ["Bag", "Book", "Box", "Bus"], answer: "Book" },
  { id: 5, type: "vocab", question: "What does 'Schule' mean?", options: ["Hospital", "School", "Shop", "Station"], answer: "School" },
  // Grammar (5)
  { id: 6, type: "grammar", question: "Choose the correct article: ___ Mann", options: ["die", "das", "der", "ein"], answer: "der" },
  { id: 7, type: "grammar", question: "Complete: Ich ___ aus Deutschland.", options: ["bist", "bin", "ist", "sind"], answer: "bin" },
  { id: 8, type: "grammar", question: "Choose the correct article: ___ Frau", options: ["der", "das", "ein", "die"], answer: "die" },
  { id: 9, type: "grammar", question: "Complete: Er ___ einen Kaffee.", options: ["haben", "hat", "habe", "habt"], answer: "hat" },
  { id: 10, type: "grammar", question: "Complete: Wir ___ in Berlin.", options: ["wohnt", "wohne", "wohnen", "wohnst"], answer: "wohnen" },
  // Reading (5)
  { id: 11, type: "reading", question: "'Der Zug fährt um 9 Uhr ab.' What time does the train leave?", options: ["8:00", "9:00", "10:00", "11:00"], answer: "9:00" },
  { id: 12, type: "reading", question: "'Das Restaurant ist montags geschlossen.' When is the restaurant closed?", options: ["Sunday", "Saturday", "Monday", "Friday"], answer: "Monday" },
  { id: 13, type: "reading", question: "'Meine Mutter heißt Maria.' What is the mother's name?", options: ["Anna", "Maria", "Lisa", "Sara"], answer: "Maria" },
  { id: 14, type: "reading", question: "'Ich wohne seit drei Jahren in München.' How long has the person lived in Munich?", options: ["1 year", "2 years", "3 years", "4 years"], answer: "3 years" },
  { id: 15, type: "reading", question: "'Das Geschäft öffnet um acht Uhr morgens.' When does the shop open?", options: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"], answer: "8:00 AM" },
];

export const A2_QUESTIONS: Question[] = [
  // Dativ (5)
  { id: 1, type: "grammar", question: "Choose the correct dative article: Ich gehe mit ___ Freund.", options: ["der", "dem", "den", "die"], answer: "dem" },
  { id: 2, type: "grammar", question: "Complete: Das Buch gehört ___ Lehrerin.", options: ["der", "die", "den", "dem"], answer: "der" },
  { id: 3, type: "grammar", question: "Which preposition always takes the dative?", options: ["durch", "für", "mit", "ohne"], answer: "mit" },
  { id: 4, type: "grammar", question: "Complete: Er kommt ___ Deutschland.", options: ["nach", "aus", "von", "bei"], answer: "aus" },
  { id: 5, type: "grammar", question: "Complete: Ich wohne ___ meinen Eltern.", options: ["mit", "bei", "von", "zu"], answer: "bei" },
  // Perfekt / Präteritum (5)
  { id: 6, type: "grammar", question: "What is the Perfekt of 'gehen'?", options: ["hat gegangen", "ist gegangen", "hat gegangt", "ist gegangt"], answer: "ist gegangen" },
  { id: 7, type: "grammar", question: "Complete: Ich ___ gestern sehr müde. (war/hatte)", options: ["war", "hatte", "bin", "habe"], answer: "war" },
  { id: 8, type: "grammar", question: "What is the Perfekt of 'kaufen'?", options: ["ist gekauft", "hat gekauft", "ist gekaufen", "hat kaufen"], answer: "hat gekauft" },
  { id: 9, type: "grammar", question: "Complete with Präteritum: Er ___ keine Zeit.", options: ["hatte", "hat", "habe", "hatten"], answer: "hatte" },
  { id: 10, type: "grammar", question: "Which verb uses 'sein' in Perfekt?", options: ["kaufen", "trinken", "fahren", "arbeiten"], answer: "fahren" },
  // A2 vocab / reading (5)
  { id: 11, type: "vocab", question: "What does 'die Miete' mean?", options: ["mortgage", "rent", "bill", "deposit"], answer: "rent" },
  { id: 12, type: "vocab", question: "What does 'das Rezept' mean in a medical context?", options: ["recipe", "prescription", "invoice", "contract"], answer: "prescription" },
  { id: 13, type: "reading", question: "'Ich würde gern früher aufhören.' What does this mean?", options: ["I must finish earlier.", "I want to finish earlier.", "I would like to finish earlier.", "I should finish earlier."], answer: "I would like to finish earlier." },
  { id: 14, type: "reading", question: "'Der Zug, der um 9 Uhr abfährt, ist voll.' Which train is full?", options: ["The 8 o'clock train", "The 9 o'clock train", "All trains", "The last train"], answer: "The 9 o'clock train" },
  { id: 15, type: "vocab", question: "What does 'trennbare Verben' mean?", options: ["irregular verbs", "separable verbs", "modal verbs", "reflexive verbs"], answer: "separable verbs" },
];

// Keep alias for any code still referencing ASSESSMENT_QUESTIONS
export const ASSESSMENT_QUESTIONS = A1_QUESTIONS;

export function getQuestions(picker: Picker): Question[] {
  return picker === "A2" ? A2_QUESTIONS : A1_QUESTIONS;
}

export function scoreToLevel(correct: number, picker: Picker): "A1.1" | "A1.2" | "A2.1" | "A2.2" {
  if (picker === "A2") {
    return correct <= 7 ? "A2.1" : "A2.2";
  }
  return correct <= 7 ? "A1.1" : "A1.2";
}
