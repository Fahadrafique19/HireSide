import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '2',
    title: 'Job Alerts on the go!',
    description:
      'Receive instant notifications on nearby job openings as you pass by. Your dream job might just be around the corner.',
    image: require('../../assets/images/Onboarding.png'),
    bg: require('../../assets/images/BackGround.png'),
  },
  {
    id: '3',
    title: 'No Resume? No Problem!',
    description:
      'Create a profile with ease and apply hassle-free. Elevate your job search without the need for a traditional resume. Its that simple!',
    image: require('../../assets/images/Onboarding2.png'),
    bg: require('../../assets/images/BackGround.png'),
  },
];

export default function OnboardingTwoScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef();

  const handleScroll = event => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };

  const goNext = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentSlide + 1,
        animated: true,
      });
    } else {
      navigation.replace('SignIn');
    }
  };

  const goBack = () => {
    navigation.replace('OnBording');
  };

  const renderItem = ({ item }) => (
    <ImageBackground source={item.bg} style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipBtn}
        onPress={() => navigation.replace('SignIn')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextBtn} onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" color="#fff" size={34} />
        </TouchableOpacity>

        <View style={styles.dots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlide === index && {
                  backgroundColor: '#0C64AE',
                  width: 20,
                },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
          <MaterialIcons name="keyboard-arrow-right" color="#fff" size={34} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: {
    width,
    flex: 1,
    justifyContent: '',
    alignItems: '',
    padding: 20,
    paddingTop: 70,
  },
  image: { width: '100%', height: 300, marginTop: 40 },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#0C64AE',
    textAlign: '',
  },
  description: {
    fontSize: 18,
    color: '#7D8597',
    marginTop: 10,
    textAlign: '',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  dots: { flexDirection: 'row' },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  nextBtn: {
    backgroundColor: '#0C64AE',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
  },
  skipBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#7D8597',
  },
});
