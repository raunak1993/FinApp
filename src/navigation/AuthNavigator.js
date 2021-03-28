import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../screens/AuthScreen';
import { Colors } from '../constants';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {

    return (
        <AuthStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary },
                headerTintColor: 'white',
            }}>
            <AuthStack.Screen name="Auth" component={AuthScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
