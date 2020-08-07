import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '/Users/David/Desktop/Materials/projects/goal-tracking-app/goaltrackingapp/source/Components/Header'
import Datepicker from '../../Components/Datepicker';
import ProjectCard from '../../Components/ProjectCard'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, marginBottom: 35 }}>
                    <Header />
                </View>
                <View style={{ flex: 1 }} >
                    <Datepicker />
                </View>
                <View style={styles.projectsContainer}>
                    <ProjectCard />
                    <ProjectCard />
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'center', color: 'red' }}>SHOW ALL</Text>
                    </TouchableOpacity>
                </View >
                <View style={styles.dashboards}></View >
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE9E9',
    },
    projectsContainer: {
        flex: 4,
        paddingVertical: 10,
        marginTop: 30

    },
    dashboards: {
        backgroundColor: '#F3F3F3',
        // padding: 10,
        flex: 4,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    }
}
)

export default HomeScreen;