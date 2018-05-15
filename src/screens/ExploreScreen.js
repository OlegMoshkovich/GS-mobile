import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import { USE_NATIVE_DRIVER } from '../TestComponents/config';


import AvaBottomMenu from '../components/AvaBottomMenu.js';





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
      moveAnim     : new Animated.Value(0),
      activated    : true,
      fadeAnim     : new Animated.Value(0),
      blurRadius   : 0,
    };

  }

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }
    Animated.timing(
      this.state.fadeAnim, {
        toValue: this.state.activated ? 1: 0, duration: 500, }
      ).start();
      this.setState({ activated : !this.state.activated});
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
          onPress={() => {this.props.navigation.navigate('MyModal', {
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
      <LinearGradient colors={['#4fb6de', '#94D7E0', 'white']}
        style={{ height: height, width:width} }>
        
        <View style ={s.container}>
            <Text style ={s.menuText}>#explore</Text>
            <Image
              style={s.menuTapIconImage}
              source={require('../../assets/Tap_here_icon.png')}
            />
            <TouchableOpacity style ={s.menuNavButton}
              onPress={() => this.props.navigation.navigate({
                routeName: 'Home', params: { transition: 'left' }}
              )}>
              <Image style={s.menuNavButtonImage}
                source={require('../../assets/Explore-icon.png')} />
            </TouchableOpacity>
        </View>
        
        <View style={{ position:'absolute', top:30 }}>
          <Deck
            data = {articles}
            renderCard = {this.renderCard}
            renderNoMoreCards = {this.renderNoMoreCards}/>
          <ScrollView waitFor={['image_pinch', 'image_rotation', 'image_tilt']}
            style={s.scrollView}>
          </ScrollView>
        </View>

        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default ExploreScreen;
