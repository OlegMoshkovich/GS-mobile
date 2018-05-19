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

class AvaEndYellow extends React.Component {
 constructor(props) {
    super(props);
  }


  render() {


    return (
      <LinearGradient
      colors={['#F9C025', '#FFDB2B']}


        style={{ height: height, width:width, justifyContent: 'center', alignItems: 'center', }}>


        <Image  style={{}} source={assetPaths.staticScreens.avaEndYellow} />
        
        

      
      </LinearGradient>);


  }
}

export default AvaEndYellow;
