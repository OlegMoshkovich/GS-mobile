import React from 'react';
import Dimensions from 'Dimensions';
import { Text, StyleSheet, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
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
    console.log('this is system screen' ,this.props.navigation)
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      settings     : false,
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
  switch = () => {
    console.log( " I am in the switch",this.state.settings)


    this.setState({
      settings: !this.state.settings,
      }
      )
  }

  render() {

    let { fadeAnim } = this.state;

    return (

      <LinearGradient
       colors={['#7E97D5', '#C499CD', '#FEC8E3']}
       style={[{ height: height, width:width}]}>

       <TouchableOpacity
         style={[s.exit, {zIndex: 100}]} onPress={() => this.props.navigation.goBack()} >
         <Image style ={{width:35,height:35}} source={assetPaths.shop.icons.close}/>
        </TouchableOpacity>

       <TopMenu menuTitle="profile" />


       <View style={s.profileContainer}>


           <TouchableOpacity  >
           <Image style={s.percentage}
             source={require('../../assets/icons/Profile/Percentage.png')} />
           </TouchableOpacity>

           <TouchableOpacity onPress={this.switch} >
           <Image style={s.avaProfile}
             source={require('../../assets/icons/Profile/Ava.png')} />
           </TouchableOpacity>

           <TouchableOpacity>
           <Image style={s.addUser}
             source={require('../../assets/icons/Profile/AddUser.png')} />
           </TouchableOpacity>

       </View>



      <Text style={s.userName}>@Ava_G</Text>



     <View style={{position:'absolute',left: this.state.settings ? 600:100,top:300}}>
            <DraggableBox/>
            <DraggableBox1/>
            <DraggableBox2/>
     </View>

<View style={{
  posiiton:'absolute',
  flex:1,
  top:-50,
  left: this.state.settings ? 0:600,
  zIndex:0
}}>


      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.account} style={styles.image}/>
          <Text style={s.iconText}>Account</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.users} style={styles.image}/>
          <Text style={s.iconText}>Users</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.notification} style={styles.image}/>
          <Text style={s.iconText}>Notification</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.avatar} style={styles.image}/>
          <Text style={s.iconText}>Avatar</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.language} style={styles.image}/>
          <Text style={s.iconText}>Language</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.permissions} style={styles.image}/>
          <Text style={s.iconText}>Permissions</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.orders} style={styles.image}/>
          <Text style={s.iconText}>Orders</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.security} style={styles.image}/>
          <Text style={s.iconText}>Security</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.updates} style={styles.image}/>
          <Text style={s.iconText}>Updates</Text>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.about} style={styles.image}/>
          <Text style={s.iconText}>About</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.info} style={styles.image}/>
          <Text style={s.iconText}>Info</Text>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.help} style={styles.image}/>
          <Text style={s.iconText}>Help</Text>
       </TouchableOpacity>
      </View>


      <View style={{
        flex:1,
      }}>

      </View>


</View>

      <AvaBottomMenu showTab={true} contextIcon={true} tabTitle={"Resume"} tabLeft={15} navigation={this.props.navigation}/>



    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flex:3 ,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    width:46,
    height:46,
    borderRadius:46,
    backgroundColor: 'lightgrey',
    margin: 5,
  },
  image: {
    width:46,
    height:46,
    marginLeft:10,
    marginRight:10
  },

})

export default SystemScreen;
