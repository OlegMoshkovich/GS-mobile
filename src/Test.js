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
        <Button
          onPress={() => navigation.navigate('Community')}
          title=""
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Community')}
          title="community"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
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




export default Test;
