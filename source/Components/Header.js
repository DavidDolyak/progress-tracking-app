import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <Text style={styles.sideText}>{props.left}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <Text style={styles.sideText}>{props.right}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: 'white',
        // marginBottom: 10,
        padding: 5,
    },
    titleContainer: {
        flex: 4,
        justifyContent: 'center',

    },
    titleText: {
        alignSelf: 'center',
        fontSize: 24,
    },
    sideFunctions: {
        flex: 2,
        justifyContent: 'center',
    },
    sideText: {
        textAlign: 'center',
        fontSize: 18,
    },
})