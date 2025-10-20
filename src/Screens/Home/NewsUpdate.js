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
import Entypo from 'react-native-vector-icons/Entypo';
import ReportModal from './ReportModal';
import BottomSheetModal from './BottomSheetModal';

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('News');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Ionicons name="search" size={25} color="#777" />
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Jobs' && styles.activeTab]}
            onPress={() => navigation.navigate('Home')}
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
            style={[styles.tab, activeTab === 'News' && styles.activeTab]}
            onPress={() => setActiveTab('News')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'News' && styles.activeTabText,
              ]}
            >
              News Updates
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Curated For You</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
            }}
            style={styles.cardImage}
          />

          <View style={styles.cardBadge}>
            <Text style={styles.badgeText}>Popular</Text>
          </View>

          <Text style={styles.cardTitle}>
            Bazaar Raises $70 Million in Series B to Digitize Pakistan's Digital
            Retail
          </Text>
          <View style={styles.cardFooter}>
            <Image
              source={require('../../assets/images/Logonews.png')}
              style={{ width: 60, height: 30 }}
            />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Entypo name="dots-three-vertical" color="#000" size={22} />
            </TouchableOpacity>

            <BottomSheetModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Featured</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBadge}>
            <Text style={styles.badgeText}>Featured</Text>
          </View>
          <Text style={styles.cardTitle}>
            A New Startup Disrupts Pakistan’s Hiring Market with AI
          </Text>
          <View style={styles.cardFooter}>
            <Image
              source={require('../../assets/images/Logonews.png')}
              style={{ width: 60, height: 30 }}
            />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Entypo name="dots-three-vertical" color="#000" size={22} />
            </TouchableOpacity>

            <BottomSheetModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 50,
  },
  avatar: { width: 50, height: 50, borderRadius: 20 },
  welcome: { fontSize: 14, color: '#777' },
  username: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  logo: { width: 100, height: 50, resizeMode: 'contain' },
  title: { fontSize: 25, fontWeight: '600', paddingHorizontal: 15 },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#e8e0e080',
  },
  searchInput: { flex: 1, marginRight: 10 },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 25,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  activeTab: { backgroundColor: '#0C64AE' },
  tabText: { fontSize: 14, color: '#777' },
  activeTabText: { color: '#fff', fontWeight: '600' },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  viewAll: { fontSize: 15, color: '#7D8597' },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: { width: '100%', height: 150 },
  cardBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#030E1880',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '500' },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    padding: 10,
    color: '#000',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  cardSource: { marginLeft: 5, fontSize: 12, color: '#000' },
  cardTime: { marginLeft: 'auto', fontSize: 12, color: '#777' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    paddingBottom: 0,
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#777' },
});
