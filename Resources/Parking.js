import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomNavigation from '../BottomNavigation';

const Parking = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Parking</Text>
      {/* Add more components related to parking */}
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
    marginTop: 20,
    width: 242,
    height: 40,
    marginBottom: 40,
  },
  title: {
    marginTop: 40,
    alignSelf: 'flex-start',
    paddingLeft: 30,
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
    color: '#313131'
  },
});

export default Parking;
