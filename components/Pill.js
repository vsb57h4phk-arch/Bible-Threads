import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Pill({ children, color, onPress }) {
  const content = <Text style={styles.pillText}>{children}</Text>;
  const style = [styles.pill, color ? { borderColor: color + '66' } : null];

  if (onPress) {
    return <TouchableOpacity onPress={onPress} style={style}>{content}</TouchableOpacity>;
  }

  return <View style={style}>{content}</View>;
}
