import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BottomNavigation from './BottomNavigation';

// import { fetchData } from './DataService';



const BuildingAcronyms = ({navigation}) => {
  const data = [
    { id: 1, acronym: 'ABC', name: 'Building ABC', location: 'Location 1' },
    { id: 2, acronym: 'DEF', name: 'Building DEF', location: 'Location 2' },
    { id: 3, acronym: 'GHI', name: 'Building GHI', location: 'Location 3' },
    { id: 4, acronym: 'JKL', name: 'Building JKL', location: 'Location 4' },
    { id: 5, acronym: 'MNO', name: 'Building MNO', location: 'Location 5' },
    { id: 6, acronym: 'POL', name: 'Building POL', location: 'Location 6' },
    { id: 7, acronym: 'TNU', name: 'Building TNU', location: 'Location 7' },
    { id: 8, acronym: 'FDP', name: 'Building FDP', location: 'Location 8' },
  ];
  const [data2, setData2] = useState([])
  const [items, setItems] = useState([]);
  const [excelData, setExcelData] = useState([]);
//   const processExcelData = () => {
//   // Assuming your JSON data has 'acronym', 'name', and 'location' fields
//   const items = dataa.map(({ acronym, name, location }) => ({ acronym, name, location }));
//   setItems(items);
// };
// useEffect(() => {
//   processExcelData();
//   console.log(items)
// }, []);

  // useEffect(() => {
  //   const fetchDataAsync = async () => {
  //     const result = await fetchData();
  //     setData(result);
  //   };

  //   fetchDataAsync();
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jsonData = require('./assets/data/buildingAcronyms.json')
      setData2(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const handleNextPress = () => {
    const selectedItem = data2.find(item => item.Acronym === selectedBuilding);
    console.log(selectedItem)
    
    if (selectedItem) {
      navigation.navigate('BuildingDetails', {
        acronym: selectedItem.Acronym,
        location: selectedItem.Location,
        name: selectedItem.Name,
      });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style= {styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>University Buildings Acronyms</Text>
      <Text style={styles.subtitle}>What buildings are you searching?</Text>
      <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        selectedValue={selectedBuilding}
        onValueChange={(value) => setSelectedBuilding(value)}
        mode='dropdown'
      >
        <Picker.Item label="Select a building..." value="" />
        {data2.map((item) => (
          <Picker.Item
            key={item.acronym}
            label={item.Name}
            value={item.Acronym}
            style = {styles.pickerItem}
            
          />
        ))}
      </Picker>
      </View>
      <TouchableOpacity onPress={handleNextPress}>
        <View style={styles.nextButton}>
        <Text style={styles.buttonText}> Next </Text>
        </View>
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
    

  },
  scroll: {
    alignItems: 'center',
    marginBottom:200
  },
  logo: {
    marginTop: 40,
    width: 242,
    height: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    alignSelf: 'flex-start',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 400,
    paddingHorizontal: 40,
    alignSelf: 'flex-start' 
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#2F65A780',
    borderRadius: 20,
    marginBottom: 20,    
  },
  picker : {
    width: 300
  },
  pickerItem: {
    borderRadius : 20,
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
    marginTop: 20
  },
  buttonText:{
    color : '#00274C',
    fontSize: 20,
    fontWeight: 500,
  },

  
});


export default BuildingAcronyms;
