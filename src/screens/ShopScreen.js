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
import FeaturedProduct from '../components/FeaturedProduct';

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
        <TopMenu menuTitle="shop" iconPath={assetPaths.shop.icons.close} navigation={this.props.navigation} />

        <ScrollView 
          style ={{ top:91, position:'absolute', height: height}} showsVerticalScrollIndicator={false} >
          <Text style ={s.featuredTitle}>Featured</Text>
          <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
            
            <FeaturedProduct key={0} imageTitle="Gear" 
              imageNumber={0} 
              productDots={[
                { top: 124, left: 130, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }, 
                { top: 327, left: 200,
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[1],
                }
              ]}
            />




            <FeaturedProduct key={1} imageTitle="STEM" 
              imageNumber={1} 
              productDots={[
                { top: 204, left: 130, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }                
              ]}
            />
            <FeaturedProduct key={2} imageTitle="Outdoor" 
              imageNumber={2} 
              productDots={[
                { top: 33, left: 271, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }, 
                { top: 200, left: 169,
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[1],
                }
              ]}
            />
            <FeaturedProduct key={3} imageTitle="Gear" 
              imageNumber={3} 
              productDots={[
                { top: 54, left: 137, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }, 
                { top: 201, left: 106,
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[1],
                },
                { top: 354, left: 143,
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[2],
                }
              ]}
            />
            <FeaturedProduct key={4} imageTitle="STEM" 
              imageNumber={4} 
              productDots={[
                { top: 190, left: 163, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }, 
                { top: 366, left: 190,
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[1],
                }
              ]}
            />
            <FeaturedProduct key={5} imageTitle="Media" 
              imageNumber={5} 
              productDots={[
                { top: 208, left: 56, 
                  productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                }, 
               
              ]}
            />



          </ScrollView>
          <Text style ={s.whatsNewTitle}>Categories</Text>
            <ScrollView horizontal= {true} style={s.categoryMenu} showsHorizontalScrollIndicator={false} >
              <Image style={s.searchIcon} resizeMode="cover" source={assetPaths.shop.icons.search} />
              <View style={s.pill}><Text style={s.pillText}>Outdoors</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Badges</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Uniforms</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Media</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Gifts</Text></View>
            </ScrollView>

            <View style={s.productContainer}>
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
            </View>
            <View style={s.productContainer}>
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
            </View>
            <View style={s.productContainer}>
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
              <Image style={s.productImage} resizeMode="cover" source={require('../../assets/Shop_Image3.png')} />
            </View>


        </ScrollView>
        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>
    );
  }
}

export default ShopScreen;
