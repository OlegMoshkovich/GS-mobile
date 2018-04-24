
import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';

import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


import {GiftedChat } from 'react-native-gifted-chat';

const {width, height} = Dimensions.get('window');


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../../assets/Map-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../../assets/Calendar-icon.png')}
          />
        </TouchableOpacity>
      )
    };
    };

  constructor(props) {
    super(props);
    this.state = {
      moveAnim    : new Animated.Value(1),
      activated    : true,
      valueInitial:0,
      valueFinal:0,
      messages: [],

    };
  }


   // starts with a default message
   componentDidMount() {
    //Analytics.record('aws-expo-demo-app-launched');

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Developers! Developers! Developers!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }


  animate = () => {
    Animated.timing(                  // Animate over time
      this.state.moveAnim,           // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();


    console.log(this.state.moveAnim._value)
    this.setState({
     activated : !this.state.activated,
     valueInitial: this.state.activated? 0 : -150,
     valueFinal:this.state.activated? -150 : 0
    }

    )                 // Starts the animation
  }

  render() {

    return (


      <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{
           height: height,
           width:width,
           flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
         }}>

             <Animated.View
                  style={{
                  flex:1,
                  transform: [{
                    translateY: this.state.moveAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [this.state.valueInitial, this.state.valueFinal]  // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  }],
              }}>

            <View style={{
              left:20,
              top:100,
              flex: 1,
               flexDirection: 'row',
               justifyContent: 'flex-start',
               alignItems: 'flex-end',
            }}>

              <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate('Calendar')}>
              <Image
                style={{height: 30,width: 30}}
                source={require('../../assets/Calendar-icon.png')}
              />
              </TouchableOpacity>


              <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Chat')}>
              <Image
                style={{height: 30,width: 30}}
                source={require('../../assets/Chat-icon.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Map')}>
              <Image
                style={{height: 30,width: 30}}
                source={require('../../assets/Map-icon.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Community')} >
              <Image
                style={{height: 30,width: 30}}
                source={require('../../assets/Community-icon.png')}
              />
              </TouchableOpacity>



              <TouchableOpacity  style ={{margin:5}} onPress={() => this.props.navigation.navigate('Test')}>
              <Image
                style={{height: 30,width: 30}}
                source={require('../../assets/Resume-icon.png')}
              />
              </TouchableOpacity>




              </View>
              </Animated.View>

              <View>



    <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
                </View>



             <TouchableOpacity
                  style={{position: 'absolute',flex: 1}}
                  onPress={this.animate} onLongPress={this.animate}>
              <Image
                style={{height:150,width:100}}
                source={require('../../assets/Nav_Avatar_Face_Animations.png')}
              />
             </TouchableOpacity>

      </LinearGradient>
    );
  }
}

export default ChatScreen;
