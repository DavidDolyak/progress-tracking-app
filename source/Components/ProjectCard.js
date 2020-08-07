import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height //full width

export default function () {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold' }}>00:22</Text>
                </View>
                <View style={{ flex: 3, marginLeft: 6 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: 'white' }}>React Native</Text>
                    <Text style={{ color: 'white' }}>Programming</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{
                        borderRadius: 10, flex: 1, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', shadowColor: "#000",
                        shadowOffset: {
                            width: 8,
                            height: 8,
                        },
                        shadowOpacity: 0.46,
                        shadowRadius: 11.14,
                        elevation: 25,
                    }}>
                        <Icon name="play" size={width * 0.07}></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    card: {
        width: width * 0.9,
        height: height * 0.11,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F58D8D',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,

    }
})