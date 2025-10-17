import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FilterModal({ visible, onClose }) {
  const [easyApply, setEasyApply] = useState(true);
  const [nearBy, setNearBy] = useState(false);
  const [country, setCountry] = useState('Pakistan');
  const [city, setCity] = useState('Select City');
  const [industry, setIndustry] = useState('Select Industry');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [selectedCities, setSelectedCities] = useState(['Islamabad', 'Lahore']);

  const countries = ['Pakistan', 'UAE', 'India', 'USA', 'UK'];
  const cities = [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Dubai',
    'Sharjah',
    'Delhi',
    'London',
  ];

  const industries = [
    'Information Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Construction',
    'Marketing',
    'Hospitality',
    'Engineering',
  ];

  const handleCitySelect = item => {
    if (!selectedCities.includes(item)) {
      setSelectedCities([...selectedCities, item]);
    }
    setShowCityDropdown(false);
  };

  const removeCity = item => {
    setSelectedCities(selectedCities.filter(c => c !== item));
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.indicator} />

          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filter Options</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#152139" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>Currently Hiring</Text>
              <Switch
                value={easyApply}
                onValueChange={setEasyApply}
                thumbColor="#fff"
                trackColor={{ false: '#D1D5DB', true: '#0C64AE' }}
              />
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>Near by Companies</Text>
              <Switch
                value={nearBy}
                onValueChange={setNearBy}
                thumbColor="#fff"
                trackColor={{ false: '#D1D5DB', true: '#0C64AE' }}
              />
            </View>

            <Text style={styles.sectionTitle}>Location</Text>

            <View style={styles.dropdownRow}>
              <View style={styles.dropdown}>
                <TouchableOpacity
                  style={styles.dropdownHeader}
                  onPress={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setShowCityDropdown(false);
                    setShowIndustryDropdown(false);
                  }}
                >
                  <View>
                    <Text style={styles.dropdownValue}>{country}</Text>
                  </View>
                  <Ionicons name="chevron-down" size={18} color="#555" />
                </TouchableOpacity>

                {showCountryDropdown && (
                  <View style={styles.dropdownList}>
                    {countries.map(item => (
                      <TouchableOpacity
                        key={item}
                        style={styles.dropdownItem}
                        onPress={() => {
                          setCountry(item);
                          setShowCountryDropdown(false);
                        }}
                      >
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>

              <View style={styles.dropdown}>
                <TouchableOpacity
                  style={styles.dropdownHeader}
                  onPress={() => {
                    setShowCityDropdown(!showCityDropdown);
                    setShowCountryDropdown(false);
                    setShowIndustryDropdown(false);
                  }}
                >
                  <View>
                    <Text style={styles.dropdownValue}>{city}</Text>
                  </View>
                  <Ionicons name="chevron-down" size={18} color="#555" />
                </TouchableOpacity>

                {showCityDropdown && (
                  <View style={styles.dropdownList}>
                    {cities.map(item => (
                      <TouchableOpacity
                        key={item}
                        style={styles.dropdownItem}
                        onPress={() => handleCitySelect(item)}
                      >
                        <Text style={styles.dropdownItemText}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>

            <View style={styles.cityChips}>
              {selectedCities.map((item, i) => (
                <View key={i} style={styles.chip}>
                  <Text style={styles.chipText}>{item}</Text>
                  <TouchableOpacity onPress={() => removeCity(item)}>
                    <Ionicons name="close" size={14} color="#152139" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Industry</Text>
            <View style={styles.dropdown}>
              <TouchableOpacity
                style={styles.dropdownHeader}
                onPress={() => {
                  setShowIndustryDropdown(!showIndustryDropdown);
                  setShowCountryDropdown(false);
                  setShowCityDropdown(false);
                }}
              >
                <View>
                  <Text style={styles.dropdownValue}>{industry}</Text>
                </View>
                <Ionicons name="chevron-down" size={18} color="#555" />
              </TouchableOpacity>

              {showIndustryDropdown && (
                <View style={styles.dropdownList}>
                  {industries.map(item => (
                    <TouchableOpacity
                      key={item}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setIndustry(item);
                        setShowIndustryDropdown(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Show 300 Results</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
    maxHeight: '100%',
  },
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 17, fontWeight: '600', color: '#152139' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  switchLabel: { fontSize: 17, color: '#152139' },
  sectionTitle: {
    fontSize: 17,
    color: '#152139',
    marginTop: 25,
    marginBottom: 10,
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdown: { flex: 0.48, position: 'relative' },
  dropdownHeader: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownValue: { fontSize: 17, color: '#6B7280', fontWeight: '500' },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#F3F4F6',
  },
  dropdownItemText: { fontSize: 14, color: '#152139' },
  cityChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    marginBottom: 20,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: { fontSize: 17, color: '#152139', marginRight: 4 },
  button: {
    backgroundColor: '#0C64AE',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 30,
    paddingBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
});
