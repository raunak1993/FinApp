import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import CARD_IMG from '../../assets/6.jpeg';
import CHIP_IMG from "../../assets/chip.png";
import VISA_IMG from "../../assets/visa.png";
import { useSelector } from 'react-redux';

const Card = ({ cardNumber, expiryDate }) => {
    const { userName } = useSelector(state => state.user)
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={CARD_IMG} imageStyle={{ borderRadius: 10 }}>
                <View style={styles.card_header}>
                    <View style={styles.chip_box}>
                        <Image style={styles.chip} source={CHIP_IMG} />
                    </View>
                    <View style={styles.card_type_box}>
                        <Image style={styles.card_type} source={VISA_IMG} />
                    </View>
                </View>
                <View style={styles.card_number_box}>
                    <Text style={styles.card_num}>
                        {`${cardNumber.substring(0, 4)}  ${cardNumber.substring(4, 8)}  ${cardNumber.substring(8, 12)}  ${cardNumber.substring(12, 16)}`}
                    </Text>
                </View>
                <View style={styles.bottom_box}>
                    <Text style={styles.card_num}>
                        {userName}
                    </Text>
                    <Text style={styles.card_num}>Exp : {expiryDate}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '68%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        display: 'flex',
    },
    card_header: {
        flexBasis: '27%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chip_box: {
        width: '20%',
        height: '100%',
        margin: 10
    },
    card_type_box: {
        flexBasis: '30%',
        height: '100%',
        margin: 10
    },
    chip: {
        width: '100%',
        height: '100%'
    },
    card_type: {
        width: '100%',
        height: '100%'
    },
    card_number_box: {
        flexBasis: '40%',
        marginTop: 20,
        paddingLeft: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    card_num: {
        color: 'white',
        fontSize: 16
    },
    bottom_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20,
    }
})

export default Card;