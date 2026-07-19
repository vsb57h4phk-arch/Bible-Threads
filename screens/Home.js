import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { styles } from '../components/styles';

const homeHero = require('../assets/home-hero.jpeg');

export function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="light" />
      <ScrollView contentContainerStyle={homeStyles.scrollContent}>
        <ImageBackground source={homeHero} resizeMode="cover" style={homeStyles.hero} imageStyle={homeStyles.heroImage}>
          <View style={homeStyles.heroOverlay} />
          <View style={homeStyles.heroTextWrap}>
            <Text style={homeStyles.heroTitle}>Bible Threads</Text>
            <Text style={homeStyles.heroDescription}>
              Explore biblical threads that run from Genesis to Revelation and discover how God's redemptive story unfolds throughout Scripture.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.content}>
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

          <TouchableOpacity onPress={() => navigation.navigate('ScriptureExplorer')} style={[styles.threadCard, { borderTopColor: '#2b2b2b' }]}>
            <View style={styles.cardTitleRow}>
              <View style={styles.badge}><Text style={styles.badgeText}>▤</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Explore Scripture</Text>
                <Text style={styles.cardSub}>Read chapter guides and trace their connections across Scripture.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 48,
  },
  hero: {
    width: '100%',
    height: 430,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroImage: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.18)',
  },
  heroTextWrap: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
  },
  heroDescription: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
