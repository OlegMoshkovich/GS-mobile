import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');

import AvaBottomMenu from '../components/AvaBottomMenu.js';



class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
    };
  };
  animate = () => {
    Animated.timing(
      this.state.moveAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();

    this.setState({
       activated : !this.state.activated,
       valueInitial: this.state.activated? 0 : -150,
       valueFinal:this.state.activated? -150 : 0
      }
    )
  }
  renderDashboardMenu() {


    // TODO need to switch the style here and remove the empty touchableOpacities that are now acting as padding around the icons under ava name




    return(

      <View style ={{
        top:20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
         }}>
           <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>#dashboard</Text>
           <Image
             style={{height:72/4, width:90/4, top:40,right:15 }}
             source={require('../../assets/Tap_here_icon.png')}
           />
           <TouchableOpacity style ={{margin:20}}
           onPress={() => this.props.navigation.navigate({
             routeName: 'Home',
                 params: {
                     transition: 'left'
                 }
               }
           )}>
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/Dashboard-icon.png')}
           />

         </TouchableOpacity>

       </View>

    );
  }

  renderAva() {
    return(

      <TouchableOpacity //Ava
      style = {{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: this.state.activated ? -100:-50,
      right: 20,
      width: this.state.activated ? 100: 100,
      height: this.state.activated ? 150: 150,
      }}
      onPress={this.animate} onLongPress={this.animate}>
      <Image
        style={{height:100,width:100,}}
        source={require('../../assets/Nav_Avatar_Face_Animations.png')}
      />
</TouchableOpacity>

    );
  }

  renderAvaDashboard() {
    return(

      <View style={{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        top:5
        }}>


        
      <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity  >
          <Image
            style={{height: 41,width: 40}}
            source={require('../../assets/icons/Dashboard_Icon_Badges.png')}
          />
          </TouchableOpacity >
          <TouchableOpacity >
          <Image
            style={{height: 41,width: 40}}
              source={require('../../assets/icons/Dashboard_Icon_Journeys.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity  >
          <Image
            style={{height: 41,width: 40}}
              source={require('../../assets/icons/Dashboard_Icon_Awards.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>

      </View>

    );
  }

  renderBadges() {
    return(
      <View style={{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom:30,
        }}>

        <TouchableOpacity  >
          <Image
            style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
            source={require('../../assets/icons/Badges/Icon_Badge_1.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity  >
          <Image
            style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
              source={require('../../assets/icons/Badges/Icon_Badge_2.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity  >
          <Image
            style={{height: 75,width: 75}}
              source={require('../../assets/icons/Badges/Icon_Badge_3.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity   >
          <Image
            style={{height: 75,width: this.state.environmentSwitch ? 0: 75}}
            source={require('../../assets/icons/Badges/Icon_Badge_4.png')}
          />
          </TouchableOpacity>

          </View>

    );
  }

  renderNavMenu() {
    // TODO abstract to global component

    return(
      <View style={{ //Navigational Menu
        flex:1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: this.state.activated ? -50: 30,
        left:20

        }}>
          <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate('Explore')}>
          <Image
            style={{height: 35,width: 35}}
            source={require('../../assets/Explore-icon.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Map')}>
          <Image
            style={{height: 35,width: 35}}
            source={require('../../assets/Map-icon.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Community')}>
          <Image
            style={{height: 35,width: 35}}
            source={require('../../assets/Community-icon.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Calendar')} >
          <Image
            style={{height: 35,width: 35}}
            source={require('../../assets/Calendar-icon.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Shop')} >
          <Image
            style={{height: 35,width: 35}}
            source={require('../../assets/Shop-icon.png')}
          />
          </TouchableOpacity>
      </View>
      
    );
  }

  render() {

    return (


      <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{
           height: height,
           width:width,
         }}>


         { this.renderDashboardMenu() }

         <Image
           style={{height: 290/1.2,width: 227/1.2,alignSelf:'center', bottom:20}}
           source={require('../../assets/Ava-Dashboard1.png')}
         />




         {this.renderAvaDashboard() }



         <Image
           style={{height: 8,width: 270,alignSelf:'center',bottom:60}}

           source={require('../../assets/Dashboard_ProgressBar.png')}
         />


            {this.renderBadges()}

             <AvaBottomMenu navigation={this.props.navigation}/> 





      </LinearGradient>
    );
  }
}

export default DashboardScreen;
