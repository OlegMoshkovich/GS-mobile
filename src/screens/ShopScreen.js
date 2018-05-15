import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');


// TODO - we need to refactor this -- not sure why ShopScreen1 is referenced from the swiper
// but ShopScreen.js is still here and removing it breaks the app


import AvaBottomMenu from '../components/AvaBottomMenu.js';


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
      )};
  };
  
  constructor(props) {
    super(props);
    this.state = {
      activated    : true,
    };
    
  }

  render() {
    return (
        <LinearGradient
         colors={['#6EB365', '#49945C', 'white']}
         style={{ height: height, width:width}}>
        
        <View style ={s.container}>
          <Text style ={s.menuText}>#shop</Text>    
          <TouchableOpacity style ={s.menuButton}
            onPress={() => this.props.navigation.navigate({
              routeName: 'Home', params: { transition: 'left' } }
            )}>
            <Image style={s.menuButtonImage} 
              source={require('../../assets/Shop-icon.png')} />
          </TouchableOpacity>
        </View>



        <ScrollView
          style ={{ top:100, position:'absolute', height: height}}>
            <Text style ={s.featuredTitle}>Featured</Text>
            <ScrollView horizontal= {true} style={{marginTop:40}}>
              <Image style={s.featuredProductImage} resizeMode="cover"
                source={require('../../assets/Shop_Image.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image.png')} />
            </ScrollView >
            
            
            <Text style ={s.whatsNewTitle}>Whats New</Text>
            <ScrollView horizontal= {true} style={{marginBottom:200}} >
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover"
                source={require('../../assets/Shop_Image3.png')} />
            </ScrollView >
        </ScrollView>
       
        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>
    );
  }
}

export default ShopScreen;
