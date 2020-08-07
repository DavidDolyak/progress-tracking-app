import * as React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ButtonGroup() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>

                <TouchableOpacity><Text>leftt</Text></TouchableOpacity>
                <TouchableOpacity><Text>center</Text></TouchableOpacity>
                <TouchableOpacity><Text>right</Text></TouchableOpacity>
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
    },
    buttonGroup: {
        flex: 0.90,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2
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