import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function ChapterSection({ title, children, soft = false }) {
  return (
    <View style={soft ? styles.panelSoft : styles.panel}>
      <Text style={styles.sectionLabel}>{title}</Text>
      {children}
    </View>
  );
}
