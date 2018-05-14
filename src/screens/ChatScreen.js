import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CollapseView from "react-native-collapse-view";


import {GiftedChat } from 'react-native-gifted-chat';
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
        style={{height: 77,width: 357}}
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
        style={{height: 77,width: 357,left:5}}
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
        style={{height: 77,width: 357,left:5}}
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
        style={{height: 77,width: 357}}
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
        style={{height: 77,width: 357}}
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

  render() {
    return (
      <LinearGradient
       colors={['#b98031', '#b98031','#b98031', 'white']}
        style={{ height: height, width:width}}>

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

              renderView={this._renderView3}
              renderCollapseView={this._renderCollapseView3}
            />
            <CollapseView
              renderView={this._renderView4}
              renderCollapseView={this._renderCollapseView4}
            />

            <CollapseView
              renderView={this._renderView5}
              renderCollapseView={this._renderCollapseView5}
            />
            <CollapseView
              renderView={this._renderView2}
              renderCollapseView={this._renderCollapseView2}
            />
        </ScrollView>

       <View style ={{
        top:20,
        flex:0,
        flexDirection: 'row',
        position:'absolute'
         }}>
           <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>who</Text>
            <View style ={{
             top:23,
             right:10,
             flex: 1,
             flexDirection: 'row',
             justifyContent: 'flex-end'
              }}>
               <TouchableOpacity style ={{margin:5}}
                 onPress={() => this.props.navigation.navigate({
                   routeName: 'CommunicationDashboard',
                       params: {
                           transition: 'default'
                       }
                     }
                 )}>
                 <Image
                   style={{height: 30,width: 30}}
                   source={require('../../assets/Dashboard-icon.png')}
                 />
               </TouchableOpacity>
               <TouchableOpacity style ={{margin:5}}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'CommunicationMap',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 30,width: 30}}
                 source={require('../../assets/Map-icon.png')}
               />
               </TouchableOpacity>
               <TouchableOpacity style ={{margin:5}}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'CommunicationCalendar',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 30,width: 30}}
                 source={require('../../assets/Calendar-icon.png')}
               />
             </TouchableOpacity>
          </View>
       </View>

       <TouchableOpacity //Ava
             style = {{
             alignSelf: 'flex-end',
             position: 'absolute',
             bottom: this.state.activated ? -100:-32,
             right: 20,
                zIndex: 1,
             width: this.state.activated ? 100: 100,
             height: this.state.activated ? 150: 150,
             }}
             onPress={this.animate} onLongPress={this.animate}>
             <Image
               style={{height:354/3,width:285/3,}}
               source={require('../../assets/Ava_Cap.png')}
             />
       </TouchableOpacity>


       <Image
         style={{height: 87,
                 width: width,
                 bottom: this.state.activated ? -100: 0,
                 zIndex: 0,

                  position:'absolute'}}
         source={require('../../assets/Nav_Bottom_Dark.png')}
       />
       <View style={{
         flex:1,
         zIndex: 2,
         flexDirection: 'row',
         justifyContent: 'space-around',
         bottom: this.state.activated ? -height: -height+55,
         }}>


         <TouchableOpacity  onPress={() => this.props.navigation.navigate('Map')}>
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/icons/Home_Icon_Communication.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Community')}>
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/icons/Home_Icon_Community.png')}
           />
           </TouchableOpacity>

          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/Home-icon.png')}
           />
           </TouchableOpacity>

           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Explore')} >
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/icons/Home_Icon_Explore.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboard')} >
           <Image
             style={{height: 40,width: 40}}
             source={require('../../assets/icons/Home_Icon_Dashboard.png')}
           />
           </TouchableOpacity>
       </View>




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

    justifyContent:'center',
    backgroundColor:'transparent',
  },
  collapseView: {
    padding: 20
  }
});

export default ChatScreen;
