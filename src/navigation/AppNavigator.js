import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../Screens/Login/SignInScreen';
import SignUpScreen from '../Screens/Login/SignUpScreen';
import VerifyCodeScreen from '../Screens/Login/VerifyCodeScreen';
import NewPasswordScreen from '../Screens/Login/NewPasswordScreen';
import WelcomeScreen from '../Screens/Profile/WelcomeScreen';
import JobTypeScreen from '../Screens/Profile/JobTypeScreen';
import ExperienceScreen from '../Screens/Profile/ExperienceScreen';
import WorkModelScreen from '../Screens/Profile/WorkModelScreen';
import JobTitleScreen from '../Screens/Profile/JobTitleScreen';
import JobTitleDropDown from '../Screens/Profile/JobTitleDropDown';
import OnboardingScreen from '../Screens/Onboarding/OnboardingScreen';
import OnboardingTwoScreen from '../Screens/Onboarding/OnboardingTwoScreen';
import SplashScreen from '../Screens/Onboarding/SplashScreen';
import FinalStepScreen from '../Screens/Profile/FinalStepScreen';
import WelcomeModal from '../Screens/Login/WelcomeModal';
import HomeScreen from '../Screens/Home/HomeScreen';
import NewsModal from '../Screens/Home/NewsModal';
import NewsUpdateScreen from '../Screens/Home/NewsUpdate';
import BottomSheetModal from '../Screens/Home/BottomSheetModal';
import ReportModal from '../Screens/Home/ReportModal';
import ExploreScreen from '../Screens/Explore/ExploreScreen';
import JobCard from '../Components/JobCard';
import FilterModal from '../Screens/Explore/FilterModal';
import Company from '../Screens/Explore/Company';
import CompanyFilterModal from '../Screens/Explore/CompanyFilterModal';
import CompanyScreen from '../Screens/CpmpanyProfile/CompanyScreen';
import JobDetailsScreen from '../Screens/EasyApply/JobDetailsScreen';
import QualificationScreen from '../Screens/EasyApply/QualificationScreen';
import ContactInfoScreen from '../Screens/EasyApply/ContactInfoScreen';
import ApplyStep2Screen from '../Screens/EasyApply/ApplyStep2Screen';
import ApplyStep3Screen from '../Screens/EasyApply/ApplyStep3Screen';
import ApplyStep4Screen from '../Screens/EasyApply/ApplyStep4Screen';
import ReviewApplicationScreen from '../Screens/EasyApply/ReviewApplicationScreen';
import ApplicationSuccessScreen from '../Screens/EasyApply/ApplicationSuccessScreen';
import Location from '../Screens/LocationScreens/Location';
import NearbyJobsScreen from '../Screens/LocationScreens/NearbyJobsScreen';
import DrawerContent from '../navigation/DrawerContent';
import DrawerNavigator from './DrawerNavigator';
import ProfileMenuScreen from '../Screens/UserProfile/ProfileMenuScreen';
import YourProfileScreen from '../Screens/UserProfile/YourProfileScreen';
import ProfileContactInfoScreen from '../Screens/UserProfile/ProfileContactInfoScreen';
import AboutMeScreen from '../Screens/UserProfile/AboutMeScreen';
import EducationScreen from '../Screens/UserProfile/EducationForm';
import ProfileExperienceScreen from '../Screens/UserProfile/EducationForm';
import AboutMe from '../Screens/UserProfile/AboutMeScreen';
import ExperienceForm from '../Screens/UserProfile/ExperienceForm';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBording" component={OnboardingScreen} />
      <Stack.Screen name="OnBordingtwo" component={OnboardingTwoScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="modal" component={WelcomeModal} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="JobTpye" component={JobTypeScreen} />
      <Stack.Screen name="Experience" component={ExperienceScreen} />
      <Stack.Screen name="WorkModel" component={WorkModelScreen} />
      <Stack.Screen name="JobTitle" component={JobTitleScreen} />
      <Stack.Screen name="JobTitleDropDown" component={JobTitleDropDown} />
      <Stack.Screen name="FinalStep" component={FinalStepScreen} />
      <Stack.Screen name="HomeDrawer" component={DrawerNavigator} />
      <Stack.Screen name="NewsUpdate" component={NewsModal} />
      <Stack.Screen name="NewsUpdateScreen" component={NewsUpdateScreen} />
      <Stack.Screen name="BottomSheetModal" component={BottomSheetModal} />
      <Stack.Screen name="ReportModal" component={ReportModal} />
      <Stack.Screen name="ExploreDrawer" component={DrawerNavigator} />
      <Stack.Screen name="JobCard" component={JobCard} />
      <Stack.Screen name="FilterModal" component={FilterModal} />
      <Stack.Screen name="Company" component={Company} />
      <Stack.Screen name="CompanyFilterModal" component={CompanyFilterModal} />
      <Stack.Screen name="CompanyScreen" component={CompanyScreen} />
      <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} />
      <Stack.Screen name="Qualification" component={QualificationScreen} />
      <Stack.Screen name="ContactInfo" component={ContactInfoScreen} />
      <Stack.Screen name="ApplyStep2Screen" component={ApplyStep2Screen} />
      <Stack.Screen name="ApplyStep3Screen" component={ApplyStep3Screen} />
      <Stack.Screen name="ApplyStep4Screen" component={ApplyStep4Screen} />
      <Stack.Screen
        name="ReviewApplicationScreen"
        component={ReviewApplicationScreen}
      />
      <Stack.Screen
        name="ApplicationSuccessScreen"
        component={ApplicationSuccessScreen}
      />

      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="NearbyJobsScreen" component={NearbyJobsScreen} />
      <Stack.Screen name="DrawerContent" component={DrawerContent} />
      <Stack.Screen name="ProfileMenuScreen" component={ProfileMenuScreen} />
      <Stack.Screen name="YourProfileScreen" component={YourProfileScreen} />
      <Stack.Screen
        name="ProfileContactInfoScreen"
        component={ProfileContactInfoScreen}
      />
      <Stack.Screen name="EducationScreen" component={EducationScreen} />
      <Stack.Screen
        name="ProfileExperienceScreen"
        component={ProfileExperienceScreen}
      />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="ExperienceForm" component={ExperienceForm} />
    </Stack.Navigator>
  );
}
