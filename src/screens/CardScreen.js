import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

import Icon from "../components/Icon";
import CARD_IMG from "../assets/card.png";
import { Colors } from "../constants/index";

const cardLimits = ['$1000', '$5000', '$10000', 'No Limit']

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
                    <View>
                        <Text style={styles.label}>
                            Card Holder Name
                        </Text>
                        <View style={styles.username_box}>
                            <View style={styles.icon_box}>
                                <Icon name='person' color={Colors.primary} size={20} />
                            </View>
                            <TextInput style={styles.name_input} />
                        </View>
                    </View>
                    <View style={styles.weekly_limit_box}>
                        <Text style={styles.label}>Card Weekly Limits</Text>
                        <View style={styles.limit_container}>
                            {
                                cardLimits.map((limit, index) => <Text style={styles.limit_text} key={index}>{limit}</Text>)
                            }
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.card_button_box}>
                <Text style={styles.button_text}>
                    Create Card
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25
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
        flexBasis: '70%',
        position: 'relative',
        justifyContent: 'flex-end'
    },
    card_image_box: {
        width: 120,
        height: 80,
        position: 'absolute',
        left: 90,
        top: 0,
        zIndex: 1
    },
    card_image: {
        width: '100%',
        height: '100%'
    },
    card_detail_box: {
        flexBasis: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingTop: 70,
        paddingHorizontal: 30
    },
    label: {
        color: 'darkgrey'
    },
    username_box: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        marginTop: 10
    },
    icon_box: {
        flexBasis: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name_input: {
        flexBasis: '80%'
    },
    weekly_limit_box: {
        marginTop: 20
    },
    limit_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    limit_text: {
        flexBasis: '40%',
        backgroundColor: 'whitesmoke',
        margin: 10,
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
    },
    card_button_box: {
        backgroundColor: Colors.primary,
        marginTop: 10,
        flexBasis: '10%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }

});

export default CardScreen;