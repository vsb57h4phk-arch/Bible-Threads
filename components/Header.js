import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Header({ title, subtitleText, onBack, right }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        {onBack ? <TouchableOpacity onPress={onBack} style={styles.backBtn}><Text style={styles.backText}>‹ Back</Text></TouchableOpacity> : <Text style={styles.version}>v1 App</Text>}
        {right || null}
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitleText ? <Text style={styles.headerSub}>{subtitleText}</Text> : null}
    </View>
  );
}
