import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font'
import BottomNavigation from './BottomNavigation';

const Picnics = ({navigation}) => {
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
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Picnics</Text>
      <Text style={styles.paragraph}>
        All in-person participants, instructors, TAs, and their family are invited to join us at Burns Park for picnics with food and games. The Summer Program will provide main courses (grilled chicken, vegetarian option, hamburgers, hot dogs, etc.), sides, and drinks, and attendees are encouraged to bring a dessert to share.
      </Text>
      <Text style= {styles.normalText}>{'\u2022'} First Session Picnic : Saturday, July 1, 1:00 - 5:00 p.m. {'\n'}{'\u2022'} First Session Picnic : Saturday, July 29, 1:00 - 5:00 p.m.
   </Text>
    
    <Text style= {styles.normalText }><Text style={styles.boldText}>Reminder: </Text> The Newberry Building will be closed on picnic days. </Text>
    </View>
    </ScrollView>
    <BottomNavigation navigation={navigation}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  scroll: {
    paddingHorizontal: '7%',
    alignItems: 'center',
    marginBottom: '60%'
  },
  logo: {
    marginTop: '10%',
    width: '70%',
    height: '6%',
    marginBottom: '15%',
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '10%',
  },
  paragraph: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    color: '#313131',
    marginBottom: '7%'
  },
  normalText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHRegular',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: '10%'
  },
  boldText: {
    alignSelf: 'flex-start',
    fontFamily: 'AHBold',
    fontSize: 16,
    textAlign: 'justify'
  }
});

export default Picnics;
