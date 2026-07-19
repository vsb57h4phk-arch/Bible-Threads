import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { AVAILABLE_SCRIPTURE_BOOKS } from '../lib/scriptureChapters';

export function ScriptureExplorer({ navigation }) {
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Explore Scripture"
        subtitleText="Explore Scripture chapter by chapter and see how each chapter connects to the larger biblical story."
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')}
      />
      <ScrollView contentContainerStyle={[styles.content, explorerStyles.content]}>
        {AVAILABLE_SCRIPTURE_BOOKS.length === 0 ? (
          <View style={styles.panel}>
            <Text style={styles.emptyText}>No chapter guides are available yet.</Text>
          </View>
        ) : null}

        {AVAILABLE_SCRIPTURE_BOOKS.map(book => {
          const chapters = Object.values(book?.chapters || {}).filter(Boolean);
          const isSelected = selectedBookId === book.id;

          return (
            <View key={book.id} style={[styles.threadCard, { borderTopColor: '#725D3D' }]}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={`${book.title}, ${book.chapterCount} chapters`}
                accessibilityState={{ expanded: isSelected }}
                onPress={() => setSelectedBookId(isSelected ? null : book.id)}
              >
                <View style={styles.cardTitleRow}>
                  <View style={[styles.badge, explorerStyles.bookBadge]}><Text style={styles.badgeText}>▤</Text></View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{book.title}</Text>
                    <Text style={styles.cardSub}>{book.testament} • {book.chapterCount} chapters</Text>
                  </View>
                  <Text style={explorerStyles.chevron}>{isSelected ? '−' : '+'}</Text>
                </View>
                {book.historicalSetting ? <Text style={styles.cardDesc}>{book.historicalSetting}</Text> : null}
              </TouchableOpacity>

              {isSelected ? (
                <View style={explorerStyles.chapterList}>
                  <Text style={styles.sectionLabel}>Choose a chapter</Text>
                  <View style={explorerStyles.chapterGrid}>
                    {chapters.map(chapter => {
                      const chapterNumber = Number(chapter.reference?.match(/\d+$/)?.[0]);
                      if (!Number.isInteger(chapterNumber)) return null;

                      return (
                        <TouchableOpacity
                          key={chapter.reference}
                          accessibilityRole="button"
                          accessibilityLabel={`Open ${chapter.reference}`}
                          onPress={() => navigation.navigate('ChapterDetail', { bookId: book.id, chapterNumber })}
                          style={explorerStyles.chapterButton}
                        >
                          <Text style={explorerStyles.chapterButtonText}>{chapter.reference}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const explorerStyles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  bookBadge: {
    borderColor: '#725D3D77',
    backgroundColor: '#fff',
  },
  chevron: {
    color: '#725D3D',
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 4,
  },
  chapterList: {
    borderTopWidth: 1,
    borderTopColor: '#e8e6e2',
    marginTop: 12,
    paddingTop: 14,
  },
  chapterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },
  chapterButton: {
    minWidth: 102,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#d8d2c8',
    backgroundColor: '#faf9f7',
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 13,
    alignItems: 'center',
  },
  chapterButtonText: {
    color: '#2b2b2b',
    fontSize: 14,
    fontWeight: '900',
  },
});
