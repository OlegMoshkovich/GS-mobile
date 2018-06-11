import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');


// styles
import s from '../styles/communityscreen.js';

// data
import stories from '../../data/stories/stories.js';

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';


class CommunityScreen extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      activated    : true,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  renderNewStoriesSection() {
    // TODO create actual cards
    return(
      <ScrollView showsHorizontalScrollIndicator={false} horizontal= {true}  >
       <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 5})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.underwater} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 6})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.malala} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 7})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.nasa} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 8})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.cassandra} />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  renderAllStoriesSection() {
    // TODO create cards
    return(
      <ScrollView showsHorizontalScrollIndicator={false} horizontal= {true} style={s.storySectionView} >
     <TouchableOpacity>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.michelleO} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.aliceT} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.bellaM} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.jglBridge} />
        </TouchableOpacity>
     </ScrollView >
    );
  }

  renderFeaturedStories() {
    return(
    <ScrollView
      style ={[s.featuredStoriesView, {height: height}]} showsVerticalScrollIndicator={false}>
      <Text style ={s.featuredStoriesTitle}>Featured</Text>
      <ScrollView horizontal= {true} style={{marginTop: 30}} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 1})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.marley} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('StoryModal', {id: 2})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.supergirls} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 3})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.muslim} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', {id: 4})}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.smoking} />
        </TouchableOpacity>
      </ScrollView >
      <Text style ={[s.featuredStoriesTitle, {top: 0, marginBottom: 10}]}>Friends</Text>
        {this.renderNewStoriesSection()}
      <Text style ={[s.featuredStoriesTitle, {top: 0, marginBottom: 10, }]}>All Stories</Text>
          {this.renderAllStoriesSection()}
    </ScrollView>);
  }

  render() {
    return (
      <LinearGradient colors={['#F9C025', '#FFDB2B']}
        style={{ height: height, width:width}}>
        <TopMenu menuTitle="share" iconPath={assetPaths.topMenu.shareIcon} navigation={this.props.navigation} />
        { this.renderFeaturedStories() }


        <AvaBottomMenu currentSection={'community'} contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}

export default CommunityScreen;
