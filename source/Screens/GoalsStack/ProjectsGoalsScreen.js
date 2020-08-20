import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from '../../Components/Header'
import Datepicker from '../../Components/Datepicker'
import GoalCard from '../../Components/GoalCard'
import SkillsGoalsScreen from './SkillsGoalsScreen'

class ProjectsGoalsScreen extends React.Component {
    render() {
        return (
            <ScrollView horizontal={true} pagingEnabled={true}>
                <View style={{ flex: 1 }}>
                    <Header title={'Project goals'} right={<Text style={{ textAlign: 'center', fontSize: 18, }}>{"Edit"}</Text>} />
                    <View style={{ margin: 15 }}>
                        <Datepicker style={{ flex: 1 }} />
                    </View >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <GoalCard />
                        <GoalCard />
                        <GoalCard />
                    </View>
                    <View style={{ flex: 0.025, marginBottom: 85, flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ flex: 0.01, borderRadius: 50, borderWidth: 2, marginRight: 2, backgroundColor: 'black' }}></View>
                        <View style={{ flex: 0.01, borderRadius: 50, borderWidth: 2, }}></View>
                    </View>
                </View >
                <SkillsGoalsScreen />
            </ScrollView>
        );

    }
}

export default ProjectsGoalsScreen;