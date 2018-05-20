import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');


import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';
import s from '../styles/journeyscreen';



class JourneyScreen extends React.Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="journeys" iconPath={assetPaths.topMenu.dashboardIcon} />
        <NavMenu highlighted={3} />

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>pending redesign</Text>
        </View>

        
        

        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default JourneyScreen;
