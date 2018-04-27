import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View,PanResponder,Vibration, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import Deck from '../Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const DATA = [
  { id: 1, title: 'Oyster-tecture', uri: 'https://99percentinvisible.org/app/uploads/2017/10/new-york-estuary.jpg' , text:'Standing on the sidewalk in Manhattan’s financial district in the shadows of glass skyscrapers, it is easy to forget how close you are to the water. But just a few blocks away, there are docks, and sea gulls, and ferry boats ready to take you island hopping.'},
  { id: 2, title: 'Women and Guns', uri: 'https://hips.hearstapps.com/mac.h-cdn.co/assets/16/06/1455152746-bottomgun.jpg?fill=320:259&resize=320:*',text:'Beneath the surface of the guns discussion in America—one traditionally dominated by men—theres a complex world of females and firearms. Here, in the following 10 stories, we shed light on what often goes unseen: how women feel about, live with, and die by guns.' },
  { id: 3, title: 'The Fear of Water in Flint', uri: 'https://res.cloudinary.com/versemedia/image/fetch/q_60,c_fill,f_auto,fl_lossy,dpr_2.0/https://verse-api-image-source-files.s3.amazonaws.com/users/c92a4fcbaefff57714cf443cc322229f84d1af52/i1v308nuyk4daer5.jpg',text:'The story of the poisoning of the water in Flint, Michigan, has become a dark fable about government negligence, woeful infrastructure, and the hubris of public officials. ' },
  { id: 4, title: 'A Brief History of Speedrunning', uri: 'https://readonlymemory.vg/wp-content/uploads/2017/02/s_2-1280x1280.jpg',text:'Of all the iD Software games from the early ’90s, I only hazily remember Wolfenstein 3D at best. My mother’s big beige block PC in her upstairs office had it installed.' },
  { id: 5, title: 'Summertime Instagram catch', uri: 'https://s20843.pcdn.co/wp-content/uploads/2013/07/photo-38.jpg',text:'Close your eyes and imagine the spoils of travel: different cultures, breathtaking vistas, exotic foods. You might picture zooming down a zip line in the Amazon, tasting a classic New York hot dog, ' },
];

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Image
            style={{height: 40 ,width: 40, right:20}}
            source={require('../../assets/Explore-icon.png')}
          />
        </TouchableOpacity>

      ),

      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('../../assets/Community-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  constructor(props) {
    super(props);
    var position = new Animated.ValueXY({x:300, y:200});
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
      panResponder,
      position
    };
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Vibration.vibrate();
        // Vibration.cancel();
        position.setValue({x:gesture.dx+width+this.state.accelerometerData.x*100, y:gesture.dy+200+this.state.accelerometerData.y*100});
        radius = 60 + gesture.dx;
      },
      onPanResponderRelease: () => {
        Vibration.vibrate(PATTERN, true);
        position.setValue({x:width, y:200});
         Vibration.cancel()
      }
    });

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

  _onLongPressButton() {
    Alert.alert(
      'Ava',
      'How can I help? - Long Press',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  _onPressButton() {
    Alert.alert(
    'Ava',
    'Short Press',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
    )
    }

  
  render() {
    let { fadeAnim } = this.state;
    return (
      <LinearGradient
       colors={['#CCDBE6', '#CCDBE6', '#CCDBE6']}
       style={{ height: height, width:width}}>   
        <Image
        blurRadius={this.state.blurRadius}
        style={{height: height,width: width}}
        source={require('../../assets/Home-Background-center.png')}
        />
       
        <Animated.View
            style={{
            position: 'absolute',
            top: 60,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: fadeAnim,      
          }}>
      
         {/* <Image
            style={{height:93,width:272, left: 20,
            position: 'absolute',
            top: 20,
            }}
            source={require('../../assets/Chat-bubble.png')}
          />  */ }
            
          <Image
              style={{height:26,width:343, left:20,

                position: 'absolute',
                bottom: 35+100,
                zIndex: 10
              }}
              source={require('../../assets/Speech-input.png')}
            />

          <TouchableOpacity
            style ={{  
              position: 'absolute',
              bottom: 0+90,
              
              zIndex: 1,
              right: 0,
            }}
              onPress={this.animate} onLongPress={this.animate}>
            <Image
            style={{
            height:150,width:100,
            right:20,
            }}
              source={require('../../assets/Nav_Avatar_Face_Animations-wave.png')}
            />
          </TouchableOpacity>
        </Animated.View>
        

                  <View style={{
                    flex:1,
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: this.state.activated ? 127: 0,
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
              bottom: 0+40,
              right: 20,
              width: this.state.activated ? 100: 0,
              height: this.state.activated ? 150: 0,
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

export default HomeScreen;
