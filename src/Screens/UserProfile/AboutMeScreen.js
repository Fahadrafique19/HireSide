import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

export default function AboutMeScreen({ navigation }) {
  const [aboutText, setAboutText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Me</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>About Me</Text>

        <View style={styles.textAreaWrapper}>
          <TextInput
            style={styles.textArea}
            placeholder="Write something about yourself..."
            placeholderTextColor="#999"
            multiline
            value={aboutText}
            onChangeText={setAboutText}
            maxLength={1000}
            textAlignVertical="top"
          />
        </View>

        <Text style={styles.charCount}>{`${aboutText.length}/1000`}</Text>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('YourProfileScreen')}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DEE2E6',
  },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#000' },
  scrollContainer: { padding: 20 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  textAreaWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    height: 420,
    padding: 10,
  },
  textArea: { flex: 1, fontSize: 15, color: '#000' },
  charCount: {
    alignSelf: 'flex-end',
    marginTop: 10,
    right: 12,
    fontSize: 15,
    color: '#999',
  },
  saveButton: {
    backgroundColor: '#0C64AE',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 180,
    alignItems: 'center',
  },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
