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

    console.log(width);

    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu navigation={this.props.navigation} menuTitle="journeys" iconPath={assetPaths.topMenu.dashboardIcon} />
        <NavMenu highlighted={3} />
      
        <View style={s.journeyContainer}>
          <View style={s.journeyHeadlineContainer}>
            <Text style={s.journeyHeadline}>Sow What? Award</Text>
          </View>
          <View style={s.journeyCarouselContainer}>
            <Image style={s.journeyCarouselSwipeImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.swipeNavLeft}/>
            <Image style={s.journeyCarouselCaretImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.caretLeft}/>
            <Image style={s.journeyCarouselCenterImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.journeyImage}/>
            <Image style={s.journeyCarouselCaretImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.caretRight}/>
            <Image style={s.journeyCarouselSwipeImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.swipeNavRight}/>
          </View>
        </View>
        <View style={s.journeyCompletedContainer}>
          <Image style={s.journeyCompletedImage} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.completed}/>
          <Text style={s.journeyAwardNameTitle}>Harvest Award</Text>
        </View>
       
        <View style={s.journeyBottomContainer}>
          <Image style={{width: width-70, alignSelf: 'center'}} resizeMode="contain" source={assetPaths.journeyScreen.journeyCarousel.journeyCard}/>
          
        </View>
       

        

        <AvaBottomMenu currentSection={'dashboard'} navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default JourneyScreen;
