import { StyleSheet} from 'react-native';

const mainStyle = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    main: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    secondary: {
      width: 300,
      height: 300,
      alignItems: 'center',
    },
    flexRow: {
      width: 150,
      height: 150,
      justifyContent: 'space-evenly',
    },
    textHolder:{
        width: 300,
        height: 70,
    },
    Verification:{
      width: 300,
      height: 150,
  },
    button:{
        width: 300,
        height: 50,
        borderColor: '#535ddc',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    icon:{
      width: 70,
      height: 90,
      padding: 5,
      marginLeft: 30,
      marginRight: 30,
      borderColor: '#535ddc',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    input:{
      padding: 5,
      borderWidth: 2,
      width: 300,
      height: 40,
      margin: 5,
      borderRadius: 10,
      fontSize: 18,
      secureTextEntry: true,
    },
    codeBox: {
      flexDirection: 'row',
    },
    digits:{
      width: 60,
      height: 60,
      borderColor: '#535ddc',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      margin: 10,
      textAlign: 'center',
    },
  });

export default mainStyle;
