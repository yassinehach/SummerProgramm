import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const BottomNavigation = ({navigation}) => {
    const handleSupport = () => {
        navigation.navigate('Support')
    }
    const handleSearch = () => {
        navigation.navigate('Search')
    }
    const handleCompass = () => {
        navigation.navigate('BuildingsAcronyms')
    }
    const handleHome = () => {
        navigation.navigate('Home')
    }
    const handleResources = () => {
        navigation.navigate('Resources')
    }
  return (
    <View style={styles.screenContainer}>
        <View style={styles.footer} >
        <TouchableOpacity onPress={handleHome}>
        <Image style={styles.footerIcon} source={require('./assets/home.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCompass}>
        <Image style={styles.footerIcon} source={require('./assets/compass.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResources}>
        <Image style={styles.footerIcon} source={require('./assets/search.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSupport}>
        <Image style={styles.footerIcon} source={require('./assets/support.png')}></Image>
      </TouchableOpacity>
      
      
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginRight: '3.5%',
    
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : '9%',
    alignItems: 'center',    
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    backgroundColor: '#020BA9',
    
  },
  

});

export default BottomNavigation;
