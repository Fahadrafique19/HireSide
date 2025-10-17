
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Modal,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function YourProfileScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [isPublic, setIsPublic] = useState(true);

  const toggleExpand = title => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.progressContainer}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Profile Completion</Text>
            <Text style={styles.progressPercent}>75%</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, { width: '75%' }]} />
          </View>
        </View>

        <View style={styles.cardList}>
          <ProfileCard
            icon="user"
            title="Contact Info"
            expanded={expanded === 'Contact Info'}
            onPress={() => toggleExpand('Contact Info')}
            navigation={navigation}
          >
            <ContactInfoContent onAddNew={() => setShowModal(true)} />
          </ProfileCard>

          <ProfileCard
            icon="user"
            title="About Me"
            expanded={expanded === 'About Me'}
            onPress={() => toggleExpand('About Me')}
            navigation={navigation}
          >
            <AboutMeContent />
          </ProfileCard>

          <ProfileCard
            icon="user"
            title="Analytics"
            expanded={expanded === 'Analytics'}
            onPress={() => toggleExpand('Analytics')}
            navigation={navigation}
          >
            <AnalyticsContent
              isPublic={isPublic}
              toggleSwitch={() => setIsPublic(!isPublic)}
            />
          </ProfileCard>

          <ProfileCard icon="user" title="My Profile" navigation={navigation} />
          <ProfileCard icon="user" title="Skills" navigation={navigation} />
          <ProfileCard icon="user" title="Languages" navigation={navigation} />
          <ProfileCard icon="user" title="Education" navigation={navigation} />
          <ProfileCard icon="user" title="Experience" navigation={navigation} />
          <ProfileCard icon="user" title="Resume/CV" navigation={navigation} />
        </View>
      </ScrollView>

      <Modal
        transparent
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaders}>
                <FontAwesome name="user" size={20} color="#0C64AE" />
                <Text style={styles.modalTitle}>Contact Info</Text>
              </View>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Feather name="x" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Filled Type</Text>
            <TouchableOpacity style={styles.inputBox}>
              <Text style={styles.placeholderText}>Select Type</Text>
              <Feather name="chevron-down" size={18} color="#999" />
            </TouchableOpacity>

            <Text style={styles.inputLabel}>Label</Text>
            <View style={styles.inputBox}>
              <TextInput placeholder="Input" style={styles.textInput} />
              <Feather name="x-circle" size={18} color="#ccc" />
            </View>

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => navigation.navigate('ProfileContactInfoScreen')}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function ProfileCard({ icon, title, expanded, onPress, children, navigation }) {
  const handleIconPress = () => {
    switch (title) {
      case 'About Me':
        navigation.navigate('AboutMe');
        break;
      case 'Contact Info':
        navigation.navigate('ProfileContactInfoScreen');
        break;
      case 'Education':
        navigation.navigate('EducationScreen');
        break;
      case 'Experience':
        navigation.navigate('ExperienceForm');
        break;
      default:
        onPress && onPress();
    }
  };

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        style={[
          styles.card,
          expanded && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
        ]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View style={styles.cardLeft}>
          <View style={styles.iconBox}>
            <FontAwesome name={icon} size={22} color="#0C64AE" />
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <TouchableOpacity onPress={handleIconPress}>
          <MaterialCommunityIcons
            name={expanded ? 'pencil-outline' : 'chevron-right'}
            size={26}
            color={expanded ? '#0C64AE' : '#999'}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      {expanded && <View style={styles.expandedBox}>{children}</View>}
    </View>
  );
}

function ContactInfoContent({ onAddNew }) {
  return (
    <View>
      <View style={styles.infoRow}>
        <Feather name="mail" size={16} color="#666" />
        <Text style={styles.infoText}> example@gmail.com</Text>
      </View>
      <View style={styles.infoRow}>
        <Feather name="phone" size={16} color="#666" />
        <Text style={styles.infoText}> +92 16000000</Text>
      </View>
      <View style={styles.infoRow}>
        <Feather name="map-pin" size={16} color="#666" />
        <Text style={styles.infoText}> Karachi, Sindh, Pakistan</Text>
      </View>

      <TouchableOpacity style={styles.addNewBtn} onPress={onAddNew}>
        <Text style={styles.addNewText}>+ Add New</Text>
      </TouchableOpacity>
    </View>
  );
}

function AboutMeContent() {
  return (
    <View>
      <Text style={styles.aboutText}>
        A creative and detail-oriented graphic designer with 5 years of
        experience in creating visual content for print and digital media.
        Proficient in Adobe Creative Suite, Sketch, and Figma. Passionate about
        creating visually compelling designs that communicate effectively.
      </Text>
    </View>
  );
}

function AnalyticsContent({ isPublic, toggleSwitch }) {
  return (
    <View>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>Make my profile public</Text>
        <Switch value={isPublic} onValueChange={toggleSwitch} />
      </View>
      <View style={styles.infoRow}>
        <Feather name="eye" size={16} color="#666" />
        <Text style={styles.infoText}> 0 Profile Views</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1, backgroundColor: '#F7F8FA' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    marginTop: 40,
  },
  headerTitle: { fontSize: 19, fontWeight: '600', color: '#000' },

  progressContainer: {
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: { fontSize: 19, color: '#333', fontWeight: '500' },
  progressPercent: { fontSize: 15, color: '#0C64AE', fontWeight: '500' },
  progressBarBackground: {
    height: 6,
    borderRadius: 4,
    backgroundColor: '#E6ECF3',
  },
  progressBarFill: { height: 8, borderRadius: 4, backgroundColor: '#1C6DD0' },

  cardList: { paddingHorizontal: 16 },
  cardWrapper: { marginVertical: 6 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitle: { fontSize: 17, color: '#000', fontWeight: '500' },

  expandedBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 6 },
  infoText: { fontSize: 15, color: '#333', marginLeft: 8 },
  addNewBtn: { marginTop: 10, alignSelf: 'center' },
  addNewText: { color: '#0C64AE', fontWeight: '500' },
  aboutText: { color: '#444', fontSize: 15, lineHeight: 22 },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: { backgroundColor: '#fff', borderRadius: 16, padding: 30 },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalHeaders: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: { fontSize: 17, fontWeight: '600', color: '#000' },
  inputLabel: { fontSize: 14, color: '#333', marginTop: 10, marginBottom: 6 },
  inputBox: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: { flex: 1, fontSize: 15, color: '#000' },
  placeholderText: { color: '#999', fontSize: 15 },
  submitBtn: {
    backgroundColor: '#0C64AE',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  submitText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
