import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function JobTitleModal({ visible, navigation }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const jobTitles = [
    'Graphic Designer',
    'Senior Graphic Designer',
    'Digital Designer',
    'UI/UX Designer',
    'Logo Designer',
    'Print Designer',
    'Packaging Designer',
    'Motion Graphics Designer',
    '3D Designer',
    'Interactive Designer',
    'Creative Director',
    'Art Director',
    'Brand Designer',
    'Product Designer',
    'Visual Designer',
    'Game Designer',
    'Interior Designer',
  ];

  const toggleSelect = title => {
    if (selected.includes(title)) {
      setSelected(selected.filter(t => t !== title));
    } else {
      setSelected([...selected, title]);
    }
  };

  const filteredData = jobTitles.filter(title =>
    title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Select Job Title</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FinalStep', { selected });
              }}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={
              <View>
                <View style={styles.searchBar}>
                  <TextInput
                    placeholder="Search job title"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                  />
                  <Ionicons name="search" size={20} color="#555" />
                </View>

                <View style={styles.chipsContainer}>
                  {selected.map((item, index) => (
                    <View key={index} style={styles.chip}>
                      <Text style={styles.chipText}>{item}</Text>
                      <TouchableOpacity onPress={() => toggleSelect(item)}>
                        <Ionicons name="close" size={16} color="#333" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => toggleSelect(item)}
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
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  doneText: { fontSize: 16, color: '#0C64AE', fontWeight: '600' },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  input: { flex: 1, height: 40 },

  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 4,
  },
  chipText: { marginRight: 6, fontSize: 14, color: '#333' },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#ccc',
    marginRight: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  optionText: { fontSize: 16, color: '#222' },
});
