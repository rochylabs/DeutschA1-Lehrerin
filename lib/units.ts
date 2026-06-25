export type UnitType = "vocab" | "grammar" | "practice" | "review";

export type Level = "A1.1" | "A1.2" | "A2.1" | "A2.2";

export interface Unit {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  type: UnitType;
  level: Level;
  xp: number;
  estimatedMinutes: number;
}

// Curriculum aligned with Goethe-Zertifikat A1/A2 and telc Deutsch A1/A2.
// See docs/curriculum.md before making changes.
export const UNITS: Unit[] = [
  // A1.1 (units 1–7)
  { id: 1,  slug: "guten-tag",           title: "Guten Tag!",              subtitle: "Greetings & introductions",       type: "vocab",   level: "A1.1", xp: 50,  estimatedMinutes: 15 },
  { id: 2,  slug: "ich-bin",             title: "Ich bin…",                subtitle: "sein & haben, pronouns",          type: "grammar", level: "A1.1", xp: 50,  estimatedMinutes: 20 },
  { id: 3,  slug: "meine-familie",       title: "Meine Familie",           subtitle: "Family & relationships",          type: "vocab",   level: "A1.1", xp: 50,  estimatedMinutes: 15 },
  { id: 4,  slug: "artikel-nomen",       title: "Artikel & Nomen",         subtitle: "der / die / das, Nominative",     type: "grammar", level: "A1.1", xp: 60,  estimatedMinutes: 20 },
  { id: 5,  slug: "negation-possessiv",  title: "Negation & Possessiv",    subtitle: "nicht / kein, mein / dein / sein", type: "grammar", level: "A1.1", xp: 60,  estimatedMinutes: 20 },
  { id: 6,  slug: "wohnen",             title: "Wohnen",                  subtitle: "Home, rooms & furniture",         type: "vocab",   level: "A1.1", xp: 60,  estimatedMinutes: 15 },
  { id: 7,  slug: "alltagsverben",       title: "Alltagsverben",           subtitle: "Regular verbs, present tense",    type: "grammar", level: "A1.1", xp: 60,  estimatedMinutes: 20 },
  // A1.2 (units 8–13)
  { id: 8,  slug: "zahlen-zeit",         title: "Zahlen & Zeit",           subtitle: "Numbers, days & clock",           type: "vocab",   level: "A1.2", xp: 60,  estimatedMinutes: 15 },
  { id: 9,  slug: "akkusativ",           title: "Akkusativ",               subtitle: "Accusative case & direct object", type: "grammar", level: "A1.2", xp: 70,  estimatedMinutes: 20 },
  { id: 10, slug: "essen-trinken",       title: "Essen & Trinken",         subtitle: "Food, ordering & shopping",       type: "vocab",   level: "A1.2", xp: 70,  estimatedMinutes: 15 },
  { id: 11, slug: "modal-verben",        title: "Modal Verben",            subtitle: "können, müssen, wollen",          type: "grammar", level: "A1.2", xp: 70,  estimatedMinutes: 20 },
  { id: 12, slug: "in-der-stadt",        title: "In der Stadt",            subtitle: "Directions, transport & places",  type: "vocab",   level: "A1.2", xp: 70,  estimatedMinutes: 15 },
  { id: 13, slug: "a1-review",           title: "A1 Review",               subtitle: "Full A1 skill sweep",             type: "review",  level: "A1.2", xp: 100, estimatedMinutes: 30 },
  // A2.1 (units 14–20)
  { id: 14, slug: "dativ",              title: "Dativ",                   subtitle: "Dative case & prepositions",      type: "grammar", level: "A2.1", xp: 80,  estimatedMinutes: 20 },
  { id: 15, slug: "praeteritum",         title: "Präteritum",              subtitle: "Simple past tense",               type: "grammar", level: "A2.1", xp: 80,  estimatedMinutes: 20 },
  { id: 16, slug: "perfekt",             title: "Perfekt",                 subtitle: "Perfect tense with haben & sein", type: "grammar", level: "A2.1", xp: 80,  estimatedMinutes: 20 },
  { id: 17, slug: "trennbare-verben",    title: "Trennbare Verben",        subtitle: "Separable verbs",                 type: "grammar", level: "A2.1", xp: 80,  estimatedMinutes: 20 },
  { id: 18, slug: "reflexive-verben",    title: "Reflexive Verben",        subtitle: "Reflexive pronouns & daily routine", type: "grammar", level: "A2.1", xp: 80, estimatedMinutes: 20 },
  { id: 19, slug: "nebensaetze",         title: "Nebensätze",              subtitle: "weil / dass / wenn / obwohl",     type: "grammar", level: "A2.1", xp: 80,  estimatedMinutes: 20 },
  { id: 20, slug: "wohnung-suchen",      title: "Wohnung suchen",          subtitle: "Apartment hunting",               type: "vocab",   level: "A2.1", xp: 80,  estimatedMinutes: 15 },
  // A2.2 (units 21–28)
  { id: 21, slug: "berufe-arbeit",       title: "Berufe & Arbeit",         subtitle: "Jobs & workplace",                type: "vocab",   level: "A2.2", xp: 90,  estimatedMinutes: 15 },
  { id: 22, slug: "gesundheit",          title: "Gesundheit",              subtitle: "Health & doctor visits",          type: "vocab",   level: "A2.2", xp: 90,  estimatedMinutes: 15 },
  { id: 23, slug: "reisen",              title: "Reisen",                  subtitle: "Travel & booking",                type: "vocab",   level: "A2.2", xp: 90,  estimatedMinutes: 15 },
  { id: 24, slug: "wechselpraepositionen", title: "Wechselpräpositionen",  subtitle: "Two-way prepositions Akk vs Dat", type: "grammar", level: "A2.2", xp: 90,  estimatedMinutes: 20 },
  { id: 25, slug: "freizeit",            title: "Freizeit",                subtitle: "Hobbies & making plans",          type: "vocab",   level: "A2.2", xp: 90,  estimatedMinutes: 15 },
  { id: 26, slug: "konjunktiv-ii",       title: "Konjunktiv II",           subtitle: "Polite requests & wishes",        type: "grammar", level: "A2.2", xp: 90,  estimatedMinutes: 20 },
  { id: 27, slug: "relativsaetze",       title: "Relativsätze",            subtitle: "Relative clauses",                type: "grammar", level: "A2.2", xp: 90,  estimatedMinutes: 20 },
  { id: 28, slug: "a2-review",           title: "A2 Review",               subtitle: "Full A2 skill sweep",             type: "review",  level: "A2.2", xp: 120, estimatedMinutes: 30 },
];

export function getStartUnit(level: Level): number {
  if (level === "A1.1") return 1;
  if (level === "A1.2") return 8;
  if (level === "A2.1") return 14;
  return 21;
}
