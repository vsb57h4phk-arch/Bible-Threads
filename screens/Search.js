import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { buildSearchIndex, score } from '../lib/search';

export function Search({ navigation }) {
  const [q, setQ] = useState('');
  const index = useMemo(() => buildSearchIndex(), []);
  const results = q.trim() ? index.map(item => ({ item, score: score(item, q) })).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 30).map(x => x.item) : [];
  return (
    <SafeAreaView style={styles.safe}>
      <Header title="Verse Explorer" subtitleText="Search verses, themes, threads, and biblical connections." onBack={() => navigation.popToTop()} />
      <View style={styles.searchWrap}><TextInput value={q} onChangeText={setQ} placeholder="Search verses, themes, or threads..." autoFocus style={styles.searchInput} /></View>
      <ScrollView contentContainerStyle={styles.content}>
        {results.map((r, i) => (
          <TouchableOpacity key={i} onPress={() => navigation.navigate('VerseDetail', { verse: r })} style={styles.listItem}>
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
