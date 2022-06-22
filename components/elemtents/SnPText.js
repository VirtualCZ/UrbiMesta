import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const SnPText = (props) => {
  const [noOfLines, setNoOfLines] = useState(0)
  useEffect(()=>{
    if (props.numberproplines)
    { 
      setNoOfLines( parseInt(props.numberproplines) )
    }
  },[])
    return(
        <View style={styles.container}>
            <Text style={styles.subtext}>{props.subtext}</Text>
            <Text
                numberOfLines={noOfLines}
                ellipsizeMode="tail"
                style={styles.proptext}>{props.proptext}</Text>
      </View>
    )
}
export default SnPText
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 2.4
    },
    subtext: {
      color: "#000",
      fontSize: 15,
      fontWeight: 'bold',
    },
    proptext: {
      color: "#000",
      fontSize: 15,
        overflow: "hidden"
    },
  });