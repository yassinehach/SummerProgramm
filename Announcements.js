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
      <ScrollView>
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
  title: {
    paddingHorizontal: '5%',
    fontSize: 24,
    fontWeight: 700
  },
  logoContainer: {
    width: '100%',
    marginTop: '7%',
    alignItems: 'center',
  },
  logo: {

    width: '70%',
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
    
    backgroundColor: '#115BFB',
    borderRadius: 45,
    marginBottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: '5%',
    fontWeight: '400',
    textAlign: 'center',
  },
  squareTextSmall: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 400,
    paddingVertical: '2%',
    marginBottom: '7%'
}
});

export default Announcements;
