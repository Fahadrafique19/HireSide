// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

// export default function ExperienceScreen({ navigation }) {
//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Feather name="arrow-left" size={22} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Experience</Text>
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.label}>Job Title</Text>
//         <TextInput placeholder="UI/UX Designer" style={styles.input} placeholderTextColor="#999" />

//         <Text style={styles.label}>Company</Text>
//         <TextInput placeholder="HireSide Inc." style={styles.input} placeholderTextColor="#999" />

//         <Text style={styles.label}>Duration</Text>
//         <TextInput placeholder="Jan 2021 - Present" style={styles.input} placeholderTextColor="#999" />
//       </View>

//       <TouchableOpacity style={styles.saveBtn}>
//         <Text style={styles.saveText}>Save</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F8FAFF', padding: 20 },
//   header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   headerTitle: { fontSize: 20, fontWeight: '600', color: '#000', marginLeft: 10 },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 15,
//     elevation: 3,
//   },
//   label: { color: '#333', fontSize: 14, marginTop: 10, marginBottom: 5 },
//   input: {
//     borderWidth: 1,
//     borderColor: '#E6E6E6',
//     borderRadius: 10,
//     padding: 10,
//     fontSize: 14,
//     color: '#000',
//   },
//   saveBtn: {
//     backgroundColor: '#2F66F6',
//     borderRadius: 12,
//     paddingVertical: 14,
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   saveText: { color: '#fff', fontSize: 16, fontWeight: '600' },
// });
