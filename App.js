import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Realm from 'realm';

import {getTown, getTownIds} from './api/towns';
import {getEvents} from './api/events'

let townArr
let eventsArr

const getTowns = () => {
  const [idckaValue, setIdckaValue] = useState([]);
  const [towns, setTowns] = useState([]);
  const [newTown, setNewTown] = useState();
  const [events, setEvents] = useState([])

  //getting IDs from API
  const getTownIdsAsync = async () => {
    const asyncids = await getTownIds();
    return asyncids.ids;
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(getTownIdsAsync());
    })
      .then(result => {
        setIdckaValue(result);
      })
      .catch(err => {
        console.log('catchIdcka', err);
      });
  }, []);

  //getting Towns from API
  const getTownsByIdsAsync = async ajdycka => {
    const asyncTowns = await getTown(ajdycka);
    return asyncTowns;
  };

  useEffect(() => {
    for (let i = 0; i < idckaValue.length; i++) {
      // Getting Towns from API
      new Promise((resolve, reject) => {
        resolve(getTownsByIdsAsync(idckaValue[i]));
      })
        .then(result => {
          setNewTown(result);
        })
        .catch(err => {
          console.log('catchTowns', err);
        });
    }
  }, [idckaValue]);

  //getting Events from API
  const getEventsAsync = async () => {
    const events = await getEvents()
    return events
  }

  useEffect(()=>{
    new Promise((resolve, reject) => {
      resolve(getEventsAsync());
    })
      .then(result => {
        setEvents(result);
      })
      .catch(err => {
        console.log('catchEvents', err);
      });
  },[])

  useEffect(() => {
    if (newTown) {
      const newTowns = [...towns];
      newTowns.push(newTown);
      setTowns(newTowns);
    }
  }, [newTown]);

  townArr = towns
  eventsArr = events
};

//tvorba tabulky
const CitySchema = {
  name: 'Town',
  properties: {
    _id: 'int', // 1
    name: 'string', // Obec Jalubí
    region: 'string', // Zlínský kraj
    street: 'string', // Jalub 1
    city: 'string', // 123 45 Jalubí
    phone: 'int', // 999 999 999
    ico: 'int', // 123456789
    dic: 'string', // CZ123456789
    logo: 'string', // https://www.jalubi.eu/skins/jalubi.eu_lego2/images/crest.png
    lat: 'double', // float  50.1163
    lng: 'double', // float  18.4279
    events: 'Event[]',
  },
  primaryKey: '_id',
};

const EventSchema = {
  name: 'Event',
  properties: {
    _id: 'int', // 1
    city_id: 'int', //1
    eventName: 'string', // Balloon popping
    eventDescription: 'string', // This event is about....
  },
  primaryKey: '_id',
};

//use realm to interact with database
(async () => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [CitySchema, EventSchema],
  });
})();

// Screens
import ShowEvents from './routes/ShowEvents';
import EventDetail from './routes/EventDetail';
import AddEvent from './routes/AddEvent';
import ShowCities from './routes/ShowCities';

// Screen names
export const screenNames = {
  EventsStack: 'Events list',
  ShowEvents: 'Events list',
  EventDetail: 'Event details',
  AddEvent: 'Add an event',
  ShowCities: 'Cities',
};

const EventsStack = createStackNavigator();

function EventsStackScreen({navigation, route}) {
  const [eventsArrState, setEventsArrState] = useState(getTowns())
  useEffect(()=>{
    setEventsArrState(eventsArr) 
  },[eventsArr])

  const tabHiddenRoutes = [''];
  useEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <EventsStack.Navigator initialRouteName={screenNames.ShowEvents}>
      <EventsStack.Screen
        name={screenNames.ShowEvents}
        children={() => <ShowEvents events={eventsArrState}/>}
      />
      <EventsStack.Screen
        name={screenNames.EventDetail}
        children={() => <EventDetail />}
      />
    </EventsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [townArrState, setTownArrState] = useState(getTowns())
  useEffect(()=>{
    setTownArrState(townArr) 
  },[townArr])

  return (
    <NavigationContainer independent>
      <Tab.Navigator
        initialRouteName={screenNames.EventsStack}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === screenNames.EventsStack) {
              iconName = focused ? 'calendar-sharp' : 'calendar-outline';
            } else if (rn === screenNames.AddEvent) {
              iconName = focused ? 'add-sharp' : 'add-outline';
            } else if (rn === screenNames.ShowCities) {
              iconName = focused ? 'business-sharp' : 'business-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          tabBarActiveTintColor: '#007aff',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}>
        <Tab.Screen
          name={screenNames.ShowEvents}
          component={EventsStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen 
          name={screenNames.AddEvent} 
          children={() => <AddEvent towns={ townArrState }/>} />
        <Tab.Screen
          name={screenNames.ShowCities}
          children={() => <ShowCities towns={ townArrState } />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}