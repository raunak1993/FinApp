import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import Icon from "../Icon";
import { Colors } from "../../constants/";

const ExpenseBar = ({ label, amount, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left_box}>
                <Icon name='wallet' color={Colors.primary} size={30} />
                <View style={styles.label_box}>
                    <Text style={styles.label}>
                        {label}
                    </Text>
                    <Text style={styles.date}>
                        {date}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={styles.amount}>
                    {amount}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: Colors.secondary,
        elevation: 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left_box: {
        display: 'flex',
        flexDirection: 'row',
    },
    label_box: {
        paddingLeft: 10
    },
    label: {
        fontSize: 16
    },
    date: {
        color: 'grey'
    },
    amount: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default ExpenseBar;