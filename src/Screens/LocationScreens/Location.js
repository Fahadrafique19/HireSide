import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ApplicationSuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is Your Location?</Text>

      <Text style={styles.subtitle}>To Find Nearby Job availability</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('NearbyJobsScreen')}
      >
        <Text style={styles.buttonText}>Turn on Location</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('HomeDrawer')}
      >
        <Text style={styles.buttonText2}>Continue to App</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ApplicationSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 300,
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#152139',
    textAlign: 'center',
    marginBottom: 10,
    width: '85%',
  },
  subtitle: {
    fontSize: 18,
    color: '#5C677D',
    textAlign: 'center',
    marginBottom: 200,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#0C64AE',
    paddingVertical: 13,
    paddingHorizontal: 0,
    borderRadius: 30,
    width: '95%',
    margintop: 200,
    bottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },

  button2: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 13,
    borderColor: '#DEE2E6',
    borderWidth: 2,
    paddingHorizontal: 0,
    borderRadius: 10,
    width: '95%',
    marginTop: 20,
    bottom: 40,
  },
  buttonText2: {
    color: '#0C64AE',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
