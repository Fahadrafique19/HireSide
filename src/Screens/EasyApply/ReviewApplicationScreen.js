import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const ReviewApplicationScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={26} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>
            User Experience Designer - Figma Expert
          </Text>

          <View style={styles.companyRow}>
            <Image
              source={require('../../assets/images/LogoThree.png')}
              style={styles.icons}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.companyName}>HireSide</Text>
              <Text style={styles.companyLocation}>
                Karachi, Sindh Pakistan
              </Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View
              style={[styles.progressStep, { backgroundColor: '#0C64AE' }]}
            />
            <View
              style={[styles.progressStep, { backgroundColor: '#0C64AE' }]}
            />
            <View
              style={[styles.progressStep, { backgroundColor: '#0C64AE' }]}
            />
            <View
              style={[styles.progressStep, { backgroundColor: '#0C64AE' }]}
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Contact Info</Text>

            <View style={styles.editRow}>
              <Text style={styles.editText}>Edit</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditContact')}
              >
                <Octicons name="pencil" color="#7D8597" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>example@gmail.com</Text>

            <Text style={styles.label}>Country Code</Text>
            <Text style={styles.value}>+971 (United Arab Emirates)</Text>

            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>+01 1111 0000 1000</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Resume and Cover Letter</Text>
            <View style={styles.editRow}>
              <Text style={styles.editText}>Edit</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditContact')}
              >
                <Octicons name="pencil" color="#7D8597" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fileCard}>
            <View style={styles.fileRow}>
              <Image
                source={require('../../assets/images/doc.png')}
                style={styles.fileIcon}
                resizeMode="contain"
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.fileName}>Arlene McCoy CV.doc</Text>
                <Text style={styles.fileSize}>567 MB</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.viewText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fileCard}>
            <View style={styles.fileRow}>
              <Image
                source={require('../../assets/images/Pdf.png')}
                style={styles.fileIcon}
                resizeMode="contain"
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.fileName}>
                  Arlene McCoy Cover Letter.pdf
                </Text>
                <Text style={styles.fileSize}>567 MB</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.viewText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Additional Questions</Text>
            <View style={styles.editRow}>
              <Text style={styles.editText}>Edit</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditContact')}
              >
                <Octicons name="pencil" color="#7D8597" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputDisabled}>
            <Text style={styles.placeholderText}>
              Are you familiar with wireframing and prototyping tools such as
              Sketch, Adobe XD, or Figma?
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('ApplicationSuccessScreen')}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewApplicationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
  },
  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  icons: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  companyName: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  companyLocation: {
    color: '#667085',
    fontSize: 13,
  },
  progressContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 3,
    marginTop: 12,
  },
  progressStep: {
    width: 85,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  section: {
    marginTop: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  editText: {
    fontSize: 13,
    color: '#33415C',
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  infoBox: {
    borderWidth: 2,
    borderColor: '#DEE2E6',
    borderRadius: 8,
    padding: 14,
  },
  label: {
    fontSize: 12,
    color: '#8C8C8C',
    marginTop: 6,
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  fileCard: {
    backgroundColor: '#F8F9FA',
    borderWidth: 2,
    borderColor: '#DEE2E6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fileName: {
    color: '#000',
    fontWeight: '500',
  },
  fileSize: {
    color: '#8C8C8C',
    fontSize: 12,
  },
  viewText: {
    color: '#5C677D',
    fontWeight: '600',
    fontSize: 14,
  },
  inputDisabled: {
    borderWidth: 2,
    borderColor: '#DEE2E6',
    borderRadius: 8,
    padding: 20,
  },
  placeholderText: {
    color: '#8C8C8C',
    fontSize: 14,
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  submitButton: {
    backgroundColor: '#0C64AE',
    height: 46,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
