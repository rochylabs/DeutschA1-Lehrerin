export interface Question {
  id: number;
  type: "vocab" | "grammar" | "reading";
  question: string;
  options: string[];
  answer: string;
}

export const ASSESSMENT_QUESTIONS: Question[] = [
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

export function scoreToLevel(correct: number): "A1.1" | "A1.2" | "A1.3" {
  if (correct <= 5) return "A1.1";
  if (correct <= 10) return "A1.2";
  return "A1.3";
}
