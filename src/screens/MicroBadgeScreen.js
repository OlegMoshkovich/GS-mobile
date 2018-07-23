import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View, TouchableOpacity, Image, ScrollView, Animated} from 'react-native';
import { LinearGradient } from "expo";

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';
import s from '../styles/microbadgescreen';

const  {width, height} = Dimensions.get('window');
const color = '#BACDFF';


class MicroBadgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true, 
      fadeAnim     : new Animated.Value(0),
      blurRadius: 0,
    };
  };

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }
    Animated.timing(
        this.state.fadeAnim,
        { toValue: this.state.activated ? 1: 0, duration: 500, }
      ).start();
      
      this.setState({ activated : !this.state.activated});
  }
  
  render() {
    return (
      <LinearGradient
        colors={[color, color]}
        style={[{ height: height, width:width}]}>
        <TopMenu menuTitle="experience" />
          <View style={s.profileContainer}>
            <TouchableOpacity style={s.microbadgeContainer}
              onPress={() => {this.props.navigation.navigate('MicroBadgeModal', {id: 1})}}>
              <Image style={s.microbadgeIcon}
                source={require('../../assets/MicroBadge.png')} />
            </TouchableOpacity>
          </View>
          <Text style ={s.relatedMediaTitle}>In your world already...</Text>
          <ScrollView horizontal= {true} style={s.relatedMediaScrollView} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card01} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card02} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card03} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card01} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card02} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('StoryModal', {id: 4})}}>
              <Image style={s.relatedMediaCard} resizeMode="cover"
                source={assetPaths.microbadges.Card03} />
            </TouchableOpacity>
          </ScrollView >
          <AvaBottomMenu showTab={true} contextIcon={true} tabTitle={"Resume"} tabLeft={15} navigation={this.props.navigation}/>
        </LinearGradient>);
  }
}

export default MicroBadgeScreen