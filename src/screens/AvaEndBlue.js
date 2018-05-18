import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');


import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';

class AvaEndBlue extends React.Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
      <LinearGradient
        colors={['#56CCF2', '#56CCF2', 'white']}
        style={{ height: height, width:width, justifyContent: 'center' }}>


        <Image  source={assetPaths.staticScreens.avaEndBlue} resizeMode="contain" />
        
        

      
      </LinearGradient>);


  
    
  }
}

export default AvaEndBlue;
