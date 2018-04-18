import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, B} from 'react-native';
import Ball from './Ball.js';

import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo"
import { Ionicons } from '@expo/vector-icons'

const {width, height} = Dimensions.get('window');

class Test extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 0,width: 0, right:20}}
            source={require('../assets/Explore-icon.png')}
          />
        </TouchableHighlight>

      ),
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 20,width: 20,left:20}}
            source={require('../assets/Explore-icon.png')}
          />
        </TouchableHighlight>
      )
    };
  };
  render() {
    return (
      <View >

          <Text style ={{color:"white",fontSize: 22,top:30,left:30,fontWeight:'bold', }}>Featured Stories</Text>

      </View>
    );
  }
}




export default Test;
