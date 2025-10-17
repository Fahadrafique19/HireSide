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
import ReportModal from './ReportModal';

export default function BottomSheetModal({ visible, onClose }) {
  const [notifications, setNotifications] = useState(true);
  const [reportVisible, setReportVisible] = useState(false);

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
            <Text style={styles.title}>More Options</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={20} color="#33415C" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.row}>
            <Ionicons name="add-circle-outline" size={20} color="#33415C" />
            <Text style={styles.rowText}>Follow (Company Name)</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Ionicons name="notifications-outline" size={20} color="#33415C" />
            <Text style={styles.rowText}>Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              thumbColor={notifications ? '#33415C' : '#ccc'}
            />
          </View>

          <TouchableOpacity style={styles.row}>
            <Ionicons name="remove-circle-outline" size={20} color="#33415C" />
            <Text style={styles.rowText}>Not interested</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>
            <Ionicons name="shield-outline" size={20} color="#33415C" />
            <Text style={styles.rowText}>Why am I seeing this?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.row}
            onPress={() => setReportVisible(true)}
          >
            <Ionicons name="close" size={20} color="#33415C" />
            <Text style={styles.rowText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ReportModal
        visible={reportVisible}
        onClose={() => setReportVisible(false)}
      />
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
    backgroundColor: '#eee',
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
