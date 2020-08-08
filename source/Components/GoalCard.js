import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

export default function GoalCard() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ borderRadius: 10, backgroundColor: 'white' }}>
                    <Icon name="school-outline" size={20} style={{ padding: 5 }}></Icon>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Reading</Text>
                    <Text style={{ color: 'white' }}>00:22/01:30</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Progress.Bar progress={0.3} style={{ flex: 1 }} height={10} width={null} borderColor={'transparent'} color={"#3D3D3D"} unfilledColor={'white'} borderRadius={15} indeterminate={false} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F58D8D',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 20,
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