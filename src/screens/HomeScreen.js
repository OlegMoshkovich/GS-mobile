import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View,PanResponder, Modal, Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient, Video } from "expo";
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

      showYesNo: true,

      showSpeech: false,
      chatInterface: false,
      showVideo: false,

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
      <View style={[s.notificationContainer]}>
        <TouchableOpacity onPress={() => this.setState({showVideo: !this.state.showVideo})}>
          <Image style={s.notificationIcon} source={assetPaths.homeScreen.icons.notificationIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  renderChat() {
    return(
      <View style={s.homeChatContainer}>
        <TouchableOpacity >
          <Image style={[s.homeChatImage]}
          source={assetPaths.homeScreen.chatBubbles} />
        </TouchableOpacity>
        <TouchableOpacity style={{width: 50, left: 80, top: -30}} onPress={
          () => {
            
            
            this.setState({chatInterface: true}); this.setState({showYesNo: false}); 
          
          }}>
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




        if (this.state.showVideo) {
          return (
          
          <View style={{width: width, height: height}}>
            
            <Video 
                source={{ uri: 'http://www.ventcases.com/screen_1.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: width, height: height }}
              />
              { this.renderNotification() }
              
            </View>
            
        
        );

        } else {

        return (

          <View style={{ flex: 1, height: height, width: width}}>


            <Image blurRadius={this.state.blurRadius}
              style={{ height: height, width: width}}
              source={assetPaths.homeScreen.background}/>
              { this.renderNotification() }
              { this.state.showYesNo ? this.renderChat() : null }
             
               { this.state.chatInterface ?
                    <View style={{top: 0}}>
                    <Modal animationType="slide" transparent={true} visible={true}
                            onRequestClose={() => console.log("modal closed")}>
        
                        <TouchableOpacity onPress={() => {this.setState({chatInterface: false}); this.setState({showYesNo: true})}}>
                            <Image style={{width: width, height: height}} source={assetPaths.bottomMenu.avaChatInterface} />
                        </TouchableOpacity>
                    </Modal>
                </View>
        
                    
                    
                    
                    : null }


            <View style={{ top: 35, position: 'absolute', zIndex: 12, alignSelf: 'center', }}>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate({ routeName: 'SystemModal',
                  params: { transition: 'systemTransition' }});
              }}>
                <Image source={assetPaths.homeScreen.icons.swipeUpIcon} style={
                  { width: 35, height: 35 }}/>
              </TouchableOpacity>
            </View>

             <View style={{ bottom: 70, position: 'absolute', zIndex: 12, alignSelf: 'center', }}>
              <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate({ routeName: 'ShopModal',
                  params: { transition: 'shopTransition' }});
              }}>
                <Image source={assetPaths.homeScreen.icons.swipeDownIcon} style={
                  { width: 35, height: 35 }}/>
              </TouchableOpacity>
            </View>
             {
                 this.state.showSpeech ? null :
                <AvaBottomMenuHomescreen navigation={this.props.navigation}/>
              }
          </View>
        
        
      );

    }
  }
}


export default HomeScreen;
