import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavigation from './BottomNavigation';

const SummerFest = ({route, navigation}) => {
    const {data} = route.params;
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upcoming Events This Summer!</Text>
      <View style={styles.imageContainer} >
      <Image source={require('./assets/summerFest.png')} style={styles.eventImage} />
      </View>
      <Text style={styles.eventName}>{data.name}</Text>
      <Text style={styles.eventDate}>{data.date}</Text>
      <Text> TEXT HERE</Text>
        <TouchableOpacity >
            <View style={styles.registerButton}>
                <Text style={styles.buttonText}> Register Now </Text>
            </View>
        </TouchableOpacity>
        <BottomNavigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
    width: 242,
    height: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: "#313131"
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
  eventName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#313131"
  },
  eventDate: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#313131"
  },
  imageContainer: {
    borderRadius: 45
  },
  registerButton: {
    paddingVertical: 20,    
    width: 200,
    backgroundColor: "#0E3880",
    borderRadius: 45,
    justifyContent: 'center',
    marginLeft: 170,
    marginTop: 50    
},
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  }
});

export default SummerFest;
