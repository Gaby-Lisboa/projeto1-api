import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f4f7',
    },
    stGet: {
      backgroundColor: '#d1e7f3',
      flex: 1,
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    stPost: {
      backgroundColor: '#98c1d9',
      flex: 1,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    title: {
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#2b2d42',
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    label: {
      marginBottom: 5,
      color: '#2b2d42',
      fontWeight: 'bold',
    },
    caixaGet: {
      height: 35,
      borderRadius: 8,
      padding: 10,
      backgroundColor: '#a0c4ff',
      marginBottom: 10,
      color: '#2b2d42',
    },
    caixaPost: {
      height: 35,
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#2b2d42',
      color: '#2b2d42',
    },
    caixaID: {
      width: '30%',
      height: 35,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#2b2d42',
      paddingLeft: 10,
      color: '#2b2d42',
    },
    btn: {
      height: 35,
      backgroundColor: '#136f63',
      marginLeft: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    btnText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
  });
  
  export default styles;
  