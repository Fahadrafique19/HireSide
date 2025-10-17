import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ReportModal({ visible, onClose }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Report</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={20} color="#33415C" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <Ionicons name="close" size={20} color="#33415C" />
            <Text style={styles.rowText}>Inappropriate Content</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <Ionicons name="close" size={20} color="#33415C" />
            <Text style={styles.rowText}>
              Misleading / Incorrect Information
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <Ionicons name="close" size={20} color="#33415C" />
            <Text style={styles.rowText}>Irrelevant to me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#000' },
  divider: {
    height: 1,

    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  rowText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#33415C',
    fontWeight: '400',
    flex: 1,
  },
});
