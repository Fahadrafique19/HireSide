import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NewsModal({ visible, onClose, navigation }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Ahsan, Let’s customize your feeds</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#333" />
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../assets/images/CoustomFeed.png')}
            style={styles.image}
          />

          <Text style={styles.desc}>
            Follow your favorite companies and be the first one to receive{' '}
            <Text style={{ color: '#0C64AE', fontWeight: '600' }}>
              News updates, Job Alerts, and announcement
            </Text>{' '}
            notifications at instance
          </Text>

          <View style={styles.infoBox}>
            <Ionicons name="bulb" color="#ADB5BD" size={20} />
            <Text style={styles.infoText}>
              Make sure your notifications are enabled in application settings
              and phone settings as well
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              onClose();
              navigation.navigate('NewsUpdateScreen');
            }}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              navigation.navigate('Home');
            }}
          >
            <Text style={styles.skip}>Not now, Remind me later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 300,
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    paddingBottom: 80,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'left',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  desc: {
    fontSize: 17,
    textAlign: '',
    color: '#5C677D',
    marginBottom: 15,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F8FF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  infoText: {
    fontSize: 13,
    color: '#5C677D',
    marginLeft: 8,
    flex: 1,
  },
  btn: {
    backgroundColor: '#0C64AE',
    paddingVertical: 14,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  skip: { color: '#7D8597', fontSize: 14, marginTop: 5, marginBottom: 20 },
});
