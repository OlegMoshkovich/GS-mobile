import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

import TopMenu from '../components/TopMenu';
import AvaBottomMenu from '../components/AvaBottomMenu';
import assetPaths from '../assetPaths';

// global styles
import s from '../styles/shopscreen.js';

class ShopScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={s.shopHeaderRight}
            source={require('../../assets/Home-icon.png')} />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={s.shopHeaderLeft}
            source={require('../../assets/Explore-icon.png')} />
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = { activated    : true, };

  }
  
  render() {
    return (
        <LinearGradient
         colors={['#68D634', '#4CB034', '#3F8C2D']}
         style={{ height: height, width:width}}>
        <TopMenu menuTitle="shop" iconPath={assetPaths.topMenu.shopIcon} navigation={this.props.navigation} />

        <ScrollView
          style ={{ top:91, position:'absolute', height: height}}>
          <Text style ={s.featuredTitle}>Featured</Text>
          <ScrollView horizontal= {true}>
            <Image style={s.featuredProductImage} resizeMode="cover"
                source={assetPaths.shop.productFeatured} />
            <Image style={s.featuredProductImage} resizeMode="cover"
                source={assetPaths.shop.productFeatured2} />
            <Image style={s.featuredProductImage} resizeMode="cover"
                source={assetPaths.shop.productFeatured} />
          </ScrollView>
          <Text style ={s.whatsNewTitle}>Whats New</Text>
            <ScrollView horizontal= {true} style={{marginBottom:200, left: -10}} >
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
            </ScrollView>
        </ScrollView>
        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>
    );
  }
}

export default ShopScreen;
