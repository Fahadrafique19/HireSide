import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderBar({ title, navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.left}>
        <Ionicons name="chevron-back" size={22} color="#222" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 36 }} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 76,
    flexDirection: 'row',
    marginTop:30,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(218, 213, 213, 1)',
    paddingHorizontal: 19,
  },
  left: { width: 36, justifyContent: 'center'  },
  title: { flex: 1, textAlign: 'center', fontWeight: '600', color: '#222', fontSize:18,  },
});
