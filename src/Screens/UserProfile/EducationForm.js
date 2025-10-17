import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const EducationForm = ({ navigation }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Education</Text>

        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Course</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Graphic Designer"
              placeholderTextColor="#999"
            />
            <Feather name="chevron-down" color="#0C64AE" size={34} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>School</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Oxford University"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>From</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder=" Dec 2024"
                placeholderTextColor="#999"
              />
              <Feather name="chevron-down" color="#0C64AE" size={34} />
            </View>
          </View>

          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>To</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Select "
                placeholderTextColor="#999"
                editable={!isCurrentlyWorking}
              />
              <Feather name="chevron-down" color="#0C64AE" size={34} />
            </View>
          </View>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Graduated</Text>
          <Switch
            value={isCurrentlyWorking}
            onValueChange={setIsCurrentlyWorking}
            trackColor={{ false: '#0C64AE', true: '#666' }}
            thumbColor={isCurrentlyWorking ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Grade (Optional)</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Grade"
              placeholderTextColor="#999"
            />
            {/* <Feather name="chevron-down" color="#0C64AE" size={34} /> */}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description (Optional)</Text>
          <View style={[styles.inputWrapper, styles.textAreaWrapper]}>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Lorem ipsum dolor sit amet consectetur. Id eget velit facilisi vitae mollis arcu libero nec sed. Neque felis massa vitae at ante neque integer."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <Text style={styles.charCount}>{description.length}/200</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Add Media (Optional)</Text>
          <View style={styles.uploadBox}>
            {/* <Icon name="cloud-upload-outline" size={36} color="#9CA3AF" /> */}
            <MaterialCommunityIcons
              name="cloud-upload"
              color="#0C64AE"
              size={54}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DEE2E6',

    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#33415C',
  },
  clearButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  clearButtonText: {
    color: '#666',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  halfInputContainer: {
    width: (width - 60) / 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#33415C',
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9ECEF',
    height: 48,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#33415C',
    fontWeight: '400',
    paddingVertical: 12,
  },
  inputIcon: {
    marginLeft: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  textAreaWrapper: {
    height: 120,
    alignItems: 'flex-start',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  uploadBox: {
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 25,
    marginBottom: 15,
    backgroundColor: '#E9ECEF',
  },

  saveButton: {
    backgroundColor: '#0C64AE',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EducationForm;
