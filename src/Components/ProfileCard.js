import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard({ name = 'Arsalan Ahmed', role = 'Senior Graphic Designer' }) {
  return (
    <View style={styles.card}>
      <View style={styles.circleBackground}>
        {/* blue decorative background to mimic screenshot */}
      </View>

      <View style={styles.center}>
        <View style={styles.avatarWrap}>
          <Image
            source={require('../assets/images/userProfile.jpg')}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f7fbff'
  },
  circleBackground: {
    height: 110,
    backgroundColor: '#0a1630', // dark-blue area top - tweak if needed
  },
  center: {
    alignItems: 'center',
    marginTop: -48, // overlap avatar on top shape
    paddingBottom: 18,
    paddingHorizontal: 12,
  },
  avatarWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ddd'
  },
  avatar: { width: '100%', height: '100%', resizeMode: 'cover' },
  name: { fontSize: 16, fontWeight: '700', marginTop: 8 },
  role: { fontSize: 12, color: '#666', marginTop: 4 }
});
