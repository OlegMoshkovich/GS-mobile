import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
const color = '#BACDFF'


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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'space'})} style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.progress.spaceScienceExpert} />
          <Text style={s.badgeTitleText}>Science Expert</Text>
          <Text style={s.badgeCompletion}>(40% complete)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'truth'})} style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.progress.truthSeeker} />
          <Text style={s.badgeTitleText}>Truth Seeker</Text>
          <Text style={s.badgeCompletion}>(67% complete)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'style'})} style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.progress.womensHealth} />
          <Text style={s.badgeTitleText}>Womens Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'textile'})}style={s.badgeContainer}>
          <Image style={s.badgeCarousel} resizeMode="contain"
            source={assetPaths.badges.progress.textileArtist} />
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
            marginBottom: 200,
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'firstaid'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.seniorFirstAid} />
              <Text style={s.exploreBadgeTitle}>Senior First Aid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'social'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.socialInnovator} />
              <Text style={s.exploreBadgeTitle}>Social Innovator</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'voice'})}style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.voiceForAnimals} />
              <Text style={s.exploreBadgeTitle}>Voice For Animals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'website'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.webDesigner} />
              <Text style={s.exploreBadgeTitle}>Website Designer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'style'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.scienceOfStyle} />
              <Text style={s.exploreBadgeTitle}>Science of Style</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'truth'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.truthSeeker} />
              <Text style={s.exploreBadgeTitle}>Truth Seeker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'style'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.womensHealth} />
              <Text style={s.exploreBadgeTitle}>Womens Health</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'textile'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.textileArtist} />
              <Text style={s.exploreBadgeTitle}>Textile Artist</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BadgeModal', {id: 'space'})} style={s.exploreContainer}>
            <Image style={s.exploreBadge} resizeMode="contain"
              source={assetPaths.badges.default.spaceScienceExpert} />
              <Text style={s.exploreBadgeTitle}>Space Science Expert</Text>
          </TouchableOpacity>
        </View>
    </View>);
  }


  render() {
    return (
      <LinearGradient
      colors={[color, color]}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="badges" iconPath={assetPaths.topMenu.dashboardIcon} navigation={this.props.navigation} />

        <View style={{top: 0, height: height-100}}>
          <ScrollView style={{width: width}} vertical={true} >
          { this.renderMyBadges() }
          { this.renderExploreBadges() }

          </ScrollView>
        </View>




        <AvaBottomMenu currentSection={'dashboard'} navigation={this.props.navigation}/>
      </LinearGradient>);
  }
}

export default BadgeScreen;
