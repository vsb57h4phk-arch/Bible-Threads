import { THREADS, order, stripThreadName } from './data';

export const GRAPH_LENSES = [
  { id: 'Truth → Practice', short: 'Truth', color: '#2563A6', symbol: 'T' },
  { id: 'Identity → Action', short: 'Identity', color: '#7556A3', symbol: 'I' },
  { id: 'Promise → Fulfillment', short: 'Promise', color: '#B56720', symbol: 'P' },
  { id: 'Shadow → Reality', short: 'Shadow', color: '#147D78', symbol: 'S' },
  { id: 'Grace → Authority', short: 'Grace', color: '#A34141', symbol: 'G' },
  { id: 'Rescue → Mission', short: 'Rescue', color: '#A33F78', symbol: 'R' },
  { id: 'Presence → Transformation', short: 'Presence', color: '#47752E', symbol: 'P' },
];

export const GRAPH_PHASES = {
  foundation: { label: 'Old Testament foundation', color: '#F5F0E7' },
  fulfillment: { label: 'Christ-centered fulfillment', color: '#EAF1F7' },
  application: { label: 'New Testament application', color: '#EEF4EA' },
  consummation: { label: 'Final consummation', color: '#F3ECF5' },
};

const BOOKS = [
  ['gen', 'Genesis'], ['ex', 'Exodus'], ['lev', 'Leviticus'], ['num', 'Numbers'], ['deut', 'Deuteronomy'],
  ['josh', 'Joshua'], ['judg', 'Judges'], ['ruth', 'Ruth'], ['1sam', '1 Samuel'], ['2sam', '2 Samuel'],
  ['1kgs', '1 Kings'], ['2kgs', '2 Kings'], ['1chr', '1 Chronicles'], ['2chr', '2 Chronicles'], ['ezra', 'Ezra'],
  ['neh', 'Nehemiah'], ['esth', 'Esther'], ['job', 'Job'], ['ps', 'Psalms'], ['prov', 'Proverbs'],
  ['eccl', 'Ecclesiastes'], ['song', 'Song of Songs'], ['isa', 'Isaiah'], ['jer', 'Jeremiah'], ['lam', 'Lamentations'],
  ['ezek', 'Ezekiel'], ['dan', 'Daniel'], ['hos', 'Hosea'], ['joel', 'Joel'], ['amos', 'Amos'],
  ['obad', 'Obadiah'], ['jonah', 'Jonah'], ['mic', 'Micah'], ['nah', 'Nahum'], ['hab', 'Habakkuk'],
  ['zeph', 'Zephaniah'], ['hag', 'Haggai'], ['zech', 'Zechariah'], ['mal', 'Malachi'], ['matt', 'Matthew'],
  ['mark', 'Mark'], ['luke', 'Luke'], ['john', 'John'], ['acts', 'Acts'], ['rom', 'Romans'],
  ['1cor', '1 Corinthians'], ['2cor', '2 Corinthians'], ['gal', 'Galatians'], ['eph', 'Ephesians'], ['phil', 'Philippians'],
  ['col', 'Colossians'], ['1thess', '1 Thessalonians'], ['2thess', '2 Thessalonians'], ['1tim', '1 Timothy'], ['2tim', '2 Timothy'],
  ['titus', 'Titus'], ['phlm', 'Philemon'], ['heb', 'Hebrews'], ['james', 'James'], ['1pet', '1 Peter'],
  ['2pet', '2 Peter'], ['1john', '1 John'], ['2john', '2 John'], ['3john', '3 John'], ['jude', 'Jude'],
  ['rev', 'Revelation'],
];

const BOOK_INDEX = Object.fromEntries(BOOKS.map(([key], index) => [key, index]));
const BOOK_LABEL = Object.fromEntries(BOOKS);
const BOOK_ALIASES = {
  ge: 'gen', gen: 'gen', genesis: 'gen', ex: 'ex', exod: 'ex', exodus: 'ex', lev: 'lev', num: 'num',
  deut: 'deut', josh: 'josh', judg: 'judg', ruth: 'ruth', '1sam': '1sam', '2sam': '2sam',
  '1kgs': '1kgs', '2kgs': '2kgs', '1kings': '1kgs', '2kings': '2kgs', '1chr': '1chr', '2chr': '2chr',
  ezra: 'ezra', neh: 'neh', esth: 'esth', job: 'job', ps: 'ps', psa: 'ps', prov: 'prov', eccl: 'eccl',
  song: 'song', isa: 'isa', jer: 'jer', lam: 'lam', ezek: 'ezek', dan: 'dan', hos: 'hos', joel: 'joel',
  amos: 'amos', obad: 'obad', jonah: 'jonah', mic: 'mic', nah: 'nah', hab: 'hab', zeph: 'zeph',
  hag: 'hag', zech: 'zech', mal: 'mal', matt: 'matt', mark: 'mark', luke: 'luke', lk: 'luke',
  john: 'john', jn: 'john', acts: 'acts', rom: 'rom', '1cor': '1cor', '2cor': '2cor', gal: 'gal',
  eph: 'eph', phil: 'phil', col: 'col', '1thess': '1thess', '2thess': '2thess', '1tim': '1tim',
  '2tim': '2tim', titus: 'titus', phlm: 'phlm', heb: 'heb', james: 'james', '1pet': '1pet',
  '2pet': '2pet', '1john': '1john', '2john': '2john', '3john': '3john', jude: 'jude', rev: 'rev',
};

export const GRAPH_ERAS = [
  { id: 'beginnings', label: 'Beginnings', books: 'Genesis 1–11', covenant: 'Creation & Noah', phase: 'foundation' },
  { id: 'patriarchs', label: 'Patriarchs', books: 'Genesis 12–50', covenant: 'Abrahamic promise', phase: 'foundation' },
  { id: 'exodus', label: 'Exodus & Wilderness', books: 'Exodus–Deuteronomy', covenant: 'Mosaic covenant', phase: 'foundation' },
  { id: 'kingdom', label: 'Land & Kingdom', books: 'Joshua–Esther', covenant: 'Davidic covenant', phase: 'foundation' },
  { id: 'wisdom', label: 'Wisdom & Worship', books: 'Job–Song of Songs', covenant: 'Life with God', phase: 'foundation' },
  { id: 'prophets', label: 'Prophets & Exile', books: 'Isaiah–Malachi', covenant: 'New covenant promised', phase: 'foundation' },
  { id: 'gospels', label: 'Christ & the Gospels', books: 'Matthew–John', covenant: 'New covenant fulfilled', phase: 'fulfillment' },
  { id: 'church', label: 'Church & Mission', books: 'Acts–Jude', covenant: 'Spirit-formed people', phase: 'application' },
  { id: 'restoration', label: 'Final Restoration', books: 'Revelation', covenant: 'All things made new', phase: 'consummation' },
];

function cleanBook(value = '') {
  return value.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
}

export function parseScriptureReference(ref = '') {
  const match = ref.match(/^\s*((?:[123]\s*)?[A-Za-z.]+)\s+(\d+):(\d+)/);
  if (!match) return null;
  const book = BOOK_ALIASES[cleanBook(match[1])];
  if (!book || BOOK_INDEX[book] === undefined) return null;
  return { book, bookLabel: BOOK_LABEL[book], bookIndex: BOOK_INDEX[book], chapter: Number(match[2]), verse: Number(match[3]) };
}

function eraFor(parsed) {
  if (parsed.book === 'gen') return parsed.chapter <= 11 ? 'beginnings' : 'patriarchs';
  const index = BOOK_INDEX[parsed.book];
  if (index <= BOOK_INDEX.deut) return 'exodus';
  if (index <= BOOK_INDEX.esth) return 'kingdom';
  if (index <= BOOK_INDEX.song) return 'wisdom';
  if (index <= BOOK_INDEX.mal) return 'prophets';
  if (index <= BOOK_INDEX.john) return 'gospels';
  if (index <= BOOK_INDEX.jude) return 'church';
  return 'restoration';
}

export function scriptureEraId(ref = '') {
  const parsed = parseScriptureReference(ref);
  return parsed ? eraFor(parsed) : null;
}

export function scriptureSortValue(ref = '') {
  const parsed = parseScriptureReference(ref);
  return parsed ? parsed.bookIndex * 1000000 + parsed.chapter * 1000 + parsed.verse : Number.MAX_SAFE_INTEGER;
}

function stationKey(parsed) {
  // Group overlapping ranges by their starting verse so repeated anchor passages become interchanges.
  return `${parsed.book}:${parsed.chapter}:${parsed.verse}`;
}

export function buildScriptureGraph() {
  const stationMap = new Map();
  const validLensIds = new Set(GRAPH_LENSES.map(lens => lens.id));

  order.forEach(id => {
    const thread = THREADS[id];
    thread.segments.forEach((segment, idx) => {
      (segment.verses || []).forEach((verse, verseIndex) => {
        const parsed = parseScriptureReference(verse.ref);
        if (!parsed) return;
        const lensId = validLensIds.has(verse.tag) ? verse.tag : segment.tag;
        if (!validLensIds.has(lensId)) return;
        const key = stationKey(parsed);
        if (!stationMap.has(key)) {
          stationMap.set(key, {
            key,
            ref: verse.ref,
            parsed,
            eraId: eraFor(parsed),
            occurrences: [],
          });
        }
        stationMap.get(key).occurrences.push({
          id,
          idx,
          verseIndex,
          verseRef: verse.ref,
          lensId,
          threadName: stripThreadName(thread.name),
          segmentLabel: segment.label,
          segmentTitle: segment.title,
        });
      });
    });
  });

  const stations = [...stationMap.values()].sort((a, b) =>
    BOOK_INDEX[a.parsed.book] - BOOK_INDEX[b.parsed.book]
      || a.parsed.chapter - b.parsed.chapter
      || a.parsed.verse - b.parsed.verse
  );

  stations.forEach(station => {
    station.lensIds = [...new Set(station.occurrences.map(item => item.lensId))];
    station.sourceIds = [...new Set(station.occurrences.map(item => item.id))];
    station.isInterchange = station.lensIds.length > 1 || station.sourceIds.length > 1;
  });

  return stations;
}

export function groupStationOccurrences(station, lensId) {
  return station.occurrences.filter(item => item.lensId === lensId);
}
