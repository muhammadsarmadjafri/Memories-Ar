import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Login({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>

                <View style={mainStyle.textHolder}>
                <Text style={[{marginTop: 30},{color: '#000'},{fontSize: 35}] }>Welcome!</Text>
                </View>

                <View style={[{marginBottom:55},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Sign In with your credentials.</Text>
                </View>
                
                <Text style={[{color: '#333'},{fontSize: 12}] }>Email</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your email address"
                ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Password</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your password"
                    ></TextInput>

                <Pressable 
                style={[{backgroundColor: '#fff'}, mainStyle.button]} >
                <Text style={[{color: '#000'},{fontSize: 20}] }>Sign In</Text>
                </Pressable>

            </View>
            
            <View style = {[{flex: 2},{justifyContent: 'flex-end'}, mainStyle.secondary]}>

                <Pressable><Text style={[{color:'#535ddc'},{alignContent: 'center'}, {justifyContent: 'space-between'},{margin:20}]}>Forgot Password?</Text></Pressable>

                <View style={[{flexDirection: 'row'},{justifyContent: 'space-around'}, mainStyle.flexRow]}>
                
                <View style={mainStyle.icon} ><Text>
                    <Pressable><FontAwesome name='facebook' size={40} color='#25f'/></Pressable>
                </Text></View>
                
                <View style={mainStyle.icon}><Text>
                    <Pressable><FontAwesome name='google' size={40} color='#f34'/></Pressable>
                </Text></View>
                
                </View> 
                
                <Pressable 
                    style={[{marginBottom: 50},{backgroundColor: '#535ddc'}, mainStyle.button]} >
                    <Text style={[{color: '#fff'},{fontSize: 20}] } >Sign Up</Text>
                </Pressable>

            </View>

        </View>
    );
}

export default Login;
