import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigation from './BottomNavigation';
import * as Font from 'expo-font'

const Events = ({navigation}) => {
  const eventsData = [
    { id: '1', name: 'Summer Festival', date: 'June 5, 2023 - June 26, 2023', url:'https://www.a2sf.org/', location:'210 Huronview Blvd, Suite 1, Ann Arbor, MI 48103', location2: '', img:'./assets/events/summerFest.png', description:'This three-week festival beginning in June celebrates the best in theatre,  dance, music, and comedy. Performances cater to audiences of all ages. '  },
    { id: '2', name: 'Juneteenth symposium', date: 'June 15, 2023 - June 16, 2023', url:'https://www.eventbrite.com/e/2023-juneteenth-freedom-day-celebration-university-of-michigan-tickets-631752507757',  location:'Michigan League 911 North University Avenue Ann Arbor, MI 48109', location2:'', img:'./assets/events/juneteenth.png', description: 'The University of Michigan will celebrate the 3rd Annual Juneteenth Symposium. The theme of this year’s event is Systems Check: Exploring Structural Solutions to Systemic Racism.' },
    { id: '3', name: 'Eid-El-Adha', date: 'June 28, 2023', url:'#', location:'The Muslim Community Association of Ann Arbor \n 2301 Plymouth Rd, Ann Arbor, MI', location2: 'Islamic Center of America \n 19500 Ford Rd, Dearborn, MI 48128', img:'./assets/events/summerFest.png', description: 'Eid Al-Adha will be celebrated on June 28, 2023. \n Eid-Al-Adha Prayer and celebration will be held on Wednesday, June 28. \n Eid Prayer Venues: ' },
    { id: '4', name: 'First Picnic', date: 'July 1, 2023', url:'#', location:'location', location2:'', img:'./assets/events/summerFest.png', description: 'description' },
    { id: '5', name: 'Art Fair', date: 'July 20, 2023 - July 22, 2023', url:'https://www.annarbor.org/events/ann-arbor-art-fair/?gclid=EAIaIQobChMIn_yeg_XF_wIVsw-zAB3RSA5SEAAYASAAEgI25PD_BwE', location:'Downtown Ann Arbor', location2:'', img:'./assets/events/artFair.png', description: 'The Ann Arbor Art Fair is a Midwest tradition that draws close to half a million attendees over three days in July.' },
    { id: '6', name: 'Second Picnic', date: 'July 29, 2023', location:'location', location2:'', url:'#', img:'./assets/events/summerFest.png', description: 'description' },
    { id: '7', name: 'Pride', date: 'August 5, 2023', location:'Downtown Ann Arbor', location2:'', url:'https://www.annarbor.org/event/ann-arbor-pride/12008/', img:'./assets/events/pride.png', description: 'Ann Arbor Pride is a weekend festival in Ann Arbor, Michigan, celebrating lesbian, gay, bisexual, transgender, queer identities, community, and allyship hosted by the Jim Toy Community Center.'}
  ];
  const loadFonts = async () => {
    await Font.loadAsync({
    'AHBold': require('./fonts/AtkinsonHyperlegible-Bold.ttf'),
    'AHBoldItalic': require('./fonts/AtkinsonHyperlegible-BoldItalic.ttf'),
    'AHItalic': require('./fonts/AtkinsonHyperlegible-Italic.ttf'),
    'AHRegular': require('./fonts/AtkinsonHyperlegible-Regular.ttf'),
  });}
  useEffect(() => {
    loadFonts()  
  }, [])
  
//   const handleReadMore = () => {
//     navigation.navigate('ArtFair')
//   }

  const renderEventItem = ({ item }) => {
    const handleReadMore = () => {
        const data= {
            id : item.id,
            name : item.name,
            date : item.date,
            img : item.img,
            description : item.description,
            location : item.location,
            url : item.url,
            location2 : item.location2
        }
    navigation.navigate('SummerFest', {data} )
  }
  const handlePicnics = () => {
    navigation.navigate('Picnics')
  }
    return (
    <View>
    <View style={styles.resourceItem}>
        <View>
      <Text style={styles.resourceName}>{item.name}</Text>
      <Text style = {styles.eventDate}>{item.date}</Text>
      </View>
      <TouchableOpacity onPress={item.id ==="4" || item.id ==="6" ? handlePicnics : handleReadMore  }>
      <Text style={styles.readMore}>Read more</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.separator} />
    </View>
  )};

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scroll}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upcoming events this summer !</Text>
      <View style={styles.resourcesList}>
        <FlatList
          data={eventsData}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
    alignItems: 'center'
  },
  logo: {
    marginTop: '5%',
    width: 242,
    height: 40,
    marginBottom: '10%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'AHBold',
    marginBottom: '5%',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    color: '#313131'
  },
  resourcesList: {
    marginTop: '3%',
    width: '90%',
    backgroundColor: '#115BFB',
    borderRadius: 40,
    marginBottom: '70%'
  },
  resourceItem: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '4%',
    paddingHorizontal: '6%',
  },
  resourceName: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'AHBold'
  },
  readMore: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'AHItalic'
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    
  },
  eventDate: {
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'AHRegular'

  }
});

export default Events;
