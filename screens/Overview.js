import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { THREADS, subtitle, themeColor } from '../lib/data';

export function Overview({ navigation, route }) {
  const { id } = route.params;
  const t = THREADS[id];
  const color = themeColor(id);
  return (
    <SafeAreaView style={styles.safe}>
      <Header title={t.name} subtitleText={subtitle(id)} onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.panel, { borderTopColor: color }]}>
          <Text style={styles.sectionLabel}>What this thread is doing</Text>
          <Text style={styles.bodyText}>{t.intro}</Text>
        </View>
        <Text style={styles.bigLabel}>Segments</Text>
        {t.segments.map((seg, idx) => (
          <TouchableOpacity key={idx} onPress={() => navigation.navigate('Thread', { id, idx })} style={styles.listItem}>
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
