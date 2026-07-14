import { THREADS, icon, order, stripThreadName, subtitle, themeColor } from './data';
import { parseScriptureReference, scriptureEraId, scriptureSortValue } from './scriptureGraph';

const SHORT_NAMES = {
  temple: 'Temple',
  priesthood: 'Priesthood',
  image: 'Image & Sonship',
  covenant: 'Covenant',
  exodus: 'Exodus',
  reign: 'Reign',
  creation: 'New Creation',
};

export const ATLAS_THREADS = order.map(id => ({
  id,
  name: stripThreadName(THREADS[id].name),
  short: SHORT_NAMES[id] || stripThreadName(THREADS[id].name),
  color: themeColor(id),
  icon: icon(id),
  subtitle: subtitle(id),
}));

function stationKey(ref) {
  const parsed = parseScriptureReference(ref);
  return parsed ? `${parsed.book}:${parsed.chapter}:${parsed.verse}` : ref;
}

export function buildThreadAtlas() {
  const stationMap = new Map();

  ATLAS_THREADS.forEach(track => {
    const thread = THREADS[track.id];
    thread.segments.forEach((segment, idx) => {
      const primaryVerse = (segment.verses || [])[0];
      if (!primaryVerse) return;
      const key = stationKey(primaryVerse.ref);
      if (!stationMap.has(key)) {
        stationMap.set(key, {
          key,
          ref: primaryVerse.ref,
          eraId: scriptureEraId(primaryVerse.ref),
          sortValue: scriptureSortValue(primaryVerse.ref),
          occurrences: [],
        });
      }
      stationMap.get(key).occurrences.push({
        threadId: track.id,
        threadName: track.name,
        idx,
        verseRef: primaryVerse.ref,
        segmentLabel: segment.label,
        segmentTitle: segment.title,
        supportingVerses: segment.supportingVerses || [],
      });
    });
  });

  return [...stationMap.values()]
    .sort((a, b) => a.sortValue - b.sortValue)
    .map(station => ({
      ...station,
      threadIds: [...new Set(station.occurrences.map(item => item.threadId))],
      isInterchange: new Set(station.occurrences.map(item => item.threadId)).size > 1,
    }));
}

export function getThreadMilestone(station, threadId) {
  return station.occurrences.find(item => item.threadId === threadId) || null;
}
