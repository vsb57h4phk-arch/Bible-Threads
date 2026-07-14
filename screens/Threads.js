import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { THREADS, icon, order, subtitle, themeColor } from '../lib/data';

export function Threads({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Bible Threads"
        subtitleText="A real app shell for the thread-first biblical theology database."
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')}
        right={<TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.searchTop}><Text style={styles.searchTopText}>Search</Text></TouchableOpacity>}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Open Thread Atlas"
          accessibilityHint="Opens a visual comparison of all seven biblical threads across Scripture."
          onPress={() => navigation.navigate('ThreadAtlas')}
          style={[styles.threadCard, { borderTopColor: '#725D3D' }]}
        >
          <View style={styles.cardTitleRow}>
            <View style={[styles.badge, { borderColor: '#725D3D77' }]}><Text style={styles.badgeText}>✣</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Thread Atlas</Text>
              <Text style={styles.cardSub}>Compare seven biblical journeys from Genesis to Revelation.</Text>
            </View>
          </View>
          <Text style={styles.cardDesc}>Trace major milestones, intersections, and supporting Scripture without leaving the thread-first experience.</Text>
        </TouchableOpacity>
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
                <TouchableOpacity onPress={() => navigation.navigate('Thread', { id, idx: 0 })} style={[styles.primary, { backgroundColor: '#2b2b2b' }]}><Text style={styles.primaryText}>Enter</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Overview', { id })} style={styles.secondary}><Text style={styles.secondaryText}>Overview</Text></TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
