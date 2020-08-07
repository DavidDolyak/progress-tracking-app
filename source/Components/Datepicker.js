import * as React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Datepicker() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>

            </View>
            <View style={styles.datepicker}>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="chevron-back-outline" style={styles.buttonText} size={24}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text>Date</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="chevron-forward-outline" style={styles.buttonText} size={24}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        // backgroundColor: 'white'
    },
    datepicker: {
        flex: 0.90,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    button: {
        padding: 10,
        backgroundColor: '#3E3E3E',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 25,
    },
    buttonText: {
        color: 'white',
        padding: 5,
    },
    buttonGroup: {

    }
})