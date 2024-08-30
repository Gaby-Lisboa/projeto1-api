import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingBottom: 250,
      paddingTop: 250,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    cardLogin: {
        flex: 1,
        backgroundColor: '#2f4ca3',
        width: 350,
        height: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixa: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        paddingLeft: 10,
        marginTop: 10,
        height: 30,
        width: '100%',
        padding: 10,
    },
    button: {
      backgroundColor: '#5d78c9',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      height: 30,
      width: '60%',
      padding: 10,
      alignSelf: 'center',
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  
  });
  
  export default styles