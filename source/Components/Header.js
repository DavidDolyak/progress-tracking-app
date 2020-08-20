import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <View style={styles.leftSide}>
                        {props.left}
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
            <View style={styles.sideFunctions}>
                <TouchableOpacity>
                    <View style={styles.leftSide}>
                        {props.right}
                    </View>
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
    leftSide:
    {
        alignSelf: 'center',
        justifyContent: 'center',
    },
})