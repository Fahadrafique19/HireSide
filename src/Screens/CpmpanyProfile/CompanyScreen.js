import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Modal,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import RatingCircle from '../../Components/RatingCircle';

import { LineChart } from 'react-native-chart-kit';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import JobCard from '../Ui/JobCard';

const { width } = Dimensions.get('window');

const cover = require('../../assets/images/cover.png');
const logo = require('../../assets/images/ProfileLogo.png');

const JOBS = [
  {
    id: '1',
    title: 'Software Development Manager',
    tags: ['Full-time', 'Remote', '250k - 350k'],
    applicants: 30,
    positions: 7,
    match: '93% Matches you',
    company: 'HireSide',
    posted: '  posted 15 Minutes ago',
  },
  {
    id: '2',
    title: 'User Experience Designer',
    tags: ['Full-time', 'On-site', '80k - 120k'],
    applicants: 32,
    positions: 2,
    match: '82% Matches you',
    company: 'HireSide',
    posted: ' posted 1 Day ago',
  },
  {
    id: '3',
    title: 'Frontend Engineer (React Native)',
    tags: ['Contract', 'Remote', '120k - 160k'],
    applicants: 10,
    positions: 3,
    match: '88% Matches you',
    company: 'HireSide',
    posted: ' posted 3 Days ago',
  },
];

const TABS = ['Open Jobs', 'Overview', 'Reviews', 'People', 'Gallery'];

export default function CompanyScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Open Jobs');
  const [selectedItem, setSelectedItem] = useState(null);

  const renderOpenJobs = () => (
    <View style={styles.jobsList}>
      {JOBS.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </View>
  );

  const renderOverview = () => (
    <View style={styles.tabInner}>
      <Text style={styles.sectionTitle}>About</Text>

      <View style={styles.infoCard}>
        <Text style={styles.subHeading}>Slogan</Text>
        <Text style={styles.paragraph}>Find the job you Deserve</Text>

        <Text style={[styles.subHeading, { marginTop: 10 }]}>
          Our Mission & Values
        </Text>
        <Text style={styles.paragraph}>
          Hireside is cloud-based software developed by Verge.Inc. It is a
          revolutionary platform that seamlessly connects talented individuals
          with dynamic organizations to create meaningful career opportunities.
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailsRow}>
        <View style={styles.detailBox}>
          <View style={styles.detailheader}>
            <MaterialIcons name="groups-2" color="#0C64AE" size={30} />
            <Text style={styles.detailText}>1001 - 2501</Text>
          </View>
          <Text style={styles.detailLabel}>Company size</Text>
        </View>

        <View style={styles.detailBox}>
          <View style={styles.detailheader}>
            <Image
              source={require('../../assets/images/location-10.png')}
              style={styles.icons}
              resizeMode="contain"
            />
            <Text style={styles.detailText}>UAE</Text>
          </View>
          <Text style={styles.detailLabel}>Headquarters</Text>
        </View>
      </View>

      <View style={styles.detailsRow}>
        <View style={[styles.detailBox, { width: '100%' }]}>
          <View style={styles.detailheader}>
            <Image
              source={require('../../assets/images/building-03.png')}
              style={styles.icons}
              resizeMode="contain"
            />
            <Text style={styles.detailText}>IT Services and IT Consulting</Text>
          </View>
          <Text style={styles.detailLabel}>Industry</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 40 }]}>
        Growth over time
      </Text>
      <Text style={styles.subLabel}>Number of Employees</Text>

      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#E5E7EB',
          padding: 12,
          marginBottom: 12,
          shadowColor: '#000',
          shadowOpacity: 0.02,
          shadowRadius: 5,
          elevation: 2,
        }}
      >
        <View style={{ position: 'relative' }}>
          <LineChart
            data={{
              labels: ['2020', '2021', '2022', '2023', '2024'],
              datasets: [
                {
                  data: [500, 1000, 1500, 2000, 2500],
                  color: (opacity = 1) => `rgba(12, 100, 174, 1), ${opacity})`,
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get('window').width - 40}
            height={220}
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) =>
                `background: rgba(255, 255, 255, 1);, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#00000',
                fill: '#0000000',
              },
              propsForBackgroundLines: {
                stroke: '#E8E8E8',
              },
            }}
            bezier
            style={{
              borderRadius: 12,
              marginVertical: 8,
            }}
          />

          <View
            style={{
              position: 'absolute',
              top: -35,
              left: '65%',
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '120%',
                height: '00',
              }}
            >
              <Image
                source={require('../../assets/images/Tooltip.png')}
                style={{
                  width: '1000%',
                  height: 100,
                }}
                resizeMode="contain"
              />

              <Image
                source={require('../../assets/images/dot.png')}
                style={
                  {
                    // width:"50%",
                    // height:70,
                  }
                }
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderReviews = () => (
    <View style={styles.tabInner}>
      <View style={styles.mainCard}>
        <View style={styles.reviewCard}>
          <View style={styles.reviewLeft}>
            <View style={styles.logo$content}>
              <Image
                source={require('../../assets/images/Google.png')}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <View style={styles.content}>
                <Text style={styles.reviewTitle}>Google</Text>
                <View style={styles.starsRow}>
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome
                    name="star-half-empty"
                    size={20}
                    color="#fbbf24"
                  />
                </View>
                <Text style={styles.reviewCount}> 418 Reviews</Text>
              </View>
            </View>
          </View>
          <View style={styles.circle}>
            <RatingCircle rating={4.3} />
          </View>
        </View>

        <View style={styles.reviewCard}>
          <View style={styles.reviewLeft}>
            <View style={styles.logo$content}>
              <Image
                source={require('../../assets/images/Indeed.png')}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <View style={styles.content}>
                <Text style={styles.reviewTitle}>Indeed</Text>
                <View style={styles.starsRow}>
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome
                    name="star-half-empty"
                    size={20}
                    color="#fbbf24"
                  />
                </View>
                <Text style={styles.reviewCount}> 201 Reviews</Text>
              </View>
            </View>
          </View>
          <View style={styles.circle}>
            <RatingCircle rating={3.7} />
          </View>
        </View>

        <View style={styles.reviewCard}>
          <View style={styles.reviewLeft}>
            <View style={styles.logo$content}>
              <Image
                source={require('../../assets/images/Glassdoor.png')}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <View style={styles.content}>
                <Text style={styles.reviewTitle}>Google</Text>
                <View style={styles.starsRow}>
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome name="star" size={20} color="#fbbf24" />
                  <FontAwesome
                    name="star-half-empty"
                    size={20}
                    color="#fbbf24"
                  />
                </View>
                <Text style={styles.reviewCount}> 92 Reviews</Text>
              </View>
            </View>
          </View>
          <View style={styles.circle}>
            <RatingCircle rating={4.0} />
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
        Top Pick Reviews
      </Text>

      <View style={styles.topReviewCard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
            style={styles.topReviewerAvatar}
          />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.topReviewerName}>Marvin McKinney</Text>

              <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FontAwesome
                      key={i}
                      name="star"
                      size={14}
                      color="#fbbf24"
                    />
                  ))}
              </View>
            </View>
            <Text style={styles.topReviewerSource}>Google Reviews</Text>
          </View>
        </View>

        <Text style={styles.topReviewText}>
          The HireSide workspace is modern and well-designed, creating a
          comfortable and productive environment for its employees. The office
          is equipped with the latest technology, reflecting HireSide’s
          commitment to innovation...{' '}
          <Text style={{ color: '#0C64AE' }}>Read More</Text>
        </Text>
        <Text style={styles.postedDate}>Posted on: 15 Dec, 2023</Text>
      </View>

      <View style={styles.topReviewCard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
            style={styles.topReviewerAvatar}
          />
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.topReviewerName}>Marvin McKinney</Text>

              <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FontAwesome
                      key={i}
                      name="star"
                      size={14}
                      color="#fbbf24"
                    />
                  ))}
              </View>
            </View>
            <Text style={styles.topReviewerSource}>Google Reviews</Text>
          </View>
        </View>

        <Text style={styles.topReviewText}>
          The HireSide workspace is modern and well-designed, creating a
          comfortable and productive environment for its employees. The office
          is equipped with the latest technology, reflecting HireSide’s
          commitment to innovation...{' '}
          <Text style={{ color: '#0C64AE' }}>Read More</Text>
        </Text>
        <Text style={styles.postedDate}>Posted on: 15 Dec, 2023</Text>
      </View>

      <TouchableOpacity style={styles.fixedWriteReviewBtn} activeOpacity={0.8}>
        <Fontisto name="plus-a" color="#fff" size={22} />
        <Text style={styles.fixedWriteReviewText}>Write a review</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPeople = () => (
    <View style={styles.tabInner}>
      {[
        {
          id: 1,
          name: 'Cody Fisher',
          role: 'CEO HireSide',
          email: 'support@hireside.com',
          image: 'https://i.pravatar.cc/150?img=1',
          socials: ['linkedin', 'facebook', 'instagram', 'twitter'],
        },
        {
          id: 2,
          name: 'Dianne Russell',
          role: 'HR Manager',
          email: 'hr@hireside.com',
          phone1: '+7 (903) 880-91-85',
          phone2: '+7 (903) 134-55-26',
          image: 'https://i.pravatar.cc/150?img=2',
          socials: ['linkedin', 'twitter'],
        },
        {
          id: 3,
          name: 'Jane Cooper',
          role: 'Talent Manager',
          email: 'talentm@hireside.com',
          image: 'https://i.pravatar.cc/150?img=3',
          socials: ['linkedin', 'whatsapp', 'facebook'],
        },
      ].map(person => (
        <View key={person.id} style={styles.personCard}>
          <View style={styles.personHeader}>
            <Image source={{ uri: person.image }} style={styles.personImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.personName}>{person.name}</Text>
              <Text style={styles.personRole}>{person.role}</Text>
            </View>
          </View>

          <View style={styles.infomain}>
            <View style={styles.infoRow}>
              <Feather name="mail" color="#33415C" size={18} />
              <Text style={styles.infoText}>{person.email}</Text>
            </View>
            <View>
              <MaterialIcons
                name="content-copy"
                size={16}
                color="#ADB5BD"
                style={{ marginLeft: 6 }}
              />
            </View>
          </View>

          {person.phone1 && (
            <View style={styles.infomain}>
              <View style={styles.infoRow}>
                <Feather name="phone" color="#33415C" size={18} />
                <Text style={styles.infoText}>{person.phone1}</Text>
              </View>

              <View>
                <MaterialIcons
                  name="content-copy"
                  size={16}
                  color="#ADB5BD"
                  style={{ marginLeft: 6 }}
                />
              </View>
            </View>
          )}
          {person.phone2 && (
            <View style={styles.infomain}>
              <View style={styles.infoRow}>
                <Feather name="phone" color="#33415C" size={18} />
                <Text style={styles.infoText}>{person.phone1}</Text>
              </View>

              <View>
                <MaterialIcons
                  name="content-copy"
                  size={16}
                  color="#ADB5BD"
                  style={{ marginLeft: 6 }}
                />
              </View>
            </View>
          )}

          <View style={styles.socialRow}>
            {person.socials.includes('linkedin') && (
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/images/skill-icons_linkedin.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {person.socials.includes('facebook') && (
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/images/facebook.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {person.socials.includes('instagram') && (
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/images/instagram.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {person.socials.includes('twitter') && (
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/images/devicon_twitter.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {person.socials.includes('whatsapp') && (
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/images/logos_whatsapp-icon.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </View>
  );

  const renderGallery = () => {
    const galleryData = [
      {
        id: '1',
        type: 'image',
        source: require('../../assets/images/gallery1.png'),
      },
      {
        id: '2',
        type: 'image',
        source: require('../../assets/images/gallery2.png'),
      },
      {
        id: '3',
        type: 'video',
        source: require('../../assets/images/gallery3.png'),
      },
      {
        id: '4',
        type: 'image',
        source: require('../../assets/images/gallery4.png'),
      },
      {
        id: '5',
        type: 'video',
        source: require('../../assets/images/gallery5.png'),
      },
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => setSelectedItem(item)}
        style={styles.galleryCard}
      >
        <Image source={item.source} style={styles.galleryImage} />
        {item.type === 'video' && (
          <View style={styles.playIconContainer}>
            <Icon name="play-circle" size={32} color="#fff" />
          </View>
        )}
      </TouchableOpacity>
    );

    return (
      <View style={styles.galleryContainer}>
        <FlatList
          data={galleryData}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          columnWrapperStyle={{ justifyContent: '' }}
          scrollEnabled={false}
        />

        <Modal
          visible={!!selectedItem}
          transparent
          animationType="fade"
          onRequestClose={() => setSelectedItem(null)}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedItem(null)}
            >
              <Icon name="close" size={30} color="#fff" />
            </TouchableOpacity>

            {selectedItem && (
              <Image
                source={selectedItem.source}
                style={styles.fullscreenImage}
                resizeMode="contain"
              />
            )}
          </View>
        </Modal>
      </View>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Open Jobs':
        return renderOpenJobs();
      case 'Overview':
        return renderOverview();
      case 'Reviews':
        return renderReviews();
      case 'People':
        return renderPeople();
      case 'Gallery':
        return renderGallery();
      default:
        return null;
    }
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [180, 80],
    extrapolate: 'clamp',
  });

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#ADB5BD" />
        </TouchableOpacity>

        <Animated.View
          style={[styles.headerTitleContainer, { opacity: titleOpacity }]}
        >
          <Text style={styles.headerSub}>HireSide - Karachi, Sindh</Text>
        </Animated.View>
      </Animated.View>

    
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 200, paddingHorizontal: 20 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
       
        <ImageBackground source={cover} style={styles.cover} resizeMode="cover">
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-sharp" color="#fff" size={24} />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.companyRow}>
          <Image source={logo} style={styles.logo} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}
            >
              <Text style={styles.companyName}>HireSide</Text>
              <Icon
                name="checkmark-circle"
                size={16}
                color="#8F51F3"
                style={{ marginLeft: 6 }}
              />
            </View>
            <Text style={styles.companySub}>Software Development Company</Text>
            <Text style={styles.companySmall}>
              Karachi, Sindh Pakistan • www.hireside.com
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>13+</Text>
                <Text style={styles.statLabel}>Open Jobs</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>2.7k</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNum}>4.5+</Text>
                <Text style={styles.statLabel}>Ratings</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.followBtn} activeOpacity={0.8}>
            <View style={styles.btnRow}>
              <Fontisto name="plus-a" color="#fff" size={24} />
              <Text style={styles.followText}> Follow</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsBar}
        >
          {TABS.map(t => (
            <TouchableOpacity
              key={t}
              onPress={() => setActiveTab(t)}
              style={styles.tabTouchable}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === t ? styles.tabTextActive : null,
                ]}
              >
                {t}
              </Text>
              {activeTab === t && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {renderTabContent()}
      </Animated.ScrollView>
    </>
  );

  // const scrollY = useRef(new Animated.Value(0)).current;

  // const headerHeight = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [100, 100],
  //   extrapolate: 'clamp',
  // });

  // const titleOpacity = scrollY.interpolate({
  //   inputRange: [0, 80],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // });

  // return (

  //   <Animated.ScrollView
  //     contentContainerStyle={{ paddingTop: 110, paddingHorizontal: 20 }}
  //     onScroll={Animated.event(
  //       [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //       { useNativeDriver: false },
  //     )}
  //     showsVerticalScrollIndicator={false}
  //   >

  //     <ImageBackground source={cover} style={styles.cover} resizeMode="cover">
  //       <TouchableOpacity
  //         style={styles.backButton}
  //         activeOpacity={0.7}
  //         onPress={() => navigation.goBack()}
  //       >
  //         <Ionicons name="arrow-back-sharp" color="#fff" size={24} />
  //       </TouchableOpacity>
  //     </ImageBackground>

  //     <View style={styles.companyRow}>
  //       <Image source={logo} style={styles.logo} />
  //       <View style={{ flex: 1, marginLeft: 12 }}>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             marginTop: 10,
  //           }}
  //         >
  //           <Text style={styles.companyName}>HireSide</Text>
  //           <Icon
  //             name="checkmark-circle"
  //             size={16}
  //             color="#8F51F3"
  //             style={{ marginLeft: 6 }}
  //           />
  //         </View>
  //         <Text style={styles.companySub}>Software Development Company</Text>
  //         <Text style={styles.companySmall}>
  //           Karachi, Sindh Pakistan • www.hireside.com
  //         </Text>

  //         <View style={styles.statsRow}>
  //           <View style={styles.statItem}>
  //             <Text style={styles.statNum}>13+</Text>
  //             <Text style={styles.statLabel}>Open Jobs</Text>
  //           </View>
  //           <View style={styles.statItem}>
  //             <Text style={styles.statNum}>2.7k</Text>
  //             <Text style={styles.statLabel}>Followers</Text>
  //           </View>
  //           <View style={styles.statItem}>
  //             <Text style={styles.statNum}>4.5+</Text>
  //             <Text style={styles.statLabel}>Ratings</Text>
  //           </View>
  //         </View>
  //       </View>

  //       <TouchableOpacity style={styles.followBtn} activeOpacity={0.8}>
  //         <View style={styles.btnRow}>
  //           <Fontisto name="plus-a" color="#fff" size={24} />
  //           <Text style={styles.followText}> Follow</Text>
  //         </View>
  //       </TouchableOpacity>
  //     </View>

  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={styles.tabsBar}
  //     >
  //       {TABS.map(t => (
  //         <TouchableOpacity
  //           key={t}
  //           onPress={() => setActiveTab(t)}
  //           style={styles.tabTouchable}
  //         >
  //           <Text
  //             style={[
  //               styles.tabText,
  //               activeTab === t ? styles.tabTextActive : null,
  //             ]}
  //           >
  //             {t}
  //           </Text>
  //           {activeTab === t && <View style={styles.tabIndicator} />}
  //         </TouchableOpacity>
  //       ))}
  //     </ScrollView>

  //     {renderTabContent()}
  //   </Animated.ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', marginTop: 0 },
  cover: { width: '100%', height: 120, justifyContent: 'flex-start' },
  backButton: {
    marginLeft: 12,
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 18,
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 10,
    elevation: 5,
  },

  companyRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: -60,
    marginBottom: 8,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 12,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#DEE2E6',
    backgroundColor: '#FFFFFF',
  },
  companyName: { fontSize: 18, fontWeight: '700', color: '#0b1320' },
  companySub: { color: '#33415C', marginTop: 2 },
  companySmall: { color: '#33415C', marginTop: 4 },
  statsRow: {
    flexDirection: 'row',
    marginTop: 10,
    width: '90%',
    justifyContent: 'space-between',
  },
  statItem: { marginRight: 18 },
  statNum: { fontWeight: '700' },
  statLabel: { color: '#7D8597', fontSize: 12 },
  btnRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  followBtn: {
    backgroundColor: '#0C64AE',
    paddingVertical: 10,
    paddingHorizontal: 150,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 25,
  },
  followText: { color: '#fff', fontWeight: '700' },

  tabsBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eef2f6',
    paddingTop: 18,
  },
  tabTouchable: { marginRight: 25, paddingBottom: 12, alignItems: 'center' },
  tabText: { color: '#7D8597', fontWeight: '600' },
  tabTextActive: { color: '#0C64AE' },
  tabIndicator: {
    height: 5,
    width: 100,
    backgroundColor: '#0C64AE',
    marginTop: 6,
    borderRadius: 2,
  },

  jobsList: { paddingHorizontal: 16, paddingTop: 12 },

  tabInner: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 24 },
  heading: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  subHeading: { fontSize: 19, fontWeight: '700' },
  paragraph: { color: '#5C677D', fontSize: 17, marginTop: 7 },

  reviewBox: {
    backgroundColor: '#f3f6f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  reviewText: { color: '#111827' },

  personRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  personAvatar: { width: 56, height: 56, borderRadius: 8, marginRight: 12 },
  personName: { fontWeight: '700' },
  personRole: { color: '#6b7280' },

  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  galleryImg: { width: (width - 48) / 2, height: 120, borderRadius: 8 },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#152139',
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 5,
    elevation: 2,
  },
  readMore: {
    color: '#0C64AE',
    marginTop: 4,
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailBox: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 14,
    borderRadius: 10,
    alignItems: '',
    justifyContent: 'center',
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  detailText: {
    fontWeight: '800',
    fontSize: 19,
    color: '#152139',
    marginTop: 0,
  },
  detailLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#5C677D',
  },

  detailheader: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  subLabel: {
    color: '#5C677D',
    marginBottom: 4,
  },
  growthImg: {
    width: '100%',
    height: 220,
    marginTop: 0,
    borderRadius: 8,
  },

  reviewCard: {
    flexDirection: 'row',
    padding: 12,
  },

  content: {
    flexDirection: 'colum',
    alignItems: 'flex-start',
  },

  mainCard: {
    flexDirection: 'colum',
    justifyContent: '',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },

  reviewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  logo$content: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  reviewLogo: { width: 82, height: 82, borderRadius: 8 },
  reviewTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#152139',
    marginTop: 5,
  },
  starsRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  starscol: { flexDirection: 'colum', alignItems: 'center', marginTop: 2 },

  reviewCount: { color: '#5C677D', fontSize: 13, marginTop: 5 },

  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  circleRating: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 5,
    borderColor: '#0C64AE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleRatingText: { color: '#0C64AE', fontWeight: '700', fontSize: 16 },

  topReviewCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#fff',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  topReviewerAvatar: { width: 40, height: 40, borderRadius: 20 },
  topReviewerName: { fontWeight: '700', fontSize: 15, color: '#111827' },
  topReviewerSource: { color: '#6b7280', fontSize: 13 },
  topReviewText: {
    color: '#33415C',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  postedDate: { color: '#9aa0a6', fontSize: 12, marginTop: 8 },

  fixedWriteReviewBtn: {
    marginTop: 20,

    backgroundColor: '#0C64AE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  fixedWriteReviewText: {
    color: '#fff',
    fontWeight: '700',
    marginLeft: 6,
    fontSize: 15,
  },

  personCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },

  personHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  personImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 12,
  },

  personName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#152139',
  },

  personRole: {
    fontSize: 14,
    color: '#5C677D',
    marginTop: 2,
  },

  infomain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    marginLeft: 10,
  },

  infoText: {
    color: '#33415C',
    fontSize: 14,
    marginLeft: 8,
  },

  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    flexWrap: 'wrap',
    gap: 10,
  },

  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  galleryContainer: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  galleryHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  galleryCard: {
    width: (width - 0) / 3,
    height: 120,
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 0,
    backgroundColor: '#f5f5f5',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  playIconContainer: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 50,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },
});
