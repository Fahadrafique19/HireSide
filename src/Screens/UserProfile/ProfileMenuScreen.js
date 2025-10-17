import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PersonalInformationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={32} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Information</Text>
        <View style={{ width: 22 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/Profile Header.png')}
          style={styles.avatar}
        />

        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Profile Completion</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <Text style={styles.progressPercent}>75%</Text>

          <View style={styles.stepBar}>
            {Array(5)
              .fill()
              .map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.stepBox,
                    i < 3 ? { backgroundColor: '#D9D9D9' } : null,
                  ]}
                />
              ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>
            A creative and detail-oriented graphic designer with 5 years of
            experience in creating visual content for print and digital media.
            Proficient in Adobe Creative Suite, Sketch, and Figma. Passionate
            about creating visually compelling designs that communicate
            information effectively.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <Text style={styles.languageList}>
            English · Urdu · Sindhi · Panjabi
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {['Photoshop', 'Illustrator', 'Figma', 'InDesign'].map(
              (skill, i) => (
                <View key={i} style={styles.skillTag}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ),
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1ff',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0978e0ff',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  nameContainer: { marginTop: 12, alignItems: 'center' },
  name: { fontSize: 18, fontWeight: '700', color: '#222' },
  designation: { color: '#777', marginTop: 4 },

  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
    width: '90%',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0C64AE',
  },
  progressPercent: {
    textAlign: 'right',
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  stepBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stepBox: {
    width: '18%',
    height: 30,
    backgroundColor: '#E4E4E4',
    borderRadius: 0,
    marginBottom: 70,
  },

  section: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
    marginBottom: 6,
  },
  aboutText: {
    color: '#555',
    fontSize: 17,
    lineHeight: 20,
  },
  languageList: {
    fontSize: 15,
    color: '#555',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 9,
  },
  skillTag: {
    backgroundColor: '#EEF5FF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#2A6EBB',
    fontSize: 13,
  },
});
