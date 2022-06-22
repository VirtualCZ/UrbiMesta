import {View, Text, Linking, StyleSheet, ScrollView, Button} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
import SnPText from '../components/elemtents/SnPText';

const EventDetail = () => {
  const route = useRoute();
  return (
    <ScrollView style={styles.scrollcontainer}>
      <View style={styles.container}>
        <Text style={styles.maintext}>{route.params.name}</Text>
        <SnPText 
          subtext="From: " 
          proptext={route.params.eventFrom}
        />
        <SnPText 
          subtext="To: " 
          proptext={route.params.eventTo}
        />
        <Text style={styles.subtext}>{route.params.detail}</Text>
        <Button
          title='Open link'
          style={{color: 'blue'}}
          onPress={() => Linking.openURL(route.params.link)}
        />
        
        
        {/* crashuje */}
        {/* <View androidLayerType="software">
            <WebView
              source={{uri: 'https://infinite.red'}}
              style={{marginTop: 20, opacity: 0.99, overflow: 'hidden'}}
            />
          </View> */}
      </View>
        
    </ScrollView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  scrollcontainer:{
    backgroundColor: '#ccc',
    height: '100%',
    padding: 10,
  },
  container: {
    borderRadius: 5,
    alignSelf: "center",
    margin:8,
    width: "100%",
    backgroundColor: '#fff',
    padding: 8,
  },
  maintext: {
    color: "#000000",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtext: {
    color: "#000",
    fontSize: 15,
      overflow: "hidden"
  },
});