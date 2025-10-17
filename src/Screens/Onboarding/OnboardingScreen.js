import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/images/BG.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Image
        source={require('../../assets/images/HireSide_Logo2.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.pathContainer}>
        <Image
          source={require('../../assets/images/Illustration.png')}
          style={styles.path}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.heading}>
        Find the job that
        <View style={styles.pic}>
          <Image
            source={require('../../assets/images/you.png')}
            style={styles.highlight}
            resizeMode="contain"
          />

          <Text style={styles.headings}> Deserve!</Text>
        </View>
      </Text>

      <Text style={styles.subtitle}>
        HireSide is a revolutionary platform that connects talented individuals
        with top companies.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OnBordingtwo')}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get Started</Text>
        <FontAwesome
          style={styles.icon}
          name="arrow-circle-right"
          color="#000"
          size={54}
        />

        <Image
          source={require('../../assets/images/arrow-icons.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    marginTop: 0,
    alignSelf: 'center',
  },
  pathContainer: {
    width: '100%',
    height: 320,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  path: {
    position: 'absolute',
    width: '100%',
    height: 450,
  },
  heading: {
    marginTop: 0,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headings: {
    marginTop: 0,
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    paddingHorizontal: 0,
  },

  pic: {
    flexDirection: 'row',
  },

  highlight: {},
  subtitle: {
    marginTop: 18,
    fontSize: 19,
    color: '#eee',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    position: 'relative',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },

  icon: {
    position: 'absolute',
    right: 10,
  },
});
