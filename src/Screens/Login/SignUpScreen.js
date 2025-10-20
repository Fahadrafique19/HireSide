import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import WelcomeModal from './WelcomeModal';
import Entypo from 'react-native-vector-icons/Entypo';

export default function SignUpScreen({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information below or register with your social account.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user-o" size={20} color="#666" style={styles.icon} />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="email" color="#666" size={24} />
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="key-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPass}
          style={styles.input}
        />
        <Ionicons
          name={showPass ? 'eye' : 'eye-off'}
          size={20}
          color="#666"
          onPress={() => setShowPass(!showPass)}
        />
      </View>

      <View style={styles.row}>
        <CheckBox
          value={agree}
          onValueChange={setAgree}
          tintColors={{ true: '#0C64AE', false: '#33415C' }}
        />
        <Text style={styles.policy}>
          I accept the <Text style={styles.link}>Terms</Text> &{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>

      <View style={styles.socialRow}>
        <Image
          source={require('../../assets/images/Verge.png')}
          style={styles.logo}
        />
        <FontAwesome
          name="google"
          size={40}
          color="#DB4437"
          style={{ marginHorizontal: 15 }}
        />
        <FontAwesome
          name="facebook"
          size={40}
          color="#1877F2"
          style={{ marginHorizontal: 15 }}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link2nd}>
          Already have an account?{' '}
          <Text style={{ color: '#0C64AE' }}>Sign In</Text>
        </Text>
      </TouchableOpacity>

      <WelcomeModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 40, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 18, color: '#777', marginBottom: 50 },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  icon: { marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#333',
  },

  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  policy: { flex: 1, color: '#33415C', fontSize: 14 },
  link: { color: '#0C64AE', fontWeight: 'bold' },

  btn: {
    backgroundColor: '#0C64AE',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  or: { textAlign: 'center', marginVertical: 10, color: '#BEC2CC' },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
    gap: 20,
  },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  link2nd: { color: '#5C677D', textAlign: 'center' },
});
