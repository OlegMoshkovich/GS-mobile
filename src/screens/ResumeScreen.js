import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import Ball from '../Ball';
import Test from '../Test';

import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';

import s from '../styles/resumescreen.js';

const {width, height} = Dimensions.get('window');

class ResumeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image
            style={s.resumeIconImageRight}
            source={require('../../assets/Dashboard-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Image
            style={s.resumeIconImageLeft}
            source={require('../../assets/Community-icon.png')}
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
