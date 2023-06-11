import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import HomeScreen from './Home';
import SupportScreen from './Support';
import SearchScreen from './Search';
import Resources from './Resources';
import CompassScreen from './Compass';
import Events from './Events';
import SummerFest from './SummFest';
import ArtFair from './ArtFair';
import Acronyms from './Acronyms';
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
      name = "Resources"
      component={Resources}
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
      options={{headerShown: false}}
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
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Add your logo component here */}
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.subtitle}>2023 Summer Program</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        
      
      <StatusBar style="auto" />
    </View>
      <StatusBar style="auto" />
    </View>
    
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
  },
  logo: {
    
    marginTop: 10,
    width: 242,
    height: 40,
    marginBottom: 40,
  },
  logoContainer: {
    // Add styling for logo container if needed
    position : 'absolute',
    top: 74,
    left: 0,
    
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 400,
    margin: 10
  },
  subtitle: {
    fontSize: 20,
    marginBottom : 40
    
  },
  button: {
    position : 'absolute',
    top: 679,
    marginTop: 20,
    backgroundColor: '#0E3880',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
     
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    
    
  },
});
