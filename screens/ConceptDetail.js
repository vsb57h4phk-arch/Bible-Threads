import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Pill } from '../components/Pill';
import { styles } from '../components/styles';
import { getConcept } from '../lib/concepts';

export function ConceptDetail({ navigation, route }) {
  const conceptId = route?.params?.conceptId;
  const concept = getConcept(conceptId);

  if (!concept) {
    return (
      <SafeAreaView style={styles.safe}>
        <Header title="Concept" subtitleText="Bible Threads" onBack={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.panel}>
            <Text style={styles.sectionLabel}>Concept Detail</Text>
            <Text style={styles.bodyText}>Concept details could not be found.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Header title={concept.title} subtitleText="Bible Threads concept lens" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.segmentCard}>
          <View style={styles.cardTitleRow}>
            <Pill>{concept.title}</Pill>
          </View>
          <Text style={styles.sectionLabel}>Observation</Text>
          <Text style={styles.bodyText}>{concept.observation}</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.sectionLabel}>Pattern in Scripture</Text>
          <Text style={styles.bodyText}>{concept.pattern}</Text>
        </View>

        <Text style={styles.bigLabel}>Example Passages</Text>
        {concept.passages.map((passage, index) => (
          <View key={index} style={styles.anchorItem}>
            <Text style={styles.kicker}>{passage}</Text>
          </View>
        ))}

        <View style={styles.panelSoft}>
          <Text style={styles.sectionLabel}>Thread Connection</Text>
          <Text style={styles.bodyText}>{concept.threadConnection}</Text>
        </View>

        <View style={styles.panelSoft}>
          <Text style={styles.sectionLabel}>For Children</Text>
          <Text style={styles.bodyText}>{concept.childExplanation}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
