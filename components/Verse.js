import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Verse({ v, color }) {
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity onPress={() => setOpen(!open)} style={[styles.verseCard, { borderLeftColor: color }]}>
      <Text style={styles.verseRef}>{v.ref}</Text>
      <Text style={styles.verseText}>{v.text}</Text>
      {open && <View style={styles.expanded}>
        <Text style={styles.expandedText}><Text style={styles.bold}>Why it’s here: </Text>{v.why || '—'}</Text>
        <Text style={styles.expandedText}><Text style={styles.bold}>So what: </Text>{v.soWhat || '—'}</Text>
      </View>}
    </TouchableOpacity>
  );
}
