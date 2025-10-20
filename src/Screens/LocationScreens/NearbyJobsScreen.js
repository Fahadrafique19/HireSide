import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { width, height } = Dimensions.get('window');

export default function NearbyJobsScreen() {
  const [region, setRegion] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const jobs = [
    {
      id: 1,
      title: 'User Experience Designer',
      type: 'Full-time',
      location: 'Remote',
      salary: '250k - 350k',
      applicants: '03 Applicants',
      positions: '07 Positions',
      company: 'Figma',
      city: 'Karachi, Sindh',
      time: '2 months ago',
      logo: require('../../assets/images/Figma.png'),
      coordinates: { latitude: 24.851, longitude: 67.0 },
    },
    {
      id: 2,
      title: 'Frontend Developer',
      type: 'Part-time',
      location: 'On-site',
      salary: '180k - 250k',
      applicants: '05 Applicants',
      positions: '02 Positions',
      company: 'Google',
      city: 'Hyderabad, Sindh',
      time: '1 month ago',
      logo: require('../../assets/images/Figma.png'),
      coordinates: { latitude: 17.4065, longitude: 78.4772 },
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.littlebox}>
        <Text style={styles.title}>{item.title}</Text>
        <Feather name="bookmark" color="#33415C" size={24} />
      </View>

      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <SimpleLineIcons name="clock" color="#33415C" size={12} />
          <Text style={styles.tagText}>{item.type}</Text>
        </View>
        <View style={styles.tag}>
          <Image source={require('../../assets/images/WorkFromHome.png')} />
          <Text style={styles.tagText}>{item.location}</Text>
        </View>
        <View style={styles.tag}>
          <Image source={require('../../assets/images/SalaryPayslips.png')} />
          <Text style={styles.tagText}>{item.salary}</Text>
        </View>
      </View>

      <Text style={styles.subText}>
        {item.applicants} • {item.positions}
      </Text>

      <View style={styles.companyRow}>
        <View style={styles.company_Location}>
          <Image source={item.logo} style={styles.logo} />

          <View>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.location}>{item.city}</Text>
          </View>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        provider=""
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {jobs.map(job => (
          <Marker
            key={job.id}
            coordinate={job.coordinates}
            title={job.company}
            description={job.title}
          >
            <Image
              source={require('../../assets/images/PeopleLocation.png')}
              style={{ width: 300, height: 300 }}
            />
          </Marker>
        ))}
      </MapView>

      <View style={styles.searchBox}>
        <TextInput placeholder="Karachi" style={styles.input} />
        <Ionicons name="location-outline" size={18} color="#5C677D" />
      </View>

      <View style={styles.carouselContainer}>
        <Carousel
          loop
          width={width * 0.9}
          height={210}
          autoPlay={false}
          data={jobs}
          scrollAnimationDuration={800}
          renderItem={({ item }) => renderCard({ item })}
          style={{ alignSelf: 'center' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  searchBox: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    height: 45,
  },
  input: { marginLeft: 8, flex: 1, fontSize: 15 },
  carouselContainer: { position: 'absolute', bottom: 30, padding: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 6 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 6,
  },
  tagText: { marginLeft: 4, color: '#33415C', fontSize: 14 },
  subText: { fontSize: 14, color: '#33415C', marginBottom: 10 },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { width: 30, height: 30, borderRadius: 5, marginRight: 8 },
  company: { fontSize: 14, fontWeight: '600', color: '#000' },
  location: { fontSize: 12, color: '#555' },
  time: { fontSize: 11, color: '#999' },
  company_Location: { flexDirection: 'row', alignItems: 'center' },
  littlebox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
