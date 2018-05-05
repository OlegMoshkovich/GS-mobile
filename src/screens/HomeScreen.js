import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import ShopScreen from './ShopScreen1.js';
import SystemScreen from './SystemScreen.js';



class HomeScreen extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
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
          duration: 500,
        }
      ).start();
      this.setState({
        activated : !this.state.activated,
        }
      )
  }
  environmentSwitch = () => {
    console.log('environment'+ this.state.environmentSwitch)
      this.setState({
        environmentSwitch : !this.state.environmentSwitch ,
        }
      )
  }
  _onLongPressButton() {
    Alert.alert(
      'Ava',
      'How can I help? - Long Press',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  _onPressButton() {
      Alert.alert(
      'Ava',
      'Short Press',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
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
    return (
      <Swiper
      horizontal={false}
      loop={false}
      showsPagination={false}
      index={1}>

      <View style={this.viewStyle()}>

      <SystemScreen />
      </View>

      <View style={this.viewStyle()}>
      <LinearGradient
       colors={['#CCDBE6', '#CCDBE6', '#CCDBE6']}
       style={{ height: height, width:width}}>


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





        <Animated.View
            style={{
            position: 'absolute',
            top: 60,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: fadeAnim,
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
                bottom: 35,
                zIndex: 10
              }}
              source={require('../../assets/Speech-input.png')}
            />

          <TouchableOpacity
            style ={{
              position: 'absolute',
              bottom: 0,
              zIndex: 1,
              right: 0,
            }}
              onPress={this.animate} onLongPress={this.animate}>

            <Image
            style={{
            height:150,
            width:100,
            right:20,
            }}
              source={require('../../assets/Nav_Avatar_Face_Animations-wave.png')}
            />
          </TouchableOpacity>
        </Animated.View>

        <View style={{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'space-around',

          bottom: this.state.activated ? 80: -50,
          bottom: this.state.activated ? 80: -50


          }}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Map')}>
            <Image
              style={{height: 50,width: this.state.environmentSwitch ? 0: 50}}
              source={require('../../assets/icons/Home_Icon_Communication.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Community')}>
            <Image
              style={{height: 50,width: this.state.environmentSwitch ? 0: 50}}
              source={require('../../assets/icons/Home_Icon_Community.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity   onPress={this.environmentSwitch}>
            <Image
              style={{height: 50,width: 50}}
              source={require('../../assets/Home-icon.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Explore')} >
            <Image
              style={{height: 50,width: this.state.environmentSwitch ? 0: 50}}
              source={require('../../assets/icons/Home_Icon_Explore.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboard')} >
            <Image
              style={{height: 50,width: this.state.environmentSwitch ? 0: 50}}
              source={require('../../assets/icons/Home_Icon_Dashboard.png')}
            />
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style = {{
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 420,
            right: this.state.activated? 0:-200,

            }}
            onPress={this.animate} onLongPress={this.animate}>
        <Image
              style={{
              width:144,
                height: this.state.environmentSwitch ? 0:155,
              }}
          source={require('../../assets/Home_Bubble_Welcome1.png')}
          />
        </TouchableOpacity>



      </LinearGradient>
      </View>
      <View style={this.viewStyle()}>
      <ShopScreen/>
      </View>
    </Swiper>
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

export default HomeScreen;
