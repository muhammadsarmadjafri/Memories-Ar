import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import mainStyle from '../Styles/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function SignUp({navigation}) {

    return (
        <View style={mainStyle.body}>

            <View style={mainStyle.main}>

                <View style={mainStyle.textHolder}>
                <Text style={[{marginTop: 10},{color: '#000'},{fontSize: 35}] }>Welcome!</Text>
                </View>

                <View style={[{marginBottom:0},mainStyle.textHolder]}>
                <Text style={[{color: '#000'},{fontSize: 20}] }>Sign In with your credentials.</Text>
                </View>
                
                <Text style={[{color: '#333'},{fontSize: 12}] }>First Name</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your First Name"
                ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Last Name</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your Last Name"
                    ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Email ID</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your Email ID"
                    ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Password</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please enter your password"
                    ></TextInput>
                <Text style={[{color: '#333'},{fontSize: 12}] }>Confirm Password</Text>
                <TextInput 
                    style={mainStyle.input}
                    placeholder="Please confirm your password"
                    ></TextInput>

            </View>
            
            <View style = {[{flex: 2},{justifyContent: 'flex-end'}, mainStyle.secondary]}>

                <Pressable><Text style={[{color:'#535ddc'},{alignContent: 'center'}, {justifyContent: 'space-between'},{marginTop:30}]}>Forgot Password?</Text></Pressable>

                <View style={[{marginTop: 10},{flexDirection: 'row'},{justifyContent: 'space-around'}, mainStyle.flexRow]}>
                
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

export default SignUp;
