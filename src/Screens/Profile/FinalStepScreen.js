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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FinalDetailsScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);

  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginBottom: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Great Job, Almost Done!</Text>
      <Text style={styles.subtitle}>
        Don’t worry, only you can see your personal data. No one else will be
        able to see it.
      </Text>

      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image" size={40} color="#777" />
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome name="pencil" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Phone Number</Text>

        <View style={styles.inputContainer}>
          <FontAwesome
            name="user-o"
            size={18}
            color="#777"
            style={{ marginRight: 8 }}
          />
          <TextInput
            style={styles.input}
            placeholder="+92 336 123"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowGenderModal(true)}
      >
        <Text
          style={{ flex: 1, fontSize: 16, color: gender ? '#000' : '#777' }}
        >
          {gender || 'Gender'}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#777" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.completeBtn}
        onPress={() => navigation.navigate('HomeDrawer')}
      >
        <Text style={styles.completeText}>Complete Profile</Text>
      </TouchableOpacity>

      <Modal
        visible={showGenderModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <FlatList
              data={genderOptions}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => {
                    setGender(item);
                    setShowGenderModal(false);
                  }}
                >
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => setShowGenderModal(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 70 },

  title: { fontSize: 22, fontWeight: '700', marginBottom: 10, paddingTop: 40 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 50 },

  imageContainer: {
    alignSelf: 'center',
    marginBottom: 50,
    position: 'relative',
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#DEE2E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0C64AE',
    padding: 8,
    borderRadius: 20,

    borderWidth: 2,
    borderColor: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ADB5BD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },

  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontWeight: '500',
  },

  fieldset: {
    marginBottom: 20,
    position: 'relative',
  },

  legend: {
    position: 'absolute',
    top: -10,
    left: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    fontSize: 12,
    color: '#33415C',
    fontWeight: '600',
    zIndex: 1,
  },

  completeBtn: {
    marginTop: 80,
    backgroundColor: '#0C64AE',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  completeText: { color: '#fff', fontSize: 16, fontWeight: '600' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  modalOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalText: { fontSize: 16 },
  modalCancel: { marginTop: 10, alignItems: 'center' },
  modalCancelText: { color: '#0C64AE', fontSize: 16, fontWeight: '600' },
});
