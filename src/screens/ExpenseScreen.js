import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';

import { addExpense } from "../action/expense";
import { Colors } from "../constants";


const ExpenseScreen = ({ navigation }) => {
    const [label, setLabel] = useState()
    const [amount, setAmount] = useState()
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const handleAddExpense = () => {
        const id = Math.floor(Math.random() * 100)
        let date = new Date()
        let formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            dispatch(addExpense(id, label, amount, formattedDate))
            navigation.navigate('Home')
        }, 1000)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Expense</Text>

            <View style={styles.input_container}>
                <Text style={styles.label}>
                    Expense Name
                </Text>
                <TextInput style={styles.input} value={label} onChangeText={(text) => setLabel(text)} />
            </View>

            <View style={styles.input_container}>
                <Text style={styles.label}>
                    Amount
                </Text>
                <TextInput style={styles.input} value={amount} onChangeText={(text) => setAmount(text)} />
            </View>

            <TouchableOpacity style={styles.add_button} onPress={handleAddExpense}>
                {
                    loading ?
                        <ActivityIndicator color='white' />
                        : <Text style={styles.add_label}>ADD</Text>
                }
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input_container: {
        marginVertical: 15
    },
    label: {
        color: 'grey'
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 5
    },
    add_button: {
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: Colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    add_label: {
        color: Colors.secondary,
        fontSize: 16
    }
})

export default ExpenseScreen;