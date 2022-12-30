import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function ForgotPassword({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>

                <View style={mainStyle.textHolder}>
                <Text style={[{marginTop: 30},{color: '#fa0'},{fontSize: 35}] }>Reset Password</Text>
                </View>

                <View style={[{marginTop:100},{marginBottom:55},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Enter Your Email to get your Password reset Link.</Text>
                </View>
                
                <Text style={[{color: '#333'},{fontSize: 12}] }>Email</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your email address"
                ></TextInput>

                
                <Pressable 
                    style={[{marginBottom: 50},{backgroundColor: '#535ddc'}, mainStyle.button]} >
                    <Text style={[{color: '#fff'},{fontSize: 20}] } >Send</Text>
                </Pressable>

            </View>
            

        </View>
    );
}

export default ForgotPassword;
