import React from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, Text, View, TouchableOpacity,Image,ScrollView} from 'react-native';
import { LinearGradient } from "expo";
const {width, height} = Dimensions.get('window');

// styles
import s from '../styles/communityscreen.js';

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
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


  renderStories() {
    return(
    <View style={StyleSheet.absoluteFill} >
      <ScrollView style ={[s.mainScrollView]} showsVerticalScrollIndicator={false} >

      { this.renderSearchBar() }

      <View style={s.storiesScrollView}>
        <Text style ={s.featuredStoriesTitle}>Featured</Text>
          { this.renderFeaturedStoriesSection()}
        <Text style ={[s.featuredStoriesTitle, {top: 0, marginBottom: 10}]}>Friends</Text>
          {this.renderNewStoriesSection()}
        <Text style ={[s.featuredStoriesTitle, {top: 0, marginBottom: 10, }]}>All Stories</Text>
          {this.renderAllStoriesSection()}
          {this.renderAllStoriesSection()}
          {this.renderAllStoriesSection()}

        </View>
    </ScrollView></View>);
  }



  renderFeaturedStoriesSection() {
    return(
      <ScrollView horizontal= {true} style={s.featuredStoriesScrollView} showsHorizontalScrollIndicator={false}>

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

    );
  }




  renderNewStoriesSection() {
    // TODO create actual cards
    return(
      <ScrollView showsHorizontalScrollIndicator={false} horizontal= {true} style={{}} >
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


  renderSearchBar() {


    return(
      <View style={[s.searchBarView, {width: width}]}>
        <Image style={s.searchBarStyle}source={require('../../assets/share/searchBar.png')} />
        <View style={s.tagAndAtViews}>
          <Text style ={[s.featuredStoriesTitle, {top: 0, marginBottom: 10}]}>Trending</Text>
          <Image style={s.tagIcon} source={require('../../assets/share/tagIcon.png')} />
          <ScrollView horizontal= {true} style={s.tagMenu} showsHorizontalScrollIndicator={false} >
            <View style={s.pill}><Text style={s.pillText}>#equality</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#goldaward</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#camp</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#gsleaders</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#newbadge</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#climate</Text></View>
            <View style={s.pill}><Text style={s.pillText}>#STEAM</Text></View>
          </ScrollView>
          <Image style={s.atIcon} source={require('../../assets/share/atIcon.png')} />
          
          <ScrollView horizontal= {true} style={[s.atMenu]} showsHorizontalScrollIndicator={false} >
            <View style={s.pill}><Text style={s.pillText}>@jane-jane</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@gs-blog</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@michelle-o</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@JosieD</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@sams-stories</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@gpower</Text></View>
            <View style={s.pill}><Text style={s.pillText}>@cassyX</Text></View>
          </ScrollView>
        </View>
      
      </View>


    );
  }

  render() {
    return (
      <LinearGradient colors={['#F9C025', '#FFDB2B']}
        style={{ height: height, width:width}}>
        <TopMenu menuTitle="share" iconPath={assetPaths.topMenu.shareIcon} navigation={this.props.navigation} />
        <View style={StyleSheet.absoluteFill}>
        { this.renderStories() }
        </View>


        <AvaBottomMenu currentSection={'community'} contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}

export default CommunityScreen;
