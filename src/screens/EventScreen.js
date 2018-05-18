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

class EventScreen extends React.Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
      <LinearGradient
      colors={['#b98031', '#f5d340', 'white']}
      style={{ height: height, width:width }}>

        <TopMenu menuTitle="events" iconPath={assetPaths.topMenu.dashboardIcon} />

        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>to be implemented</Text>
        </View>

        
        

        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default EventScreen;
