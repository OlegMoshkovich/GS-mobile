import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,Toggle, Alert} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import { USE_NATIVE_DRIVER } from '../TestComponents/config';


import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';



import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

import s from '../styles/explorescreen.js';
import articles from '../../data/articles/articleContent.js';


class ExploreScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activated    : true,
    };

  }


  _onPressButton() {
    Alert.alert( 'Ava', 'Short Press',
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    { cancelable: false })
  }

  renderCard = (item) => {
    return(
      <Card key={item.id}
        containerStyle ={[s.cardContainer, { position: 'absolute',
        width:width-50}]}>
        <Text style ={s.cardSource}>Source, duration </Text>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('ArticleModal', {
          text: item.text, title: item.title, image_uri: item.uri}); }}>
          <Text style ={s.articleTitle}>{item.title} </Text>
        </TouchableOpacity>
        <Text style ={s.articleText}>{item.text}</Text>
        <Image style={s.articleCover} resizeMode="cover"
          source={{ uri:item.uri }} />
      </Card>
    )
  }

  render() {
    return (
      <LinearGradient colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width} }>
        
        <TopMenu menuTitle="#explore" iconPath={assetPaths.topMenu.exploreIcon} />
        
        <View style={{ position:'absolute', top:30 }}>
          <Deck
            data = {articles}
            renderCard = {this.renderCard}
            renderNoMoreCards = {this.renderNoMoreCards}/>
          <ScrollView waitFor={['image_pinch', 'image_rotation', 'image_tilt']}
            style={s.scrollView}>
          </ScrollView>
        </View>
        
        
        <AvaBottomMenu contextIcon={true} navigation={this.props.navigation}/> 

        
      </LinearGradient>);
  }
}

export default ExploreScreen;
