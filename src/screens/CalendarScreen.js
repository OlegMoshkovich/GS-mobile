import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';


import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const {width, height} = Dimensions.get('window');


class CalendarScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../../assets/Home-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
          <Image
            style={{height: 0,width: 40,left:20}}
            source={require('../../assets/Shop-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
   super(props);
   this.state = {
     items: {},
     moveAnim     : new Animated.Value(0),
     activated    : true,
     fadeAnim : new Animated.Value(0),
     blurRadius: 0,

   };
 }




 animate = () => {
   if (this.state.blurRadius == 10) {
     this.setState({
       blurRadius: 0
     });
   } else {
     this.setState({
       blurRadius: 10
     });
   }

   Animated.timing(
       this.state.fadeAnim,
       {
         toValue: this.state.activated ? 1: 0,
         duration: 1000,
       }
     ).start();
     this.setState({
       activated : !this.state.activated,
       }
     )
 }

 render() {
   return (
    <LinearGradient
    colors={['#b98031', '#f5d340', 'white']}

    style={{ height: height, width:width}}>

   <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15, marginBottom:50,top:20}}>when</Text>

   <TouchableOpacity style ={{position:'absolute',margin:20, top:20,right:0}}>
            <Image
              style={{height: 40,width: 40}}
              source={require('../../assets/Calendar-icon.png')}
            />
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
     <View style={{ //Navigational Menu
       flex:1,
       flexDirection: 'row',
       position: 'absolute',
       bottom: this.state.activated ? -50: 30,
       left:20

       }}>
         <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate('Explore')}>
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Explore-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Map')}>
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Map-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Community')}>
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Community-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Calendar')} >
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Calendar-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Shop')} >
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Shop-icon.png')}
         />
         </TouchableOpacity>
     </View>

     <TouchableOpacity //Ava
           style = {{
           alignSelf: 'flex-end',
           position: 'absolute',
           bottom: this.state.activated ? -100:-50,
           right: 20,
           width: this.state.activated ? 100: 100,
           height: this.state.activated ? 150: 150,
           }}
           onPress={this.animate} onLongPress={this.animate}>
           <Image
             style={{height:100,width:100,}}
             source={require('../../assets/Nav_Avatar_Face_Animations.png')}
           />
     </TouchableOpacity>
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
     <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
   );
 }

 renderEmptyDate() {
   return (
     <View style={styles.emptyDate}><Text>Nothing yet.</Text></View>
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


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'transparent',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  container: {
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center'
  },
  // This pushes the view out of the viewport, but why the negative bottom?
  hiddenContainer: {
    top: window.height,
    bottom: -window.height
  }

});

export default CalendarScreen;
