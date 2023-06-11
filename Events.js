import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BottomNavigation from './BottomNavigation';

const Events = ({navigation}) => {
  const eventsData = [
    { id: '1', name: 'Summer Festival', date: 'June 5, 2023 - June 26, 2023', nav :'SummerFest'  },
    { id: '2', name: 'Juneteenth', date: 'June 15, 2023 - June 16, 2023', nav: 'ArtFair' },
    { id: '3', name: 'Eid-El-Adha', date: 'June 28, 2023', nav :'SummerFest' },
    { id: '4', name: 'First Picnic', date: 'July 1, 2023', nav: 'ArtFair' },
    { id: '5', name: 'Art Fair', date: 'July 20, 2023 - July 22, 2023', nav :'SummerFest' },
    { id: '6', name: 'Second Picnic', date: 'July 29, 2023', nav: 'ArtFair' },
  ];
//   const handleReadMore = () => {
//     navigation.navigate('ArtFair')
//   }

  const renderEventItem = ({ item }) => {
    const handleReadMore = () => {
        const data= {
            id : item.id,
            name : item.name,
            date : item.date,
        }
    navigation.navigate('SummerFest', {data} )
  }
    return (
    <View>
    <View style={styles.resourceItem}>
        <View>
      <Text style={styles.resourceName}>{item.name}</Text>
      <Text style = {styles.eventDate}>{item.date}</Text>
      </View>
      <TouchableOpacity onPress={handleReadMore}>
      <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator} />
    </View>
  )};

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upcoming events this summer !</Text>
      <View style={styles.resourcesList}>
        <FlatList
          data={eventsData}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    width: 242,
    height: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
    paddingRight: 90
  },
  resourcesList: {
    marginTop: 10,
    width: '90%',
    backgroundColor: '#0E3880',
    padding: 30,
    borderRadius: 40
  },
  resourceItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resourceName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  readMore: {
    color: 'white',
    fontSize: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    
  },
  eventDate: {
    color: 'white'
  }
});

export default Events;
