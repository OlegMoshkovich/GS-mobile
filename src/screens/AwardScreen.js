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
import s from '../styles/awardscreen';

class AwardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="awards" iconPath={assetPaths.topMenu.dashboardIcon} />
        <NavMenu highlighted={4} />

         <View style={s.awardContainer}>
          <View style={s.awardHeadlineContainer}>
            <Text style={s.awardHeadline}>Gold Award</Text>
          </View>
          <View style={s.awardCarouselContainer}>
            <Image style={s.awardCarouselCenterImage} resizeMode="contain" source={assetPaths.awardScreen.awardImage}/>
          </View>
        </View>
        <View style={s.awardCompletedContainer}>
          <Image style={s.awardCompletedImage} resizeMode="contain" source={assetPaths.awardScreen.completed}/>
        </View>
       
        <View style={s.awardBottomContainer}>
          <Text style={s.exploreMoreTitle}>Explore more awards</Text>
          <View style={s.exploreMoreContainer}>
            <View style={s.exploreMoreItem}>
              <Image style={s.awardIcon} source={assetPaths.awardScreen.icons.torch} resizeMode="contain" />
              <Text style={s.exploreAwardTitle}>Silver Torch</Text>
            </View>
            <View style={s.exploreMoreItem}>
              <Image style={s.awardIcon} source={assetPaths.awardScreen.icons.summit} resizeMode="contain" />
              <Text style={s.exploreAwardTitle}>Senior Journey Summit</Text>
            </View>
          </View>
        </View>

        
        

        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default AwardScreen;
