import React from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../components/styles';
import { CONCEPTS } from '../lib/concepts';

const LENS_ORDER = [
  'Truth → Practice',
  'Identity → Action',
  'Promise → Fulfillment',
  'Shadow → Reality',
  'Grace → Authority',
  'Rescue → Mission',
  'Presence → Transformation'
];

export function Lenses({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <Header
        title="Explore Lenses"
        subtitleText="Learn seven biblical lenses for understanding biblical connections."
        onBack={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home')}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="View Lens Map"
          accessibilityHint="Opens the interactive map of all seven lenses from Genesis to Revelation."
          onPress={() => navigation.navigate('LensMap')}
          style={[styles.threadCard, { borderTopColor: '#725D3D' }]}
        >
          <View style={styles.cardTitleRow}>
            <View style={[styles.badge, { borderColor: '#725D3D77' }]}><Text style={styles.badgeText}>⌁</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>View Lens Map</Text>
              <Text style={styles.cardSub}>See all seven lenses and their connections across Scripture.</Text>
            </View>
          </View>
        </TouchableOpacity>
        {LENS_ORDER.map(id => {
          const concept = CONCEPTS[id];
          return (
            <TouchableOpacity key={id} onPress={() => navigation.navigate('ConceptDetail', { conceptId: id })} style={styles.listItem}>
              <Text style={styles.listTitle}>{concept.title}</Text>
              <Text style={styles.listMeta}>{concept.observation}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
