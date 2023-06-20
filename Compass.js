import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from './BottomNavigation';

const CompassScreen = ({navigation}) => {
    
    const data = [
    { id: '1', text: 'Reflection Rooms on Campus' },
    { id: '2', text: 'Accessible Bathrooms on Campus' },
    { id: '3', text: 'Gender-inclusive restrooms' },
    { id: '4', text: 'Lactation room on campus' },
    { id: '5', text: 'Child care resources' },
    { id: '6', text: 'Off-campus child care' },
    { id: '7', text: 'LGBTQ resources' },
    { id: '8', text: 'Others' },
  ];
  const renderItem = ({ item }) => {
    const handleArrow = () => {
        const data= {
            text : item.text
        }
        navigation.navigate('Acronyms', {data})
    }
    return(
    <View>
        <TouchableOpacity onPress={handleArrow}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Ionicons name="chevron-forward" size={24} color="#115BFB" />
      </View>
      <View style={styles.separator} />
      </TouchableOpacity>
    </View>
  )};
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
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
    marginBottom: 40,
  },
  listContainer: {
    width: '95%'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#115BFB',
    marginHorizontal: 16,
  },
});

export default CompassScreen;
