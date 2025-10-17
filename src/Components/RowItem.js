import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RowItem({ label, onPress, right }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Icon name="user" size={18} color="#2b6ca3" />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
      {right ? right : <Ionicons name="chevron-forward" size={18} color="#999" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  left: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#eef7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  label: { fontSize: 15, color: '#222' },
});
