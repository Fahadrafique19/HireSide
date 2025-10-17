import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function JobTitleScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const jobTitles = [
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile App Developer',
    'UI/UX Designer',
    'Product Manager',
    'QA Tester',
    'DevOps Engineer',
    'Data Scientist',
  ];

  const filtered = jobTitles.filter(title =>
    title.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleSelect = title => {
    if (selected.includes(title)) {
      setSelected(selected.filter(t => t !== title));
    } else {
      setSelected([...selected, title]);
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
          <View style={[styles.step, { backgroundColor: '#8BC48A' }]} />
          <View style={[styles.step, { backgroundColor: '#8BC48A' }]} />
          <View style={[styles.step, { backgroundColor: '#8BC48A' }]} />
          <View style={[styles.step, { backgroundColor: '#8BC48A' }]} />
        </View>
        <Text style={styles.stepText}>4/4</Text>
      </View>

      <Text style={styles.title}>Select your Job Title</Text>
      <Text style={styles.subtitle}>You can choose multiple titles</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Search Job Title"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.option}
            onPress={() => toggleSelect(item)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.checkbox,
                selected.includes(item) && styles.checkboxChecked,
              ]}
            >
              {selected.includes(item) && (
                <Ionicons name="checkmark" size={16} color="#fff" />
              )}
            </View>
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[
          styles.nextBtn,
          { backgroundColor: selected.length > 0 ? '#0C64AE' : '#BEC2CC' },
        ]}
        disabled={selected.length === 0}
        onPress={() => navigation.navigate('FinalStepScreen')}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  stepText: { color: '#555', fontSize: 14 },

  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#777', marginBottom: 20 },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  input: { flex: 1, marginLeft: 8, fontSize: 14 },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  optionText: { fontSize: 16 },

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
    backgroundColor: '#0C64AE',
    borderColor: '#0C64AE',
  },

  nextBtn: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  nextText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
