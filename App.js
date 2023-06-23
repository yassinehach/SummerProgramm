import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';
import HomeScreen from './Home';
import SupportScreen from './Support';
import SearchScreen from './Search';
import Resources from './Resources';
import CompassScreen from './Compass';
import Events from './Events';
import SummerFest from './SummFest';
import ArtFair from './ArtFair';
import Acronyms from './Acronyms';
import Announcements from './Announcements';
import Classes from './Classes';
import Parking from './Resources/Parking';
import MentalHealth from './Resources/MentalHealth';
import BusSchedule from './Resources/BusSchedule';
import InteractiveMap from './Resources/InteractiveMap';
import UniversityAcronyms from './Resources/UniversityAcronyms';
import BuildingAcronyms from './BuildingAcronyms';
import BuildingDetails from './BuildingDetail';
import CourseDetails from './CourseDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name = "Home"
      component={HomeScreen}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name = "Announcements"
      component={Announcements}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "BuildingsAcronyms"
      component={BuildingAcronyms}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "BuildingDetails"
      component={BuildingDetails}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "CourseDetails"
      component={CourseDetails}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "Classes"
      component={Classes}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "Resources"
      component={Resources}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "Parking"
      component={Parking}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "InteractiveMap"
      component={InteractiveMap}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "UniversityAcronyms"
      component={UniversityAcronyms}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "BusSchedule"
      component={BusSchedule}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "MentalHealth"
      component={MentalHealth}
      options={{title:'Back'}}
      />
      <Stack.Screen
      name = "Events"
      component={Events}
      options={{title: 'Back'}}
      />
      <Stack.Screen
      name = "SummerFest"
      component={SummerFest}
      options={{title: 'Back'}}
      />
      <Stack.Screen
      name = "ArtFair"
      component={ArtFair}
      options={{title: 'Back'}}
      />
      <Stack.Screen
      name = "Acronyms"
      component={Acronyms}
      options={{title: 'Back'}}
      />
      
      <Stack.Screen
      name = "Support"
      component={SupportScreen}
      options = {{title: 'Back'}}
      />
      <Stack.Screen
      name = "Search"
      component={SearchScreen}
      options={{title: 'Back'}}
      />
      <Stack.Screen
      name = "Compass"
      component={CompassScreen }
      options={{title: 'Back'}}
      />
      
    
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const WelcomeScreen = ({navigation}) => {
  const handleContinue = () => {
    navigation.navigate('Home')
  }
  return (
    
      <View style={styles.container}>
        <ScrollView>
      <View style={styles.logoContainer}>
        {/* Add your logo component here */}
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        {/* <Text style={styles.title}>WELCOME</Text> */}
        <Text style={styles.subtitle}>2023 ICPSR Summer Program</Text>
      </View>
      
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        
      
      <StatusBar style="auto" />
      </ScrollView>
    </View>
      
    
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
  },
  logo: {
    
    marginTop: '2%',
    width: '100%',
    height: '30%',
    marginBottom: '5%',
  },
  logoContainer: {
    // Add styling for logo container if needed
    marginTop: "50%"
    
    
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 400,
    margin: '5%'
  },
  subtitle: {
    marginTop: '25%',
    fontSize: 20,
    marginBottom : '30%'
    
  },
  button: {
    // position : 'absolute',
    // top: 679,
    marginTop: '30%',
    backgroundColor: '#115BFB',
    alignSelf: 'center',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    paddingVertical: '4%',
    paddingHorizontal: '5%',
    marginBottom: '15%'
     
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    
    
  },
});
