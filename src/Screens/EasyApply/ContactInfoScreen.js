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

export default function ContactInfoScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+971 (United Arab Emirates)');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const countries = [
    { code: '+971', name: 'United Arab Emirates' },
    { code: '+92', name: 'Pakistan' },
    { code: '+91', name: 'India' },
    { code: '+1', name: 'United States' },
  ];

  const handleNext = () => {
    if (
      email.trim() === '' ||
      countryCode.trim() === '' ||
      phone.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);
    navigation.navigate('ApplyStep2Screen');
  };

  const allFilled =
    email.trim() !== '' && countryCode.trim() !== '' && phone.trim() !== '';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.Back}>Back</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="close" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Apply to HireSide</Text>
      <Text style={styles.subtitle}>
        User Experience Designer - Figma Expert
      </Text>

      <View style={styles.progressContainer}>
        <View style={[styles.progressDot, { backgroundColor: '#0C64AE' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#E0E0E0' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#E0E0E0' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#E0E0E0' }]} />
      </View>

      <Text style={styles.sectionTitle}>Contact info</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Ionicons name="chevron-down" size={18} color="#555" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country Code</Text>
        <TouchableOpacity
          style={styles.inputWrapper}
          onPress={() => setCountryModalVisible(true)}
        >
          <Text style={styles.dropdownText}>{countryCode}</Text>
          <Ionicons name="chevron-down" size={18} color="#555" />
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.inputContainer,
          error && phone.trim() === '' && styles.errorContainer,
        ]}
      >
        <Text
          style={[
            styles.label,
            error && phone.trim() === '' && { color: '#D32F2F' },
          ]}
        >
          Phone Number
        </Text>
        <View
          style={[
            styles.inputWrapper,
            error && phone.trim() === '' && { borderColor: '#D32F2F' },
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => {
              setPhone(text);
              if (text.trim() !== '') setError(false);
            }}
          />
          {error && phone.trim() === '' && (
            <Ionicons name="alert-circle" size={18} color="#D32F2F" />
          )}
        </View>
        {error && phone.trim() === '' && (
          <Text style={styles.errorText}>This field is to be filled</Text>
        )}
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !allFilled && styles.disabledButton]}
        onPress={handleNext}
        disabled={!allFilled}
      >
        <Text style={[styles.nextText, !allFilled && { color: '#B0B0B0' }]}>
          Next
        </Text>
      </TouchableOpacity>

      <Modal visible={countryModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList
              data={countries}
              keyExtractor={item => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => {
                    setCountryCode(`${item.code} (${item.name})`);
                    setCountryModalVisible(false);
                  }}
                >
                  <Text style={styles.countryText}>
                    {item.code} ({item.name})
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setCountryModalVisible(false)}
              style={styles.closeModal}
            >
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#152139',
    marginTop: 20,
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: '',
    marginVertical: 20,

    height: 8,
    borderRadius: 3,
    marginTop: 12,
  },
  progressDot: {
    width: 85,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  Back: { fontSize: 17, fontWeight: '600', color: '#5C677D' },
  subtitle: { fontSize: 15, color: '#5C677D', marginTop: 2 },
  progressBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 3,
    marginTop: 12,
  },
  progressFill: { width: '30%', backgroundColor: '#0C64AE', borderRadius: 3 },
  progressRemaining: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    marginLeft: 4,
  },
  border: {
    borderBottomWidth: 2,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#DEE2E6',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
  },
  inputContainer: { marginTop: 10 },
  label: { fontSize: 13, color: '#5C677D', marginBottom: 4 },
  inputWrapper: {
    borderWidth: 2,
    borderColor: '#ADB5BD',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: { flex: 1, fontSize: 14, color: '#000' },
  dropdownText: { color: '#000', fontSize: 14 },
  errorContainer: { marginBottom: 10 },
  errorText: { color: '#B3261E', fontSize: 12, marginTop: 4 },
  nextButton: {
    marginTop: 250,
    backgroundColor: '#0C64AE',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: { backgroundColor: '#EAEAEA' },
  nextText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  countryItem: { paddingVertical: 10 },
  countryText: { fontSize: 14, color: '#000' },
  closeModal: { marginTop: 10, alignSelf: 'flex-end' },
  closeText: { color: '#0C64AE', fontWeight: '500' },
});
