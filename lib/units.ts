export type UnitType = "vocab" | "grammar" | "practice" | "review";

export interface Unit {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  type: UnitType;
  level: "A1.1" | "A1.2";
  xp: number;
  estimatedMinutes: number;
}

export const UNITS: Unit[] = [
  { id: 1, slug: "guten-tag", title: "Guten Tag!", subtitle: "Greetings & introductions", type: "vocab", level: "A1.1", xp: 50, estimatedMinutes: 15 },
  { id: 2, slug: "ich-bin", title: "Ich bin…", subtitle: "sein & haben, pronouns", type: "grammar", level: "A1.1", xp: 50, estimatedMinutes: 20 },
  { id: 3, slug: "meine-familie", title: "Meine Familie", subtitle: "Family & relationships", type: "vocab", level: "A1.1", xp: 50, estimatedMinutes: 15 },
  { id: 4, slug: "artikel-nomen", title: "Artikel & Nomen", subtitle: "der / die / das, Nominative", type: "grammar", level: "A1.1", xp: 60, estimatedMinutes: 20 },
  { id: 5, slug: "wohnen", title: "Wohnen", subtitle: "Home, rooms & furniture", type: "vocab", level: "A1.1", xp: 60, estimatedMinutes: 15 },
  { id: 6, slug: "alltagsverben", title: "Alltagsverben", subtitle: "Regular verbs, present tense", type: "grammar", level: "A1.1", xp: 60, estimatedMinutes: 20 },
  { id: 7, slug: "zahlen-zeit", title: "Zahlen & Zeit", subtitle: "Numbers, days & clock", type: "vocab", level: "A1.2", xp: 60, estimatedMinutes: 15 },
  { id: 8, slug: "akkusativ", title: "Akkusativ", subtitle: "Accusative case & direct object", type: "grammar", level: "A1.2", xp: 70, estimatedMinutes: 20 },
  { id: 9, slug: "essen-trinken", title: "Essen & Trinken", subtitle: "Food, ordering & shopping", type: "vocab", level: "A1.2", xp: 70, estimatedMinutes: 15 },
  { id: 10, slug: "modal-verben", title: "Modal Verben", subtitle: "können, müssen, wollen", type: "grammar", level: "A1.2", xp: 70, estimatedMinutes: 20 },
  { id: 11, slug: "in-der-stadt", title: "In der Stadt", subtitle: "Directions, transport & places", type: "vocab", level: "A1.2", xp: 70, estimatedMinutes: 15 },
  { id: 12, slug: "a1-review", title: "A1 Review", subtitle: "Full skill sweep", type: "review", level: "A1.2", xp: 100, estimatedMinutes: 30 },
];

export function getStartUnit(level: "A1.1" | "A1.2"): number {
  if (level === "A1.1") return 1;
  return 7;
}
