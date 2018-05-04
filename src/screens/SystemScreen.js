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
    viewStyle() {
      return {

        justifyContent: 'center',
        alignItems: 'center',
      }
    }

  render() {
    let { fadeAnim } = this.state;
    return (
      <LinearGradient
       colors={['#394A74', '#AD95AB', '#394A74']}
       style={{ height: height, width:width}}>

      <View style ={{
       top:20,
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-between'
        }}>

        <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>my profile</Text>
        <TouchableOpacity style ={{margin:20}}
          >
          <Image
            style={{height: 15,width: 15,top:50}}
            source={require('../../assets/System-Icon-Search.png')}
          />
        </TouchableOpacity>
      </View>

      <View style ={{
       bottom:180,
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems:'center'
        }}>
        <TouchableOpacity style ={{left:10}}
          >
          <Image
            style={{height:55*1.6,width:80*1.6,}}
            source={require('../../assets/System-Ava-Avatar.png')}
          />
        </TouchableOpacity>
        <Text style ={{color:"white",fontSize: 14,fontFamily: 'Helvetica',  margin:5, right:10}}>Your profile is only 51% complete</Text>
      </View>



      <TouchableOpacity
            style = {{
              flex:1,
              alignSelf:'center',
              bottom:200
            }}
            onPress={this.animate} onLongPress={this.animate}>
            <Image
              style={{height:480/1.2,width:330/1.2}}
              source={require('../../assets/System-Menu.png')}
            />

      </TouchableOpacity>




    </LinearGradient>
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

export default SystemScreen;
