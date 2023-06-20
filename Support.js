import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';

const SupportScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Support</Text>
      <Text style={styles.texthere}>{'\u2022'}   Computing support: <Text style={styles.underlined}> icpsr-sptechsupp@umich.edu</Text>  </Text>
      
      <Text style={styles.texthere}>{'\u2022'}    Registration questions (add/drop, withdrawal, etc.): <Text style={styles.underlined}>sumprog@icpsr.umich.edu </Text></Text>
      <Text style={styles.textEm}>Emergency numbers</Text>
      <Text style={styles.texthere}> Call 911</Text>
      <View style= {styles.seperator}></View>
      <Text style={styles.texthere}> On Campus U-M DPSS</Text>
      <Text style={styles.phone}>+1 (734) 763-1131</Text>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  bullet: {
    marginRight: 8,
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: 30
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  logo: {
    marginTop: 20,
    width: 242,
    height: 40,
    alignSelf : 'center',
    marginBottom: 60,
  },
  text: {
    textAlign : 'left',
    paddingLeft : 30,
    fontSize: 24,
    fontWeight: 800,
    marginBottom : 10,
  },
  textEm: {
    marginTop : 40,
    textAlign : 'left',
    paddingLeft : 30,
    fontSize: 24,
    fontWeight: 800,
    marginBottom : 10,
  },
  underlined : {textDecorationLine: 'underline'},
  texthere: {
    textAlign : 'left',
    paddingLeft : 30,
    fontSize: 16,
    fontWeight: 400,
  },
  seperator: {
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    width : '85%',
    alignSelf : 'center',
    borderBottomColor: '#D9D9D9',
    
  },
  phone: {
    color: '#D9D9D9',
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: 40
  }
});

export default SupportScreen;
