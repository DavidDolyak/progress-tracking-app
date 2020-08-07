import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '/Users/David/Desktop/Materials/projects/goal-tracking-app/goaltrackingapp/source/Components/Header'


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.dashboard}></View >
                <View style={styles.projectsContainer}></View >
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE9E9',
    },
    dashboard: {
        backgroundColor: '#EAE9E9',
        padding: 10,
        flex: 5,
    },
    projectsContainer: {
        backgroundColor: '#F3F3F3',
        padding: 10,
        flex: 3,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    }
}
)

export default HomeScreen;