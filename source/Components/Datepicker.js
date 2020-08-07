import * as React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export default function () {
    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>
                <View>
                    <TouchableOpacity style={{}}>
                        <Text>Day</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Week</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{}}>
                        <Text>Month</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.datepicker}>
                <View>
                    <TouchableOpacity style={styles.button1}>
                        <Ionicons name="chevron-back-outline" style={styles.buttonText} size={24}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text>Date</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button1}>
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
        justifyContent: "center",
        alignItems: 'center',
    },
    datepicker: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: width * 0.9,
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
        width: width * 0.3,
        alignItems: 'center'
    },
    button1: {
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
        // padding: 5,
    },
    buttonGroup: {
        width: width * 0.9,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "space-around",
        alignItems: 'center',
    }
})