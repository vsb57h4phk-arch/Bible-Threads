import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { Verse } from '../components/Verse';
import { styles } from '../components/styles';
import { THREADS, getPrompts, getReadings, stripThreadName, themeColor } from '../lib/data';

export function Thread({ navigation, route }) {
  const { id, idx: startIndex = 0, verseRef } = route.params;
  const t = THREADS[id];
  const [idx, setIdx] = useState(startIndex || 0);
  useEffect(() => {
    setIdx(startIndex || 0);
  }, [id, startIndex]);
  const seg = t.segments[idx];
  const color = themeColor(id);
  const prev = () => setIdx(Math.max(0, idx - 1));
  const next = () => setIdx(Math.min(t.segments.length - 1, idx + 1));
  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title={stripThreadName(t.name)}
        subtitleText={`${idx + 1} of ${t.segments.length} • ${seg.label}`}
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')}
        right={<TouchableOpacity onPress={() => navigation.navigate('Overview', { id })} style={styles.searchTop}><Text style={styles.searchTopText}>Overview</Text></TouchableOpacity>}
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
            <Pill color={color} onPress={() => navigation.navigate('ConceptDetail', { conceptId: seg.tag })}>{seg.tag}</Pill>
          </View>
          <Text style={styles.segmentTitle}>{seg.title}</Text>
          {(seg.body || []).map((p, i) => <Text key={i} style={styles.bodyText}>{p}</Text>)}
        </View>

        <Text style={styles.bigLabel}>Verse anchors</Text>
        {(seg.verses || []).map((v, i) => <Verse key={i} v={v} color={color} focused={v.ref === verseRef} />)}

        {(seg.supportingVerses || []).length > 0 && <Text style={styles.bigLabel}>Supporting Scripture</Text>}
        {(seg.supportingVerses || []).map((item, supportingIndex) => (
          <TouchableOpacity
            key={`${item.ref}-${supportingIndex}`}
            onPress={() => navigation.navigate('VerseDetail', { id, idx, supportingIndex, verseRef: item.ref })}
            style={styles.anchorItem}
          >
            <Text style={styles.kicker}>{item.ref}</Text>
            <Text style={styles.listMeta}>{item.note}</Text>
          </TouchableOpacity>
        ))}

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
