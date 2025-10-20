
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ContactInfoScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Info</Text>
        <TouchableOpacity
          style={styles.onPlus}
          onPress={() => setShowModal(true)}
        >
          <Feather name="plus" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="+01 1111 0000 1000"
            placeholderTextColor="#aaa"
          />
          <Feather name="x" size={18} color="#999" />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="+01 1111 0000 1000"
            placeholderTextColor="#aaa"
          />
          <Feather name="x" size={18} color="#999" />
        </View>

        <Text style={[styles.headerTitle, { marginTop: 30 }]}>Address</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              { height: 200, textAlignVertical: 'top', marginTop: 0 },
            ]}
            placeholder="Enter Address"
            multiline
          />
        </View>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={() => navigation.navigate('YourProfileScreen')}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        transparent
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaders}>
                <FontAwesome name="user" size={20} color="#0C64AE" />
                <Text style={styles.modalTitle}>Contact Info</Text>
              </View>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Feather name="x" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Field Type</Text>
            <TouchableOpacity style={styles.inputBox}>
              <Text style={styles.placeholderText}>Select Type</Text>
              <Feather name="chevron-down" size={18} color="#999" />
            </TouchableOpacity>

            <Text style={styles.inputLabel}>Label</Text>
            <View style={styles.inputBox}>
              <TextInput placeholder="Input" style={styles.textInput} />
              <Feather name="x-circle" size={18} color="#ccc" />
            </View>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 40,
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 17,
    marginTop: 20,
  },
  input: { flex: 1, fontSize: 15, paddingVertical: 12, color: '#000' },
  saveBtn: {
    backgroundColor: '#0C64AE',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 200,
    alignItems: 'center',
  },
  saveText: { color: '#fff', fontSize: 16, fontWeight: '600' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: { backgroundColor: '#fff', borderRadius: 16, padding: 30 },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalHeaders: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  modalTitle: { fontSize: 17, fontWeight: '600', color: '#000' },
  inputLabel: { fontSize: 14, color: '#333', marginTop: 10, marginBottom: 6 },
  inputBox: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: { flex: 1, fontSize: 15, color: '#000' },
  placeholderText: { color: '#999', fontSize: 15 },
  submitBtn: {
    backgroundColor: '#0C64AE',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  submitText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
