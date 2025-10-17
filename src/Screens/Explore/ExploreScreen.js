import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobCard from '../../Components/JobCard';
import FilterModal from '../../Screens/Explore/FilterModal';

export default function ExploreScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Jobs');
  const [showFilter, setShowFilter] = useState(false);

  const jobs = [
    {
      id: '1',
      title: 'Software Development Manager',
      type: 'Full-time',
      location: 'Remote',
      salary: '250k - 350k',
      applicants: '03 Applicants',
      positions: '07 Positions',
      company: 'Verge Systems pvt ltd.',
      city: 'UAE, Dubai',
      time: '15 minutes ago',
      logo: require('../../assets/images/HireSide-logo.png'),
    },
    {
      id: '2',
      title: 'User Experience Designer',
      type: 'Full-time',
      location: 'Remote',
      salary: '250k - 350k',
      applicants: '0 Applicants',
      positions: '07 Positions',
      company: 'Figma',
      city: 'Karachi, Sindh',
      time: '2 months ago',
      logo: require('../../assets/images/Figma.png'),
    },
    {
      id: '3',
      title: 'Ethical Hacker',
      type: 'Full-time',
      location: 'Remote',
      salary: '250k - 350k',
      applicants: '03 Applicants',
      positions: '07 Positions',
      company: 'Cyber Security Pvt Ltd.',
      city: 'Lahore, Pakistan',
      time: '1 week ago',
      logo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Jobs' && styles.activeTab]}
          onPress={() => setActiveTab('Jobs')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Jobs' && styles.activeTabText,
            ]}
          >
            Jobs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Companies' && styles.activeTab]}
          onPress={() => navigation.navigate('Company')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Companies' && styles.activeTabText,
            ]}
          >
            Companies
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Jobs or Companies Here"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
          <Ionicons name="search" size={28} color="#777" />
        </View>

        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShowFilter(true)}
        >
          <Ionicons name="options-outline" size={35} color="#33415C" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Jobs</Text>

      <FlatList
        data={jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <JobCard job={item} navigation={navigation} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={22} color="#777" />
          <Text style={[styles.navText, { color: '#777' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={22} color="#777" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Explore')}
        >
          <Ionicons name="compass" size={22} color="#0C64AE" />
          <Text style={[styles.navText, { color: '#0C64AE' }]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={22} color="#777" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="person" size={22} color="#777" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Location')}
        >
          <Ionicons name="location-sharp" size={22} color="#777" />
          <Text style={styles.navText}>location</Text>
        </TouchableOpacity>
      </View>

      <FilterModal visible={showFilter} onClose={() => setShowFilter(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 80 },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 30,
    padding: 4,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  activeTab: { backgroundColor: '#0C64AE' },
  tabText: { fontSize: 15, color: '#7D8597' },
  activeTabText: { color: '#FFFFFF', fontWeight: '600' },
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    height: 55,
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },
  filterBtn: {
    marginLeft: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: '#152139',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#777', marginTop: 2, marginBottom: 25 },
});
