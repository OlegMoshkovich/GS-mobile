import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT =120;
const CARD_WIDTH = CARD_HEIGHT - 29;


import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';



class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
      chatSessions: [
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_1.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_2.png'),
        },
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_3.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_1.png'),
        },
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_2.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_3.png'),
        }



      ],
      gsEvents: [
        {
          title: "",
          description: "",
          image: require('../../assets/icons/Connect/Event_1.png'),
        },

        {
          title: "",
          description: "",
          image: require('../../assets/icons/Connect/Event_2.png'),
        },

        {
          title: "",
          description: "",
          image: require('../../assets/icons/Connect/Event_1.png'),
        },
        {
          title: "",
          description: "",
          image: require('../../assets/icons/Connect/Event_2.png'),
        },



      ],
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

    return (
      <LinearGradient
      colors={['#F9C025', '#FFDB2B']}
         style={{

           height: height,
           width:width,
         }}>

        <TopMenu menuTitle="#comms" iconPath={assetPaths.topMenu.connectIcon} />


        <View
          style={{
          height:height-120,
          top:300,
          flex:1,
          left:20,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          position:'absolute',
          }}>

          <View>
             <TouchableOpacity
               style={{
               top:70
               }}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'CommunicationChat',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 50,width: 50}}
                   source={require('../../assets/icons/Connect/Icon_chat.png')}
               />
             </TouchableOpacity>
             <Animated.ScrollView
                 style={{
                 left:60
                 }}
                 horizontal
                 scrollEventThrottle={1}
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={CARD_WIDTH}
                 onScroll={Animated.event(
                   [
                     {
                       nativeEvent: {
                         contentOffset: {
                           x: this.animation,
                         },
                       },
                     },
                   ],
                   { useNativeDriver: true }

                 )}

                 >

                 {this.state.chatSessions.map((chatSession, index) => (
                   <View style={styles.card} key={index}>
                     <Image
                       source={chatSession.image}
                       style={styles.cardImage}
                       resizeMode="cover"
                     />
                     <View >
                       <Text numberOfLines={1} style={styles.cardtitle}>{chatSession.title}</Text>
                       <Text numberOfLines={1} style={styles.cardDescription}>
                         {chatSession.description}
                       </Text>
                     </View>
                   </View>
                 ))}
             </Animated.ScrollView>
          </View>

          <View>
             <TouchableOpacity
               style={{
               top:70
               }}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'CommunicationChat',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 50,width: 50}}
                   source={require('../../assets/icons/Connect/Icon_events.png')}
               />
             </TouchableOpacity>
             <Animated.ScrollView
                 style={{
                 left:60
                 }}
                 horizontal
                 scrollEventThrottle={1}
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={CARD_WIDTH}
                 onScroll={Animated.event(
                   [
                     {
                       nativeEvent: {
                         contentOffset: {
                           x: this.animation,
                         },
                       },
                     },
                   ],
                   { useNativeDriver: true }

                 )}

                 >

                 {this.state.gsEvents.map((gsEvent, index) => (
                   <View style={styles.eventCard} key={index}>
                     <Image
                       source={gsEvent.image}
                       style={styles.eventImage}


                     />

                   </View>
                 ))}
             </Animated.ScrollView>
          </View>

          <View
          style={{
          bottom:7
          }}
          >
             <TouchableOpacity
               style={{
               top:70
               }}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'Calendar',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 50,width: 50}}
                   source={require('../../assets/icons/Connect/Icon_calendar.png')}
               />
             </TouchableOpacity>
             <Animated.ScrollView
                 style={{
                 left:60
                 }}
                 horizontal
                 scrollEventThrottle={1}
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={CARD_WIDTH}
                 onScroll={Animated.event(
                   [
                     {
                       nativeEvent: {
                         contentOffset: {
                           x: this.animation,
                         },
                       },
                     },
                   ],
                   { useNativeDriver: true }

                 )}
                 >
                   <View >

                     <Image
                        source={require('../../assets/icons/Connect/Calendar.png')}
                       style={{
                         width:288,
                         height:95,
                         right:0
                       }}
                     />
                   </View>
             </Animated.ScrollView>
          </View>

          <View
          style={{
          bottom:15
          }}
          >
             <TouchableOpacity
               style={{
               top:70
               }}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'Chat',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 50,width: 50}}
                   source={require('../../assets/icons/Connect/Icon_map.png')}
               />
             </TouchableOpacity>
             <Animated.ScrollView
                 style={{
                 left:60
                 }}
                 horizontal
                 scrollEventThrottle={1}
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={CARD_WIDTH}
                 onScroll={Animated.event(
                   [
                     {
                       nativeEvent: {
                         contentOffset: {
                           x: this.animation,
                         },
                       },
                     },
                   ],
                   { useNativeDriver: true }

                 )}
                 >
                   <View >

                     <Image
                        source={require('../../assets/icons/Connect/Map.png')}
                       style={{
                         width:288,
                         height:124,
                         right:0,
                         bottom:5
                       }}
                     />
                   </View>
             </Animated.ScrollView>
          </View>

        </View>

           <AvaBottomMenu showTab={false}  tabLeft={15} navigation={this.props.navigation}/>

      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewChats: {
    position: "absolute",
    top:400,
    left: 60,
    right: 0,
    paddingVertical: 10,
  },
  scrollViewEvents: {
    position: "absolute",
    top:520,
    left: 60,
    right: 0,
    paddingVertical: 10,
  },

  card: {
    padding: 0,
    backgroundColor: "transparent",
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  eventCard: {
    padding: 0,
    backgroundColor: "transparent",
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: 210,
    overflow: "hidden",
  },
  eventImage: {
    flex: 3,
    height: CARD_HEIGHT,
    width: 210,
    alignSelf: "center",
  },

  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },

  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    color:'white',
    backgroundColor:'transparent'
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },



});

export default DashboardScreen;
