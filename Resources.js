import React from 'react';
import { View, Text, Image, StyleSheet, Linking, FlatList, TouchableOpacity } from 'react-native';
import BottomNavigation from './BottomNavigation';
import BusSchedule from './Resources/BusSchedule';

const Resources = ({navigation}) => {
  
    
  const resourcesData = [
    { id: '1', name: 'Bus Schedule', url: 'https://www.google.com/', nav: 'BusSchedule' },
    { id: '2', name: 'Parking Information', url: 'https://www.google.com/', nav: 'Parking' },
    { id: '3', name: 'Mental Health Resources', url: 'https://www.google.com/', nav: 'MentalHealth' },
    { id: '4', name: 'Interactive Campus Map', url: 'https://www.google.com/', nav: 'InteractiveMap' },
    { id: '5', name: 'University acronyms', url: 'https://www.google.com/', nav: 'UniversityAcronyms' },
    { id: '6', name: 'More resources', url:'https://www.google.com/', nav: 'Compass' },
  ];

  const renderResourceItem = ({ item }) => {
    const handlePress = () => {
    navigation.navigate(item.nav);
  };
  return(
    <View>
    <View style={styles.resourceItem}>
      <Text style={styles.resourceName}>{item.name}</Text>
      <TouchableOpacity onPress={handlePress}>
      <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator} />
    </View>
  );}

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Important resources</Text>
      <View style={styles.resourcesList}>
        <FlatList
          data={resourcesData}
          renderItem={renderResourceItem}
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
    marginTop: 40,
    width: 242,
    height: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 30,
    paddingRight: 90
  },
  resourcesList: {
    marginTop: 10,
    width: '90%',
    backgroundColor: '#115BFB',
    borderRadius: 40
  },
  resourceItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    borderBottomColor: 'white',
    
  },
});

export default Resources;
