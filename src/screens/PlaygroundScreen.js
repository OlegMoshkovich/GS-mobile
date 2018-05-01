import React from 'react';
import { BlurView,LinearGradient  } from 'expo';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated, StatusBar } from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

class PlaygroundScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../../assets/Resume-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../../assets/Explore-icon.png')}
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
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
    };
  };

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

    let { fadeAnim } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (

     
        <LinearGradient
           colors={['#56CCF2', '#56CCF2', 'white']}
           style={{
             height: height,
             width:width,
             flex: 1,
             justifyContent: 'space-between',
             flexDirection: 'column',
             alignItems: 'center'
            }} >

            <Image
               blurRadius={this.state.blurRadius}
               style={{height: 227,width: 177}}
              source={require('../../assets/Ava-Dashboard.png')}
           />
            <Animated.View
                style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: fadeAnim,      
             }}>
            <BlurView tint="regular" intensity={100}  style={{
              flex: 1,
              position: 'absolute',
              width: width,
              height: height,
              }}>
              <Image
              style={{height:93,width:272, left: 20,
                position: 'absolute',
                top: 20,
              }}
              source={require('../../assets/Chat-bubble.png')}
              />   
              <Image
                  style={{height:26,width:343, left:20,

                    position: 'absolute',
                    bottom: 100,
                    zIndex: 10
                    
                  }}
                  source={require('../../assets/Speech-input.png')}
                />
              <TouchableOpacity
                  style ={{  
                    position: 'absolute',
                    bottom: 95,
                    zIndex: 1,
                    right: 0,
                }}
                   onPress={this.animate} onLongPress={this.animate}>
               <Image
                style={{
                height:150,width:100,
                }}
                 source={require('../../assets/Nav_Avatar_Face_Animations.png')}
               />
              </TouchableOpacity>
              </BlurView>
              </Animated.View>
                    <TouchableOpacity
                  style = {{
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: 0,
                    width: this.state.activated ? 100: 0,
                    height: this.state.activated ? 150: 0,
                    }}
                   onPress={this.animate} onLongPress={this.animate}>
               <Image
                 style={{height:150,width:100,
                }}
                 source={require('../../assets/Nav_Avatar_Face_Animations.png')}
               />
              </TouchableOpacity>
        </LinearGradient>

              

    );
  }
}

export default PlaygroundScreen;
