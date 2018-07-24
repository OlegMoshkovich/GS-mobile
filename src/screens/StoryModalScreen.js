import React from 'react';
import Dimensions from 'Dimensions';
import {View, Text, TouchableOpacity,Image,ScrollView} from 'react-native';
const {width} = Dimensions.get('window');

import s from '../styles/storymodal';
import assetPaths from '../assetPaths';

class StoryModalScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { friendRequested: false, heartSolid: false, starSolid: false, };
	}

	addFriend() {
		if (this.state.friendRequested) {
			this.setState({ friendRequested: false });
		} else {
			this.setState({ friendRequested: true });
		}
	}

	renderStoryPng(id) {

		switch (id) {
			case 1:
				return (<Image style={{width: width, height: 2719, marginBottom: 100, top: -169}} source={require('../../assets/staticScreens/stories/marleyRevised2x.png')} />);
				break;
			case 2:
				return (<Image style={{width: width, height: 1702, marginBottom: 100, top: -196 }} source={require('../../assets/staticScreens/stories/superGirlsRevised2x.png')} />);
				break;
			case 3:
				return (<Image style={{width: width, height: 1869, marginBottom: 100, top: -199}} source={require('../../assets/staticScreens/stories/muslimGirlscoutsRevised2x.png')} />);
				break;
			case 4:
				return (<Image style={{width: width, height: 2684, marginBottom: 100, top: -205}} source={require('../../assets/staticScreens/stories/smokingBanRevised2x.png')} />);
				break;
			case 5:
				return (<Image style={{width: width, height: 1823, marginBottom: 100, top: -205}} source={require('../../assets/staticScreens/stories/cookieDive2xv2Revised.png')} />);
				break;
			case 6:
				return (<Image style={{width: width, height: 4082, marginBottom: 100, top: -205}} source={require('../../assets/staticScreens/stories/malala2xv2Revised.png')} />);
				break;
			case 7:
				return (<Image style={{width: width, height: 3406, marginBottom: 100, top: -205}} source={require('../../assets/staticScreens/stories/nasaRevised2x.png')} />);
				break;
			case 8:
				return (<Image style={{width: width, height: 3406, marginBottom: 100, top: -205}} source={require('../../assets/staticScreens/stories/cassandra2xRevised.png')} />);
				break;
		}
	}

  render() {
	const {params} = this.props.navigation.state;
	const id = params ? params.id: 1;
	return (<View style={s.modalContainer}>
				<View style={[s.modalMenuContainer, {width: width}]}>
					<TouchableOpacity style={s.modalButton}><Image style={s.shareIcon} source={assetPaths.modals.shareModal.share} /></TouchableOpacity>
					<TouchableOpacity style={s.modalButton} onPress={() => this.setState({starSolid: !this.state.starSolid})}>{ this.state.starSolid ? 
	    				<Image style={s.starIcon} source={assetPaths.modals.shareModal.starSolid} /> : 
						<Image style={s.starIcon} source={assetPaths.modals.shareModal.star}/>}
					</TouchableOpacity>
		
    <TouchableOpacity style={s.modalButton} onPress={() => this.setState({heartSolid: !this.state.heartSolid})}>
					{ this.state.heartSolid ? 
						<Image style={s.heartIcon} source={assetPaths.modals.shareModal.likeSolid} /> :
						<Image style={s.heartIcon} source={assetPaths.modals.shareModal.like} />
					}
    	</TouchableOpacity>
		<TouchableOpacity style={s.addFriend} onPress={() => (this.addFriend())} >
					<Image style={s.addFriendImage} source={
						this.state.friendRequested ? assetPaths.modals.shareModal.requestSent :
						assetPaths.modals.shareModal.addFriend }/>
    		</TouchableOpacity>
    		<TouchableOpacity style={s.exitButton} onPress={() => this.props.navigation.goBack()} >
				<Image style={s.exitIconImage} source={assetPaths.modals.shareModal.close}/>
			</TouchableOpacity>
		</View>
		<ScrollView style={s.storyContentContainer}>
		
		

		<ScrollView style={s.storyContentContainer}>{ this.renderStoryPng(id) }</ScrollView>

</ScrollView>
	</View>);
  }
}

export default StoryModalScreen