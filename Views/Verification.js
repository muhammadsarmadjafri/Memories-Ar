import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Verification({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>

                <View style={mainStyle.Verification}>
                <Text style={[{marginTop: 30},{color: '#000'},{fontSize: 35}] }>Enter your verification code.</Text>
                </View>

                <View style={mainStyle.codeBox}>
                    <TextInput 
                        style={mainStyle.digits}
                        maxLength = {1}
                        keyboardType = 'numeric'
                    ></TextInput>
                    <TextInput 
                        style={mainStyle.digits}
                        maxLength = {1}
                        keyboardType = 'numeric'
                    ></TextInput>
                    <TextInput 
                        style={mainStyle.digits}
                        maxLength = {1}
                        keyboardType = 'numeric'
                    ></TextInput>
                    <TextInput 
                        style={mainStyle.digits}
                        maxLength = {1}
                        keyboardType = 'numeric'
                    ></TextInput>

                </View>

                <Pressable 
                style={[{backgroundColor: '#535ddc'}, mainStyle.button]} >
                <Text style={[{color: '#000'},{fontSize: 20}] }>Verify</Text>
                </Pressable>

                <View style={[{marginTop:30},mainStyle.textHolder]}>
                    <Text style= {{fontSize: 20}}>00:00</Text>
                    <Text></Text>
                    <Text style= {{fontSize: 20}}>We sent the verification code to your email ******@*****.com. You can check your inbox.</Text>
                    <Text></Text>
                    <Pressable><Text style= {{fontSize: 20}}>Didn't receive the code? Send again</Text></Pressable>
                </View>
                
            </View>
            

        </View>
    );
}

export default Verification;
