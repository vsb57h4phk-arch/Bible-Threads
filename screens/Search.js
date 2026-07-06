import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { buildSearchIndex, highlightTerms, search } from '../lib/search';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function HighlightedText({ children, query, style }) {
  const text = children || '';
  const terms = highlightTerms(query);
  if (!terms.length || !text) return <Text style={style}>{text}</Text>;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'ig');
  const parts = text.split(pattern);

  return (
    <Text style={style}>
      {parts.map((part, index) => {
        const matched = terms.some(term => part.toLowerCase() === term.toLowerCase());
        return <Text key={`${part}-${index}`} style={matched ? styles.highlightText : null}>{part}</Text>;
      })}
    </Text>
  );
}

function openResult(navigation, result) {
  if (result.kind === 'Verse') {
    navigation.navigate('Thread', { id: result.id, idx: result.idx, verseRef: result.verseRef });
    return;
  }

  if (result.kind === 'Segment' || result.kind === 'Reading' || result.kind === 'Related Reference' || result.kind === 'Concept') {
    navigation.navigate('Thread', { id: result.id, idx: result.idx, verseRef: result.verseRef });
    return;
  }

  navigation.navigate('Overview', { id: result.id });
}

export function Search({ navigation }) {
  const [q, setQ] = useState('');
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => search(index, q), [index, q]);
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Verse Explorer" subtitleText="Search verses, themes, threads, and biblical connections." onBack={() => navigation.popToTop()} />
      <View style={styles.searchWrap}><TextInput value={q} onChangeText={setQ} placeholder="Search verses, themes, or threads..." autoFocus style={styles.searchInput} /></View>
      <ScrollView contentContainerStyle={styles.content}>
        {results.map((r, i) => (
          <TouchableOpacity key={i} onPress={() => openResult(navigation, r)} style={styles.listItem}>
            <Text style={styles.kicker}>{r.kind}</Text>
            <HighlightedText query={q} style={styles.listTitle}>{r.title}</HighlightedText>
            <HighlightedText query={q} style={styles.listMeta}>{r.meta}</HighlightedText>
            {r.snippet ? <HighlightedText query={q} style={styles.searchSnippet}>{r.snippet}</HighlightedText> : null}
          </TouchableOpacity>
        ))}
        {!q.trim() && <Text style={styles.emptyText}>Try Genesis 22, Exodus 12, John 1:14, temple, covenant, or lamb.</Text>}
        {q.trim() && results.length === 0 && <Text style={styles.emptyText}>No matches.</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}
