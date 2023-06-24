import React, {useEffect} from 'react';
import { View, Text, Image, FlatList, Linking, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const CompassScreen = ({navigation}) => {
    
    const data = [
    { id: '1', text: 'Reflection Rooms on Campus', url: 'https://trotter.umich.edu/article/reflection-rooms-campus' },
    { id: '2', text: 'Accessible Bathrooms on Campus', url: 'https://ssd.umich.edu/resources' },
    { id: '3', text: 'Gender-inclusive restrooms', url: 'https://lsa.umich.edu/slc/about-us/gender-inclusive-restrooms.html' },
    { id: '4', text: 'Lactation room on campus', url: 'https://hr.umich.edu/benefits-wellness/work-life/lactation-resources/lactation-room-locations-across-campus-michigan-medicine' },
    { id: '5', text: 'Child care resources', url: 'https://hr.umich.edu/benefits-wellness/work-life/child-care-resources' },
    { id: '6', text: 'Off-campus child care', url: 'https://hr.umich.edu/benefits-wellness/work-life/child-care-resources' },
    { id: '7', text: 'LGBTQ resources', url: 'https://studentlife.umich.edu/article/lgbtq-student-groups-u-m' },
    { id: '8', text: 'Others', url: '#' },
  ];
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
  const renderItem = ({ item }) => {
    const handleArrow = () => {
        Linking.openURL(item.url)
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
      <ScrollView>
        <View style = {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
      </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scroll: {
    alignItems: 'center',
    marginBottom: '50%'

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
    fontFamily: 'AHRegular'
  },
  separator: {
    height: 1,
    backgroundColor: '#115BFB',
    marginHorizontal: 16,
  },
});

export default CompassScreen;
