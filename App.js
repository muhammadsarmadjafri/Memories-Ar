import React from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Second from './Views/Second';
import Login from './Views/Login';
import SignUp from './Views/SignUp';
import ForgotPassword from './Views/ForgotPassword';
import Verification from './Views/Verification';
import ResetPassword from './Views/ResetPassword';
import AccountVerified from './Views/AccountVerified';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
        name="Welcome"
        component={Second}
        /> */}
        {/* <Stack.Screen
        name="Login"
        component={Login}
        /> */}
        {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
        /> */}
        {/* <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        /> */}
        {/* <Stack.Screen
        name="Verification"
        component={Verification}
        /> */}
        {/* <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        /> */}
        <Stack.Screen
        name="AccountVerified"
        component={AccountVerified}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

