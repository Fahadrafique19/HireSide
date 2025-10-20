import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" color="#5C677D" size={34} />
        </TouchableOpacity>

        <View style={styles.profileCard}>
          <Image
            source={require('../assets/images/userProfile.jpg')}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Arsalan Ahmed</Text>
            <Text style={styles.role}>Senior Graphic Designer</Text>
            <View style={styles.locationRow}>
              <Icon name="location-outline" size={14} color="#fff" />
              <Text style={styles.location}>Karachi, Pakistan</Text>
            </View>
          </View>
        </View>

        <View style={styles.progressWrapper}>
          <Text style={styles.progressLabel}>Profile Completion</Text>
          <View style={styles.progresspercent}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            <Text style={styles.percent}>75%</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItem('person-outline', 'Personal Information', () =>
            navigation.navigate('YourProfileScreen'),
          )}
          {menuItem('document-text-outline', 'My Resume', () =>
            navigation.navigate('MyResumeScreen'),
          )}
          {menuItem('briefcase-outline', 'My Jobs', () =>
            navigation.navigate('MyJobsScreen'),
          )}
          {menuItem('bookmark-outline', 'Saved', () =>
            navigation.navigate('SavedJobsScreen'),
          )}
          {menuItem('settings-outline', 'Account Setting', () =>
            navigation.navigate('AccountSettingScreen'),
          )}

          <View style={styles.divider} />

          {menuItem('shield-checkmark-outline', 'Privacy Policy', () =>
            navigation.navigate('PrivacyPolicyScreen'),
          )}
          {menuItem('information-circle-outline', 'About HireSide', () =>
            navigation.navigate('AboutScreen'),
          )}
          {menuItem('people-outline', 'Invite Friends', () =>
            navigation.navigate('InviteFriendsScreen'),
          )}
          {menuItem('chatbubble-ellipses-outline', 'Give Feedback', () =>
            navigation.navigate('FeedbackScreen'),
          )}
          {menuItem('cloud-download-outline', 'Check for Update', () =>
            navigation.navigate('UpdateScreen'),
          )}
        </View>

        <TouchableOpacity
          style={styles.logoutRow}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Icon name="log-out-outline" size={18} color="#E64646" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const menuItem = (icon, label, onPress) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress} key={label}>
    <View style={styles.menuLeft}>
      <Icon name={icon} size={20} color="#000" />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <Icon name="chevron-forward" size={18} color="#9EA3AE" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  back: {
    marginHorizontal: 16,
    marginTop: 30,
  },

  profileCard: {
    backgroundColor: '#0C64AE',
    marginTop: 30,
    marginHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: { marginLeft: 12, flex: 1 },
  name: { color: '#fff', fontSize: 15, fontWeight: '700' },
  role: { color: '#E3E8F0', fontSize: 12, marginTop: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  location: { color: '#E3E8F0', fontSize: 11, marginLeft: 4 },

  progressWrapper: { marginHorizontal: 16, marginTop: 12 },
  progressLabel: { color: '#222', fontSize: 12, marginBottom: 6 },
  progresspercent: {},
  progressBar: {
    height: 7,
    backgroundColor: '#E4E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '90%',
  },
  progressFill: { width: '75%', height: '100%', backgroundColor: '#0C64AE' },
  percent: {
    alignSelf: 'flex-end',
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  },

  menuSection: { marginTop: 8 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuText: { marginLeft: 16, color: '#000', fontSize: 14 },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
    marginVertical: 6,
  },

  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderTopWidth: 0.5,
    borderTopColor: '#E5E7EB',
  },
  logoutText: {
    color: '#E64646',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
});

export default DrawerContent;
