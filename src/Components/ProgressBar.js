import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress = 0.75 }) {
  return (
    <View style={styles.bar}>
      <View style={[styles.fill, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { height: 8, backgroundColor: '#eee', borderRadius: 6, overflow: 'hidden' },
  fill: { height: 8, backgroundColor: '#1e6fb8' },
});
