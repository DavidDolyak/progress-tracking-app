import * as React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={{ fontSize: 48 }}>00:22</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="briefcase-outline"></Icon>
                    <Text>React-native front-end</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="code-slash-outline"></Icon>
                    <Text>React Native</Text>
                </View>
            </View>
            <View>
                <View>
                    <TouchableOpacity>
                        <Text>New Task</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity></View>
                    <View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE9E9',
        flexDirection: 'row'
    },

}
)