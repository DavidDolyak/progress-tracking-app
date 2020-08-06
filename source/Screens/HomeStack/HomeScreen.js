import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// function Icon() {
//     return (
//         <View style={{ borderRadius: 25, padding: 10, backgroundColor: 'silver' }}>
//             <Icon containerStyle={{ marginTop: 6 }} name="map" size={25} color={'black'} />
//         </View>
//     )
// }

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Homeee!</Text>
            </View>
        );

    }
}
export default HomeScreen;