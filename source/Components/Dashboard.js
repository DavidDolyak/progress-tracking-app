import * as React from "react"
import { Text, View, StyleSheet } from 'react-native';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.onetw}></View >
            <View style={styles.onet}></View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE9E9',
    },
    onetw: {
        backgroundColor: '#EAE9E9',
        padding: 10,
        flex: 5,
    },
    onet: {
        backgroundColor: '#F3F3F3',
        padding: 10,
        flex: 3,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        overflow: "hidden"

    },
    one: {
        backgroundColor: 'white',
        padding: 10,
    },
    on: {
        backgroundColor: 'purple',
        padding: 10,
    },
    o: {
        backgroundColor: 'yellow',
        padding: 10,
    },
}
)