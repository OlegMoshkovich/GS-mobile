import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import ShopScreen from './ShopScreen';
import s from '../styles/systemscreen';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = .05*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

class SystemScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim     : new Animated.Value(0),
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
          duration: 500,
        }
      ).start();
      this.setState({
        activated : !this.state.activated,
        }
      )
  }





  render() {


    // need to refactor the icons into a flexbox grid
    // noticed that the icons dont all line up properly with their text...

    let { fadeAnim } = this.state;
    return (


      <LinearGradient
       colors={['#7E97D5', '#C499CD', '#FEC8E3']}
       style={[{ height: height, width:width}]}>
    







    </LinearGradient>
    );
  }
}

export default SystemScreen;
