import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import ShopScreen from './ShopScreen';
import s from '../styles/systemscreen';
import { DraggableBox } from '../TestComponents/draggable';
import { DraggableBox1 } from '../TestComponents/draggable1';
import { DraggableBox2 } from '../TestComponents/draggable2';


import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = .05*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 300;

class SystemScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim     : new Animated.Value(0),
      blurRadius: 0,
    };
  };

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({
        blurRadius: 0
      });
    } else {
      this.setState({
        blurRadius: 10
      });
    }

    Animated.timing(
        this.state.fadeAnim,
        {
          toValue: this.state.activated ? 1: 0,
          duration: 500,
        }
      ).start();
      this.setState({
        activated : !this.state.activated,
        }
      )
  }





  render() {


    // need to refactor the icons into a flexbox grid
    // noticed that the icons dont all line up properly with their text...

    let { fadeAnim } = this.state;
    return (


      <LinearGradient
       colors={['#7E97D5', '#C499CD', '#FEC8E3']}
       style={[{ height: height, width:width}]}>
       <TouchableOpacity
         style={s.exit} onPress={() => this.props.navigation.goBack()} >
         <Image style ={{width:35,height:35}} source={assetPaths.modals.articleModal.exit}/>
        </TouchableOpacity>


       <TopMenu menuTitle="profile"  />
       <View style={s.profileContainer}>
       <TouchableOpacity>
       <Image style={s.percentage}
         source={require('../../assets/icons/Profile/Percentage.png')} />
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={s.avaProfile}
         source={require('../../assets/icons/Profile/Ava.png')} />
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style={s.addUser}
         source={require('../../assets/icons/Profile/AddUser.png')} />
       </TouchableOpacity>
       </View>
      <Text style={s.userName}>@Ava_G</Text>


        <DraggableBox/>
        <DraggableBox1/>
        <DraggableBox2/>



      <AvaBottomMenu showTab={true} contextIcon={true} tabTitle={"Resume"} tabLeft={15} navigation={this.props.navigation}/>



    </LinearGradient>
    );
  }
}

export default SystemScreen;
