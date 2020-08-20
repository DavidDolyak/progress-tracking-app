import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from '../../node_modules/react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Button, Card, Title, Paragraph } from '../../node_modules/react-native-paper';


// const testIDs = require('../testIDs');
const ScheduleAgenda: React.FC = () => {
    const [items, setItems] = useState({})

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{
                borderColor: 'white'
            }}>
                <Card style={{
                    backgroundColor: '#F58D8D',
                    marginVertical: 10,
                    // alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderColor: 'white',
                    shadowOffset: {
                        width: 8,
                        height: 1,
                    },
                    shadowOpacity: 0.46,
                    shadowRadius: 11.14,
                    elevation: 15,
                }}>
                    <Card.Content>
                        <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: 'black' }}>{item.description}</Text>
                                <Text style={{ color: 'white' }}>{item.name}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: 'red', fontWeight: "bold" }}>{item.preparation}</Text>
                                <Text style={{ color: 'black' }}>{item.category}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

            </TouchableOpacity>
        )
    }

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: strTime + ' #' + j,
                            description: 'Description',
                            category: 'school',
                            preparation: 'medium',
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => { newItems[key] = items[key]; });
            setItems(newItems);
        }, 1000);

    }

    return (
        <View style={{ flex: 0.9 }}>
            <Agenda
                // testID={testIDs.agenda.CONTAINER}
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2017-05-16'}
                renderItem={renderItem}
                // renderItem={this.renderItem.bind(this)}
                // renderEmptyDate={this.renderEmptyDate.bind(this)}
                // rowHasChanged={this.rowHasChanged.bind(this)}
                // markingType={'period'}
                // markedDates={{
                //    '2017-05-08': {textColor: '#43515c'},
                //    '2017-05-09': {textColor: '#43515c'},
                //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                //    '2017-05-21': {startingDay: true, color: 'blue'},
                //    '2017-05-22': {endingDay: true, color: 'gray'},
                //    '2017-05-24': {startingDay: true, color: 'gray'},
                //    '2017-05-25': {color: 'gray'},
                //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                // monthFormat={'yyyy'}
                theme={{
                    calendarBackground: 'white',
                    agendaKnobColor: '#3D3D3D',
                    backgroundColor: '#EAE9E9',
                    selectedDotColor: 'transparent',
                    // dotColor: '#3D3D3D',#3D3D3D
                    selectedDayBackgroundColor: '#3D3D3D',
                    dotColor: "transparent",
                    dayTextColor: 'black',
                    agendaDayTextColor: 'black',
                    agendaDayNumColor: 'black',

                }}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            // hideExtraDays={false}
            />
        </View>)




}



export default ScheduleAgenda;