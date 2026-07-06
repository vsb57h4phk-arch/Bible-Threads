import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Pill({ children, color }) {
  return <View style={[styles.pill, color ? { borderColor: color + '66' } : null]}><Text style={styles.pillText}>{children}</Text></View>;
}
