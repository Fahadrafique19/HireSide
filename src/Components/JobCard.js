import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function JobCard({ job, navigation }) {
  const logoSource =
    typeof job.logo === 'string' ? { uri: job.logo } : job.logo;

  return (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>{job.title}</Text>
        <Ionicons name="bookmark-outline" size={20} color="#373737" />
      </View>

      <View style={styles.row}>
        <View style={styles.tag}>
          <Ionicons
            name="time-outline"
            color="#33415C"
            size={15}
            style={styles.icon}
          />
          <Text style={styles.tagText}>{job.type}</Text>
        </View>
        <View style={styles.tag}>
          <Image
            source={require('../assets/images/WorkFromHome.png')}
            color="#33415C"
            size={15}
            style={styles.icon}
          />
          <Text style={styles.tagText}>{job.location}</Text>
        </View>
        <View style={styles.tag}>
          <Image
            source={require('../assets/images/SalaryPayslips.png')}
            color="#33415C"
            size={15}
            style={styles.icon}
          />
          <Text style={styles.tagText}>{job.salary}</Text>
        </View>
      </View>

      <Text style={styles.subText}>
        {job.applicants} • {job.positions}
      </Text>

      <View style={styles.border}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompanyScreen', { company: job.company })
              }
            >
              <Image source={logoSource} style={styles.logo} />
            </TouchableOpacity>

            <View>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.subText}>{job.city}</Text>
            </View>
          </View>
          <Text style={styles.time}>{job.time}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  border: {
    borderTopWidth: 2,
    borderColor: '#DEE2E6',
  },

  title: { fontSize: 19, fontWeight: '600', color: '#111' },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 10,
    marginBottom: 19,
  },
  tagText: { fontSize: 15, color: '#33415C', fontWeight: '400' },
  icon: { marginRight: 10, fontWeight: '400' },
  subText: { fontSize: 13, color: '#6B7280', marginBottom: 10 },
  company: { fontSize: 14, fontWeight: '500', color: '#111' },
  time: { fontSize: 12, color: '#6B7280' },
  logo: { width: 42, height: 42, borderRadius: 16, marginRight: 8 },
});
