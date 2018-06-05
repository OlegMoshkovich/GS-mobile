import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Card, Button,Icon} from 'react-native-elements';


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
	{/* make into component later */}
	<View style={s.modalMenuContainer}>
		<TouchableOpacity style={s.modalButton} >
			<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.share} />
		</TouchableOpacity>
		<TouchableOpacity style={s.modalButton} >
			<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.star} />
		</TouchableOpacity>
		<TouchableOpacity style={s.modalButton} >
			<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.like} />
		</TouchableOpacity>
	</View>
	
	<TouchableOpacity style={s.exitButton} onPress={() => this.props.navigation.goBack()} >
		<Image style={s.exitIconImage} source={assetPaths.modals.shareModal.close}/>
  </TouchableOpacity>

	
  <ScrollView style={s.storyContentContainer}>
  	<Text style ={s.storyTitle}>{title}</Text>
		<Image style={s.storyImage} resizeMode="cover" source={sourceUri} />
		<Text style ={s.storyText}>{text}</Text>
		<Text style ={s.storyText}>{text}</Text>
		<Text style ={s.storyText}>{text}</Text>
	</ScrollView>


</View>);
  }
}

export default StoryModalScreen;
