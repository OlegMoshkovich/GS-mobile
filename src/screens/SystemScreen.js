import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import s from '../styles/systemscreen.js';

class SystemScreen extends React.Component {
  constructor(props) {
    super(props);
    var position = new Animated.ValueXY({x:300, y:200});
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
      position
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
    );
  }
}

export default SystemScreen;
