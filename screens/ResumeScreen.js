import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Ball from '../src/Ball';
import Test from '../src/Test';


import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';


const {width, height} = Dimensions.get('window');

class ResumeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../assets/Dashboard-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../assets/Community-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (
      <View >
        <Ball/>

      </View>
    );
  }
}

export default ResumeScreen;
