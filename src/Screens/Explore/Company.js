import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import CompanyFilterModal from '../../Screens/Explore/CompanyFilterModal';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExploreScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Companies');
  const [followed, setFollowed] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [companies, setCompanies] = useState([
    {
      id: '1',
      name: 'WebHR - All-in-one HR Software',
      category: 'SaaS Product',
      positions: '02 Open Positions',
      logo: require('../../assets/images/HR Software.png'),
    },
    {
      id: '2',
      name: 'Iselectrics',
      category: 'Electricity, heat, gas, and water',
      positions: '02 Open Positions',
      logo: require('../../assets/images/Iselectrics.logo.png'),
    },
    {
      id: '3',
      name: 'Verge Systems',
      category: 'Software Development',
      positions: '02 Open Positions',
      logo: require('../../assets/images/VergeSystems-profile-logo.png'),
    },
    {
      id: '4',
      name: 'Toughzap Limited Card',
      category: 'Mining Industry',
      positions: '02 Open Positions',
      logo: require('../../assets/images/Toughzap-logo.png'),
    },
    {
      id: '5',
      name: 'British Airways',
      category: 'Airline Services',
      positions: '02 Open Positions',
      logo: require('../../assets/images/profile_logo4.png'),
    },
  ]);

  const toggleFollow = id => {
    setFollowed(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const removeCompany = id => {
    setCompanies(prev => prev.filter(item => item.id !== id));
  };

  const renderCompany = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => removeCompany(item.id)}
        style={styles.closeIcon}
      >
        <Ionicons name="close-outline" size={20} color="#888" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CompanyScreen')}>
          <Image source={item.logo} style={styles.logo} />
        </TouchableOpacity>

        {/* <Ionicons
          name="checkmark-circle"
          size={18}
          color="#8F51F3"
          style={styles.verifiedIcon}
        /> */}
      </View>

      <Text style={styles.companyName}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>

      <View style={styles.positionRow}>
        <Ionicons name="briefcase-outline" size={14} color="#6c757d" />
        <Text style={styles.positions}>{item.positions}</Text>
      </View>

      <TouchableOpacity
        style={[styles.followBtn, followed[item.id] && styles.followingBtn]}
        onPress={() => toggleFollow(item.id)}
      >
        <Ionicons
          name={followed[item.id] ? 'checkmark' : 'add-circle-outline'}
          size={14}
          color={followed[item.id] ? '#fff' : '#0C64AE'}
        />

        <Text
          style={[styles.followText, followed[item.id] && styles.followingText]}
        >
          {followed[item.id] ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Jobs' && styles.activeTab]}
          onPress={() => navigation.navigate('Explore')}
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
          onPress={() => setActiveTab('Companies')}
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
          <Ionicons name="search" size={22} color="#777" />
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShowFilter(true)}
        >
          <Ionicons name="options-outline" size={28} color="#33415C" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Popular Companies</Text>

      <FlatList
        data={companies}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={renderCompany}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
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

      <CompanyFilterModal
        visible={showFilter}
        onClose={() => setShowFilter(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 90 },

  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 30,
    padding: 4,
    marginBottom: 35,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  activeTab: { backgroundColor: '#0C64AE' },
  tabText: { fontSize: 15, color: '#7D8597' },
  activeTabText: { color: '#FFFFFF', fontWeight: '600' },

  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
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
    marginBottom: 15,
    color: '#152139',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    alignItems: 'center',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  verifiedIcon: {
    position: 'absolute',
    right: -8,
    bottom: -2,
  },
  companyName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#152139',
    marginTop: 8,
    textAlign: 'center',
  },
  category: {
    fontSize: 13,
    color: '#7D8597',
    marginTop: 3,
    textAlign: 'center',
  },
  positionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  positions: {
    fontSize: 13,
    color: '#6c757d',
    marginLeft: 5,
  },
  followBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6c757d',
    borderRadius: 30,
    paddingVertical: 6,
    marginTop: 10,
    width: '90%',
  },
  followingBtn: {
    backgroundColor: '#0C64AE',
    borderColor: '#0C64AE',
  },
  followText: {
    color: '#0C64AE',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 4,
  },
  followingText: {
    color: '#fff',
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
