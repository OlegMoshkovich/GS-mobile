import React from 'react';
import Dimensions from 'Dimensions';
import { Text, StyleSheet, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import { StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const  {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import ShopScreen from './ShopScreen';
import s from '../styles/microbadgescreen';
const color = '#BACDFF';

import { DraggableBox } from '../TestComponents/draggable';
import { DraggableBox1 } from '../TestComponents/draggable1';
import { DraggableBox2 } from '../TestComponents/draggable2';

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = .05*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

class MicroBadgeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is system screen' ,this.props.navigation)
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      settings     : false,
      users        : false,
      environmentSwitch: false,
      fadeAnim     : new Animated.Value(0),
      blurRadius: 0,
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
  switch = () => {
    console.log( " I am in the switch",this.state.settings)

    this.setState({
      settings: !this.state.settings,
      }
      )
  }
  users = () => {
    console.log( " I am in the users",this.state.users)
    this.setState({
      users: !this.state.users,
      })
  }
  render() {
    let { fadeAnim } = this.state;

    return (
      <LinearGradient
       colors={[color, color]}
       style={[{ height: height, width:width}]}>

       <TopMenu menuTitle="badge" />
       <View style={s.profileContainer}>
           <Image style={s.microbadgeIcon}
             source={require('../../assets/MicroBadge.png')} />
       </View>



       <Text style ={s.relatedMediaTitle}>In your world already...</Text>
       <ScrollView horizontal= {true} style={s.relatedMediaScrollView} showsHorizontalScrollIndicator={false}>


       <TouchableOpacity
         onPress={() => {this.props.navigation.navigate('StoryModal', {id: 3})}}>
         <Image style={s.relatedMediaCard} resizeMode="cover"
           source={assetPaths.microbadges.Card01} />
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => {this.props.navigation.navigate('StoryModal', {id: 4})}}>
         <Image style={s.relatedMediaCard} resizeMode="cover"
           source={assetPaths.microbadges.Card02} />
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => {this.props.navigation.navigate('StoryModal', {id: 4})}}>
         <Image style={s.relatedMediaCard} resizeMode="cover"
           source={assetPaths.microbadges.Card01} />
       </TouchableOpacity>
       </ScrollView >

      <AvaBottomMenu showTab={true} contextIcon={true} tabTitle={"Resume"} tabLeft={15} navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}



export default MicroBadgeScreen;
