import React from 'react';

import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from "./AuthNavigator";

const RootNavigator = () => {
    const { isLoggedIn } = useSelector(state => state.user)
    return (
        <NavigationContainer>
            {!isLoggedIn && <AuthNavigator />}
            {isLoggedIn && <AppNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigator;
