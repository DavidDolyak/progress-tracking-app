import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <Text style={styles.sideText}>Left</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Title</Text>
            </View>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <Text style={styles.sideText}>Right</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
    },
    titleContainer: {
        flex: 4,
        justifyContent: 'center',
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 24,
        fontFamily: 'Montserrat'
    },
    sideFunctions: {
        flex: 2,
        justifyContent: 'center'
    },
    sideText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Montserrat'
    },
})