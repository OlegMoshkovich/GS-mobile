import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');

class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
    };
  };
  animate = () => {
    Animated.timing(
      this.state.moveAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();

    this.setState({
       activated : !this.state.activated,
       valueInitial: this.state.activated? 0 : -150,
       valueFinal:this.state.activated? -150 : 0
      }
    )
  }

  render() {

    return (


      <LinearGradient
         colors={['#b98031', '#b98031','#b98031', 'white']}
         style={{
           height: height,
           width:width,
         }}>

         <View style ={{
          top:20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
           }}>
             <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>#comms</Text>
             <Image
               style={{height:72/4, width:90/4, top:40,right:40 }}
               source={require('../../assets/Tap_here_icon.png')}
             />
             <TouchableOpacity style ={{margin:20}}
             onPress={() => this.props.navigation.navigate({
               routeName: 'Home',
                   params: {
                       transition: 'left'
                   }
                 }
             )}>
             <Image
               style={{height: 40,width: 40}}
               source={require('../../assets/Dashboard-icon.png')}
             />

           </TouchableOpacity>

         </View>

         <Image
           style={{height: 290/1.2,width: 250/1.2,alignSelf:'center', bottom:20}}
           source={require('../../assets/Ava-Dashboard-Comms.png')}
         />





      </LinearGradient>
    );
  }
}

export default DashboardScreen;
