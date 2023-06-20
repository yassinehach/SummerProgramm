import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';

const SummerFest = ({route, navigation}) => {
    const {data} = route.params;
    console.log(data.location2)
    let imagePath;
    switch (data.name) {
    case 'Summer Festival':
      imagePath = require('./assets/events/summerFest.png');
      break;
    case 'Juneteenth symposium':
      imagePath = require('./assets/events/juneteenth.png');
      break;
    case 'Art Fair':
      imagePath = require('./assets/events/artFair.png');
      break;
    case 'Pride':
      imagePath = require('./assets/events/pride.png');
      break;
    default:
      imagePath = require('./assets/events/default.png');
  }
    const handleMoreInfo = () => {
      Linking.openURL(data.url)
    }
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upcoming Events This Summer!</Text>
      <View style={styles.imageContainer} >
      <Image source={imagePath} style={styles.eventImage} />
      </View>
      <Text style={styles.eventName}>{data.name}</Text>
      <Text style={styles.eventDate}>{data.date}</Text>
      <Text style={styles.description}> { data.description}</Text>
      <View style={styles.locationContainer}>
      <Image source={require('./assets/Vector.png')} style={styles.vector} />
      <Text style={styles.locationText}> {data.location} </Text>
      </View>
      {data.location2 !== '' ? (
        <View style={styles.location2Container}>
        <Image source={require('./assets/Vector.png')} style={styles.vector} />
        <Text style={styles.locationText}> {data.location2} </Text>
        </View>
      ) : (
        null
      )}
      
      
        <TouchableOpacity onPress={handleMoreInfo}>
            <View style={styles.registerButton}>
                <Text style={styles.buttonText}> More info </Text>
            </View>
        </TouchableOpacity>
        </ScrollView >
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
    borderRadius: 20
  },
  eventName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#313131",
    paddingHorizontal: 10,
  },
  eventDate: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#313131",
    paddingHorizontal: 10
  },
  imageContainer: {
    borderRadius: 45
  },
  registerButton: {
    paddingVertical: 20,    
    width: 200,
    backgroundColor: "#115BFB",
    borderRadius: 45,
    justifyContent: 'center',
    marginLeft: 170,
    marginTop: 50,
    marginBottom: 120   
},
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    marginTop: 10,
    paddingHorizontal: 10,
    color: '#313131'
  },
  locationContainer: {
    paddingVertical: 20,
    flexDirection : 'row'

  },
  location2Container: {
    paddingBottom: 20,
    flexDirection : 'row'
  },
  vector: {
    marginTop: 3,
    marginLeft : 10,
  },
  locationText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#313131',
    paddingHorizontal : 10

  },
});

export default SummerFest;
