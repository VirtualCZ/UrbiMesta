import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


import SnPText from './elemtents/SnPText';

const EventCard = (props) => {

    return(
        <View 
            style={styles.container}
        >
        <Text style={styles.maintext}>{props.name}</Text>
        <SnPText  
            proptext={props.detail}
            numberproplines="4"
        />
        </View>
    )
}

export default EventCard

const styles = StyleSheet.create({
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
  });