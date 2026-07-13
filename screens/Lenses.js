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
