import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';

import s from '../styles/dashboardscreen.js';

class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activated    : true,
      environmentSwitch: false,
    };
  };
  
  renderDashboardMenu() {
      
    // TODO make global: also that tap icon does not suggest swiping
    return(
      <View style ={s.container}>
           <Text style ={s.menuText}>#dashboard</Text>
           <Image
             style={s.menuTapHereIcon}
             source={require('../../assets/Tap_here_icon.png')}
           />
          <TouchableOpacity style ={s.dashboardIconButton}
            onPress={() => this.props.navigation.navigate({
            routeName: 'Home', params: { transition: 'left' }}
            )}>
            <Image style={s.dashboardIconImage}
              source={require('../../assets/Dashboard-icon.png')} />
          </TouchableOpacity>
      </View>
    );
  }

  renderAvaDashboard() {
  
    // TODO -- need to remove the touchable Opacity items here that
    // right now just give padding

    // do we want to add numbers here too for points?
    return(

      <View style={s.mainDashboard}>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={s.progressImage}
            source={require('../../assets/icons/Dashboard_Icon_Badges.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={s.progressImage}
            source={require('../../assets/icons/Dashboard_Icon_Journeys.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={s.progressImage}
            source={require('../../assets/icons/Dashboard_Icon_Awards.png')} />
        </TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  }

  renderBadges() {
    
    // TODO - not sure I understand what state.environmentSwitch is used for here...
    
    return(
      <View style={s.badgeContainer}>
        <TouchableOpacity>
          <Image
            style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
            source={require('../../assets/icons/Badges/Icon_Badge_1.png')} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Image
              style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
              source={require('../../assets/icons/Badges/Icon_Badge_2.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{height: 75,width: 75}}
              source={require('../../assets/icons/Badges/Icon_Badge_3.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
              source={require('../../assets/icons/Badges/Icon_Badge_4.png')} />
          </TouchableOpacity>
        </View>
    );
  }

  render() {
    return (
      <LinearGradient
      colors={['#00C5F0', '#50EAFF']}
        style={{ height: height, width:width }}>

        <TopMenu menuTitle="dash" iconPath={assetPaths.topMenu.dashboardIcon} />
        <NavMenu highlighted={1} />

        

        <Image style={s.avaProfile} 
          source={require('../../assets/Ava-Dashboard1.png')} />
        
        {this.renderAvaDashboard() }

        <Image style={s.progressBar}
          source={require('../../assets/Dashboard_ProgressBar.png')} />
        
        {this.renderBadges()}

        <AvaBottomMenu showTab={true} tabTitle={"Leaderboard"} tabLeft={15} navigation={this.props.navigation}/> 
      </LinearGradient>);
  }
}

export default DashboardScreen;
