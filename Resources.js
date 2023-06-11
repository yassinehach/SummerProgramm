import React from 'react';
import { View, Text, Image, StyleSheet, Linking, FlatList, TouchableOpacity } from 'react-native';
import BottomNavigation from './BottomNavigation';

const Resources = ({navigation}) => {
    const handlePress = () => {
    Linking.openURL('https://www.google.com/');
  };
  const resourcesData = [
    { id: '1', name: 'Bus Schedule', url: 'https://www.google.com/' },
    { id: '2', name: 'Parking Information', url: 'https://www.google.com/' },
    { id: '3', name: 'Mental Health Resources', url: 'https://www.google.com/' },
    { id: '4', name: 'Interactive Campus Map', url: 'https://www.google.com/' },
    { id: '5', name: 'University acronyms', url: 'https://www.google.com/' },
    { id: '6', name: 'More resources', url:'https://www.google.com/' },
  ];

  const renderResourceItem = ({ item }) => (
    <View>
    <View style={styles.resourceItem}>
      <Text style={styles.resourceName}>{item.name}</Text>
      <TouchableOpacity onPress={handlePress}>
      <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator} />
    </View>
  );

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
    marginTop: 10,
    width: 242,
    height: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
    paddingRight: 90
  },
  resourcesList: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#0E3880',
    padding: 30,
    borderRadius: 40
  },
  resourceItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
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
});

export default Resources;
