import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import SnPText from './elemtents/SnPText';

const CityCard = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.maintext}>{props.name}</Text>
      <SnPText 
        subtext="Region: " 
        proptext={props.region}
      />
      <SnPText 
        subtext="Street: " 
        proptext={props.street}
      />
      <SnPText 
        subtext="Phone: " 
        proptext={props.phone}
      />
      <SnPText 
        subtext="ICO: " 
        proptext={props.ico}
      />
      <SnPText 
        subtext="DIC: " 
        proptext={props.dic}
      />
    </View>
  )
}

export default CityCard

const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      alignSelf: "center",
      margin:8,
      width: "93%",
      backgroundColor: '#fff',
      padding: 8,
    },
    maintext: {
      color: "#000000",
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5
    },
  });