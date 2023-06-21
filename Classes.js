import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';

const Classes = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Search')
    }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.title}>Class Schedule</Text>
      <Image source={require('./assets/Class.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>You are not registered for classes {'\n'} in the summer term.</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Search for{'\n'}Classes</Text>
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
    marginBottom: 200
  },
  logo: {
    alignSelf: 'center',
    marginTop: 40,
    width: 242,
    height: 40,
    marginBottom: 20,
  
  },
  
  title: {
    paddingRight: 150,
    marginTop: 30,
    fontSize: 24,
    fontWeight: '700',
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
    fontWeight: 400,
    paddingRight: 60,

  },
  button: {
    alignSelf : 'flex-end',
    width : 200,
    backgroundColor: '#115BFB',
    borderRadius: 20,
    marginRight: 25,
    marginTop: 50,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,    
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default Classes;
