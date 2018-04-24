import React from 'react';
import { BlurView,LinearGradient  } from 'expo';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated, StatusBar } from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

class PlaygroundScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../assets/Resume-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../assets/Explore-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
    };
  };



  animate = () => {
    console.log(this.state.activated),
    console.log(hello);

    const hello = 1;


    Animated.timing(
      this.state.moveAnim,
      {
        toValue: hello,
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
           colors={['#56CCF2', '#56CCF2', 'white']}
           style={{
             height: height,
             width:width,
             flex: 1,
           }}>

           <Image
             style={{height: 290,width: 227, top:100, left:75}}
             source={require('../assets/Dashboard-Avatar.png')}
           />


            <Animated.View
                 style={{
                 flex:1,
                 transform: [{
                   translateY: this.state.moveAnim.interpolate({
                     inputRange: [0, 1],
                     outputRange: [0, -800]  // 0 : 150, 0.5 : 75, 1 : 0
                   }),
                 }],
             }}>
                <BlurView tint="light" intensity={80}  style={{
                   top:500,
                   height: height,
                   width:width,

                 }}>
                </BlurView>
                <Image
                  style={{height:93,width:270, bottom:200,left:20}}
                  source={require('../assets/Chat-bubble.png')}
                />
                <Image
                    style={{height:26,width:343, top:250,left:20}}
                   source={require('../assets/Speech-input.png')}
                 />

              </Animated.View>

              <TouchableOpacity
                  style ={{left:250}}
                   onPress={this.animate} onLongPress={this.animate}>
               <Image
                 style={{height:150,width:100}}
                 source={require('../assets/Nav_Avatar_Face_Animations.png')}
               />

              </TouchableOpacity>


        </LinearGradient>




    );
  }
}

export default PlaygroundScreen;
