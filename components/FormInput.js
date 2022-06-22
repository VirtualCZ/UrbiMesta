import { Text, StyleSheet, View, TextInput } from "react-native"
import React from 'react'

const FormInput = React.forwardRef((props, forwardedRef) => {
    const { label, error, ...textInputProps } = props
    const isError = Boolean(error)
  
    return (
        <View style={styles.container}>
            {Boolean(label) && <Text style={styles.label} >{label}</Text>}
            <TextInput style={styles.input} {...textInputProps} ref={forwardedRef} isError={isError} />
            {isError && <Text style={styles.error}>{error}</Text>}
        </View>
    )
})

const FormInputBig = React.forwardRef((props, forwardedRef) => {
    const { label, error, ...textInputProps } = props
    const isError = Boolean(error)
  
    return (
        <View style={styles.container}>
            {Boolean(label) && <Text style={styles.label} >{label}</Text>}
            <TextInput style={styles.inputBig} {...textInputProps} ref={forwardedRef} multiline={true} isError={isError} />
            {isError && <Text style={styles.error}>{error}</Text>}
        </View>
    )
})

export {FormInput, FormInputBig}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 3,
        flex:1
    },
    input:{
        backgroundColor:"#ccc",
        borderRadius: 10,
    },
    inputBig:{
        backgroundColor:"#ccc",
        borderRadius: 10,
        height: 120
    },
    error:{
        color:"#ff5733",
        textAlign: "center",
        fontStyle: "italic"
    },
    label:{
        color:"black",
        fontSize: 20,
        textAlign: "center",
    }
  });