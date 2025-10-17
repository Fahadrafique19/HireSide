import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function JobTypesScreen({ navigation }) {
  const [selected, setSelected] = useState([]);

  const toggleOption = option => {
    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const options = [
    { label: 'Full-time', value: 'fulltime' },
    { label: 'Part-time', value: 'parttime' },
    { label: 'Contract', value: 'contract' },
    { label: 'Internship', value: 'internship' },
    { label: 'Freelance', value: 'freelance', disabled: true },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="close"
          size={24}
          color="#000"
          onPress={() => navigation.navigate('SignIn')}
        />
        <View style={styles.progressContainer}>
          <View style={[styles.step, { backgroundColor: '#8BC48A' }]} />
          <View style={styles.step} />
          <View style={styles.step} />
          <View style={styles.step} />
        </View>
        <Text style={styles.stepText}>1/4</Text>
      </View>

      <Text style={styles.title}>What Type of Jobs Are You Interested In?</Text>
      <Text style={styles.subtitle}>You can select multiple job types</Text>

      {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.option, opt.disabled && styles.optionDisabled]}
          onPress={() => !opt.disabled && toggleOption(opt.value)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.checkbox,
              selected.includes(opt.value) && !opt.disabled
                ? styles.checkboxChecked
                : {},
              opt.disabled && styles.checkboxDisabled,
            ]}
          >
            {selected.includes(opt.value) && !opt.disabled && (
              <Ionicons name="checkmark" size={16} color="#fff" />
            )}
          </View>

          <Text
            style={[styles.optionText, opt.disabled && { color: '#A0A0A0' }]}
          >
            {opt.label}
          </Text>

          {opt.disabled && (
            <View style={styles.comingSoon}>
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.nextBtn,
          { backgroundColor: selected.length > 0 ? '#0C64AE' : '#BEC2CC' },
        ]}
        disabled={selected.length === 0}
        onPress={() => navigation.navigate('Experience')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 70 },
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
  stepText: { color: '#5C677D', fontSize: 14, fontWeight: '400' },
  title: {
    fontSize: 22,
    color: '#152139',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: { fontSize: 14, color: '#5C677D', marginBottom: 50 },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },
  optionDisabled: {
    backgroundColor: '#F5F5F5',
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
  checkboxDisabled: {
    backgroundColor: '#E0E0E0',
    borderColor: '#bbb',
  },

  optionText: { fontSize: 16, flex: 1 },

  comingSoon: {
    borderWidth: 1,
    borderColor: '#0C64AE',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  comingSoonText: { fontSize: 12, color: '#0C64AE' },

  nextBtn: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 100,
  },
  nextText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
