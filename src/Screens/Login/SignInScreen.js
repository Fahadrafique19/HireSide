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

export default function SignInScreen({ navigation }) {
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => {
    // login logic yahan aa sakta hai
    setShowModal(true); // modal khol do
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>

      {/* <TextInput placeholder="Username or Email" style={styles.input} /> */}

      <View style={styles.passContainer}>
        <FontAwesome name="user-o" size={18} color="black" />
        <TextInput placeholder="Username or Email" style={styles.inputPass} />
      </View>

      <View style={styles.passContainer}>
        <Ionicons name="key-outline" size={20} />
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPass}
          style={styles.inputPass}
        />
        <Ionicons
          name={showPass ? 'eye' : 'eye-off'}
          size={20}
          onPress={() => setShowPass(!showPass)}
        />
      </View>

      <View style={styles.row}>
        <CheckBox
          value={remember}
          onValueChange={setRemember}
          tintColors={{ true: '#288807', false: '#33415C' }}
        />
        <Text style={{ flex: 1, color: '#33415C' }}>Remember me</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign in with</Text>
      <View style={styles.socialRow}>
        <Image
          source={require('../../assets/images/Verge.png')}
          style={styles.logo}
        />
        <FontAwesome
          name="google"
          size={22}
          color="#DB4437"
          style={{ marginHorizontal: 15 }}
        />
        <FontAwesome
          name="facebook"
          size={22}
          color="#1877F2"
          style={{ marginHorizontal: 15 }}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link2nd}>
          Don’t have an account?{' '}
          <Text style={{ color: '#0C64AE' }}>Sign Up</Text>
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
  container: { flex: 1, padding: 20, paddingTop: 100, backgroundColor: '#fff' },
  title: { fontSize: 50, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 20, color: '#777', marginBottom: 60 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputPass: { flex: 1, paddingVertical: 12 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  link: { color: '#5C677D' },
  btn: {
    backgroundColor: '#0C64AE',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: { color: '#fff', fontSize: 16 },
  or: { textAlign: 'center', marginVertical: 10, color: '#BEC2CC' },
  link2nd: { color: '#5C677D', alignItems: 'center', textAlign: 'center' },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
    gap: 20,
  },
});
