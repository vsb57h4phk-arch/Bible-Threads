import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { styles } from '../components/styles';
import { THREADS, stripThreadName, themeColor } from '../lib/data';

function findVerse(seg, verseIndex, verseRef) {
  const verses = seg?.verses || [];
  const numericIndex = Number(verseIndex);

  if (Number.isInteger(numericIndex) && numericIndex >= 0 && numericIndex < verses.length) {
    return verses[numericIndex];
  }

  if (verseRef) {
    return verses.find(v => v.ref === verseRef);
  }

  return null;
}

function RelatedReference({ item }) {
  if (typeof item === 'string') {
    return (
      <View style={styles.anchorItem}>
        <Text style={styles.kicker}>{item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.anchorItem}>
      {item?.ref ? <Text style={styles.kicker}>{item.ref}</Text> : null}
      {item?.note ? <Text style={styles.listMeta}>{item.note}</Text> : null}
    </View>
  );
}

export function VerseDetail({ navigation, route }) {
  const params = route?.params || {};
  const legacyVerse = params.verse;
  const id = params.id || legacyVerse?.id;
  const idx = params.idx ?? legacyVerse?.idx;
  const verseIndex = params.verseIndex ?? legacyVerse?.verseIndex;
  const verseRef = params.verseRef || legacyVerse?.verseRef || legacyVerse?.title;
  const t = id ? THREADS[id] : null;
  const seg = t?.segments?.[idx];
  const verse = findVerse(seg, verseIndex, verseRef);
  const color = themeColor(id);
  const relatedItems = Array.isArray(verse?.related) ? verse.related : verse?.related ? [verse.related] : [];

  if (!t || !seg || !verse) {
    return (
      <SafeAreaView style={styles.safe}>
        <Header title="Verse Detail" subtitleText="Bible Threads" onBack={() => navigation.popToTop()} />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.panel}>
            <Text style={styles.sectionLabel}>Verse Detail</Text>
            <Text style={styles.bodyText}>Verse details could not be found.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Header title={verse.ref} subtitleText={`${stripThreadName(t.name)} • ${seg.label}`} onBack={() => navigation.popToTop()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.segmentCard, { borderTopColor: color }]}>
          <View style={styles.cardTitleRow}>
            <Pill color={color}>{verse.tag || seg.tag}</Pill>
          </View>
          <Text style={styles.segmentTitle}>{verse.ref}</Text>
          <Text style={styles.listMeta}>{t.name} • {seg.label}</Text>
          <Text style={styles.listTitle}>{seg.title}</Text>
          {verse.text ? <Text style={styles.bodyText}>{verse.text}</Text> : null}
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionLabel}>How this connects</Text>
          <Text style={styles.bodyText}>{seg.title}</Text>
          {(seg.body || []).map((p, i) => <Text key={i} style={styles.expandedText}>{p}</Text>)}
        </View>

        {verse.why ? (
          <View style={styles.panelSoft}>
            <Text style={styles.sectionLabel}>Why this verse matters</Text>
            <Text style={styles.bodyText}>{verse.why}</Text>
          </View>
        ) : null}

        {verse.soWhat ? (
          <View style={styles.panelSoft}>
            <Text style={styles.sectionLabel}>Why this matters for us</Text>
            <Text style={styles.bodyText}>{verse.soWhat}</Text>
          </View>
        ) : null}

        {relatedItems.length > 0 ? (
          <>
            <Text style={styles.bigLabel}>Related References</Text>
            {relatedItems.map((item, relatedIdx) => <RelatedReference key={relatedIdx} item={item} />)}
          </>
        ) : null}

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Thread', { id, idx, verseRef: verse.ref })}>
            <Text style={styles.navText}>Open Full Thread Segment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
