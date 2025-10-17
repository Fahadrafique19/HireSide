import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ApplyStep2Screen() {
  const navigation = useNavigation();
  const [files, setFiles] = useState([
    { id: 1, name: 'Arlene McCoy CV.doc', size: '567 MB', type: 'doc' },
    {
      id: 2,
      name: 'Arlene McCoy Cover Letter.pdf',
      size: '567 MB',
      type: 'pdf',
    },
  ]);

  const handleAddFile = () => {
    const newFile = {
      id: Date.now(),
      name: 'New Document.doc',
      size: '300 MB',
      type: 'doc',
    };
    setFiles([...files, newFile]);
  };

  const handleRemoveFile = id => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#1E1E1E" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: '' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'Center' }}>
          <Text style={styles.stepTitle}>Apply to HireSide </Text>
          <Text style={styles.stepSubtitles}> 2/4</Text>
        </View>

        <Text style={styles.stepSubtitle}>
          User Experience Designer - Figma Expert
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressDot, { backgroundColor: '#0C64AE' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#0C64AE' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#E0E0E0' }]} />
        <View style={[styles.progressDot, { backgroundColor: '#E0E0E0' }]} />
      </View>

      <Text style={styles.Title}>Upload Resume, CV or Cover letter </Text>

      <View style={styles.uploadBox}>
        {/* <Icon name="cloud-upload-outline" size={36} color="#9CA3AF" /> */}
        <MaterialCommunityIcons
          name="cloud-download"
          color="#CED4DA"
          size={46}
        />
        <Text style={styles.uploadText}>
          Browse and choose the files you want to upload
        </Text>
        <Text style={styles.uploadSubtext}>
          Total size should not exceed 2 MB
        </Text>
        <TouchableOpacity style={styles.addFilesBtn} onPress={handleAddFile}>
          <Icon name="add" size={20} color="#fff" />
          <Text style={styles.addFilesText}>Add Files</Text>
        </TouchableOpacity>
      </View>

      {files.map(file => (
        <View key={file.id} style={styles.fileCard}>
          <View style={styles.fileInfo}>
            <View
              style={[
                styles.fileIcon,
                {
                  backgroundColor: file.type === 'pdf' ? '#F87171' : '#60A5FA',
                },
              ]}
            >
              <FontAwesome
                name={file.type === 'pdf' ? 'file-pdf-o' : 'file-word-o'}
                size={18}
                color="#fff"
              />
            </View>
            <View>
              <Text style={styles.fileName}>{file.name}</Text>
              <Text style={styles.fileSize}>{file.size}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleRemoveFile(file.id)}>
            <Icon name="close" size={30} color="#5C677D" />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={30} color="#5C677D" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => navigation.navigate('ApplyStep3Screen')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 34,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#33415C',
    marginTop: 0,
  },

  stepSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },

  stepSubtitles: {
    fontSize: 17,
    color: '#6B7280',
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: '',
    marginVertical: 20,

    height: 8,
    borderRadius: 3,
    marginTop: 12,
  },
  progressDot: {
    width: 85,
    height: 6,
    borderRadius: 10,
    marginHorizontal: 4,
  },

  Title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#152139',
    marginBottom: 10,
    padding: 10,
  },

  uploadBox: {
    borderWidth: 1,
    borderColor: '#DEE2E6',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 25,
    marginBottom: 15,
  },
  uploadText: {
    color: '#33415C',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 700,
  },
  uploadSubtext: {
    color: '#7D8597',
    fontSize: 14,
    marginBottom: 15,
  },
  addFilesBtn: {
    flexDirection: 'row',
    backgroundColor: '#0C64AE',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  addFilesText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  fileCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#DEE2E6',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
  fileSize: {
    fontSize: 12,
    color: '#6B7280',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
    marginBottom: 20,
  },
  backBtn: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#5C677D',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextBtn: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#0C64AE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  nextText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
