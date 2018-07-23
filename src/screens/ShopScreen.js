import React from 'react';
import Dimensions from 'Dimensions';
import {Text, View, Image,ScrollView, Animated} from 'react-native';

import { LinearGradient } from "expo";
const {width, height} = Dimensions.get('window');

import TopMenu from '../components/TopMenu';
import AvaBottomMenu from '../components/AvaBottomMenu';
import assetPaths from '../assetPaths';
const color = '#A9FFBC';

// global styles
import s from '../styles/shopscreen.js';
import FeaturedProduct from '../components/FeaturedProduct';

class ShopScreen extends React.Component {

  constructor(props) { super(props);
    this.state = { activated    : true,
      moveAnim: new Animated.Value(0),
      modalShowing: false, activated: false
    };
  }

  animate = () => {
    Animated.timing( this.state.moveAnim,
      { toValue: this.state.activated ? 1: 0, duration: 500 }
    ).start();
    this.setState({ activated: !this.state.activated });
  }

  render() {

    return (
      <LinearGradient
        colors={[color, color]}
        style={{ height: height, width:width}}>
        <TopMenu menuTitle="shop" iconPath={assetPaths.shop.icons.close} navigation={this.props.navigation} />
        <ScrollView
          style ={{ top:91, position:'absolute', height: height}} showsVerticalScrollIndicator={false} >
          <Text style ={s.featuredTitle}>Featured</Text>
          <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
            <FeaturedProduct key={6} swaps={true} imageTitle="Swaps" imageNumber={6} productDots={[
                { top: 147, left: 168, productBubble: assetPaths.shop.featuredProducts[6].bubbles[0],
                  bubbleOffset: { top: -55, left: 18 }} ]} />
            <FeaturedProduct key={0} imageTitle="Gear" imageNumber={0} productDots={[
                { top: 124, left: 130, productBubble: assetPaths.shop.featuredProducts[0].bubbles[0],
                  bubbleOffset: { top: -55, left: -112 }},
                { top: 327, left: 200, productBubble: assetPaths.shop.featuredProducts[0].bubbles[1],
                  bubbleOffset: { top: -56, left: 19 }} ]} />
            <FeaturedProduct key={1} imageTitle="STEM" imageNumber={1} productDots={[
                { top: 204, left: 130, productBubble: assetPaths.shop.featuredProducts[1].bubbles[0],
                  bubbleOffset: { top: -57, left: 19 }} ]} />
            <FeaturedProduct key={2} imageTitle="Outdoor" imageNumber={2} productDots={[
                { top: 33, left: 271, productBubble: assetPaths.shop.featuredProducts[2].bubbles[0],
                  bubbleOffset: { top: -18, left: -115 }},
                { top: 200, left: 169,productBubble: assetPaths.shop.featuredProducts[2].bubbles[1],
                  bubbleOffset: { top: -55, left: -113 }} ]} />
            <FeaturedProduct key={3} imageTitle="Gear" imageNumber={3} productDots={[
                { top: 54, left: 137, productBubble: assetPaths.shop.featuredProducts[3].bubbles[0],
                  bubbleOffset: { top: -54, left: 20 }},
                { top: 201, left: 106, productBubble: assetPaths.shop.featuredProducts[3].bubbles[1],
                  bubbleOffset: { top: -20, left: 23 }},
                { top: 354, left: 143, productBubble: assetPaths.shop.featuredProducts[3].bubbles[2],
                  bubbleOffset: { top: -57, left: 20 } }]} />
            <FeaturedProduct key={4} imageTitle="STEM" imageNumber={4} productDots={[
                { top: 190, left: 163, productBubble: assetPaths.shop.featuredProducts[4].bubbles[0],
                  bubbleOffset: { top: -20, left: -117 }},
                { top: 366, left: 190, productBubble: assetPaths.shop.featuredProducts[4].bubbles[1],
                  bubbleOffset: { top: -73, left: 2 }} ]} />
            <FeaturedProduct key={5} imageTitle="Media" imageNumber={5} productDots={[
                { top: 208, left: 56, productBubble: assetPaths.shop.featuredProducts[5].bubbles[0],
                  bubbleOffset: { top: 0, left: 0 }}, ]} />
          </ScrollView>
          
          <View style={s.categorySection}>
            <Text style ={s.whatsNewTitle}>Categories</Text>
            <Image style={s.searchIcon} resizeMode="contain" source={assetPaths.shop.icons.search} />
            <ScrollView horizontal= {true} style={s.categoryMenu} showsHorizontalScrollIndicator={false} >
              <View style={s.pill}><Text style={s.pillText}>Outdoors</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Badges</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Uniforms</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Media</Text></View>
              <View style={s.pill}><Text style={s.pillText}>Gifts</Text></View>
            </ScrollView>
          </View>
          
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.socks1} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.vest} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.guide} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.scarf} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.slide} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.trefoil_pin} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImageBig} resizeMode="cover" source={assetPaths.shop.productCards.senior_vest} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.socks2} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.shirt_activity} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.backpack} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.hair_ties} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.membership_pin} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.shirt_explorer} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImageBig} resizeMode="cover" source={assetPaths.shop.productCards.fleece} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.bottle} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.scarf_vintage} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.necklace} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.daypack} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.shirt_flag} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.cap} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImageBig} resizeMode="cover" source={assetPaths.shop.productCards.tent} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.socks1} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.vest} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.guide} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.scarf} />
          </View>
          <View style={s.productContainer}>
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.slide} />
            <Image style={s.productImage} resizeMode="cover" source={assetPaths.shop.productCards.trefoil_pin} />
          </View>
        </ScrollView>
        <AvaBottomMenu contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}

export default ShopScreen