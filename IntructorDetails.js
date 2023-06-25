import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const InstructorDetails = ({route, navigation}) => {
    const {room, firstName, lastName} = route.params;
    console.log(room, firstName, lastName)
    const loadFonts = async () => {
  await Font.loadAsync({
    'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
    'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
    'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
    'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
  });}
  useEffect(() => {
    loadFonts()   
  }, [])
  
    
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Instructors office</Text>
      <Text style={styles.boldText}>the office for intructor {firstName} {lastName} is {room}</Text>
      
      <BottomNavigation navigation={navigation}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  logo: {
    
    marginTop: '8%',
    width: 242,
    height: 40,
    marginBottom: '15%',
  },
  heading: {
    alignSelf: 'flex-start',
    color: '#313131',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '10%',
    paddingHorizontal:'10%',
  },
  boldText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  normalText: {
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    marginBottom: '1%',
  },
});

export default InstructorDetails;
