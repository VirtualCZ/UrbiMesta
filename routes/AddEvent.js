import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Realm from 'realm';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { ScrollView } from 'react-native-gesture-handler';
import { FormInputContext } from '../components/FormInputContext';
let realm;

let schema = yup.object().shape({
  town_id: yup.number().required().integer(),
  name: yup.string().required(),
  detail: yup.string().required(),
  eventFrom: yup.date().required(),
  eventTo: yup.date().required(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});

const AddEvent = (props) => {
  const [show, setShow] = useState(true)
  const [CityArr, setCityArr] = useState([])

  const onSubmit = (form) => {
    console.log("onSubmit", form)
  }

  const onErrors = (errors) => {
    console.warn("errors", errors)
  }

  useEffect(()=>{
      if (props.towns.lengh > 0){
          setCityArr(props.towns)
          setShow(true)
      }  
  },[props, CityArr])

  const focusPassword = useCallback(() => passwordRef?.current?.focus(), [
    passwordRef,
  ])

    const formMethods = useForm()
    const passwordRef = useRef()

    realm = new Realm({path: 'myrealm'});
  
    //treba prepsat
    const writeAll = () => {

            realm.write(() => {
              realm.create('Town', {
                _id: Date.now(),
                name: 'Obec Jalubí', 
                region: 'Zlínský kraj', 
                street: 'Jalub 1',
                city: '123 45 Jalubí', 
                phone: 123456789,
                ico: 123456789,
                dic: 'CZ123456789',
                logo: 'https://www.jalubi.eu/skins/jalubi.eu_lego2/images/crest.png', 
                lat: 50.1163, 
                lng: 18.4279,
              });

              Alert.alert(
                'Success',
                'Inserted',
                [
                  {
                    text: 'Ok'
                  },
                ],
                { cancelable: false }
              );

            });

    };

    const readAll = () => {
        console.log(realm.objects("Town"))
    }

    const deleteAll = () => {
        realm.write(() => 
        {
            realm.deleteAll()
        })
    }

    return(
        <ScrollView style={styles.container}>

          <FormProvider {...formMethods}>
            <FormInputContext 
              name="town_id" 
              label="town_id" 
              rules={{ 
                required: 'town_id is required!' 
              }}  
              onSubmitEditing={focusPassword}
              returnKeyType='next'
            />
            <FormInputContext 
              name="event_name" 
              label="Name" 
              rules={{
                required: 'Name is required!',
              }}
              ref={passwordRef}
            />
            {/* <FormInputBigContext 
              name="event_details" 
              label="Details" 
            />
            <View style={styles.containerFromTo}>
              <FormInputContext 
                name="event_from" 
                label="From" 
            />
              <FormInputContext 
                name="event_to" 
                label="To" 
              />
            </View>
            <FormInputContext 
              name="event_link" 
              label="Link" 
            />
            <FormInputBigContext 
              name="event_textHTML" 
              label="textHTML" 
            /> */}
          </FormProvider>

          <Button 
            title='Submit'
            onPress={formMethods.handleSubmit(onSubmit, onErrors)}
          />

          <Button onPress={()=>writeAll()} title='Write'/>
          <Button onPress={()=>readAll()} title='Read'/>
          <Button onPress={()=>deleteAll()} title='Delete'/>
        </ScrollView>
    )
}

export default AddEvent

const styles = StyleSheet.create({
  containerFromTo: {
    flexDirection: 'row',
  },
});