import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import ShopScreen from './ShopScreen';
import SystemScreen from './SystemScreen';




// refactor progress towards global styles
import s from '../styles/homescreen';

import AvaBottomMenuHomescreen from '../components/AvaBottomMenuHomescreen';



class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activated    : true,
      environmentSwitch: false,
      blurRadius: 0,
    };
  };


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

  renderMenu() {
    return (
      <View style={[s.menuBottom, {
        // todo - should refactor this, removing all magic numbers
        bottom: this.state.activated ? 80: -50,
        bottom: this.state.activated ? 80: -50
        }]}>

        <TouchableOpacity  onPress={() => this.props.navigation.navigate('CommunicationDashboard')}>
          <Image style={[s.menuBottomIcon,
            {width: this.state.environmentSwitch ? 0: 50}]}
            source={require('../../assets/icons/Home_Icon_Communication.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Community')}>
          <Image style={[s.menuBottomIcon,
          {width: this.state.environmentSwitch ? 0: 50}]}
          source={require('../../assets/icons/Home_Icon_Community.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.environmentSwitch}>
          <Image style={s.menuBottomIcon}
            source={require('../../assets/Home-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Explore')} >
          <Image style={[s.menuBottomIcon,
            {width: this.state.environmentSwitch ? 0: 50}]}
            source={require('../../assets/icons/Home_Icon_Explore.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboard')} >
          <Image style={[s.menuBottomIcon,
          {width: this.state.environmentSwitch ? 0: 50}]}
            source={require('../../assets/icons/Home_Icon_Dashboard.png')}
          />
        </TouchableOpacity>
      </View>

    );
  }

  renderChat() {
    return(
      <TouchableOpacity style = {[s.homeChatText,
        {right: this.state.activated? 0:-200}]}
        onPress={this.animate} onLongPress={this.animate}>
        <Image style={[s.homeChatTextImage, {
          height: this.state.environmentSwitch ? 0:155,
          }]}
          source={require('../../assets/Home_Bubble_Welcome1.png')}
        />
      </TouchableOpacity>

    );
  }

  renderAva(fadeAnim) {
    return(
      <Animated.View
              style={[s.avaBottomView, {opacity: fadeAnim},]}>
              <Image style={s.avaBottomViewChatBubble}
                source={require('../../assets/Chat-bubble.png')}
              />
              <Image style={s.avaBottomViewTextInput}
                source={require('../../assets/Speech-input.png')}
              />
              <TouchableOpacity style ={s.avaBottomViewButton}
              onPress={this.animate} onLongPress={this.animate}>
                <Image style={s.avaBottomViewAvaWaving}
                  source={require('../../assets/Nav_Avatar_Face_Animations-wave.png')}
                />
              </TouchableOpacity>
            </Animated.View>
    );
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <Swiper
        horizontal={false}
        loop={false}
        showsPagination={false}
        index={1}>

        <View style={s.viewStyle}    >
          <SystemScreen />
        </View>

        <View style={s.viewStyle}>
          <LinearGradient
            colors={[s.gradientColorStart, s.gradientColorStart, s.gradientColorStart]}
            style={{ height: height, width: width}}>
            <Image
              style={{
                height: this.state.environmentSwitch ? height: 0,
                width: width}}
                source={require('../../assets/Ava-Game.gif')}
            />
            <Image
              blurRadius={this.state.blurRadius}
              style={{
                height: this.state.environmentSwitch ? 0: height,
                width: width}}
              source={require('../../assets/Home_Background1.png')}
            />



            <AvaBottomMenuHomescreen navigation={this.props.navigation}/>


            {/* stand in chat text */

              this.renderChat()
            }

          </LinearGradient>
        </View>

        <View style={s.viewStyle}>
          <ShopScreen/>
        </View>
    </Swiper>
    );
  }
}


export default HomeScreen;
