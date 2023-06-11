import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import BottomNavigation from './BottomNavigation';

const HomeScreen = ({navigation}) => {
    const handleEvents = () => {
        navigation.navigate('Events')
    }
    const handleAnnouncement = () => {
        navigation.navigate('Compass')
    }
    const handleResources = () => {
        navigation.navigate('Resources')
    }
    const renderFirstSliderItem = ({item}) => {
        return (
            <View style={styles.sliderItemOne}>
                <Text style={styles.sliderText}>{item}</Text>
            </View>
        )
    }
    const renderSecondSliderItem = ({item}) => {
        return (
            <View style={styles.sliderItemTwo}>
                <Text style={styles.sliderText}>{item.name}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}> {item.date}</Text>
                </View>
            </View>
        )
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.button} onPress={handleAnnouncement}>
        <Image source={require('./assets/yellfla.png')} style={styles.flag} />
        <Image source={require('./assets/whiteAnnouncement.png')} style={styles.icon} />
        {/* <MaterialIcons name="volume-up" size={24} color="white" style={styles.icon} /> */}
        <Text style={styles.buttonText}>Announcements</Text>
        <Entypo name="chevron-right" size={30} color="black" style={styles.arrowIcon} />        
      </TouchableOpacity>
      <View style={styles.resourcesContainer}>
        <Text style={styles.resourcesText}>Resources</Text>
        <TouchableOpacity onPress={handleResources}>
            <View>
          <Text style={styles.seeAllText}>See All</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
      data = {['Bus Schedule', 'parking Information', 'Mental Health Resources','Interactive Campus Map', 'University acronyms', 'More Resources']}
      renderItem={renderFirstSliderItem}
      sliderWidth={400}
      itemWidth={200}
      layout='default'
      />
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsText}>Events</Text>
        <TouchableOpacity onPress={handleEvents}>
            <View>
          <Text style={styles.seeAllText}>See All</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
      
    //   data = {['Summer festival', 'Juneteenth', 'Eid-al-Adha','First picnic', 'Art fair', 'Second picnic']}
    data = {[{ id: '1', name: 'Summer Festival', date: 'June 5, 2023 - June 26, 2023' },
    { id: '2', name: 'Juneteenth', date: 'June 15, 2023 - June 16, 2023' },
    { id: '3', name: 'Eid-El-Adha', date: 'June 28, 2023' },
    { id: '4', name: 'First Picnic', date: 'July 1, 2023' },
    { id: '5', name: 'Art Fair', date: 'July 20, 2023 - July 22, 2023' },
    { id: '6', name: 'Second Picnic', date: 'July 29, 2023' }]}
      renderItem={renderSecondSliderItem}
      sliderWidth={400}
      itemWidth={200}
      layout='default'
      />
      <BottomNavigation navigation={navigation}/>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexDirection : 'row'
  },
  button: {
    margin : 21,
    marginTop: 100,
    backgroundColor: '#0E3880',
    flexDirection: 'row',
    borderRadius: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    width: 39,
    height: 26
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    marginLeft: 10
  },
  arrowIcon: {
    marginRight : 10
  },
  flag: {
    position: 'absolute',
    width : 39,
    height : 29,
    left : -9,
    top: -20,
     
  },
  resourcesContainer: {    

    flexDirection: 'row',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  eventsContainer: {
    marginTop: -120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  
  resourcesText: {
    margin: 30,
    fontSize: 32,
    fontWeight: 400,
    marginRight: 'auto',
  },
  eventsText: {
    marginTop: 0,
    margin: 30,
    fontSize: 32,
    fontWeight: 400,
    marginRight: 'auto',
  },
  seeAllText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 400,
  },
  sliderItemOne: {
    height: 150,
    width: 200,
    backgroundColor: '#0E3880',
    borderRadius: 45,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderItemTwo: {
    height: 150,
    width: 200,
    backgroundColor: '#0E3880',
    borderRadius: 45,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dateContainer: {
    position: 'absolute',
    top: 150,
    backgroundColor: 'white',
    borderRadius: 45,
    padding: 5,
    marginBottom: 10,
    width: 175,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dateText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0E3880',
  },
  footer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 10,
    alignItems: 'center',
    position : 'absolute',
    bottom : 0,
    borderRadius : 45,
    width: '100%',
    backgroundColor: '#0E3880' 
  },
  footerIcon :{}, 
});

export default HomeScreen;
