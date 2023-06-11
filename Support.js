import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Support</Text>
      <Text style={styles.texthere}>TEXT HERE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  logo: {
    marginTop: 90,
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
    marginBottom : 40,
  },
  texthere: {
    textAlign : 'left',
    paddingLeft : 30,
    fontSize: 16,
    fontWeight: 400,
  },
});

export default SupportScreen;
