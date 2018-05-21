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
    <View style={[s.myBadgesContainer, {width: width}]}>
      <Text style={s.myBadgesTitle}>My Badges</Text>
      <ScrollView horizontal={true} >
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
      <View style={{
        
        height: 400, position: 'absolute', bottom: 0,
        width: width, top: -10,
        left: 14,
        
        
        }}>
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
        </View>
    </View>);
  }


  render() {
    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="badges" iconPath={assetPaths.topMenu.dashboardIcon} />
        <NavMenu highlighted={2} />

        <View style={{flex: 1}}>
          { this.renderMyBadges() }
          { this.renderExploreBadges() }

        </View>

        
        

        <AvaBottomMenu navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default BadgeScreen;
