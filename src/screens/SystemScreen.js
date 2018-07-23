import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View, TouchableOpacity,Image, Animated} from 'react-native';
import { LinearGradient } from "expo";

import { DraggableBox } from '../TestComponents/draggable';
import { DraggableBox1 } from '../TestComponents/draggable1';
import { DraggableBox2 } from '../TestComponents/draggable2';

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';

import assetPaths from '../assetPaths';
import s from '../styles/systemscreen';

const  {width, height} = Dimensions.get('window');
const color = '#FFC1C1';

class SystemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true, settings     : false,
      users     : false, environmentSwitch: false,
      fadeAnim     : new Animated.Value(0), blurRadius: 0,
    };

    this.switch = this.switch.bind(this);

  };

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }
    Animated.timing(
        this.state.fadeAnim,
        { toValue: this.state.activated ? 1: 0, duration: 500, }
      ).start();
      this.setState({ activated : !this.state.activated });
  }
  
  switch = () => { this.setState({ settings: !this.state.settings })}
  users = () => { this.setState({users: !this.state.users}) }
  
  render() {
    return (
      <LinearGradient colors={[color, color]}
       style={[{ height: height, width:width}]}>
       <TouchableOpacity
        style={[s.exit, {zIndex: 100}]} onPress={() => this.props.navigation.goBack()} >
        <Image style ={{width:35,height:35}} source={assetPaths.shop.icons.close}/>
       </TouchableOpacity>
       
       <TopMenu menuTitle="profile" />
        <View style={[s.profileContainer,{left: this.state.users ? 600:50}]}>
          <TouchableOpacity>
            <Image style={s.percentage}
              source={require('../../assets/icons/Profile/Percentage.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.switch} >
            <Image style={s.avaProfile}
              source={require('../../assets/icons/Profile/Ava.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.users}>
            <Image style={s.addUser}
            source={require('../../assets/icons/Profile/AddUser.png')} />
          </TouchableOpacity>
        </View>
        <View style={[s.profileContainerUsers,{left: this.state.users ? 10:600}]}>
          <TouchableOpacity onPress={this.users}>
            <Image style={s.avaProfile}
              source={require('../../assets/icons/Profile/Profile_Ava.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={s.avaProfile} source={require('../../assets/icons/Profile/Profile_Lilly.png')} />
          </TouchableOpacity>
          <TouchableOpacity  >
            <Image style={s.avaProfile} source={require('../../assets/icons/Profile/Profile_Maud.png')} />
          </TouchableOpacity>
        </View>
        <Text style={s.userName}>@Ava_G</Text>
        <View style={{position:'absolute',left: this.state.settings ?     600:100,top:300}}>
          <DraggableBox/>
          <DraggableBox1/>
          <DraggableBox2/>
        </View>
        <View style={{ flex:1, top:-50, left: this.state.settings ? 0:600,
          zIndex:0 }}>
          <View style={s.row}>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.account} style={s.image}/>
              <Text style={s.iconText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.users} style={s.image}/>
              <Text style={s.iconText}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.notification} style={s.image}/>
              <Text style={s.iconText}>Notification</Text>
            </TouchableOpacity>
          </View>
          <View style={s.row}>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.avatar} style={s.image}/>
              <Text style={s.iconText}>Avatar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.language} style={s.image}/>
              <Text style={s.iconText}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.permissions} style={s.image}/>
              <Text style={s.iconText}>Permissions</Text>
            </TouchableOpacity>
          </View>
          <View style={s.row}>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.orders} style={s.image}/>
              <Text style={s.iconText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.security} style={s.image}/>
              <Text style={s.iconText}>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.updates} style={s.image}/>
              <Text style={s.iconText}>Updates</Text>
            </TouchableOpacity>
          </View>
          <View style={s.row}>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.about} style={s.image}/>
              <Text style={s.iconText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.info} style={s.image}/>
              <Text style={s.iconText}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={assetPaths.systemScreen.icons.help} style={s.image}/>
              <Text style={s.iconText}>Help</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex:1}}></View>
        </View>
        
        <AvaBottomMenu contextFunction={this.switch} showTab={true} contextIcon={true} tabTitle={"Resume"} tabLeft={15} navigation={this.props.navigation}/>

    </LinearGradient>
    );
  }
}

export default SystemScreen