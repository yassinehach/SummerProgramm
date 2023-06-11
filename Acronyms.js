import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Acronyms = ({route}) => {
    const {data} = route.params;
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>{data.text} </Text>
      <Text style={styles.subtitle}>List of Acronyms</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#313131'
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Acronyms;
