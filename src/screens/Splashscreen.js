import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

import SPLASHSCREEN_IMG from "../assets/splashscreen.png";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Splashscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                <Image source={SPLASHSCREEN_IMG} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    }
})

export default Splashscreen;