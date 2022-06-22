import { View, StyleSheet, Button } from 'react-native';
import React, {useState, useEffect} from 'react';

import CityCard from '../components/CityCard';

const ShowCities = (props) => {
    const [show, setShow] = useState(true)
    const [CityArr, setCityArr] = useState([])

    useEffect(()=>{
        if (props.towns.lengh > 0){
            setCityArr(props.towns)
            setShow(true)
        }  
    },[props, CityArr])

    return(
        <View style={styles.container}>
            {show && props.towns.map(item=>(
                <CityCard 
                    key={item.id}
                    name={item.name}
                    region={item.region}
                    street={item.street}
                    city={item.city}
                    phone={item.phone}
                    ico={item.ico}
                    dic={item.dic}
                />
            ))}
        </View>
    )
}

export default ShowCities

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ccc", 
        height: "100%",
        paddingTop: 10
    },
  });