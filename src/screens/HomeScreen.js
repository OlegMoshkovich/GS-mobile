import React from 'react';
import Dimensions from 'Dimensions';
import { View, Modal, TouchableOpacity, Image, Animated} from 'react-native';
import { Video, Constants, Audio } from "expo";
import {swipeDirections} from 'react-native-swipe-gestures';
import s from '../styles/homescreen';
import AvaBottomMenuHomescreen from '../components/AvaBottomMenuHomescreen';
import assetPaths from '../assetPaths';

const {width, height} = Dimensions.get('window');

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#fff',
      navigation: this.props.navigation,
      awardTop: new Animated.Value(0),
      showYesNo: true,
      showSpeech: false,
      chatInterface: false,
      showVideo: false,
    };
  }

  animate = () => { Animated.timing( this.state.awardTop, { toValue: -height, duration: 300}).start();}

  onSwipe(gestureName) {
    const {SWIPE_UP, SWIPE_DOWN} = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        this.props.navigation.navigate({ routeName: 'SystemModal',
          params: { transition: 'systemTransition' }});
        break;
      case SWIPE_DOWN:
        this.props.navigation.navigate({ routeName: 'ShopModal',
          params: { transition: 'shopTransition'} });
        break;
    }
  }

  environmentSwitch = () => {
    this.setState({environmentSwitch : !this.state.environmentSwitch});
  }

  renderNotification() {
    return(<View style={[s.notificationContainer]}>
        <TouchableOpacity

        onPress={ async () => {
          const source = {
            uri: "http://www.slspencer.com/Sounds/Chewbacca/Chewie3.mp3"
          };

          try {
            await Audio.setIsEnabledAsync(true);
            const sound = new Audio.Sound();
            await sound.loadAsync(source);
            await sound.playAsync();
            console.log('the sound button is pressed')
          } catch(error) {
            console.error(error);
          }
        }}>
          <Image style={s.notificationIcon} source={assetPaths.homeScreen.icons.notificationIcon} />
        </TouchableOpacity>
      </View>);
  }

  renderChat() {
    return(<View style={s.homeChatContainer}>

        <TouchableOpacity >
          <Image style={[s.homeChatImage]} source={assetPaths.homeScreen.chatBubbles} />
        </TouchableOpacity>

        <TouchableOpacity style={s.chatQuestions} onPress={() => {
          this.setState({chatInterface: true, showYesNo: false}); }}>
        <Image style={s.homeTutorialImage} source={assetPaths.homeScreen.responseBubbles} />
        </TouchableOpacity>

      </View>);
  }

  systemScreenStyle() { return { height: height, width: width, backgroundColor: 'transparent'} }

  render() {
    if (this.state.showVideo) {
      return (<View style={{width: width, height: height}}>
        <Video
          source={{ uri: 'https://s3.amazonaws.com/juliette-app-homescreen-video/ava1.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: width, height: height }}
        />
        { this.renderNotification() }
      </View>);
    } else {
      return (<View style={{ flex: 1, height: height, width: width}}>
        <Video
          source={{ uri: 'https://s3.amazonaws.com/juliette-app-homescreen-video/ava1.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: width, height: height }}
        />

        { this.renderNotification() }
        { this.state.showYesNo ? this.renderChat() : null }

        { this.state.chatInterface ?

          <View style={{top: 0}}>

            <Modal animationType="slide" transparent={true} visible={true} onRequestClose={() => console.log("modal closed")}>
              <TouchableOpacity onPress={() => {this.setState({chatInterface: false}); this.setState({showYesNo: true})}}>
                <Image style={{width: width, height: height}} source={assetPaths.bottomMenu.avaChatInterface} />
              </TouchableOpacity>
            </Modal>
          </View> : null }

          <View style={s.profileButton}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate({ routeName: 'SystemModal',
                params: { transition: 'systemTransition' }});}}>
              <Image source={assetPaths.homeScreen.icons.swipeUpIcon} style={s.upDownButtonIcon}/>
            </TouchableOpacity>
          </View>

          <View style={s.shopButton}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate({ routeName: 'ShopModal',
                params: { transition: 'shopTransition' }});}}>
                <Image source={assetPaths.homeScreen.icons.swipeDownIcon} style={s.upDownButtonIcon}/>
            </TouchableOpacity>
          </View>
          {
            this.state.showSpeech ? null :
              <AvaBottomMenuHomescreen navigation={this.props.navigation}/>}
          </View>);
    }
  }
}

export default HomeScreen