import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ScreenHeader({ navigation, title }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.headerBack}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title || ''}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 0.3,
    borderColor: '#ddd',
  },
  headerBack: { fontSize: 28, width: 28 },
  headerTitle: { fontSize: 16, fontWeight: '600' },
});
