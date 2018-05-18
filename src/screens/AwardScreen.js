import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';

const config = {
  velocityThreshold: 0.5,
  directionalOffsetThreshold: 50
};
class AwardScreen extends React.Component {
 constructor(props) {
    super(props);

    //console.log("state", .state);


  }


 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    
    switch (gestureName) {
      case SWIPE_LEFT:
        console.log("award - left ");
        //
      

        break;
      case SWIPE_RIGHT:
        console.log("award - right");

       


      
        
        
        break;
      
    }
  }
 
  render() {
    return (

      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        
      >
        <View>
            <Image style={{width: width, height: height}} source={assetPaths.staticScreens.awardScreen} />
            <TopMenu menuTitle="#endyellow" iconPath={assetPaths.topMenu.exploreIcon} />
            <AvaBottomMenu navigation={this.props.navigation}/> 
        </View>
      </GestureRecognizer>
      
    );
  }
}

export default AwardScreen;
