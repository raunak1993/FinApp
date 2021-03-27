import React from 'react';

import { View, Text, StyleSheet, Image } from "react-native";

import CARD_IMG from "../assets/card.png";

const CardScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading_box}>
                <Text style={styles.heading}>
                    Create Virtual Card
                </Text>
                <Text style={styles.caption}>
                    Fresh Virtual credit card are on your way!
            </Text>
            </View>
            <View style={styles.card_box}>
                <View style={styles.card_image_box}>
                    <Image style={styles.card_image} source={CARD_IMG} />
                </View>
                <View style={styles.card_detail_box}>

                </View>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    heading_box: {
        flexBasis: '15%',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    caption: {
        marginTop: 10,
        color: 'darkgrey'
    },
    card_box: {
        flexBasis: '75%',
        borderColor: 'red',
        borderWidth: 1,
        position: 'relative'
    }

});

export default CardScreen;