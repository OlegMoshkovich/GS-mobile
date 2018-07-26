import React from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text} from 'react-native';
import Dimensions from 'Dimensions';

import s from '../styles/storymodal';
import assetPaths from '../assetPaths';

const {width, height} = Dimensions.get('window');

class MicroBadgeModalScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	renderMicroBadgePng(id) {

		switch (id) {
			case 'augmentedReality':
				return (<Image style={{width: width, height: height, top:  -100}} source={require('../../assets/staticScreens/microbadges/MicroBadgeModaldScreen.png')} />);
				break;

		}
	}


  	render() {
		const {params} = this.props.navigation.state;
		const id = params ? params.id: 1;
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
  				<ScrollView style={s.storyContentContainer}>{ this.renderMicroBadgePng(id)}</ScrollView>


			</View>);
  	}
}

export default MicroBadgeModalScreen
