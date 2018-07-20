import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel'; // 3.4.0

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';
import s from '../styles/journeyscreen';
import articles from '../../data/articles/articleContent.js';

const SliderWidth = Dimensions.get('screen').width;
const ItemWidth = 300.0;
const ItemHeight = 600.0;

const color = '#BACDFF'


const Items = [
  {id:1,icon:require('../../assets/journey/journeyIcon_1.png'),image:require('../../assets/journey/journeyCard_1v2.png')},
  {id:2,icon:require('../../assets/journey/journeyIcon_2.png'),image:require('../../assets/journey/journeyCard_2v2.png')},
  {id:3,icon:require('../../assets/journey/journeyIcon_3.png'),image:require('../../assets/journey/journeyCard_3v2.png')}
];


class JourneyScreen extends React.Component {

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

    _renderItem({ item }) {
        return (
          <View style={{
            width: ItemWidth,
            height: ItemHeight,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'
          }}>
            <ScrollView showsVerticalScrollIndicator = {false}>
              <View style = {{paddingBottom:50}}>
              <Image style={{alignSelf:'center', width:786/3,height:1041/3}} resizeMode="cover" source={item.icon} />
              </View>
              <View style = {{paddingBottom:200}}>
              <Image style={{alignSelf:'center', width:894/3,height:7344/3}} resizeMode="cover" source={item.image} />
              </View>
            </ScrollView>
          </View>
        );
      }

  render() {
    return (
      <LinearGradient colors={[color,color]} style={{ height: height, width:width }}>
        <TopMenu navigation={this.props.navigation} menuTitle="journeys" iconPath={assetPaths.topMenu.dashboardIcon} />

          <View style={{ flex: 4}}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={Items}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width - 75}
            itemHeight={height}
          />
        </View>
        <AvaBottomMenu currentSection={'dashboard'} navigation={this.props.navigation}/>
      </LinearGradient>);
  }
}

export default JourneyScreen;
