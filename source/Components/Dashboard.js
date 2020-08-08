import * as React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.leftSubContainer}>
                <View>
                    <Text style={styles.timerText}>00:22</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="briefcase-outline" ></Icon>
                    <Text style={styles.taskText}>React-native front-end</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="code-slash-outline"></Icon>
                    <Text style={styles.taskText}>React-native</Text>
                </View>
            </View>

            <View style={styles.rightSubContainer}>
                <View style={{ paddingVertical: 13 }}>
                    <TouchableOpacity style={styles.addTaskButton}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>New Task</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View >
                        <TouchableOpacity style={styles.button}>
                            <Icon name="pause" style={{ color: 'white' }} size={18}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Icon name="stop" style={{ color: 'white' }} size={18}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        alignSelf: 'center'
    },
    leftSubContainer: {
        flex: 5,
        alignSelf: 'center'
    },
    rightSubContainer: {
        flex: 2.3,
    },
    timerText: {
        fontSize: 48,
        fontFamily: 'Montserrat-SemiBold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        paddingHorizontal: 5,
    },
    addTaskButton: {
        borderRadius: 10,
        backgroundColor: '#FF5C5C',
        paddingVertical: 11,
        paddingHorizontal: 15,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#3D3D3D',
        padding: 12,
    },

}
)