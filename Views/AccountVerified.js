import React from 'react';
import { Pressable, Text, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function AccountVerified({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>
                <View >
                    <Text>
                    <Pressable><FontAwesome name='check' size={250} color='#25f'/></Pressable>
                    </Text>
                </View>

                <View style={mainStyle.textHolder}>
                <Text style={[{marginTop:30},{color: '#000'},{fontSize: 35}] }>Account Verified</Text>
                </View>

                <View style={[{marginBottom:25},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Proceed to Login.</Text>
                </View>
                
                <Pressable 
                style={[{marginBottom: 10},{backgroundColor: '#535ddc'}, mainStyle.button]} >
                <Text style={[{color: '#fff'},{fontSize: 20}] } >Sign In</Text>
                </Pressable>

            </View>
            
        </View>
    );
}

export default AccountVerified;
