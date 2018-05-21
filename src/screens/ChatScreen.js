import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CollapseView from "react-native-collapse-view";

import assetPaths from '../assetPaths';


import {GiftedChat } from 'react-native-gifted-chat';
import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';

const {width, height} = Dimensions.get('window');

class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(1),
      activated    : true,
      valueInitial : 0,
      valueFinal   : 0

    };
  }
   // starts with a default message
  componentDidMount() {
    //Analytics.record('aws-expo-demo-app-launched');
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Developers! Developers! Developers!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
        ],
      })
    }
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

  _renderView1 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent0.png')}
      />
      </View>
    )
  }
  _renderCollapseView1 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session.png')}
      />
      </View>
    )
  }

  _renderView2 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent1.png')}
      />
      </View>
    )
  }
  _renderCollapseView2 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView3 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent2.png')}
      />
      </View>
    )
  }
  _renderCollapseView3 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView4 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent3.png')}
      />
      </View>
    )
  }
  _renderCollapseView4 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView5 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent4.png')}
      />
      </View>
    )
  }
  _renderCollapseView5 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView6 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent5.png')}
      />
      </View>
    )
  }
  _renderCollapseView6 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView7 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent6.png')}
      />
      </View>
    )
  }
  _renderCollapseView7 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView8 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent7.png')}
      />
      </View>
    )
  }
  _renderCollapseView8 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  _renderView9 = (collapse) => {
    return(
      <View style={styles.view}>
      <Image
        style={{height: 156/3,width: 1059/3}}
        source={require('../../assets/Chat_ConvoComponent8.png')}
      />
      </View>
    )
  }
  _renderCollapseView9 = (collapse) => {
    return(
      <View style={styles.collapseView}>
      <Image
        style={{height: 303,width: 375,right:10}}
        source={require('../../assets/Chat_Session1.png')}
      />
      </View>
    )
  }

  render() {
    return (
      <LinearGradient
      colors={['#F9C025', '#FFDB2B']}
        style={{ height: height, width:width}}>

        <TopMenu menuTitle="who" iconPath={assetPaths.topMenu.connectIcon} />
        <NavMenu highlighted={2} />



        <ScrollView style={{ //Navigational Menu
          flex:1,
          flexDirection: 'column',
          position: 'absolute',
          top:100,
          zIndex: 0,
          bottom:80
          }}>
            <CollapseView
              renderView={this._renderView1}
              renderCollapseView={this._renderCollapseView1}
            />
            <CollapseView
              renderView={this._renderView2}
              renderCollapseView={this._renderCollapseView2}
            />
            <CollapseView
              renderView={this._renderView3}
              renderCollapseView={this._renderCollapseView3}
            />
            <CollapseView
              renderView={this._renderView4}
              renderCollapseView={this._renderCollapseView4}
            />
            <CollapseView

              renderView={this._renderView5}
              renderCollapseView={this._renderCollapseView3}
            />
            <CollapseView
              renderView={this._renderView6}
              renderCollapseView={this._renderCollapseView4}
            />

            <CollapseView
              renderView={this._renderView7}
              renderCollapseView={this._renderCollapseView5}
            />
            <CollapseView
              renderView={this._renderView8}
              renderCollapseView={this._renderCollapseView2}
            />
        </ScrollView>





      <AvaBottomMenu currentSection={'connect'} contextIcon={true} navigation={this.props.navigation}/>

      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  view: {
    height:70,
    padding:3,
    left:20,
    justifyContent:'center',
    backgroundColor:'transparent',
  },
  collapseView: {
    padding: 20
  }
});

export default ChatScreen;
