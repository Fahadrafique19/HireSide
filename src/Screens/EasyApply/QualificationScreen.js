import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function QualificationDetailsScreen({ navigation }) {
  const [skills, setSkills] = useState([
    { id: 1, name: 'User Experience Designer (UED)', checked: true },
    { id: 2, name: 'A/B testing', checked: true },
    { id: 3, name: 'Usability Testing', checked: true },
    { id: 4, name: 'UX Writing Skills', checked: true },
    { id: 5, name: 'Wireframing and Prototyping', checked: false },
    { id: 6, name: 'Product Analyst', checked: false },
    { id: 7, name: 'Information Architecture', checked: false },
  ]);

  const toggleCheck = id => {
    const updated = skills.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setSkills(updated);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#ADB5BD" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Qualification Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Text style={styles.sectionTitle}>Skills Associated with the job</Text>
        <Text style={styles.subText}>
          4 Skills found on your profile match skills associated with the job.
        </Text>

        <View style={styles.infoBox}>
          <Image
            source={require('../../assets/images/circle-info-solid.png')}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.infoText}>
            Add skills you have to your profile to stand out to the employer{' '}
            <Text style={styles.addSkills}>Add skills</Text>
          </Text>
        </View>

        {skills.map(skill => (
          <View key={skill.id} style={styles.skillRow}>
            <TouchableOpacity
              onPress={() => toggleCheck(skill.id)}
              style={[
                styles.checkboxBase,
                skill.checked ? styles.checkedBox : styles.uncheckedBox,
              ]}
            >
              {skill.checked && (
                <Ionicons name="checkmark" size={12} color="#fff" />
              )}
            </TouchableOpacity>

            <Text style={styles.skillText}>{skill.name}</Text>

            {!skill.checked && (
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Add</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.easyApplyButton}
          onPress={() => navigation.navigate('ContactInfo')}
        >
          <Text style={styles.easyApplyText}>Easy Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={22} color="#0C64AE" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#152139',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#152139',
    marginTop: 40,
  },
  subText: {
    marginTop: 5,
    fontSize: 15,
    color: '#33415C',
    lineHeight: 18,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
  infoText: {
    fontSize: 13,
    color: '#33415C',
    marginLeft: 8,
    flex: 1,
  },
  addSkills: {
    color: '#0C64AE',
  },

  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  checkboxBase: {
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    backgroundColor: '#288807',
  },
  uncheckedBox: {
    borderWidth: 1.5,
    borderColor: '#B0B0B0',
  },
  skillText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#33415C',
  },
  addButton: {
    borderWidth: 2,
    borderColor: '#DEE2E6',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: '#0078FF',
    fontSize: 13,
    fontWeight: '500',
  },

  footer: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  easyApplyButton: {
    backgroundColor: '#0C64AE',
    flex: 1,
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  easyApplyText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  bookmarkButton: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#DEE2E6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
