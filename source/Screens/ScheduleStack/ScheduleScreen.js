import * as React from 'react';
import { View } from 'react-native'
import ScheduleAgenda from '../../Components/ScheduleAgenda'
import Header from '../../Components/Header'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'



class ScheduleScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title={"Schedule"} right={<SimpleLineIcon name={"notebook"} size={25} />} left={<Icon name={"tasks"} size={25} />} />
                <ScheduleAgenda />
            </View>
        )
    }
}


export default ScheduleScreen;