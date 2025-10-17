import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function VerifyCodeScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email example@email.com
      </Text>

      <View style={styles.codeRow}>
        <TextInput
          maxLength={1}
          style={styles.codeInput}
          keyboardType="numeric"
        />
        <TextInput
          maxLength={1}
          style={styles.codeInput}
          keyboardType="numeric"
        />
        <TextInput
          maxLength={1}
          style={styles.codeInput}
          keyboardType="numeric"
        />
        <TextInput
          maxLength={1}
          style={styles.codeInput}
          keyboardType="numeric"
          // onSubmitEditing={}
        />
      </View>
      <View style={styles.timer}>
        <Text style={styles.subtitle}>Code Expiring in 00:57</Text>
        <TouchableOpacity>
          <Text style={styles.subtitle}>Didn't receive OTP?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Resend Code</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('NewPassword')}
      >
        <Text style={styles.btnText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 150, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 38, fontWeight: 'bold', marginBottom: 10 },
  subtitle: {
    fontSize: 18,
    color: '#7D8597',
    marginBottom: 20,
    fontWeight: 'semi-bold',
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  codeInput: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 70,
    height: 70,
    textAlign: 'center',
    fontSize: 30,
  },
  link: { color: '#152139', marginBottom: 20, fontWeight: 'bold' },
  btn: {
    backgroundColor: '#ADB5BD',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontSize: 16 },
  timer: { textAlign: 'center', alignItems: 'center' },
});
