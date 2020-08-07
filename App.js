import 'react-native-gesture-handler'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './source/Screens/HomeStack/HomeScreen'
import ScheduleScreen from './source/Screens/ScheduleStack/ScheduleScreen'
import GoalsScreen from './source/Screens/GoalsStack/GoalsScreen'
import ProfileScreen from './source/Screens/ProfileStack/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ButtonGroup from './source/Components/ButtonGroup';
import Dashboard from './source/Components/Dashboard';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        name='navigation'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
              size = focused ? 22 : 20;
              color = focused ? '#000000' : '#7E7E7E';
            } else if (route.name === 'Schedule') {
              iconName = focused ? 'calendar-outline' : 'calendar-outline';
              size = focused ? 22 : 20;
              color = focused ? '#000000' : '#7E7E7E';
            }
            else if (route.name === 'Goals') {
              iconName = focused ? 'podium-outline' : 'podium-outline';
              size = focused ? 22 : 20;
              color = focused ? '#000000' : '#7E7E7E';
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
              size = focused ? 22 : 20;
              color = focused ? '#000000' : '#7E7E7E';
            }
            return <View style={{
              borderRadius: focused ? 50 : 0,
              backgroundColor: focused ? '#DFDFDF' : 'white',
              padding: focused ? 10 : 0,
              shadowColor: focused ? "#000" : "",
              shadowOffset: {
                width: focused ? 0 : 0,
                height: focused ? 8 : 0,
              },
              shadowOpacity: focused ? 0.46 : 0,
              shadowRadius: focused ? 11.14 : 0,
              justifyContent: 'center',
              elevation: focused ? 17 : 0,
              flexDirection: "row",

            }}>
              <Ionicons name={iconName} size={size} color={color} />
            </View>;
          },
        })}
        tabBarOptions={{
          animationEnabled: true,
          activeTintColor: "#F3F3F3",
          showLabel: false,
          style: { height: 65, borderTopEndRadius: 35, borderTopStartRadius: 35, width: "100%", position: 'absolute' }
        }}>

        <Tab.Screen name="Home" component={ButtonGroup} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Goals" component={GoalsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}