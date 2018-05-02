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
import Swiper from 'react-native-swiper';

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
  viewStyle() {
    return {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  render() {

    let { fadeAnim } = this.state;
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };


    return (

     

      <Image
          blurRadius={this.state.blurRadius}
          style={{
          height: this.state.environmentSwitch ? 0: height,
          width: width}}
          source={require('../../assets/Home-Background.png')}
        />
      

      
              

    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default PlaygroundScreen;
