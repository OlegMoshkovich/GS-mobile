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
import s from '../styles/badgescreen';

class BadgeScreen extends React.Component {
 constructor(props) {
    super(props);
  }

  renderMyBadges() {
    return(
    <View style={[{width: width, height: 200, left: 10, flex: 1, }]}>
      <Text style={s.myBadgesTitle}>My Badges</Text>
      <ScrollView style={{height: 200, }} showsHorizontalScrollIndicator={false} horizontal={true} >
        <TouchableOpacity style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.scienceExpert} />
          <Text style={s.badgeTitleText}>Science Expert</Text>
          <Text style={s.badgeCompletion}>(40% complete)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.truthSeeker} />
          <Text style={s.badgeTitleText}>Truth Seeker</Text>
          <Text style={s.badgeCompletion}>(67% complete)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.womensHealth} />
          <Text style={s.badgeTitleText}>Women's Health</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.textile} />
          <Text style={s.badgeTitleText}>Textile Designer</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>);
  }

  renderExploreBadges() {
    return(
      <View style={{left: 14}}  >
        <Text style={s.myBadgesTitle}>Explore your next badge</Text>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',


        }}>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.seniorFirstAid} />
              <Text style={s.exploreBadgeTitle}>Senior First Aid</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.socialInnovator} />
              <Text style={s.exploreBadgeTitle}>Social Innovator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.animals} />
              <Text style={s.exploreBadgeTitle}>Animals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.webDesigner} />
              <Text style={s.exploreBadgeTitle}>Web Designer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.scienceExpert} />
              <Text style={s.exploreBadgeTitle}>Science of Style</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.truthSeeker} />
              <Text style={s.exploreBadgeTitle}>Truth Seeker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.womensHealth} />
              <Text style={s.exploreBadgeTitle}>Women's Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.textile} />
              <Text style={s.exploreBadgeTitle}>Textile Designer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.big.nasa} />
              <Text style={s.exploreBadgeTitle}>Space Nasa</Text>
          </TouchableOpacity>
        </View>
    </View>);
  }


  render() {
    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="badges" iconPath={assetPaths.topMenu.dashboardIcon} navigation={this.props.navigation} />

        <ScrollView style={{height: height, width: width, top: 120, position: 'absolute', zIndex: 90}} vertical={true} >
          { this.renderMyBadges() }
          { this.renderExploreBadges() }

        </ScrollView>

        
        

        <AvaBottomMenu currentSection={'dashboard'} navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default BadgeScreen;
