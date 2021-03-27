import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CardScreen from "../screens/CardScreen";
import ProfileScreen from "../screens/ProfileScreen";

// import Colors from '../constants/Colors';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


const AppNavigator = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Card' component={CardScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default AppNavigator;
