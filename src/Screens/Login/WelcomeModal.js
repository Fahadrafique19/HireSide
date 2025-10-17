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

export default function WelcomeModal({ visible, onClose, navigation }) {
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
            <Text style={styles.title}>Ahsan, Welcome Aboard</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#333" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            Please, proceed to complete your profile.
          </Text>

          <Image
            source={require('../../assets/images/Profile.png')}
            style={styles.image}
          />

          <Text style={styles.desc}>
            For personalized job recommendations and faster interview
            invitations, we'd love to learn a little more about you.
          </Text>

          <View style={styles.infoBox}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#0C64AE"
            />
            <Text style={styles.infoText}>
              Recruiters search by specific skills. Complete your profile to get
              noticed and stand out.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              onClose();
              navigation.navigate('JobTpye');
            }}
          >
            <Text style={styles.btnText}>Complete profile now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              navigation.navigate('HomeDrawer');
            }}
          >
            <Text style={styles.skip}>Not now, I’ll explore later</Text>
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
    paddingTop: 350,
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    paddingBottom: 40,
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  desc: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
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
    fontSize: 12,
    color: '#555',
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
  skip: { color: '#0C64AE', fontSize: 14, marginTop: 5 },
});
