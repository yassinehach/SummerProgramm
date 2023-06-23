import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomNavigation from './BottomNavigation';

const CourseDetails = ({route, navigation}) => {
const {course, day, location, time} = route.params;

    
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Class Schedule</Text>
      <Text style={styles.boldText}>Class schedule for {course} is as following:</Text>
      <Text style={styles.normalText}>Day: {day}.</Text>
      <Text style={styles.normalText}>Time: {time}.</Text>
      <Text style={styles.normalText}>Location: {location}.</Text>
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
    fontWeight: 700,
    marginBottom: '8%',
    
  },
  boldText: {
    alignSelf: 'flex-start',
    
    fontWeight: 400,
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

export default CourseDetails;
