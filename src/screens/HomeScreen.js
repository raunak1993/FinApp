import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Card from "../components/Card";
import { Colors } from "../constants/index";

const HomeScreen = () => {
    const { userName } = useSelector(state => state.user)
    const { cardNumber, cardLimit, expiryDate } = useSelector(state => state.card)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading_text}>Hi, {userName.split(' ')[0]}!</Text>
                <Text style={styles.caption}>Let's make your banking needs easy!</Text>
            </View>
            <View style={styles.card_section}>
                {
                    cardNumber ?
                        <View>
                            <Card cardNumber={cardNumber} expiryDate={expiryDate} />
                            <View style={styles.limit_box}>
                                <View style={styles.limit_detail}>
                                    <Text style={styles.label}>Credit Limits</Text>
                                    <Text>{cardLimit}</Text>
                                </View>
                                <View style={styles.limit_detail}>
                                    <Text style={styles.label}>Monthly Spend</Text>
                                    <Text>--</Text>
                                </View>
                            </View>
                        </View>
                        :
                        <View style={styles.no_card_box}>
                            <Text style={styles.caption}>No Virtual Card created yet!</Text>
                        </View>
                }

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 15
    },
    heading_text: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    caption: {
        color: 'darkgrey'
    },
    card_section: {
        flexBasis: '50%',
        height: '100%',
        paddingVertical: 10,
    },
    limit_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    limit_detail: {
        margin: 10,
        marginTop: 15,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 5
    },
    label: {
        fontSize: 16,
        color: 'grey'
    },
    no_card_box: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;