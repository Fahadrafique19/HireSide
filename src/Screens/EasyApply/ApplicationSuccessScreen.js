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
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Ionicons name="close" size={28} color="#5C677D" />
      </TouchableOpacity>

      <Image
        source={require('../../assets/images/Latter.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Your Application was successfully sent to HireSide!
      </Text>

      <Text style={styles.subtitle}>
        You can keep track of your application on the “Applied” tab of My Jobs
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Continue to App</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
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
    fontSize: 14,
    color: '#5C677D',
    textAlign: 'center',
    marginBottom: 90,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#0C64AE',
    paddingVertical: 13,
    paddingHorizontal: 0,
    borderRadius: 10,
    width: '95%',
    margintop: 100,
    bottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
