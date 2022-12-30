import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function ResetPassword({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>

                <View style={mainStyle.textHolder}>
                <Text style={[{marginTop: 30},{color: '#000'},{fontSize: 35}] }>Reset Password</Text>
                </View>

                <View style={[{marginBottom:55},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Your new password must be different.</Text>
                </View>
                
                <Text style={[{color: '#333'},{fontSize: 12}] }>Password</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Create a new password"
                ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Confirm Password</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="confirm password"
                    ></TextInput>

                <Pressable 
                style={[{backgroundColor: '#535ddc'}, mainStyle.button]} >
                <Text style={[{color: '#000'},{fontSize: 20}] }>Reset</Text>
                </Pressable>

            </View>
            

        </View>
    );
}

export default ResetPassword;
