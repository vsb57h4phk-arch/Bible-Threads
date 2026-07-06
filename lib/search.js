import { READING_PATHS, THREADS, order } from './data';

export function buildSearchIndex() {
  const rows = [];

  for (const id of order) {
    const t = THREADS[id];

    rows.push({ kind: 'Thread', title: t.name, meta: t.outcome, id, idx: 0, text: `${t.name} ${t.outcome}` });

    t.segments.forEach((seg, idx) => {
      rows.push({ kind: 'Segment', title: seg.title, meta: `${t.name} • ${seg.label}`, id, idx, text: `${seg.title} ${seg.summary || ''}` });

      (seg.verses || []).forEach(v => {
        rows.push({ kind: 'Verse', title: v.ref, meta: `${t.name} • ${seg.label}`, id, idx, text: `${v.ref} ${v.note || ''}` });
      });

      (seg.concepts || []).forEach(c => {
        rows.push({
          kind: 'Concept',
          title: c.name,
          meta: `${t.name} • ${seg.label}`,
          id,
          idx,
          text: `${c.name} ${c.description || ''}`
        });
      });
    });
    const pathGroups = READING_PATHS[id];

    if (pathGroups) {
      Object.values(pathGroups).forEach(pathGroup => {
        if (Array.isArray(pathGroup)) {
          pathGroup.forEach(reading => {
            rows.push({
              kind: 'Reading',
              title: reading.ref,
              meta: `${t.name} • Reading Path`,
              id,
              idx: 0,
              text: `${reading.ref} ${reading.note || ''}`,
            });
          });
        }
      });
    }
  }
  return rows;
}

export function normalizeSearchText(value) {
  return (value || '')
    .toLowerCase()
    .replace(/\bgenesis\b/g, 'gen')
    .replace(/\bexodus\b/g, 'ex')
    .replace(/\brevelation\b/g, 'rev')
    .replace(/\bephesians\b/g, 'eph')
    .replace(/\./g, '');
}

export function score(item, q) {
  const parts = normalizeSearchText(q).split(/\s+/).filter(Boolean);
  const title = normalizeSearchText(item.title);
  const meta = normalizeSearchText(item.meta);
  const text = normalizeSearchText(item.text);

  let s = 0;

  for (const p of parts) {
    const matched = title.includes(p) || meta.includes(p) || text.includes(p);
    if (!matched) return 0;

    if (title.includes(p)) s += 8;
    if (meta.includes(p)) s += 4;
    if (text.includes(p)) s += 1;
  }

  return s;
}
