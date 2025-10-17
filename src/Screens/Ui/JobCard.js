import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; 

export default function JobCard({ job }) {
  const navigation = useNavigation(); 

  const tagIcons = {
    'Full Time': 'clock',
    'Part Time': 'clock',
    'Remote': 'globe',
    'On-site': 'map-pin',
    'Internship': 'book-open',
    'Contract': 'file-text',
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{job.title}</Text>
        <TouchableOpacity style={styles.bookmark}>
          <Icon name="bookmark" size={30} color="#374151" />
        </TouchableOpacity>
      </View>

    
      <View style={styles.tags}>
        {job.tags.map((t, i) => (
          <View key={`${t}-${i}`} style={styles.tag}>
            <Icon
              name={tagIcons[t] || 'clock'}
              size={14}
              color="#33415C"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.tagText}>{t}</Text>
          </View>
        ))}
      </View>

    
      <View style={styles.infoRow}>
        <Text style={styles.infoSmall}>
          {job.applicants} Applicants  •  {String(job.positions).padStart(2, '0')} Positions  •
        </Text>
        <Text style={styles.match}>{job.match}</Text>
      </View>

      <View style={styles.footerRow}>
        <View style={styles.footerWork}>
          <Text style={styles.company}>{job.company}</Text>
          <Text style={styles.posted}>{job.posted}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewBtn}
          onPress={() => navigation.navigate('JobDetailsScreen')} 
        >
          <Text style={styles.viewText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e6edf3',
    padding: 14,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f1724',
    flex: 1,
    paddingRight: 8,
  },
  bookmark: { padding: 6 },
  tags: {
    flexDirection: 'row',
    marginTop: 4,
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f6f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
    marginTop: 6,
  },
  tagText: { fontSize: 15, color: '#33415C' },
  infoRow: { flexDirection: 'row', gap: 10, marginTop: 25 },
  infoSmall: { color: '#6b7280', fontSize: 16 },
  match: { color: '#1E6605', fontWeight: '600' },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    borderTopWidth: 2,
    borderColor: '#DEE2E6',
  },
  footerWork: { paddingTop: 20 },
  company: { fontWeight: '600', color: '#33415C' },
  posted: { color: '#9aa0a6', fontSize: 12 },
  viewBtn: {
    borderWidth: 2,
    borderColor: '#DEE2E6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  viewText: { color: '#1774c8', fontWeight: '700' },
});
