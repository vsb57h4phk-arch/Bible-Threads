import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { styles } from '../components/styles';

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="dark" />
      <Header
        title="Bible Threads"
        subtitleText="Explore biblical threads that run from Genesis to Revelation and discover how God's redemptive story unfolds throughout Scripture."
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Threads')} style={[styles.threadCard, { borderTopColor: '#2b2b2b' }]}>
          <View style={styles.cardTitleRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>↦</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Explore Threads</Text>
              <Text style={styles.cardSub}>Discover major biblical themes across Scripture.</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Lenses')} style={[styles.threadCard, { borderTopColor: '#2b2b2b' }]}>
          <View style={styles.cardTitleRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>◈</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>Explore Lenses</Text>
              <Text style={styles.cardSub}>Learn seven biblical lenses for understanding biblical connections.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
