import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from './BottomNavigation';

const CompassScreen = ({navigation}) => {
    
    const data = [
    { id: '1', text: 'University Acronyms' },
    { id: '2', text: 'Reflection Rooms on Campus' },
    { id: '3', text: 'Bathrooms on Campus' },
    { id: '4', text: 'OTHERS' },
    { id: '5', text: 'Rooms on Campus' },
    { id: '6', text: 'OTHERS' },
    { id: '7', text: 'OTHERS' },
    { id: '8', text: 'OTHERS' },
    { id: '9', text: 'OTHERS' },
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
        <Ionicons name="chevron-forward" size={24} color="black" />
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
    backgroundColor: 'gray',
    marginHorizontal: 16,
  },
});

export default CompassScreen;
