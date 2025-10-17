import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const JobDetailScreen = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 100],
    extrapolate: 'clamp',
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#ADB5BD" />
        </TouchableOpacity>

        <Animated.View
          style={[styles.headerTitleContainer, { opacity: titleOpacity }]}
        >
          <Text style={styles.headerTitle}>User Experience Designer</Text>
          <Text style={styles.headerSub}>HireSide - Karachi, Sindh</Text>
        </Animated.View>

        <Feather name="share-2" color="#ADB5BD" size={26} />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 110, paddingHorizontal: 20 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          User Experience Designer - Figma Expert
        </Text>

        <Text style={styles.subInfo}>
          Posted 8 days ago • 07 Positions • 450 Applicants
        </Text>

        <Text style={styles.matchText}>63% Skills Matches your profile</Text>

        <View style={styles.companyBox}>
          <Image
            source={require('../../assets/images/LogoThree.png')}
            style={{ width: 45, height: 45 }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.company}>HireSide</Text>
            <Text style={styles.location}>Karachi, Sindh Pakistan</Text>
          </View>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Image
              source={require('../../assets/images/money-bill-wave-solid.png')}
            />
            <Text style={styles.infoTitle}>14k - 25k</Text>
            <Text style={styles.infoLabel}>Salary (Monthly)</Text>
          </View>

          <View style={styles.infoBox}>
            <Image source={require('../../assets/images/sitemap-solid.png')} />
            <Text style={styles.infoTitle}>Intermediate Level</Text>
            <Text style={styles.infoLabel}>Job Level</Text>
          </View>

          <View style={styles.infoBox}>
            <Image source={require('../../assets/images/bule-Clock.png')} />
            <Text style={styles.infoTitle}>Full Time</Text>
            <Text style={styles.infoLabel}>Job Type</Text>
          </View>

          <View style={styles.infoBox}>
            <Image
              source={require('../../assets/images/briefcase-solid.png')}
            />
            <Text style={styles.infoTitle}>On-site</Text>
            <Text style={styles.infoLabel}>Working Mode</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Job Brief</Text>
        <Text style={styles.jobBrief}>
          We are looking for a UX Designer to design software and platforms that
          meet people’s needs. You will combine interfaces and workflows to
          enhance user experience. In this role, you should be an analytical and
          creative designer who is able to grasp user needs and solve problems.
          A strong portfolio of successful UX and other technical projects is
          essential. Ultimately, you will make our product more user-friendly
          and intuitive to attract and retain customers.
        </Text>

        <Text style={styles.sectionTitle}>Responsibilities</Text>
        <Text style={styles.jobBrief}>
          • Understand product specifications and user psychology.
        </Text>

        <Text style={styles.jobBrief}>
          • Understand product specifications and user psychology.
        </Text>

        <Text style={styles.jobBrief}>
          • Understand product specifications and user psychology.
        </Text>
      </Animated.ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => navigation.navigate('Qualification')}
        >
          <Text style={styles.applyText}>Easy Apply</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookmarkBtn}>
          <Ionicons name="bookmark-outline" size={22} color="#0C64AE" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: width,

    backgroundColor: '#fff',
    zIndex: 10,
    elevation: 5,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitleContainer: {
    position: 'absolute',
    left: 60,
    right: 60,
    alignItems: 'center',
    marginTop: 50,
  },
  headerTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
  },
  headerSub: {
    fontSize: 12,
    color: '#666',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 15,
  },
  subInfo: {
    color: '#888',
    fontSize: 13,
    marginTop: 4,
  },
  matchText: {
    color: '#1E6605',
    fontSize: 13,
    marginTop: 4,
  },
  companyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#DEE2E6',
  },
  company: {
    fontWeight: '500',
    color: '#000',
  },
  location: {
    color: '#555',
    fontSize: 13,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoBox: {
    width: '48%',
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    alignItems: 'flex-start',
    marginBottom: 10,
    borderColor: '#DEE2E6',
  },
  infoTitle: {
    fontWeight: '500',
    fontSize: 17,
    color: '#000',
    marginTop: 5,
  },
  infoLabel: {
    color: '#555',
    fontSize: 14,
    marginTop: 2,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginTop: 15,
  },
  jobBrief: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
    lineHeight: 22,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#E9ECEF',
    backgroundColor: '#fff',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#0C64AE',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginRight: 10,
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  bookmarkBtn: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE2E6',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },

  bullet: {
    fontSize: 18,
    marginRight: 8,
  },
});
