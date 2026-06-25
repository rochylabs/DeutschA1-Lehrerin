# Curriculum Alignment — Goethe-Institut & telc Deutsch

This document is the source of truth for what belongs in A1 and A2. All lesson additions, removals, or reordering must be checked against this reference before merging.

---

## A1 — Goethe-Zertifikat A1 / telc Deutsch A1

**Can-do statements (CEFR A1):**
- Introduce themselves and others
- Ask and answer simple questions about personal details
- Interact simply if the other person speaks slowly and clearly

### Required topics

| # | Topic | Grammar / Vocab | Our unit slug |
|---|-------|----------------|---------------|
| 1 | Greetings & introductions | Hallo, Guten Tag, Wie heißen Sie?, Ich bin… | `guten-tag` |
| 2 | sein & haben | Personal pronouns, conjugation | `ich-bin` |
| 3 | Family & relationships | Mutter, Vater, Geschwister, verheiratet | `meine-familie` |
| 4 | Articles & nouns | der/die/das, Nominative case | `artikel-nomen` |
| 5 | Negation & possessives | nicht vs kein, mein/dein/sein/ihr | `negation-possessiv` ✅ |
| 6 | Home & living | Wohnung, Zimmer, furniture | `wohnen` |
| 7 | Everyday verbs | Regular present tense -e/-st/-t/-en | `alltagsverben` |
| 8 | Numbers, days & time | 1–100, Wochentage, Wie spät ist es? | `zahlen-zeit` |
| 9 | Accusative case | den/einen, direct object | `akkusativ` |
| 10 | Food & ordering | Café/restaurant phrases, Ich möchte… | `essen-trinken` |
| 11 | Modal verbs | können, müssen, wollen | `modal-verben` |
| 12 | Directions & places | links/rechts/geradeaus, city places | `in-der-stadt` |
| 13 | A1 Review | Full sweep | `a1-review` |

### A1 gaps to watch
- Word order (verb-second, inversion after adverbs) — woven into units, not standalone
- Countries & nationalities — covered in `guten-tag`
- Spelling / alphabet — covered in `guten-tag` intro

---

## A2 — Goethe-Zertifikat A2 / telc Deutsch A2

**Can-do statements (CEFR A2):**
- Communicate in simple, routine tasks on familiar topics
- Describe background, immediate environment, and matters of immediate need

### Required topics

| # | Topic | Grammar / Vocab | Our unit slug |
|---|-------|----------------|---------------|
| 14 | Dative case | dem/der, indirect objects, mit/zu/bei/von/aus/nach/seit | `dativ` |
| 15 | Simple past (Präteritum) | war, hatte, ging, kam — narrative past | `praeteritum` |
| 16 | Perfect tense (Perfekt) | haben/sein + Partizip II, regular & irregular | `perfekt` |
| 17 | Separable verbs | aufstehen, anrufen, einkaufen, anfangen | `trennbare-verben` |
| 18 | Reflexive verbs | sich waschen, sich freuen, sich vorstellen | `reflexive-verben` ✅ |
| 19 | Subordinate clauses | weil, dass, wenn, obwohl — verb to end | `nebensaetze` ✅ |
| 20 | Apartment hunting | Miete, Kaution, WG, Mietvertrag | `wohnung-suchen` |
| 21 | Jobs & work | Berufe, Vorstellungsgespräch, Lebenslauf | `berufe-arbeit` |
| 22 | Health | Body parts, symptoms, doctor/pharmacy | `gesundheit` |
| 23 | Travel | buchen, Verspätung, Hotel, asking for help | `reisen` |
| 24 | Two-way prepositions | an/auf/in/vor/hinter + Akk (Wohin?) vs Dat (Wo?) | `wechselpraepositionen` ✅ |
| 25 | Free time & hobbies | Sports, culture, Hast du Lust…? | `freizeit` |
| 26 | Konjunktiv II | würde + inf, könnte/müsste/sollte, polite requests | `konjunktiv-ii` |
| 27 | Relative clauses | der/die/das as relative pronouns, verb to end | `relativsaetze` |
| 28 | A2 Review | Full sweep | `a2-review` |

### A2 gaps to watch
- Comparative & superlative (größer, am größten) — not yet a unit; add before A2 review if scope allows
- Genitive case (des/der) — appears at A2/B1 boundary; defer to B1
- Infinitive clauses with `zu` (Ich versuche, Deutsch zu lernen) — A2/B1 boundary

---

## Rules for future curriculum changes

1. **Check the table above first.** If a topic isn't listed, verify it appears in the official Goethe or telc syllabus before adding a unit.
2. **Level assignment:** Use the CEFR descriptor, not intuition. Konjunktiv II is listed here at A2 for practical use but is technically introduced at B1 in Goethe — label it clearly.
3. **Unit IDs are sequential.** Adding a unit mid-curriculum requires renumbering. Update `lib/units.ts`, `app/learn/[unit]/page.tsx` (VALID_SLUGS), and `data/assessment.ts` (getStartUnit).
4. **No unit without a lesson file.** Every slug in `lib/units.ts` must have a matching file in `data/lessons/`.
5. **Lesson file structure is fixed:** intro → 10 flashcards → 4 fill-blank → 3 quiz. See `data/types.ts`.
