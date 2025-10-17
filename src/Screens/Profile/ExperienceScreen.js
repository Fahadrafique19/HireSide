import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExperienceScreen({ navigation }) {
  const [selected, setSelected] = useState([]);

  const options = [
    { label: 'Fresher / Entry Level', value: 'fresher' },
    { label: 'Junior', value: 'junior' },
    { label: 'Mid Senior', value: 'mid' },
    { label: 'Senior', value: 'senior' },
    { label: 'Executive', value: 'executive' },
  ];

  const toggleSelect = value => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.progressContainer}>
          <View style={[styles.step, { backgroundColor: '#DAECD3' }]} />
          <View style={[styles.step, { backgroundColor: '#288807' }]} />
          <View style={styles.step} />
          <View style={styles.step} />
        </View>
        <Text style={styles.stepText}>2/4</Text>
      </View>

      <Text style={styles.title}>What is your Level of Experience?</Text>

      {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.option}
          onPress={() => toggleSelect(opt.value)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.checkbox,
              selected.includes(opt.value) && styles.checkboxChecked,
            ]}
          >
            {selected.includes(opt.value) && (
              <Ionicons name="checkmark" size={16} color="#fff" />
            )}
          </View>
          <Text style={styles.optionText}>{opt.label}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.nextBtn,
          { backgroundColor: selected.length > 0 ? '#0C64AE' : '#BEC2CC' },
        ]}
        disabled={selected.length === 0}
        onPress={() => navigation.navigate('WorkModel')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 80 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  progressContainer: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 20,
  },
  step: {
    flex: 1,
    height: 6,
    backgroundColor: '#E5E5E5',
    borderRadius: 3,
    marginHorizontal: 2,
  },
  stepText: { color: '#5C677D', fontSize: 14 },
  title: { fontSize: 27, fontWeight: 'bold', marginBottom: 40 },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#288807',
    borderColor: '#288807',
  },

  optionText: { fontSize: 16, flex: 1 },

  nextBtn: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 130,
  },
  nextText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
