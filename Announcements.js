import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';

const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={require('./assets/logo.png')} style={styles.logo} />
  </View>
);



const Announcements = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      
      <Text style={styles.title}>Important Announcements</Text>
      <View style={styles.squareContainer}>
        <View style={styles.square}>
            <Text style={styles.squareText}>Welcome to ICPSR summer program</Text>
        </View>
        <View style={styles.square}>
            <Text style={styles.squareText}>First day of class</Text>
            <Text style={styles.squareTextSmall}> Have a great first day!!</Text>
        </View>
        <View style={styles.square}>
            <Text style={styles.squareText}>Purchasing textbooks</Text>
            <Text style={styles.squareTextSmall}> If you still need a required textbook please follow the instructions in the link provided: https://gettextbookumich</Text>
        </View>
        
      </View>
      
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
  title: {
    fontSize: 24,
    fontWeight: 700
  },
  logoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {

    width: 242,
    height: 40,
    alignSelf : 'center',
    marginBottom: 40,
  },
  squareContainer: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  square: {
    width: 340,
    padding: 10,
    height: 150,
    backgroundColor: '#115BFB',
    borderRadius: 45,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  squareTextSmall: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 400,
    padding: 10,
    marginBottom: 20
}
});

export default Announcements;
