import React, {useEffect} from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Preparation = ({navigation}) => {
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
  const handle2FA = () => {
    Linking.openURL('https://its.umich.edu/accounts-access/computing-accounts/friend-accounts')
  }
  const handleCanvasAccount = () => {
    Linking.openURL('https://canvas.it.umich.edu/')
  }
  const handleZoom = () => {
    Linking.openURL('https://its.umich.edu/communication/videoconferencing/zoom')
  }
  const handleSoftware =() => {
  }
  const handleHorizon =() => {
    Linking.openURL('https://www.icpsr.umich.edu/VDE/vmware-client-installation.html')
  }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Preparation</Text>
      <Text style= {{marginBottom:'5%', fontSize: 16, fontFamily: 'AHRegular', textAlign: 'justify',}}>
        We strongly urge you prepare prior to the start date of your workshop.
        </Text>
        
        <Text style={styles.paragraph} onPress={handle2FA}>{'\u2022'}  Set your your UM Friend Account, password and enroll in for DUO two-factor authentication. (2FA){'\n'}</Text>
        <Text style={styles.paragraph} onPress={handleCanvasAccount}>{'\u2022'}  Log in to your Canvas account.{'\n'} </Text>
        <Text style={styles.paragraph} onPress={handleZoom}>{'\u2022'}  Install the Zoom application on your computer.{'\n'}</Text>
        <Text style={styles.paragraph} onPress={handleSoftware}>{'\u2022'}  Install any additional required software on your computer. (Stata, R, etc.){'\n'} </Text>
        <Text style={styles.paragraph} onPress={handleHorizon}>{'\u2022'}  Install the VMware Horizon client if your intend to use the Summer Program Virtual Desktop. (optional, consult your instructor)</Text>
        
      </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  scroll: {
    paddingHorizontal: '5%',
    marginBottom: '50%'
  },
  logo: {
    marginTop: '10%',
    alignSelf: 'center',
    width: 242,
    height: 40,
    marginBottom: '12%',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '8%',
    color: '#313131'
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'AHRegular',
    textAlign: 'left',
    paddingLeft: '5%'
  },
});

export default Preparation;
