import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View, TouchableOpacity,Image,ScrollView } from 'react-native';
import { LinearGradient } from "expo";

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';

import assetPaths from '../assetPaths';
import s from '../styles/dashboardscreen.js';

const  { width, height} = Dimensions.get('window');
const color = '#BACDFF'

class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activated    : true,
      environmentSwitch: false,
    };
  };

  renderDashboardMenu() {
    return(
      <View style ={s.container}>
        <Text style ={s.menuText}>#dashboard</Text>
        <Image style={s.menuTapHereIcon} source={require('../../assets/Tap_here_icon.png')} />
        <TouchableOpacity style ={s.dashboardIconButton} onPress={() => this.props.navigation.navigate({
          routeName: 'Home', params: { transition: 'left' }}
          )}>
          <Image style={s.dashboardIconImage} source={require('../../assets/Dashboard-icon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
  
  renderAvaDashboard() {
    return(
      <View style={s.mainDashboard}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate({ routeName: 'Badges'} )}>
          <Text style = {{color:'white',bottom:10,alignSelf:'center'}}>4</Text>
          <Image style={s.progressImage} source={require('../../assets/icons/Dashboard_Icon_Badges.png')} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate({ routeName: 'Journey'} )}>
        <Text style = {{color:'white',bottom:10,alignSelf:'center'}}>1</Text>
          <Image style={s.progressImage} source={require('../../assets/icons/Dashboard_Icon_Journeys.png')} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate({ routeName: 'Award'} )}>
          <Text style = {{color:'white',bottom:10,alignSelf:'center'}}>1</Text>
          <Image style={s.progressImage} source={require('../../assets/icons/Dashboard_Icon_Awards.png')} />
        </TouchableOpacity>
      </View>);
  }
  
  renderBadges() {
    return(
      <View style={s.badgeContainer}>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} style={{left:15}}>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_1.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_2.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_3.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_4.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_1.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_2.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_3.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={s.imagePadding}>
            <Image style={s.badgeImage} source={require('../../assets/icons/Badges/Icon_Badge_4.png')} />
          </TouchableOpacity>
        </ScrollView>
      </View>);
  }

  render() {
    return (
      <LinearGradient colors={[color,color]} style={{ height: height, width:width }}>
        <TopMenu menuTitle="dash" iconPath={assetPaths.topMenu.dashboardIcon} navigation={this.props.navigation}/>
        <Image style={s.avaProfile} source={require('../../assets/Ava-Dashboard1.png')} />
        <Image style={s.progressBar} source={require('../../assets/Dashboard_ProgressBar.png')} />
        {this.renderAvaDashboard() }
        <Text style={{color:'white',bottom:25,left:25, fontSize: 17,fontFamily: 'trefoil-sans-semibold'}}>My Badges</Text>
        {this.renderBadges()}
        <AvaBottomMenu currentSection={'dashboard'}  showTab={true} tabTitle={"Leaderboard"} tabLeft={13} navigation={this.props.navigation}/>
      </LinearGradient>);
  }
}

export default DashboardScreen