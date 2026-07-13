import { READING_PATHS, THREADS, order } from './data';

const BOOK_ALIASES = [
  [/(\b|^)1\s*kings?\b/g, '1kgs'],
  [/(\b|^)1\s*kgs?\b/g, '1kgs'],
  [/\bjohn\b/g, 'jn'],
  [/\bjn\b/g, 'jn'],
  [/\bgenesis\b/g, 'gen'],
  [/\bgen\b/g, 'gen'],
  [/\bexodus\b/g, 'ex'],
  [/\bex\b/g, 'ex'],
  [/\bleviticus\b/g, 'lev'],
  [/\blev\b/g, 'lev'],
  [/\bnumbers\b/g, 'num'],
  [/\bnum\b/g, 'num'],
  [/\brevelation\b/g, 'rev'],
  [/\brev\b/g, 'rev'],
  [/\bephesians\b/g, 'eph'],
  [/\beph\b/g, 'eph'],
  [/\bhebrews\b/g, 'heb'],
  [/\bheb\b/g, 'heb'],
  [/\bromans\b/g, 'rom'],
  [/\brom\b/g, 'rom'],
  [/\bcorinthians\b/g, 'cor'],
  [/\bcor\b/g, 'cor'],
  [/\bpeter\b/g, 'pet'],
  [/\bpet\b/g, 'pet'],
  [/\bsamuel\b/g, 'sam'],
  [/\bsam\b/g, 'sam'],
  [/\bchronicles\b/g, 'chr'],
  [/\bchr\b/g, 'chr'],
  [/\bdeuteronomy\b/g, 'deut'],
  [/\bdeut\b/g, 'deut'],
  [/\bmatthew\b/g, 'matt'],
  [/\bmatt\b/g, 'matt'],
  [/\bluke\b/g, 'lk'],
  [/\blk\b/g, 'lk'],
  [/\bcolossians\b/g, 'col'],
  [/\bcol\b/g, 'col'],
  [/\bisaiah\b/g, 'isa'],
  [/\bisa\b/g, 'isa'],
  [/\bzechariah\b/g, 'zech'],
  [/\bzech\b/g, 'zech'],
  [/\bmalachi\b/g, 'mal'],
  [/\bmal\b/g, 'mal'],
  [/\bezekiel\b/g, 'ezek'],
  [/\bezek\b/g, 'ezek'],
  [/\bjeremiah\b/g, 'jer'],
  [/\bjer\b/g, 'jer'],
  [/\bgalatians\b/g, 'gal'],
  [/\bgal\b/g, 'gal'],
  [/\bacts\b/g, 'acts'],
  [/\bpsalms?\b/g, 'ps'],
  [/\bps\b/g, 'ps'],
];

function joinParts(parts) {
  return parts.filter(Boolean).join(' ');
}

function relatedText(related = []) {
  return related.map(r => joinParts([r.ref, r.note])).join(' ');
}

function normalizeBookAliases(value) {
  let normalized = (value || '').toLowerCase();
  BOOK_ALIASES.forEach(([pattern, replacement]) => {
    normalized = normalized.replace(pattern, replacement);
  });
  return normalized;
}

function compactReference(value) {
  return normalizeBookAliases(value)
    .replace(/[–—-]/g, '-')
    .replace(/[^a-z0-9]/g, '');
}

export function buildSearchIndex() {
  const rows = [];

  for (const id of order) {
    const t = THREADS[id];

    rows.push({
      kind: 'Thread',
      title: t.name,
      meta: t.outcome,
      snippet: t.outcome,
      id,
      idx: 0,
      text: joinParts([t.name, t.outcome, t.intro])
    });

    t.segments.forEach((seg, idx) => {
      rows.push({
        kind: 'Segment',
        title: seg.title,
        meta: `${t.name} • ${seg.label}`,
        snippet: (seg.body || []).join(' '),
        id,
        idx,
        text: joinParts([t.name, t.outcome, seg.label, seg.title, (seg.body || []).join(' '), relatedText(seg.related)])
      });

      (seg.verses || []).forEach((v, verseIndex) => {
        rows.push({
          kind: 'Verse',
          title: v.ref,
          meta: `${t.name} • ${seg.label}`,
          snippet: v.text,
          id,
          idx,
          verseIndex,
          verseRef: v.ref,
          refKey: compactReference(v.ref),
          text: joinParts([t.name, t.outcome, seg.label, seg.title, v.ref, v.text, v.why, v.soWhat, relatedText(v.related)])
        });

        (v.related || []).forEach(r => {
          rows.push({
            kind: 'Related Reference',
            title: r.ref,
            meta: `${t.name} • ${seg.label} • Related to ${v.ref}`,
            snippet: r.note,
            id,
            idx,
            verseIndex,
            verseRef: v.ref,
            refKey: compactReference(r.ref),
            text: joinParts([t.name, seg.label, seg.title, v.ref, r.ref, r.note])
          });
        });
      });

      (seg.supportingVerses || []).forEach((supportingVerse, supportingIndex) => {
        rows.push({
          kind: 'Supporting Scripture',
          title: supportingVerse.ref,
          meta: `${t.name} • ${seg.label}`,
          snippet: supportingVerse.note,
          id,
          idx,
          supportingIndex,
          verseRef: supportingVerse.ref,
          refKey: compactReference(supportingVerse.ref),
          text: joinParts([t.name, t.outcome, seg.label, seg.title, supportingVerse.ref, supportingVerse.note])
        });
      });

      (seg.concepts || []).forEach(c => {
        rows.push({
          kind: 'Concept',
          title: c.name,
          meta: `${t.name} • ${seg.label}`,
          snippet: c.description || '',
          id,
          idx,
          text: joinParts([t.name, seg.label, seg.title, c.name, c.description])
        });
      });

      (seg.related || []).forEach(r => {
        rows.push({
          kind: 'Related Reference',
          title: r.ref,
          meta: `${t.name} • ${seg.label}`,
          snippet: r.note,
          id,
          idx,
          refKey: compactReference(r.ref),
          text: joinParts([t.name, seg.label, seg.title, r.ref, r.note])
        });
      });
    });
    const pathGroups = READING_PATHS[id];

    if (pathGroups) {
      Object.entries(pathGroups).forEach(([pathIdx, pathGroup]) => {
        if (Array.isArray(pathGroup)) {
          pathGroup.forEach(reading => {
            rows.push({
              kind: 'Reading',
              title: reading.ref,
              meta: `${t.name} • Reading Path`,
              snippet: reading.note,
              id,
              idx: Number(pathIdx) || 0,
              refKey: compactReference(reading.ref),
              text: joinParts([t.name, reading.ref, reading.note]),
            });
          });
        }
      });
    }
  }
  return rows;
}

export function normalizeSearchText(value) {
  return normalizeBookAliases(value)
    .replace(/[.:;,()[\]{}]/g, ' ')
    .replace(/[–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function score(item, q) {
  const parts = normalizeSearchText(q).split(/\s+/).filter(Boolean);
  const title = normalizeSearchText(item.title);
  const meta = normalizeSearchText(item.meta);
  const text = normalizeSearchText(item.text);
  const queryRef = compactReference(q);

  let s = 0;

  if (item.refKey && queryRef) {
    if (item.refKey === queryRef) s += 1000;
    else if (item.refKey.startsWith(queryRef)) s += 650;
    else if (item.refKey.includes(queryRef)) s += 250;
  }

  for (const p of parts) {
    const matched = title.includes(p) || meta.includes(p) || text.includes(p);
    const refMatched = item.refKey && item.refKey.includes(p.replace(/[^a-z0-9]/g, ''));
    if (!matched && !refMatched) return 0;

    if (title.includes(p)) s += 8;
    if (meta.includes(p)) s += 4;
    if (text.includes(p)) s += 1;
    if (refMatched) s += 20;
  }

  if (item.kind === 'Verse') s += 5;
  if (item.kind === 'Supporting Scripture') s += 4;
  return s;
}

export function search(index, q) {
  return q.trim()
    ? index
      .map(item => ({ item, score: score(item, q) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map(x => x.item)
    : [];
}

export function highlightTerms(q) {
  const terms = normalizeSearchText(q).split(/\s+/).filter(Boolean);
  const expanded = new Set(terms);

  terms.forEach(term => {
    if (term === 'jn') expanded.add('john');
    if (term === 'john') expanded.add('jn');
    if (term === '1kgs') {
      expanded.add('1 kgs');
      expanded.add('1 kings');
      expanded.add('kings');
      expanded.add('kgs');
    }
  });

  return [...expanded].filter(term => term.length > 1);
}
