import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../components/styles';

export function VerseDetail({ verse, goHome, goThread }) {
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
          <Text style={styles.kicker}>Connected Thread</Text>

          <Text style={styles.listTitle}>
            {verse.meta.split('•')[0].trim()}
          </Text>

          <Text style={styles.expandedText}>
            This verse appears within the larger storyline of this thread.
            Open the thread segment below to see how this passage fits into the broader biblical pattern.
          </Text>
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
