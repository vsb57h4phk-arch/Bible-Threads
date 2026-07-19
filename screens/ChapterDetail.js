import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ChapterSection } from '../components/ChapterSection';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { styles } from '../components/styles';
import { getConcept } from '../lib/concepts';
import { THREADS, stripThreadName, themeColor } from '../lib/data';
import { getScriptureChapter, SCRIPTURE_CHAPTERS } from '../lib/scriptureChapters';

function list(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function findPassageDestination(reference) {
  if (typeof reference !== 'string') return null;

  for (const [id, thread] of Object.entries(THREADS)) {
    for (let idx = 0; idx < (thread?.segments || []).length; idx += 1) {
      const segment = thread.segments[idx];
      const verses = Array.isArray(segment?.verses) ? segment.verses : [];
      const supportingVerses = Array.isArray(segment?.supportingVerses) ? segment.supportingVerses : [];
      const verseIndex = verses.findIndex(verse => verse?.ref === reference);
      if (verseIndex >= 0) return { id, idx, verseIndex, verseRef: reference };

      const supportingIndex = supportingVerses.findIndex(verse => verse?.ref === reference);
      if (supportingIndex >= 0) return { id, idx, supportingIndex, verseRef: reference };
    }
  }

  return null;
}

function PassageLabel({ navigation, reference, compact = false }) {
  const destination = findPassageDestination(reference);
  const content = <Text style={compact ? detailStyles.referencePillText : styles.kicker}>{reference}</Text>;

  if (!destination) {
    return compact ? <View style={detailStyles.referencePill}>{content}</View> : <View style={styles.anchorItem}>{content}</View>;
  }

  return (
    <TouchableOpacity
      accessibilityRole="link"
      accessibilityLabel={`Open ${reference}`}
      onPress={() => navigation.navigate('VerseDetail', destination)}
      style={compact ? [detailStyles.referencePill, detailStyles.linkedReference] : [styles.anchorItem, detailStyles.linkedReference]}
    >
      {content}
      {!compact ? <Text style={styles.listMeta}>Open existing verse detail</Text> : null}
    </TouchableOpacity>
  );
}

function EmptyChapter({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Chapter Explorer"
        subtitleText="Bible Threads"
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('ScriptureExplorer')}
      />
      <ScrollView contentContainerStyle={[styles.content, detailStyles.content]}>
        <View style={styles.panel}>
          <Text style={styles.sectionLabel}>Chapter Detail</Text>
          <Text style={styles.bodyText}>Chapter content is not available.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ScriptureExplorer')} style={detailStyles.returnButton}>
            <Text style={styles.primaryText}>Return to Explore Scripture</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export function ChapterDetail({ navigation, route }) {
  const bookId = route?.params?.bookId;
  const chapterNumber = Number(route?.params?.chapterNumber);
  const book = typeof bookId === 'string' ? SCRIPTURE_CHAPTERS[bookId.toLowerCase()] : null;
  const chapter = getScriptureChapter(bookId, chapterNumber);

  if (!book || !chapter) return <EmptyChapter navigation={navigation} />;

  const observations = list(chapter.observations);
  const threadIds = list(chapter.threads);
  const lensIds = list(chapter.lenses);
  const conceptIds = list(chapter.concepts);
  const connections = list(chapter.scriptureConnections);
  const connectedPassages = list(chapter.connectedPassages);
  const questions = list(chapter.reflectionQuestions);
  const previous = getScriptureChapter(book.id, chapterNumber - 1);
  const next = getScriptureChapter(book.id, chapterNumber + 1);

  const openChapter = number => navigation.replace('ChapterDetail', { bookId: book.id, chapterNumber: number });

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title={chapter.reference || `${book.title} ${chapterNumber}`}
        subtitleText={[book.testament, book.historicalSetting].filter(Boolean).join(' • ')}
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('ScriptureExplorer')}
      />

      <ScrollView contentContainerStyle={[styles.content, detailStyles.content]}>
        {chapter.summary ? (
          <ChapterSection title="What Happens Here?">
            <Text style={styles.bodyText}>{chapter.summary}</Text>
          </ChapterSection>
        ) : null}

        {observations.length > 0 ? (
          <ChapterSection title="Key Observations">
            {observations.map((observation, index) => (
              <View key={`${observation}-${index}`} style={detailStyles.observationRow}>
                <Text style={detailStyles.observationMarker}>{index + 1}</Text>
                <Text style={detailStyles.observationText}>{observation}</Text>
              </View>
            ))}
          </ChapterSection>
        ) : null}

        {threadIds.length > 0 ? (
          <ChapterSection title="Major Threads">
            <View style={detailStyles.pillRow}>
              {threadIds.map(id => {
                const thread = THREADS[id];
                return (
                  <Pill
                    key={id}
                    color={thread ? themeColor(id) : null}
                    onPress={thread ? () => navigation.navigate('Thread', { id, idx: 0 }) : undefined}
                    accessibilityLabel={thread ? `Open ${stripThreadName(thread.name)} thread` : undefined}
                  >
                    {thread ? stripThreadName(thread.name) : id}
                  </Pill>
                );
              })}
            </View>
          </ChapterSection>
        ) : null}

        {lensIds.length > 0 ? (
          <ChapterSection title="Major Lenses">
            <View style={detailStyles.pillRow}>
              {lensIds.map(id => (
                <Pill
                  key={id}
                  onPress={getConcept(id) ? () => navigation.navigate('ConceptDetail', { conceptId: id }) : undefined}
                  accessibilityLabel={getConcept(id) ? `Open ${getConcept(id).title} lens` : undefined}
                >
                  {getConcept(id)?.title || id}
                </Pill>
              ))}
            </View>
          </ChapterSection>
        ) : null}

        {conceptIds.length > 0 ? (
          <ChapterSection title="Key Concepts">
            <View style={detailStyles.pillRow}>
              {conceptIds.map(id => (
                <Pill
                  key={id}
                  onPress={getConcept(id) ? () => navigation.navigate('ConceptDetail', { conceptId: id }) : undefined}
                  accessibilityLabel={getConcept(id) ? `Open ${getConcept(id).title} concept` : undefined}
                >
                  {getConcept(id)?.title || id}
                </Pill>
              ))}
            </View>
          </ChapterSection>
        ) : null}

        {connections.length > 0 ? (
          <ChapterSection title="Connections Across Scripture">
            {connections.map((connection, index) => {
              if (!connection || typeof connection !== 'object') return null;
              const passages = list(connection.passages);
              return (
                <View key={`${connection.title || 'connection'}-${index}`} style={detailStyles.connectionCard}>
                  {connection.title ? <Text style={styles.listTitle}>{connection.title}</Text> : null}
                  {connection.explanation ? <Text style={detailStyles.connectionText}>{connection.explanation}</Text> : null}
                  {passages.length > 0 ? (
                    <View style={detailStyles.referenceRow}>
                      {passages.map((passage, passageIndex) => (
                        <PassageLabel key={`${passage}-${passageIndex}`} navigation={navigation} reference={passage} compact />
                      ))}
                    </View>
                  ) : null}
                </View>
              );
            })}
          </ChapterSection>
        ) : null}

        {chapter.whyItMatters ? (
          <ChapterSection title="Why This Chapter Matters">
            <Text style={styles.bodyText}>{chapter.whyItMatters}</Text>
          </ChapterSection>
        ) : null}

        {connectedPassages.length > 0 ? (
          <ChapterSection title="Connected Passages">
            {connectedPassages.map((passage, index) => (
              <PassageLabel key={`${passage}-${index}`} navigation={navigation} reference={passage} />
            ))}
          </ChapterSection>
        ) : null}

        {chapter.kidSummary ? (
          <ChapterSection title="For Kids" soft>
            <Text style={styles.bodyText}>{chapter.kidSummary}</Text>
          </ChapterSection>
        ) : null}

        {questions.length > 0 ? (
          <ChapterSection title="Reflection Questions">
            {questions.map((question, index) => (
              <Text key={`${question}-${index}`} style={styles.prompt}>{index + 1}. {question}</Text>
            ))}
          </ChapterSection>
        ) : null}

        <View style={detailStyles.chapterNav}>
          {previous ? (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`Previous: ${previous.reference}`}
              onPress={() => openChapter(chapterNumber - 1)}
              style={detailStyles.chapterNavButton}
            >
              <Text style={detailStyles.chapterNavLabel}>Previous</Text>
              <Text style={detailStyles.chapterNavText}>{previous.reference}</Text>
            </TouchableOpacity>
          ) : <View style={detailStyles.chapterNavSpacer} />}
          {next ? (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`Next: ${next.reference}`}
              onPress={() => openChapter(chapterNumber + 1)}
              style={[detailStyles.chapterNavButton, detailStyles.chapterNavNext]}
            >
              <Text style={detailStyles.chapterNavLabel}>Next</Text>
              <Text style={detailStyles.chapterNavText}>{next.reference}</Text>
            </TouchableOpacity>
          ) : <View style={detailStyles.chapterNavSpacer} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const detailStyles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
  },
  observationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#efede9',
  },
  observationMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0ece5',
    color: '#725D3D',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '900',
  },
  observationText: {
    flex: 1,
    color: '#2a2a2a',
    fontSize: 14,
    lineHeight: 21,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  connectionCard: {
    backgroundColor: '#faf9f7',
    borderWidth: 1,
    borderColor: '#e8e6e2',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  connectionText: {
    color: '#3d3d3d',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  referenceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 11,
  },
  referencePill: {
    borderWidth: 1,
    borderColor: '#ddd7cd',
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  referencePillText: {
    color: '#4a4a4a',
    fontSize: 11,
    fontWeight: '800',
  },
  linkedReference: {
    borderColor: '#725D3D88',
  },
  returnButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2b2b2b',
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  chapterNav: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  chapterNavButton: {
    flex: 1,
    minHeight: 68,
    borderRadius: 15,
    backgroundColor: '#2b2b2b',
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  chapterNavNext: {
    alignItems: 'flex-end',
  },
  chapterNavSpacer: {
    flex: 1,
  },
  chapterNavLabel: {
    color: '#d8d8d8',
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  chapterNavText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 3,
  },
});
