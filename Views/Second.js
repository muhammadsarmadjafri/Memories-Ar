import React from 'react';
import { Pressable, Text, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Second({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style = {[{flex: 2}]}></View>{/*  Place Holder for Image */}

            <View style={mainStyle.main}>

                <View style={mainStyle.textHolder}>
                <Text style={[{color: '#000'},{fontSize: 35}] }>Welcome!</Text>
                </View>

                <View style={[{marginBottom:55},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Sign Up or Log in with the data that you entered while registration.</Text>
                </View>
                
                <Pressable 
                style={[{marginBottom: 10},{backgroundColor: '#535ddc'}, mainStyle.button]} >
                <Text style={[{color: '#fff'},{fontSize: 20}] } >Sign Up</Text>
                </Pressable>
                
                <Pressable 
                style={[{backgroundColor: '#fff'}, mainStyle.button]} >
                <Text style={[{color: '#000'},{fontSize: 20}] }>Sign In</Text>
                </Pressable>

            </View>
            
            <View style = {[{flex: 2},{justifyContent: 'center'}, mainStyle.secondary]}>

                <Text style={[{alignContent: 'center'}, {justifyContent: 'space-between'},{margin:20}]}>OR LOGIN WITH</Text>

                <View style={[{flexDirection: 'row'},{justifyContent: 'space-around'}, mainStyle.flexRow]}>
                
                <View style={mainStyle.icon} ><Text>
                    <Pressable><FontAwesome name='facebook' size={40} color='#25f'/></Pressable>
                </Text></View>
                
                <View style={mainStyle.icon}><Text>
                    <Pressable><FontAwesome name='google' size={40} color='#f34'/></Pressable>
                </Text></View>
                
                </View> 

            </View>

        </View>
    );
}

export default Second;
