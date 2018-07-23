import React from 'react';
import Dimensions from 'Dimensions';
import {View, TouchableOpacity,Image, ScrollView} from 'react-native';
const {width, height } = Dimensions.get('window');


import s from '../styles/storymodal';
import assetPaths from '../assetPaths';


class BadgeModalScreen extends React.Component {
	constructor(props) {
		super(props);

	}

	renderBadgePng(id) {

		switch (id) {
			case 'style':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/scienceOfStyle.png')} />);
				break;
			case 'firstaid':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/seniorFirstAid.png')} />);
				break;
			case 'sky':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/sky.png')} />);
				break;
			case 'social':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/socialInnovator.png')} />);
				break;
			case 'space':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/spaceScienceExpert.png')} />);
				break;
			case 'textile':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/textileArtist.png')} />);
				break;
			case 'truth':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/truthSeeker.png')} />);
				break;
			case 'voice':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/voiceForAnimals.png')} />);
                break;
            case 'website':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/websiteDesigner.png')} />);
				break;
			case 'womens':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/badges/womensHealth.png')} />);
				break;
		}
	}

  render() {

		const {params} = this.props.navigation.state;
		const id = params ? params.id: 'style';

    return (
		<View style={s.modalContainer}>
			<View style={[s.modalMenuContainer, {width: width}]}>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.shareIcon} source={assetPaths.modals.badgeModal.share} />
				</TouchableOpacity>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.starIcon} source={assetPaths.modals.badgeModal.star} />
				</TouchableOpacity>
				<TouchableOpacity style={s.modalButton} >
					<Image style={s.heartIcon} source={assetPaths.modals.badgeModal.like} />
				</TouchableOpacity>
				<TouchableOpacity style={s.exitButton} onPress={() => this.props.navigation.goBack()} >
					<Image style={s.exitIconImageBadge} source={assetPaths.modals.badgeModal.close}/>
				</TouchableOpacity>
			</View>
  			<ScrollView style={s.storyContentContainer}>{ this.renderBadgePng(id)}</ScrollView>
		</View>);
  }
}

export default BadgeModalScreen