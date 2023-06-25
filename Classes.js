import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Classes = ({navigation}) => {
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
    const handleClassPress = () => {
        navigation.navigate('Search')
    }
    const handleInstructorPress = () => {
      navigation.navigate('Offices')
    }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.title}>Class Schedule</Text>
      <Image source={require('./assets/Class.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>You are not registered for classes {'\n'} in the summer term.</Text>
      <TouchableOpacity style={styles.button1} onPress={handleClassPress}>
        <Text style={styles.buttonText}>Search for{'\n'}Classes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleInstructorPress}>
        <Text style={styles.buttonText}>Search for{'\n'}Instructors Offices</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    
  },
  scroll: {
    alignItems: 'center',
    marginBottom: '50%'
  },
  logo: {
    alignSelf: 'center',
    marginTop: '10%',
    width: 242,
    height: 40,
    marginBottom: '5%',
  
  },
  
  title: {
    paddingRight: '30%',
    marginTop: '7%',
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom : -40,
    
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  text: {
    marginTop: -50,
    fontSize: 16,    
    fontFamily: 'AHRegular',
    paddingRight: '15%',

  },
  button1: {
    alignSelf : 'flex-end',
    width : '47%',
    backgroundColor: '#115BFB',
    borderRadius: 20,
    marginRight: '8%',
    marginTop: '8%',
    paddingVertical: '4%',
    paddingHorizontal: '3%',
  },
  button2: {
    alignSelf : 'flex-end',
    width : '47%',
    backgroundColor: '#115BFB',
    borderRadius: 20,
    marginRight: '8%',
    marginTop: '5%',
    paddingVertical: '4%',
    paddingHorizontal: '3%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,    
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default Classes;
