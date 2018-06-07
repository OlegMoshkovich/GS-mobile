import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, TouchableOpacity,TouchableWithoutFeedback,Image, TouchableHighlight,Toggle, Alert,
Platform, View, StatusBar, SafeAreaView} from 'react-native';
import Deck from '../Deck';
import { StackNavigator,TabNavigator, TabBarBottom } from 'react-navigation';
import { LinearGradient } from "expo";
import { Card, Button,Icon } from 'react-native-elements';
import { USE_NATIVE_DRIVER } from '../TestComponents/config';
import { Constants } from 'expo';
import Carousel from 'react-native-snap-carousel'; // 3.4.0
import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';
const {width, height} = Dimensions.get('window');

// global styles
import t from '../styles/shopscreen.js';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

import s from '../styles/explorescreen.js';
import articles from '../../data/articles/articleContent.js';

class ExploreScreen extends React.Component {
      constructor (props) {
          super(props);
       }

       _renderItem ({item}) {
         const { width, height } = Dimensions.get('window');
         const itemWidth = width - 100;
             return (
                 <View style={[styles.slide, { width: itemWidth, height:400}]}>
                     <Text style={styles.title}>{ item.title }</Text>
                 </View>
             );
         }



       renderCard = ({item}) => {
         return(
           <TouchableWithoutFeedback
            onPress={() => {this.props.navigation.navigate('ArticleModal', {id: item.id})}}>

             <Card key={item.id} containerStyle ={[s.cardContainer, { position: 'absolute', width:width-70}]}>
                <Image resizeMode="cover" source={ item.image } style={{width:963/2.95,height:1320/2.95, top:-20,left:-20}} />
             </Card>
          </TouchableWithoutFeedback>
         )
       }



      render () {
        const { width, height } = Dimensions.get('window');
        return (
          <LinearGradient colors={['#00C5F0', '#50EAFF']} style={{ height: height, width:width} }>
            <TopMenu navigation={this.props.navigation} menuTitle="explore" iconPath={assetPaths.topMenu.exploreIcon} />
            <View style={{ flex: 5}}>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={articles}
                renderItem={this.renderCard}
                sliderWidth={width}
                itemWidth={width - 70}
                itemHeight={height}
              />
            </View>
            <AvaBottomMenu showTab={true}  tabTitle={"Related"} currentSection={'explore'} contextIcon={true} navigation={this.props.navigation}/>
          </LinearGradient>
  );


      }
  }

export default ExploreScreen;
