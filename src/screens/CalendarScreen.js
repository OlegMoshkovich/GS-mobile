import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



import AvaBottomMenu from '../components/AvaBottomMenu.js';


// global styles
import s from '../styles/calendarscreen';

const {width, height} = Dimensions.get('window');


class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      
      blurRadius: 0,
    };
  }

  

  render() {
    return (
      <LinearGradient
        colors={['#b98031', '#f5d340', 'white']}
        style={{ height: height, width:width}}>

        <Text style ={s.menuText}>when</Text>

        {/* comms menu -- TODO abstract to component - need enclosing JSX */}
        <TouchableOpacity style ={s.commsDashboardIcon}
          onPress={() => this.props.navigation.navigate({
          routeName: 'CommunicationDashboard', params: { transition: 'default' }}
          )}>
          <Image style={s.commsMenuIconImage} 
            source={require('../../assets/Dashboard-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity  style ={s.commsChatIcon}
          onPress={() => this.props.navigation.navigate({
          routeName: 'CommunicationChat', params: { transition: 'default' }}
          )}>
          <Image style={s.commsMenuIconImage} 
            source={require('../../assets/Chat-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity  style ={s.commsCalendarIcon}
          onPress={() => this.props.navigation.navigate({
          routeName: 'CommunicationCalendar', params: { transition: 'default' }}
        )}>
          <Image style={s.commsMenuIconImage} 
            source={require('../../assets/Calendar-icon.png')} />
        </TouchableOpacity>


        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={'2018-04-18'}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          theme={{calendarBackground: 'white', agendaKnobColor: 'darkgrey',selectedDayBackgroundColor: '#56CCF2', todayTextColor: 'red',  agendaTodayColor: 'red',}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
       

      <AvaBottomMenu /> 

       

      </LinearGradient>
   );
 }

 loadItems(day) {
   setTimeout(() => {
     for (let i = -15; i < 85; i++) {
       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
       const strTime = this.timeToString(time);
       if (!this.state.items[strTime]) {
         this.state.items[strTime] = [];
         const numItems = Math.floor(Math.random() * 5);

         for (let j = 0; j < numItems; j++) {
           this.state.items[strTime].push({
             name: 'Tasks -- ' + strTime,
             height: Math.max(50, Math.floor(Math.random() * 150))
           });
         }
       }
     }
     //console.log(this.state.items);
     const newItems = {};
     Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
     this.setState({
       items: newItems
     });
   }, 1000);
   // console.log(`Load Items for ${day.year}-${day.month}`);
 }

 renderItem(item) {
   return (
     <View style={[s.item, {height: item.height}]}><Text>{item.name}</Text></View>
   );
 }

 renderEmptyDate() {
   return (
     <View style={s.emptyDate}><Text>Nothing yet.</Text></View>
   );
 }

 rowHasChanged(r1, r2) {
   return r1.name !== r2.name;
 }

 timeToString(time) {
   const date = new Date(time);
   return date.toISOString().split('T')[0];
 }
}

export default CalendarScreen;
