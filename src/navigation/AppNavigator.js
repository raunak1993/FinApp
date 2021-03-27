import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CardScreen from "../screens/CardScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Icon from '../components/Icon'
import { Colors } from '../constants/index'

const Tab = createBottomTabNavigator();

const TabBarIconConfig = ({ focused, color, size, icon }) => (
    <Icon name={focused ? icon : `${icon}-outline`} size={size} color={color} />
);


const AppNavigator = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                activeTintColor: Colors.primary
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: (props) => <TabBarIconConfig {...props} icon="home" />,
                }}
            />
            <Tab.Screen
                name='Card'
                component={CardScreen}
                options={{
                    tabBarIcon: (props) => <TabBarIconConfig {...props} icon="card" />,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: (props) => <TabBarIconConfig {...props} icon="person" />,
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
