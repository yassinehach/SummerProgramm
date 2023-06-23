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
    marginRight: '1%',
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: '10%'
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  logo: {
    marginTop: '5%',
    width: '65%',
    height: '7%',
    alignSelf : 'center',
    marginBottom: '15%',
  },
  text: {
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 24,
    fontWeight: 800,
    marginBottom : '3%',
  },
  textEm: {
    marginTop : '10%',
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 24,
    fontWeight: 800,
    marginBottom : '3%',
  },
  underlined : {textDecorationLine: 'underline'},
  texthere: {
    textAlign : 'left',
    paddingLeft : '10%',
    fontSize: 16,
    fontWeight: 400,
  },
  seperator: {
    borderBottomWidth: 1,
    marginTop: '3%',
    marginBottom: '3%',
    width : '85%',
    alignSelf : 'center',
    borderBottomColor: '#D9D9D9',
    
  },
  phone: {
    color: '#D9D9D9',
    fontSize: 16,
    fontWeight: 400,
    paddingLeft: '12%'
  }
});

export default SupportScreen;
