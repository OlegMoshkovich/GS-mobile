import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import SystemScreen from './SystemScreen';
import MapScreen from './MapScreen';
import CommunityScreen from './CommunityScreen.js';
import ResumeScreen from './ResumeScreen.js';
import CalendarScreen from './CalendarScreen.js';
import ChatScreen from './ChatScreen.js';
import CommsDashboardScreen from './CommsDashboardScreen.js'
import ArticleModalScreen from './ArticleModalScreen';
import ShopScreen from './ShopScreen';
import DashboardScreen from './DashboardScreen.js';
import PlaygroundScreen from './PlaygroundScreen.js';
import ExploreScreen from './ExploreScreen.js';
import GiftedChatScreen from './GiftedChatScreen.js';
import AvaEndYellow from './AvaEndYellow';
import EventScreen from './EventScreen';
import BadgeScreen from './BadgeScreen';
import JourneyScreen from './JourneyScreen';
import AwardScreen from './AwardScreen';
import AvaEndBlue from './AvaEndBlue';


// refactor progress towards global styles
import s from '../styles/homescreen';

import AvaBottomMenuHomescreen from '../components/AvaBottomMenuHomescreen';
import assetPaths from '../assetPaths';

const config = {
  velocityThreshold: 0.5,
  directionalOffsetThreshold: 50
};

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      navigation: this.props.navigation,
      awardTop: new Animated.Value(0),
      showSpeech: false,
    };
  }

  animate = () => {
    Animated.timing( this.state.awardTop, { toValue: -height, duration: 300}).start();
    //this.setState({activated : !this.state.activated});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        this.props.navigation.navigate({ routeName: 'SystemModal',
          params: { transition: 'systemTransition' }});
        break;
      case SWIPE_DOWN:
        this.props.navigation.navigate({ routeName: 'ShopModal',
          params: { transition: 'shopTransition'} });
        break;
    }
  }
 
  environmentSwitch = () => {
    console.log('environment'+ this.state.environmentSwitch)
    this.setState({environmentSwitch : !this.state.environmentSwitch});
  }

  _onLongPressButton() {
    Alert.alert(
      'Ava', 'How can I help? - Long Press',
      [{text: 'OK', onPress: () => console.log('OK Pressed')},],
      { cancelable: false }
    )
  }

  _onPressButton() {
      Alert.alert(
      'Ava','Short Press',
        [{text: 'OK', onPress: () => console.log('OK Pressed')},],
        { cancelable: false }
      )
    }

  renderNotification() {
    return(
      <View style={s.notificationContainer}>
        <TouchableOpacity>
          <Image style={s.notificationIcon} source={assetPaths.homeScreen.icons.notificationIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  renderChat() {
    return(
      <View style={s.homeChatContainer}>
        <TouchableOpacity onPress={() => this.setState({showSpeech: true})}>
          <Image style={[s.homeChatImage]} 
          source={assetPaths.homeScreen.chatBubbles} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: 50, left: 80, top: -30}}>
        <Image style={s.homeTutorialImage}
          source={assetPaths.homeScreen.responseBubbles} />
        </TouchableOpacity>
      </View>);
  }

  systemScreenStyle() {
    return { height: height, width: width, backgroundColor: 'transparent'}
  }

  render() {
    const animatedStyle = { transform: [{translateY: this.state.awardTop}] }

    return (
      <View>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={config} style={{ flex: 1,
            backgroundColor: this.state.backgroundColor
          }}>
          <View style={{ flex: 1, height: height, width: width}}>
            <Image blurRadius={this.state.blurRadius}
              style={{ height: height, width: width}}
              source={assetPaths.homeScreen.background}/>
              { this.renderNotification() }
              { this.state.showSpeech ? null: this.renderChat() }

            { this.state.showSpeech ? 
            
              <View style={[s.speechInput, {width: width}]} >
                <TouchableOpacity onPress={() => this.setState({showSpeech: false})}>
                <Image style={[s.speechInputImage, {width: width-50}]}
                  resizeMode="contain"
                  source={assetPaths.homeScreen.speechInputImage} />
                </TouchableOpacity>
              </View>
            : null }

              {
                 this.state.showSpeech ? null : 
                /* <AvaBottomMenuHomescreen navigation={this.props.navigation}/> */
                null
              }
            {/* <Animated.View style={animatedStyle}><AwardScreen /> </Animated.View> */}
          </View>
        </GestureRecognizer> 
      </View>);
  }
}


export default HomeScreen;
