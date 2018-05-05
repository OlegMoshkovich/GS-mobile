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
      moveAnim     : new Animated.Value(1),
      activated    : true,
      valueInitial : 0,
      valueFinal   : 0

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
        colors={['#b98031', '#f5d340', 'white']}

        style={{ height: height, width:width}}>


         <View style ={{
          top:20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
           }}>
             <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>who</Text>
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
               source={require('../../assets/Chat-icon.png')}
             />
           </TouchableOpacity>
         </View>





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
}

export default ChatScreen;
