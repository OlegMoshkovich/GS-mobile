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
      <ScrollView horizontal= {true}  >
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard01} />
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard02} />
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard03} />
      </ScrollView>
    );
  }

  renderAllStoriesSection() {
    // TODO create cards
    return(
      <ScrollView horizontal= {true} style={s.storySectionView} >
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard01} />
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard02} />
        <Image style={s.newStoryImage} resizeMode="cover"
          source={assetPaths.stories.newStories.storyCard03} />
     </ScrollView >
    );
  }

  renderFeaturedStories() {
    return(
    <ScrollView
      style ={[s.featuredStoriesView, {height: height}]}>
      <Text style ={s.featuredStoriesTitle}>Featured</Text>
      <ScrollView horizontal= {true} style={{marginTop:40}}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', stories.story01)}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.featuredStories.storyCard01} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('StoryModal', stories.story02)}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.featuredStories.storyCard02} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('StoryModal', stories.story03)}}>
          <Image style={s.featuredStoryImage} resizeMode="cover"
            source={assetPaths.stories.featuredStories.storyCard03} />
        </TouchableOpacity>
      </ScrollView >
      <Text style ={s.newStoriesTitle}>Troop Stories</Text>
        {this.renderNewStoriesSection()}
      <Text style ={s.newStoriesTitle}>All Stories</Text>
          {this.renderAllStoriesSection()}
    </ScrollView>);
  }

  render() {
    return (
      <LinearGradient colors={['#F9C025', '#FFDB2B']}
        style={{ height: height, width:width}}>
        <TopMenu menuTitle="share" iconPath={assetPaths.topMenu.shareIcon} />
        <NavMenu highlighted={4} />
        { this.renderFeaturedStories() }


        <AvaBottomMenu currentSection={'community'} contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}

export default CommunityScreen;
