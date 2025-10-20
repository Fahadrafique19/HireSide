import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsModal from './NewsModal';

export default function HomeScreen({ navigation }) {
  const [showNewsModal, setShowNewsModal] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.header}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.welcome}>Welcome,</Text>
              <Text style={styles.username}>Ahsan Qazi</Text>
            </View>
            <Image
              source={require('../../assets/images/HomeLogo.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.title}>Find the job you deserve!</Text>

          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search Job, Company & Role"
              placeholderTextColor="#777"
              style={styles.searchInput}
            />
            <Ionicons name="search" size={20} color="#777" />
          </View>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={styles.activeTab}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.activeTabText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inactiveTab}
            onPress={() => setShowNewsModal(true)}
          >
            <Text style={styles.inactiveTabText}>News Updates</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Jobs for you</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.jobTitle}>Senior Python Developer</Text>
            <Ionicons name="bookmark-outline" size={22} color="#333" />
          </View>

          <View style={styles.tags}>
            <Text style={[styles.urgentTag]}>Urgent</Text>

            <View style={styles.tag}>
              <Image source={require('../../assets/images/Clock.png')} />

              <Text style={styles.tag}>Full-time</Text>
            </View>

            <View style={styles.tag}>
              <Image source={require('../../assets/images/WorkFromHome.png')} />

              <Text style={styles.tag}>Remote</Text>
            </View>
          </View>

          <View style={styles.salary}>
            <Image source={require('../../assets/images/SalaryPayslips.png')} />
            <Text style={styles.tag}>250k - 350k</Text>
          </View>

          <Text style={styles.subInfo}>03 Applicants · 07 Positions</Text>

          <View style={styles.companyRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CompanyScreen')}
            >
              <Image source={require('../../assets/images/Window.png')} />
            </TouchableOpacity>

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.company}>Microsoft, Hyderabad</Text>
              <Text style={styles.location}>Sheedi Goth</Text>
            </View>
            <Text style={styles.time}>5 hours ago</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Jobs by categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesRow}>
          <View style={styles.categoryCard}>
            <Image
              source={require('../../assets/images/source-code-square.png')}
            />
            <Text style={styles.categoryText}>Development</Text>
          </View>
          <View style={styles.categoryCard}>
            <Image source={require('../../assets/images/elements.png')} />
            <Text style={styles.categoryText}>Designer</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={22} color="#0C64AE" />
          <Text style={[styles.navText, { color: '#0C64AE' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={22} color="#777" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Explore')}
        >
          <Ionicons name="compass" size={22} color="#777" />
          <Text style={[styles.navText, { color: '#777' }]}>Explore</Text>
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

      <NewsModal
        visible={showNewsModal}
        onClose={() => setShowNewsModal(false)}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 10,
  },
  top: { backgroundColor: '#E8F0F7', marginTop: 0 },
  avatar: { width: 50, height: 50, borderRadius: 22.5 },
  logo: { width: 100, height: 100, resizeMode: 'contain' },
  welcome: { fontSize: 17, color: '#33415C' },
  username: { fontSize: 17, fontWeight: '600', color: '#33415C' },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: '#111',
    marginHorizontal: 16,
    marginBottom: 0,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 40,
    marginTop: 10,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#333' },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F3F6FB',
    borderRadius: 25,
    marginHorizontal: 16,
    padding: 4,
    marginBottom: 40,
    marginTop: 20,
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#0C64AE',
    borderRadius: 20,
    paddingVertical: 13,
    alignItems: 'center',
  },
  activeTabText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  inactiveTab: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  inactiveTabText: { color: '#555', fontSize: 14 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#111' },
  viewAll: { fontSize: 13, color: '#7D8597', fontWeight: '500' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 16,
    marginVertical: 0,
    marginBottom: 20,
    marginTop: 0,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  jobTitle: { fontSize: 18, fontWeight: '600', color: '#111' },
  tags: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 8,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    alignItems: 'center',
    color: '#333',
    marginRight: 6,

    flexDirection: 'row',
  },
  urgentTag: {
    backgroundColor: '#FFD6D6',
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    fontSize: 12,
    color: '#333',
    marginRight: 6,
  },
  salary: {
    backgroundColor: '#F8F9FA',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subInfo: { fontSize: 12, color: '#777', marginBottom: 12 },
  companyRow: { flexDirection: 'row', alignItems: 'center' },
  company: { fontSize: 14, fontWeight: '600', color: '#111' },
  location: { fontSize: 12, color: '#777' },
  time: { marginLeft: 'auto', fontSize: 12, color: '#777', marginTop: 20 },
  categoriesRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 80,
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: '',
    elevation: 1,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
    color: '#111',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#777', marginTop: 2, marginBottom: 15 },
});
