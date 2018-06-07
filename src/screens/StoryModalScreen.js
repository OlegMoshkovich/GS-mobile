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
		this.state = {
			friendRequested: false,
		};
		//console.log("story modal screen props", this.props);


	}

	addFriend() {

		if (this.state.friendRequested) {
			this.setState({
				friendRequested: false,
			});
		} else {
			this.setState({
				friendRequested: true,
			});
		}

	}

	renderStoryPng(id) {

		switch (id) {
			case 1:
				return (<Image style={{width: width, height: 2627, marginBottom: 100}} source={require('../../assets/staticScreens/stories/marleyStory2x.png')} />);
				break;
			case 2:
				return (<Image style={{width: width, height: 1577, marginBottom: 100}} source={require('../../assets/staticScreens/stories/superGirls2x.png')} />);
				break;
			case 3:
				return (<Image style={{width: width, height: 1649, marginBottom: 100}} source={require('../../assets/staticScreens/stories/muslimGirlscouts2x.png')} />);
				break;
			case 4:
				return (<Image style={{width: width, height: 2294, marginBottom: 100}} source={require('../../assets/staticScreens/stories/smokingBan2x.png')} />);
				break;
			case 5:
				return (<Image style={{width: width, height: 1601, marginBottom: 100, top: -99}} source={require('../../assets/staticScreens/stories/cookieDive2xv2.png')} />);
				break;
			case 6:
				return (<Image style={{width: width, height: 3583, marginBottom: 100, top: -87}} source={require('../../assets/staticScreens/stories/malala2xv2.png')} />);
				break;
			case 7:
				return (<Image style={{width: width, height: 2617, marginBottom: 100, top: -106}} source={require('../../assets/staticScreens/stories/nasa2x.png')} />);
				break;
			case 8:
				return (<Image style={{width: width, height: 2617, marginBottom: 100, top: -106,}} source={require('../../assets/staticScreens/stories/cassandra2x.png')} />);
				break;
		}
	}

  render() {

		const {params} = this.props.navigation.state;
		const id = params ? params.id: 1;
		console.log("rendering id", id);

    return (
		<View style={s.modalContainer}>
			<View style={[s.modalMenuContainer, {width: width}]}>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.share} />
				</TouchableOpacity>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.star} />
				</TouchableOpacity>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.modalIconImage} source={assetPaths.modals.shareModal.like} />
				</TouchableOpacity>
				<TouchableOpacity style={s.exitButton} onPress={() => this.props.navigation.goBack()} >
					<Image style={s.exitIconImage} source={assetPaths.modals.shareModal.close}/>
				</TouchableOpacity>
				<TouchableOpacity style={s.addFriend} onPress={() => (this.addFriend())} >
					<Image style={s.addFriendImage} source={
						this.state.friendRequested ? assetPaths.modals.shareModal.requestSent :
						assetPaths.modals.shareModal.addFriend

						}/>
				</TouchableOpacity>
		</View>
  		<ScrollView style={s.storyContentContainer}>
  			{ this.renderStoryPng(id)}
		</ScrollView>


</View>);
  }
}

export default StoryModalScreen;
