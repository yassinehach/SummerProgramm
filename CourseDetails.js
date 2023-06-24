import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const CourseDetails = ({route, navigation}) => {
const {course, day, location, time, instructor} = route.params;
const loadFonts = async () => {
  await Font.loadAsync({
    'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
    'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
    'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
    'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
  });}
  useEffect(() => {
    loadFonts();
  }, []);

    
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Class Schedule</Text>
      <Text style={styles.boldText}>Class schedule for {course} is as following:</Text>
      <Text style={styles.normalText}>Day: {day}.</Text>
      <Text style={styles.normalText}>Time: {time}.</Text>
      <Text style={styles.normalText}>Location: {location}.</Text>
      <Text style={styles.normalText}>instructor: {instructor}.</Text>
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
    width: '70%',
    height: '7%',
    
    marginBottom: '15%',
  },
  heading: {
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    color: '#313131',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    
  },
  boldText: {
    alignSelf: 'flex-start',
    
    fontFamily: 'AHRegular',
    fontSize: 16,
    paddingHorizontal: '10%',
    marginBottom: '7%',
  },
  normalText: {
    fontFamily: 'AHRegular',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    marginBottom: '1%',
  },
});

export default CourseDetails;
