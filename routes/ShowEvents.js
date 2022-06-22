import {View, StyleSheet, Pressable, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import EventCard from '../components/EventCard';
import {ScrollView} from 'react-native-gesture-handler';

const ShowEvents = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const [show, setShow] = useState(false);
  const [EventsArr, setEventsArr] = useState([]);

  useEffect(() => {
    if (props.events != undefined) {
      console.log('showEvents', props.events[0]);

      setEventsArr(props.events);
      setShow(true);
      let name = props.events[0];
      console.log('name', name);
    }
  }, [props.events, EventsArr]);

  return (
    <ScrollView style={styles.container}>
      {show &&
        props.events.map(item => (
          <Pressable
            key={item.key}
            onPress={() =>
              navigation.navigate('Event details', {
                name: item.name,
                detail: item.text,
                link: item.link
              })
            }>
            <EventCard name={item.name} detail={item.text} />
          </Pressable>
        ))}
    </ScrollView>
  );
};
export default ShowEvents;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    height: '100%',
    padding: 10,
  },
});
