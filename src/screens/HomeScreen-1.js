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
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    console.log('parameters:' + params)
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Image
            style={{height: 40 ,width: 40, right:20}}
            source={require('../../assets/Explore-icon.png')}
          />
        </TouchableOpacity>

      ),

      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../../assets/Community-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    var position = new Animated.ValueXY({x:300, y:200});
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
      panResponder,
      position
    };
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Vibration.vibrate();
        // Vibration.cancel();
        position.setValue({x:gesture.dx+width+this.state.accelerometerData.x*100, y:gesture.dy+200+this.state.accelerometerData.y*100});
        radius = 60 + gesture.dx;
      },
      onPanResponderRelease: () => {
        Vibration.vibrate(PATTERN, true);
        position.setValue({x:width, y:200});
         Vibration.cancel()
      }
    });

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
          source={require('../../assets/Home-Background.png')}
        />
        <TouchableOpacity
            style ={{
              position: 'absolute',
              bottom: this.state.environmentSwitch ? height-180:400,
              left: this.state.environmentSwitch ? width-100:60,
              zIndex: 1,
              right: 0,
            }}
              onPress={this.environmentSwitch} >
                <Image
                style={{
                height: this.state.environmentSwitch ? 120:180,
                width: this.state.environmentSwitch ? 80:120,
                left: this.state.activated? 0:300
                }}
                  source={require('../../assets/Ava-Dashboard.png')}
                />
          </TouchableOpacity>

          <Image
                style={{
                width:486/3,
                position: 'absolute',
                  bottom: 550,
                  zIndex: 1,
                  right: this.state.activated? 45:-200,
                  height: this.state.environmentSwitch ? 0:189/3,
                }}
            source={require('../../assets/Bubble-Welcome.png')}
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

         {/* <Image
            style={{height:93,width:272, left: 20,
            position: 'absolute',
            top: 20,
            }}
            source={require('../../assets/Chat-bubble.png')}
          />  */ }

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
          position: 'absolute',
          bottom: this.state.activated ? 30: -50,
          left:this.state.environmentSwitch ? -300:20,

          }}>
            <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate(
              {
                routeName: 'Explore',
                params: {
                    transition: 'left'
                }
            }
            )}>
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
            <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate(
                     {
                      routeName: 'Community',
                      params: {
                          transition: 'left'
                      }
                  }
            )}>
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

        <TouchableOpacity
              style = {{
              alignSelf: 'flex-end',
              position: 'absolute',
              bottom: this.state.activated ? 35: -60,
              right: this.state.environmentSwitch ? -35:35,

              }}
              onPress={this.animate} onLongPress={this.animate}>
              <Image
                style={{height:40,width:40,}}
                source={require('../../assets/Home-icon.png')}
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
