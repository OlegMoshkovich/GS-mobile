import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

import s from '../styles/storymodal';
import assetPaths from '../assetPaths';
import storyContent from '../../data/stories/stories';



class StoryModalScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log("story modal screen props", this.props);


	}

  render() {
		const { params } = this.props.navigation.state;
		const text = params ? params.text : null;
    const title = params ? params.title : null;
		const imageUri = params ? params.image_uri : null;

		// TODO load image inline
    const sourceUri = { uri: imageUri }


    return (
<View style={s.modalContainer}>




	<Image style={{
		width: width, height: height,position:'absolute'
	}}source={assetPaths.staticScreens.postModal} resizeMode="contain"/>



	<TouchableOpacity
  	style={{position:'absolute', right:6, top:22}} onPress={() => this.props.navigation.goBack()} >
		<Image style={s.exitIconImage} source={assetPaths.modals.articleModal.exitIcon}/>
  </TouchableOpacity>

</View>);
  }
}

export default StoryModalScreen;
