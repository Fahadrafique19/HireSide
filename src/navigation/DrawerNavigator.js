// src/navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/Home/HomeScreen';
import ExploreScreen from '../Screens/Explore/ExploreScreen';
import ProfileMenuScreen from '../Screens/UserProfile/ProfileMenuScreen';
import NewsModal from '../Screens/Home/NewsModal';
import NewsUpdateScreen from '../Screens/Home/NewsUpdate';
import DrawerContent from './DrawerContent';

import JobTypeScreen from '../Screens/Profile/JobTypeScreen';
import ExperienceScreen from '../Screens/Profile/ExperienceScreen';
import WorkModelScreen from '../Screens/Profile/WorkModelScreen';
import JobTitleScreen from '../Screens/Profile/JobTitleScreen';
import JobTitleDropDown from '../Screens/Profile/JobTitleDropDown';
import FinalStepScreen from '../Screens/Profile/FinalStepScreen';
import BottomSheetModal from '../Screens/Home/BottomSheetModal';
import ReportModal from '../Screens/Home/ReportModal';
import JobCard from '../Components/JobCard';
import FilterModal from '../Screens/Explore/FilterModal';
import Company from '../Screens/Explore/Company';
import CompanyFilterModal from '../Screens/Explore/CompanyFilterModal';
import CompanyScreen from '../Screens/CpmpanyProfile/CompanyScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Explore" component={ExploreScreen} />
        <Drawer.Screen name="ProfileMenuScreen" component={ProfileMenuScreen} />
         <Drawer.Screen name="NewsUpdate" component={NewsModal} />
              <Drawer.Screen name="NewsUpdateScreen" component={NewsUpdateScreen} />

              <Drawer.Screen name="JobTpye" component={JobTypeScreen} />
                    <Drawer.Screen name="Experience" component={ExperienceScreen} />
                    <Drawer.Screen name="WorkModel" component={WorkModelScreen} />
                    <Drawer.Screen name="JobTitle" component={JobTitleScreen} />
                    <Drawer.Screen name="JobTitleDropDown" component={JobTitleDropDown} />
                    <Drawer.Screen name="FinalStep" component={FinalStepScreen} />
                    {/* <Drawer.Screen name="NewsUpdate" component={NewsModal} /> */}
                          {/* <Drawer.Screen name="NewsUpdateScreen" component={NewsUpdateScreen} /> */}
                          <Drawer.Screen name="BottomSheetModal" component={BottomSheetModal} />
                          <Drawer.Screen name="ReportModal" component={ReportModal} />
                          <Drawer.Screen name="JobCard" component={JobCard} />
                                <Drawer.Screen name="FilterModal" component={FilterModal} />
                                <Drawer.Screen name="Company" component={Company} />
                                <Drawer.Screen name="CompanyFilterModal" component={CompanyFilterModal} />
                                <Drawer.Screen name="CompanyScreen" component={CompanyScreen} />

    </Drawer.Navigator>
  );
}
