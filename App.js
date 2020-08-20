import 'react-native-gesture-handler'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './source/Screens/HomeStack/HomeScreen'
import ScheduleScreen from './source/Screens/ScheduleStack/ScheduleScreen'
import SkillsGoalsScreen from './source/Screens/GoalsStack/SkillsGoalsScreen'
import ProjectGoalsScreen from './source/Screens/GoalsStack/ProjectsGoalsScreen'
import ProfileScreen from './source/Screens/ProfileStack/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setCustomText } from 'react-native-global-props';

import Dashboard from './source/Components/Dashboard';
import Datepicker from './source/Components/Datepicker';
import ProjectCard from './source/Components/ProjectCard'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const customTextProps = {
  style: {
    fontFamily: 'Montserrat-Regular'
  }
}
setCustomText(customTextProps)

const goalStack = () => {
  return (
    <Stack.Navigator
      headerMode='none'
      screenOptions={{
        gestureEnabled: 'true',
        gestureDirection: 'vertical'
      }}>
      <Stack.Screen name='Projects' component={ProjectGoalsScreen} />
      <Stack.Screen name='Skills' component={SkillsGoalsScreen} />
    </Stack.Navigator>
  )
}


export default class App extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          name='navigation'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon
              let iconName
              if (route.name === 'Home') {
                icon = <Ionicons
                  name={focused ? 'home-outline' : 'home-outline'}
                  size={size = focused ? 22 : 20}
                  color={focused ? '#000000' : '#7E7E7E'} />
              } else if (route.name === 'Schedule') {
                icon = <Ionicons
                  name={focused ? 'calendar-outline' : 'calendar-outline'}
                  size={size = focused ? 22 : 20}
                  color={focused ? '#000000' : '#7E7E7E'} />
              }
              else if (route.name === 'Goals') {
                icon = <Icon name={focused ? 'tasks' : 'tasks'}
                  size={focused ? 22 : 20}
                  color={focused ? '#000000' : '#7E7E7E'} />
              }
              else if (route.name === 'Profile') {
                icon = <Ionicons
                  name={focused ? 'person-outline' : 'person-outline'}
                  size={size = focused ? 22 : 20}
                  color={focused ? '#000000' : '#7E7E7E'} />
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
                {icon}
              </View>;
            },
          })}
          tabBarOptions={{
            animationEnabled: true,
            activeTintColor: "#F3F3F3",
            showLabel: false,
            style: { height: 65, borderTopEndRadius: 35, borderTopStartRadius: 35, width: "100%", position: 'absolute' }
          }}>

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Schedule" component={ScheduleScreen} />
          <Tab.Screen name="Goals" component={goalStack} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer >
    );
  }
}