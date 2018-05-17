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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import s from '../styles/systemscreen';

class SystemScreen extends React.Component {
  static navigationOptions = {

}

  constructor(props) {
    super(props);
    var position = new Animated.ValueXY({x:300, y:200});
    this.state = {
      panResponderEnabled: true,
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim     : new Animated.Value(0),
      blurRadius: 0,
    };

  };
  handlePanResponderStart = () => {
  return this.state.panResponderEnabled;
}

disableResponder = () => {
  console.log('in the disable')
  this.setState({
    panResponderEnabled: false
  });
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
          duration: 500,
        }
      ).start();
      this.setState({
        activated : !this.state.activated,
        }
      )
  }
    viewStyle() {
      return {

        justifyContent: 'center',
        alignItems: 'center',
      }
    }

    componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => false,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
      },

      onPanResponderMove: Animated.event([
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
      }
    });
  }

    onSwipeUp(gestureState) {
     this.setState({myText: 'You swiped up!'});
   }

   onSwipeDown(gestureState) {
     this.setState({myText: 'You swiped down!'});
   }

   onSwipeLeft(gestureState) {
     this.setState({myText: 'You swiped left!'});
     console.log("swiping left")
   }

   onSwipeRight(gestureState) {
     this.setState({myText: 'You swiped right!'});
     console.log("swiping right")
   }

   onSwipe(gestureName, gestureState) {
  const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
  this.setState({gestureName: gestureName});
  switch (gestureName) {
    case SWIPE_UP:
      this.setState({backgroundColor: 'red'});
      break;
    case SWIPE_DOWN:
      this.setState({backgroundColor: 'green'});
      break;
    case SWIPE_LEFT:
      this.setState({backgroundColor: 'blue'});
      break;
    case SWIPE_RIGHT:
      this.setState({backgroundColor: 'yellow'});
      break;
  }
}

  render() {
    const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

    // need to refactor the icons into a flexbox grid
    // noticed that the icons dont all line up properly with their text...

    let { fadeAnim } = this.state;
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
        }}
        >
      <LinearGradient
       colors={['#394A74', '#AD95AB', '#394A74']}
       style={{ height: height, width:width}}>

      <View style ={s.container}>
        <Text style ={s.menuText}>my profile</Text>
        <TouchableOpacity style ={{margin:20}}>
          <Image style={{height: 15,width: 15,top:50}}
            source={require('../../assets/System-Icon-Search.png')} />
        </TouchableOpacity>
      </View>

      <View style ={s.profileContainer}>
        <TouchableOpacity style ={{left:10}}>
          <Image style={s.profileImage}
            source={require('../../assets/System-Ava-Avatar.png')} />
        </TouchableOpacity>
        <Text style ={s.profileCompleteText}>Your profile is only 51% complete</Text>
      </View>



      <TouchableOpacity style = {s.systemIconsContainer}
        onPress={this.animate} onLongPress={this.animate}>
        <Image style={s.systemIconsImage}
          source={require('../../assets/System-Menu.png')} />
      </TouchableOpacity>
    </LinearGradient>
          </GestureRecognizer>
    );
  }
}

export default SystemScreen;
