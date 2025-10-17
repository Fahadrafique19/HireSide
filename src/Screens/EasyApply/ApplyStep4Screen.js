import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ApplyScreen = ({ navigation }) => {
  const [familiar, setFamiliar] = useState(null);
  const [research, setResearch] = useState(null);
  const [experience, setExperience] = useState('');
  const [analytics, setAnalytics] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={26} color="#000" />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Text style={styles.headerTitle}>Apply to HireSide </Text>
          <Text style={styles.headerTitles}> 4/4</Text>
        </View>

        <Text style={styles.headerSub}>
          User Experience Designer - Figma Expert
        </Text>

        <View style={styles.progressContainer}>
          <View style={[styles.progressStep, { backgroundColor: '#0C64AE' }]} />
          <View style={[styles.progressStep, { backgroundColor: '#0C64AE' }]} />
          <View style={[styles.progressStep, { backgroundColor: '#0C64AE' }]} />
          <View style={[styles.progressStep, { backgroundColor: '#0C64AE' }]} />
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.sectionTitle}>Work Authorization</Text>

        <Text style={styles.question}>
          This position needs to be filled urgently. Are you available for an
          immediate start?
        </Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setFamiliar(true)}
          >
            <View
              style={[
                styles.radioCircle,
                familiar === true && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setFamiliar(false)}
          >
            <View
              style={[
                styles.radioCircle,
                familiar === false && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>No</Text>
          </TouchableOpacity>
        </View>

        {/* Question 2 */}
        {/* <Text style={styles.question}>
          Have you conducted user research as part of your previous UX design projects?
        </Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setResearch(true)}
          >
            <View style={[styles.radioCircle, research === true && styles.radioSelected]} />
            <Text style={styles.radioLabel}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setResearch(false)}
          >
            <View style={[styles.radioCircle, research === false && styles.radioSelected]} />
            <Text style={styles.radioLabel}>No</Text>
          </TouchableOpacity>
        </View> */}

        {/* Question 3 */}
        {/* <Text style={styles.question}>
          How many years of work experience do you have in User Experience Field?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Write your experience (Eg: 2 years)"
          placeholderTextColor="#A0A0A0"
          value={experience}
          onChangeText={setExperience}
        /> */}

        {/* Question 4 */}
        {/* <Text style={styles.question}>
          Which analytics tools have you used to gather insights about user behavior?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Write your answer here"
          placeholderTextColor="#A0A0A0"
          value={analytics}
          onChangeText={setAnalytics}
        /> */}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#0C64AE" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('ReviewApplicationScreen')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ApplyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 9,
    color: '#000',
  },

  headerTitles: { color: '#667085', marginTop: 4, fontSize: 18 },
  headerSub: {
    color: '#667085',
    fontSize: 14,
    marginTop: 4,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: '',
    marginVertical: 10,

    borderRadius: 3,
    marginTop: 12,
  },
  progressStep: {
    width: 85,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  form: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#152139',
    marginBottom: 18,
  },
  question: {
    color: '#33415C',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  radioCircle: {
    width: 19,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ADB5BD',
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: '#0C64AE',
  },
  radioLabel: {
    color: '#5C677D',
    fontSize: 19,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ADB5BD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 20,
    fontSize: 14,
    marginBottom: 20,
    color: '#152139',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 350,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#5C677D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#0C64AE',
    flex: 1,
    height: 44,
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
