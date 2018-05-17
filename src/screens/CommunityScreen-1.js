import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const {width, height} = Dimensions.get('window');

class CommunityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('../../assets/Home-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 0,left:20}}
            source={require('../../assets/Home-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
    };

  }
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
    return (

        <LinearGradient
         colors={['#CCDBE6', '#CCDBE6', '#CCDBE6']}
         style={{ height: height, width:width,
          flex: 1}
         }>

        <View style ={{
         top:30,
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',

         zIndex: 1,

          }}>
          <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>#community</Text>
          <TouchableOpacity style ={{margin:20}}  onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                style={{height: 40,width: 40}}
                source={require('../../assets/Home-icon.png')}
              />
          </TouchableOpacity>
        </View>


         <ScrollView
         style ={{
          top:100,
          position:'absolute',
          height: height,


           }}>
         <Text style ={{color:"white",fontSize: 22,top:30,left:30,fontWeight:'bold', }}>Featured Stories</Text>
             <ScrollView horizontal= {true} style={{marginTop:40}}>
             <Image
                style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                 source={require('../../assets/Article_1.png')}
              />
              <Image
                 style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                  source={require('../../assets/Article_1.png')}
               />
               <Image
                  style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                   source={require('../../assets/Article_1.png')}
                />

             </ScrollView >



             <Text style ={{color:"white",fontSize: 22,left:30,fontWeight:'bold',marginBottom:10 }}>Friends Stories</Text>

             <ScrollView horizontal= {true} style={{marginBottom:200}} >
             <Image
                style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.png')}
              />

              <Image
                 style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                 source={require('../../assets/Article_2.png')}
               />
               <Image
                  style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                  source={require('../../assets/Article_2.png')}
                />


             </ScrollView >

         </ScrollView>
         <View style={{
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
        <TouchableOpacity
              style = {{
              alignSelf: 'flex-end',
              position: 'absolute',
              bottom: -50,
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

      </LinearGradient>
    );
  }
}
export default CommunityScreen;
