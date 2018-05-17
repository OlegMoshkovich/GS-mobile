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


    console.log("homescreen loaded");
    console.log(this.props);
    

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
