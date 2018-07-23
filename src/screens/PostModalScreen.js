import React from 'react';
import Dimensions from 'Dimensions';
import { View, TouchableOpacity,Image} from 'react-native';

import s from '../styles/storymodal';
import assetPaths from '../assetPaths';

const {width, height} = Dimensions.get('window');

class StoryModalScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

  render() {
		return (
			<View style={s.modalContainer}>
				<Image style={{
					width: width, height: height,position:'absolute'}} 
					source={assetPaths.staticScreens.postModal} resizeMode="contain"/>
					<TouchableOpacity
  					style={{position:'absolute', right:6, top:22}} onPress={() => this.props.navigation.goBack()} >
						<Image style={s.exitIconImage} source={assetPaths.modals.articleModal.exitIcon}/>
  				</TouchableOpacity>
			</View>);
  }
}

export default StoryModalScreen