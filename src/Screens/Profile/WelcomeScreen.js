import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Ahsan, Welcome Aboard {'\n'}
        Please, proceed to complete your profile.
      </Text>

      <Image
        source={require('../../assets/images/Profile.png')}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('JobType')}
      >
        <Text style={styles.btnText}>Complete profile now</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.skip}>Not now, I’ll complete later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  image: { width: 200, height: 200, resizeMode: 'contain', marginBottom: 20 },
  btn: {
    backgroundColor: '#0C64AE',
    padding: 15,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: { color: '#fff', fontSize: 16 },
  skip: { color: '#555', marginTop: 10 },
});
