import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NewPasswordScreen() {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different from previously used passwords.
      </Text>

      <View style={styles.passContainer}>
        <TextInput
          placeholder="New Password"
          secureTextEntry={!showPass}
          style={styles.inputPass}
        />
        <Ionicons
          name={showPass ? 'eye' : 'eye-off'}
          size={20}
          onPress={() => setShowPass(!showPass)}
        />
      </View>

      <View style={styles.passContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showPass2}
          style={styles.inputPass}
        />
        <Ionicons
          name={showPass2 ? 'eye' : 'eye-off'}
          size={20}
          onPress={() => setShowPass2(!showPass2)}
        />
      </View>

      <Text style={styles.rules}> 8 Characters minimum</Text>
      <Text style={styles.rules}> Must contain one number</Text>
      <Text style={styles.rules}> At least one upper case</Text>
      <Text style={styles.rules}> Confirm Password Match</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Create New Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 150, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 34, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 17, color: '#777', marginBottom: 40 },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ADB5BD',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 25,
    color: '#33415C',
  },
  inputPass: { flex: 1, paddingVertical: 20, color: '#33415C' },
  rules: {
    color: '#33415C',
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '400',
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#ADB5BD',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '400' },
});
