import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={require('./assets/logo.png')} style={styles.logo} />
  </View>
);



const Announcements = ({navigation}) => {
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
  const handleLinkPress = () => {
    Linking.openURL('https://gettextbookumich')
  }
  const handleWelcome = () => {
    navigation.navigate('WelcomeToProgram')
  }
  const handlePreparation = () => {
    navigation.navigate('Preparation')
  }
  return (
    <View style={styles.container}>
      <Logo />
      <ScrollView>
        <View style= {styles.scroll}>
      <Text style={styles.title}>Important Announcements</Text>
      <View style={styles.squareContainer}>
        <TouchableOpacity style={{ width : '95%'}} onPress={handleWelcome}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Welcome to ICPSR summer program</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width : '95%'}} onPress={handlePreparation}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Preparation</Text>
            
        </View>
        </TouchableOpacity>
        <View style={styles.square}>
            <Text style={styles.squareText}>3-Week Courses Second Session starts today!</Text>
            <Text style={styles.squareTextSmall}> Have a great first day!!</Text>
        </View>

        <View style={styles.square}>
            <Text style={styles.squareText}>Purchasing textbooks</Text>
            <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.squareTextSmall}> If you still need a required textbook please follow the instructions:</Text>
            </TouchableOpacity>
        </View>
        
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
    backgroundColor: '#ffffff',
    alignItems: 'center',

  },
  scroll :{
    marginBottom: '30%'
  },
  title: {
    paddingHorizontal: '4%',
    fontSize: 24,
    fontFamily: 'AHBold',
    alignSelf: 'center'
  },
  logoContainer: {
    width: '100%',
    marginTop: '7%',
    alignItems: 'center',
  },
  logo: {

    width: 242,
    height: 40,
    alignSelf : 'center',
    marginBottom: '10%',
  },
  squareContainer: {
    marginTop: "10%",
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom : '0%',
  },
  square: {
    width: '95%',
    padding: '4%',
    paddingHorizontal: '5%',    
    backgroundColor: '#115BFB',
    borderRadius: 45,
    marginBottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: 'white',
    fontSize: 24,
    paddingHorizontal: '2%',
    paddingVertical: '4%',
    fontFamily: 'AHRegular',
    textAlign: 'center',
  },
  squareTextSmall: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'AHRegular',
    paddingVertical: '2%',
    marginBottom: '7%'
}
});

export default Announcements;
