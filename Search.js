import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'

const SearchScreen = () => {
    const [selectedClass, setSelectedClass] = useState('');

    const handleClassChange = (value) => {
        setSelectedClass(value);
    };

    const handleNextPress = () => {
    // Handle the "Next" button press
    console.log('Next button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What class are you enrolled in?</Text>
      <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedClass}
        onValueChange={handleClassChange}
        style={styles.picker}
        mode='dropdown'
        
      >
        <Picker.Item label="Art" value="option1" />
        <Picker.Item label="Calc" value="option2" />
        <Picker.Item label="Design" value="option3" />
      </Picker>
      </View>
      <TouchableOpacity onPress={handleNextPress}>
        <View style={styles.nextButton}>
        <Text style={styles.buttonText}> Next </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop : 90,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nextButton : {
    width: 175,
    alignItems : 'center',
    borderRadius : 20,
    backgroundColor : 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText:{
    color : '#00274C',
    fontSize: 20,
    fontWeight: 500,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#2F65A780',
    borderRadius: 20,
    marginBottom: 20,

    
  },
  picker: { 
    width: 350,
  },
});

export default SearchScreen;
