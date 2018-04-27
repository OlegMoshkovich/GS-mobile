import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const {width, height} = Dimensions.get('window');

class CommunityScreen extends React.Component {
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
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 0,left:20}}
            source={require('../../assets/Home-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };


  render() {
    return (

        <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{ height: height, width:width}}>
        
         <ScrollView>
         <Text style ={{color:"white",fontSize: 22,top:30,left:30,fontWeight:'bold', }}>Featured Stories</Text>
             <ScrollView horizontal= {true} style={{marginTop:40}}>
             <Image
                style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                 source={require('../../assets/Article_1.png')}
              />
              <Image
                 style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                  source={require('../../assets/Article_1.png')}
               />
               <Image
                  style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                   source={require('../../assets/Article_1.png')}
                />

             </ScrollView >


             
             <Text style ={{color:"white",fontSize: 22,left:30,fontWeight:'bold',marginBottom:10 }}>Friends Stories</Text>

             <ScrollView horizontal= {true} style={{marginBottom:200}} >
             <Image
                style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.png')}
              />

              <Image
                 style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                 source={require('../../assets/Article_2.png')}
               />
               <Image
                  style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                  source={require('../../assets/Article_2.png')}
                />


             </ScrollView >

         </ScrollView>

      </LinearGradient>
    );
  }
}
export default CommunityScreen;
