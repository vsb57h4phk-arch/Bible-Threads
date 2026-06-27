import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput, StyleSheet, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import data from './src/data.json';

const THREADS = data.THREADS || {};
const TAGS = data.TAGS || {};
const READING_PATHS = data.READING_PATHS || {};
const STUDY_PROMPTS = data.STUDY_PROMPTS || {};
const THREAD_IDENTITY = data.THREAD_IDENTITY || {};
const order = ['temple', 'priesthood', 'image', 'covenant', 'exodus', 'reign', 'creation'].filter(id => THREADS[id]);

function stripThreadName(name='') { return name.replace(' Thread',''); }
function themeColor(id) { return THREAD_IDENTITY[id]?.color || '#2b2b2b'; }
function icon(id) { return THREAD_IDENTITY[id]?.icon || '•'; }
function subtitle(id) { return THREAD_IDENTITY[id]?.subtitle || ''; }
function getPrompts(id, idx) {
  return STUDY_PROMPTS[id]?.[idx] || [
    'What does this movement reveal about God’s character or purpose?',
    'What tension or problem is becoming clearer here?',
    'How does this movement prepare for what comes next in the thread?'
  ];
}
function getReadings(id, idx) { return READING_PATHS[id]?.[idx] || []; }

function Header({ title, subtitleText, onBack, right }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        {onBack ? <TouchableOpacity onPress={onBack} style={styles.backBtn}><Text style={styles.backText}>‹ Back</Text></TouchableOpacity> : <Text style={styles.version}>v1 App</Text>}
        {right || null}
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitleText ? <Text style={styles.headerSub}>{subtitleText}</Text> : null}
    </View>
  );
}

function Pill({ children, color }) {
  return <View style={[styles.pill, color ? { borderColor: color + '66' } : null]}><Text style={styles.pillText}>{children}</Text></View>;
}

function Home({ goOverview, goThread, goSearch }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Bible Threads"
        subtitleText="A real app shell for the thread-first biblical theology database."
        right={<TouchableOpacity onPress={goSearch} style={styles.searchTop}><Text style={styles.searchTopText}>Search</Text></TouchableOpacity>}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Native app version</Text>
          <Text style={styles.noticeText}>No browser wrapper. No horizontal desktop interface. This is rebuilt for phone taps, scrolling, and reading.</Text>
        </View>
        {order.map(id => {
          const t = THREADS[id];
          const color = themeColor(id);
          return (
            <View key={id} style={[styles.threadCard, { borderTopColor: color }]}>
              <View style={styles.cardTitleRow}>
                <View style={[styles.badge, { borderColor: color + '77', backgroundColor: '#fff' }]}><Text style={styles.badgeText}>{icon(id)}</Text></View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{t.name}</Text>
                  <Text style={styles.cardSub}>{subtitle(id)}</Text>
                </View>
              </View>
              <Text style={styles.cardDesc}>{t.outcome}</Text>
              <View style={styles.actionRow}>
                <TouchableOpacity onPress={() => goThread(id, 0)} style={[styles.primary, { backgroundColor: '#2b2b2b' }]}><Text style={styles.primaryText}>Enter</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => goOverview(id)} style={styles.secondary}><Text style={styles.secondaryText}>Overview</Text></TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

function Overview({ id, goHome, goThread }) {
  const t = THREADS[id];
  const color = themeColor(id);
  return (
    <SafeAreaView style={styles.safe}>
      <Header title={t.name} subtitleText={subtitle(id)} onBack={goHome} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.panel, { borderTopColor: color }]}>
          <Text style={styles.sectionLabel}>What this thread is doing</Text>
          <Text style={styles.bodyText}>{t.intro}</Text>
        </View>
        <Text style={styles.bigLabel}>Segments</Text>
        {t.segments.map((seg, idx) => (
          <TouchableOpacity key={idx} onPress={() => goThread(id, idx)} style={styles.listItem}>
            <Text style={styles.kicker}>{idx + 1}. {seg.label}</Text>
            <Text style={styles.listTitle}>{seg.title}</Text>
            <Text style={styles.listMeta}>{seg.tag}</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.bigLabel}>Control anchors</Text>
        {(t.anchors || []).map((a, idx) => (
          <View key={idx} style={styles.anchorItem}>
            <Text style={styles.kicker}>{a.ref}</Text>
            <Text style={styles.listMeta}>{a.meta}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function Thread({ id, startIndex, goHome, goOverview }) {
  const t = THREADS[id];
  const [idx, setIdx] = useState(startIndex || 0);
  const seg = t.segments[idx];
  const color = themeColor(id);
  const prev = () => setIdx(Math.max(0, idx - 1));
  const next = () => setIdx(Math.min(t.segments.length - 1, idx + 1));
  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title={stripThreadName(t.name)}
        subtitleText={`${idx + 1} of ${t.segments.length} • ${seg.label}`}
        onBack={goHome}
        right={<TouchableOpacity onPress={() => goOverview(id)} style={styles.searchTop}><Text style={styles.searchTopText}>Overview</Text></TouchableOpacity>}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.segmentNav}>
          {t.segments.map((s, i) => (
            <TouchableOpacity key={i} onPress={() => setIdx(i)} style={[styles.dotButton, i === idx && { backgroundColor: color, borderColor: color }]}>
              <Text style={[styles.dotText, i === idx && { color: '#fff' }]}>{i + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.segmentCard, { borderTopColor: color }]}>
          <View style={styles.cardTitleRow}>
            <Pill color={color}>{seg.tag}</Pill>
          </View>
          <Text style={styles.segmentTitle}>{seg.title}</Text>
          {(seg.body || []).map((p, i) => <Text key={i} style={styles.bodyText}>{p}</Text>)}
        </View>

        <Text style={styles.bigLabel}>Verse anchors</Text>
        {(seg.verses || []).map((v, i) => <Verse key={i} v={v} color={color} />)}

        <Text style={styles.bigLabel}>Study lens</Text>
        <View style={styles.panelSoft}>
          {getPrompts(id, idx).map((p, i) => <Text key={i} style={styles.prompt}>• {typeof p === 'string' ? p : (p.note || p.ref || '')}</Text>)}
        </View>

        {getReadings(id, idx).length > 0 && <Text style={styles.bigLabel}>Read this movement</Text>}
        {getReadings(id, idx).map((r, i) => (
          <View key={i} style={styles.readingItem}>
            <Text style={styles.kicker}>{r.ref}</Text>
            <Text style={styles.listMeta}>{r.note}</Text>
          </View>
        ))}

        {(seg.related || []).length > 0 && <Text style={styles.bigLabel}>Related</Text>}
        {(seg.related || []).map((r, i) => (
          <View key={i} style={styles.anchorItem}>
            <Text style={styles.kicker}>{r.ref}</Text>
            <Text style={styles.listMeta}>{r.note}</Text>
          </View>
        ))}

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={prev} disabled={idx === 0} style={[styles.navBtn, idx === 0 && styles.disabled]}><Text style={styles.navText}>Previous</Text></TouchableOpacity>
          <TouchableOpacity onPress={next} disabled={idx === t.segments.length - 1} style={[styles.navBtn, idx === t.segments.length - 1 && styles.disabled]}><Text style={styles.navText}>Next</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Verse({ v, color }) {
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity onPress={() => setOpen(!open)} style={[styles.verseCard, { borderLeftColor: color }]}>
      <Text style={styles.verseRef}>{v.ref}</Text>
      <Text style={styles.verseText}>{v.text}</Text>
      {open && <View style={styles.expanded}>
        <Text style={styles.expandedText}><Text style={styles.bold}>Why it’s here: </Text>{v.why || '—'}</Text>
        <Text style={styles.expandedText}><Text style={styles.bold}>So what: </Text>{v.soWhat || '—'}</Text>
      </View>}
    </TouchableOpacity>
  );
}

function Search({ goHome, goThread, goVerse }) {
  const [q, setQ] = useState('');
  const index = useMemo(() => {
    const rows = [];
    for (const id of order) {
      const t = THREADS[id];
      rows.push({ kind: 'Thread', title: t.name, meta: t.outcome, id, idx: 0, text: `${t.name} ${t.outcome} ${t.intro}` });
      t.segments.forEach((seg, idx) => {
        rows.push({ kind: 'Segment', title: seg.title, meta: `${t.name} • ${seg.label}`, id, idx, text: `${seg.title} ${seg.label} ${seg.tag} ${(seg.body || []).join(' ')}` });
        (seg.verses || []).forEach(v => rows.push({ kind: 'Verse', title: v.ref, meta: `${t.name} • ${seg.label}`, id, idx, text: `${v.ref} ${v.text} ${v.why} ${v.soWhat}` }));
      });
    }
    return rows;
  }, []);
  const results = q.trim() ? index.map(item => ({ item, score: score(item, q) })).filter(x => x.score > 0).sort((a,b)=>b.score-a.score).slice(0,30).map(x=>x.item) : [];
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Verse Explorer"subtitleText="Search verses, themes, threads, and biblical connections." onBack={goHome} />
      <View style={styles.searchWrap}><TextInput value={q} onChangeText={setQ} placeholder="Search verses, themes, or threads..." autoFocus style={styles.searchInput} /></View>
      <ScrollView contentContainerStyle={styles.content}>
        {results.map((r, i) => (
          <TouchableOpacity key={i} onPress={() => goVerse(r)} style={styles.listItem}>
            <Text style={styles.kicker}>{r.kind}</Text>
            <Text style={styles.listTitle}>{r.title}</Text>
            <Text style={styles.listMeta}>{r.meta}</Text>
          </TouchableOpacity>
        ))}
        {!q.trim() && <Text style={styles.emptyText}>Try Genesis 22, Exodus 12, John 1:14, temple, covenant, or lamb.</Text>}
        {q.trim() && results.length === 0 && <Text style={styles.emptyText}>No matches.</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}
 

function VerseDetail({ verse, goHome, goThread }) {
  if (!verse) return null;

  return (
    <SafeAreaView style={styles.safe}>
      <Header title={verse.title} subtitleText={verse.meta} onBack={goHome} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.kicker}>Verse Detail</Text>
          <Text style={styles.listTitle}>{verse.title}</Text>
          <Text style={styles.listMeta}>{verse.meta}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.kicker}>Why this matters</Text>
          <Text style={styles.expandedText}>
            This verse has been connected to one of the Bible Threads. Open the full thread to explore the larger biblical pattern.
          </Text>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={() => goThread(verse.id, verse.idx)}>
          <Text style={styles.primaryBtnText}>Open Full Thread Segment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
function score(item, q) {
  const parts = q.toLowerCase().split(/\s+/).filter(Boolean);
  const title = (item.title || '').toLowerCase();
  const meta = (item.meta || '').toLowerCase();
  const text = (item.text || '').toLowerCase();
  let s = 0;
  for (const p of parts) {
    if (title.includes(p)) s += 8;
    if (meta.includes(p)) s += 4;
    if (text.includes(p)) s += 1;
  }
  return s;
}

export default function App() {
  const [screen, setScreen] = useState({ name: 'home' });
  const goHome = () => setScreen({ name: 'home' });
  const goOverview = id => setScreen({ name: 'overview', id });
  const goThread = (id, idx=0) => setScreen({ name: 'thread', id, idx });
  const goSearch = () => setScreen({ name: 'search' });
  const goVerse = (verse) => setScreen({ name: 'verse', verse });
  if (screen.name === 'overview') return <Overview id={screen.id} goHome={goHome} goThread={goThread} />;
  if (screen.name === 'thread') return <Thread id={screen.id} startIndex={screen.idx} goHome={goHome} goOverview={goOverview} />;
  if (screen.name === 'search')
    return <Search goHome={goHome} goThread={goThread} goVerse={goVerse} />;
  if (screen.name === 'verse')
    return <VerseDetail verse={screen.verse} goHome={goHome} goThread={goThread} />;
  return <Home goOverview={goOverview} goThread={goThread} goSearch={goSearch} />;
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fbfbfa', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header: { paddingHorizontal: 18, paddingTop: 10, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: '#e8e6e2', backgroundColor: '#fbfbfa' },
  headerTop: { minHeight: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  version: { color: '#6b6b6b', fontSize: 12, fontWeight: '700' },
  backBtn: { paddingVertical: 6, paddingRight: 12 },
  backText: { fontSize: 15, fontWeight: '700', color: '#2b2b2b' },
  headerTitle: { fontSize: 28, lineHeight: 34, fontWeight: '800', color: '#1e1e1e', marginTop: 4 },
  headerSub: { fontSize: 13, color: '#6b6b6b', marginTop: 4, lineHeight: 18 },
  searchTop: { borderWidth: 1, borderColor: '#e1ded8', backgroundColor: '#fff', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 7 },
  searchTopText: { fontSize: 12, fontWeight: '800', color: '#2b2b2b' },
  content: { padding: 16, paddingBottom: 48 },
  notice: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 18, padding: 14, marginBottom: 12 },
  noticeTitle: { fontWeight: '900', fontSize: 13, textTransform: 'uppercase', letterSpacing: .4, color: '#3c3c3c' },
  noticeText: { color: '#6b6b6b', marginTop: 6, lineHeight: 19 },
  threadCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderTopWidth: 4, borderRadius: 20, padding: 15, marginBottom: 13 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  badge: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', borderWidth: 1 },
  badgeText: { fontSize: 16, fontWeight: '800' },
  cardTitle: { fontSize: 18, fontWeight: '800', color: '#1e1e1e' },
  cardSub: { fontSize: 12, color: '#6b6b6b', marginTop: 2 },
  cardDesc: { fontSize: 13, color: '#444', lineHeight: 19, marginTop: 4 },
  actionRow: { flexDirection: 'row', gap: 10, marginTop: 13 },
  primary: { paddingHorizontal: 14, paddingVertical: 11, borderRadius: 13 },
  primaryText: { color: '#fff', fontWeight: '800' },
  secondary: { paddingHorizontal: 14, paddingVertical: 11, borderRadius: 13, borderWidth: 1, borderColor: '#e8e6e2', backgroundColor: '#fff' },
  secondaryText: { color: '#2b2b2b', fontWeight: '800' },
  panel: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderTopWidth: 4, borderRadius: 18, padding: 15, marginBottom: 16 },
  panelSoft: { backgroundColor: '#faf9f7', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 18, padding: 14, marginBottom: 14 },
  sectionLabel: { fontSize: 12, fontWeight: '900', textTransform: 'uppercase', letterSpacing: .4, marginBottom: 8, color: '#3c3c3c' },
  bodyText: { fontSize: 15, lineHeight: 22, color: '#2a2a2a', marginBottom: 10 },
  bigLabel: { fontSize: 12, color: '#3c3c3c', fontWeight: '900', textTransform: 'uppercase', letterSpacing: .4, marginTop: 10, marginBottom: 8 },
  listItem: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 16, padding: 13, marginBottom: 9 },
  anchorItem: { backgroundColor: '#faf9f7', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 16, padding: 13, marginBottom: 8 },
  readingItem: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 16, padding: 13, marginBottom: 8 },
  kicker: { fontSize: 12, fontWeight: '900', color: '#333', marginBottom: 4 },
  listTitle: { fontSize: 15, fontWeight: '800', color: '#1e1e1e', lineHeight: 20 },
  listMeta: { fontSize: 12, color: '#6b6b6b', lineHeight: 17, marginTop: 3 },
  segmentNav: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 },
  dotButton: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2' },
  dotText: { fontSize: 12, fontWeight: '800', color: '#444' },
  segmentCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderTopWidth: 4, borderRadius: 20, padding: 15, marginBottom: 12 },
  segmentTitle: { fontSize: 21, lineHeight: 27, fontWeight: '900', color: '#1e1e1e', marginBottom: 10 },
  pill: { backgroundColor: '#faf9f7', borderWidth: 1, borderColor: '#e1ded8', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  pillText: { fontSize: 12, fontWeight: '800', color: '#3a3a3a' },
  verseCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderLeftWidth: 4, borderRadius: 16, padding: 13, marginBottom: 9 },
  verseRef: { fontSize: 13, fontWeight: '900', color: '#1e1e1e' },
  verseText: { fontSize: 13, color: '#555', lineHeight: 18, marginTop: 4 },
  expanded: { marginTop: 9, paddingTop: 9, borderTopWidth: 1, borderTopColor: '#e8e6e2' },
  expandedText: { fontSize: 13, lineHeight: 19, color: '#333', marginBottom: 6 },
  bold: { fontWeight: '900' },
  prompt: { fontSize: 14, lineHeight: 21, color: '#333', marginBottom: 7 },
  bottomNav: { flexDirection: 'row', gap: 10, marginTop: 18 },
  navBtn: { flex: 1, paddingVertical: 13, borderRadius: 14, backgroundColor: '#2b2b2b', alignItems: 'center' },
  navText: { color: '#fff', fontWeight: '900' },
  disabled: { opacity: .35 },
  searchWrap: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#e8e6e2' },
  searchInput: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8e6e2', borderRadius: 16, paddingHorizontal: 14, paddingVertical: 13, fontSize: 16 },
  emptyText: { fontSize: 14, color: '#6b6b6b', lineHeight: 20, padding: 12 }
});