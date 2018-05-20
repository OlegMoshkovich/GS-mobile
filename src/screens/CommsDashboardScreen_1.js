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
const CARD_WIDTH = CARD_HEIGHT - 34;


import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';



class DashboardScreen extends React.Component {
  componentDidMount() {
  Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/TrefoilSans-Black.otf'),
  });
}

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
          image: require('../../assets/Avatar_1.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/Avatar_3.png'),
        },
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/Avatar_1.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/Avatar_3.png'),
        },
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/Avatar_1.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/Avatar_3.png'),
        },
        {
          title: "Nicole Clark",
          description: "",
          image: require('../../assets/Avatar_1.png'),
        },

        {
          title: "Emma Brownstein",
          description: "",
          image: require('../../assets/Avatar_3.png'),
        }



      ],
      gsEvents: [
        {
          title: "Troop Award",
          description: "",
          image: require('../../assets/Event1.png'),
        },

        {
          title: "GSNY Event",
          description: "",
          image: require('../../assets/Event2.png'),
        },
        {
          title: "Troop Award",
          description: "",
          image: require('../../assets/Event1.png'),
        },

        {
          title: "GSNY Event",
          description: "",
          image: require('../../assets/Event2.png'),
        },
        {
          title: "Troop Award",
          description: "",
          image: require('../../assets/Event1.png'),
        },

        {
          title: "GSNY Event",
          description: "",
          image: require('../../assets/Event2.png'),
        },

        {
          title: "Troop Award",
          description: "",
          image: require('../../assets/Event1.png'),
        },

        {
          title: "GSNY Event",
          description: "",
          image: require('../../assets/Event2.png'),
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
         <View
           style={{
             top:370,
             width:width-60,
             left:30,
             borderBottomColor: 'lightgrey',
             borderBottomWidth: .4,
           }}
         />

        <TopMenu menuTitle="#comms" iconPath={assetPaths.topMenu.connectIcon} />



         <Image
           style={{
             height: 290/1.4,
             width: 250/1.4,
             alignSelf:'center',
             position:'absolute',
             top: 120

           }}
           source={require('../../assets/Ava-Dashboard-Comms.png')}
         />

           <TouchableOpacity
             style={{
             flex:1,
             top:130,
             left:100,
             position:'absolute'
             }}
             >
                 <Image
                   style={{height: 41,width: 40}}
                   source={require('../../assets/Events-icon.png')}
                 />
           </TouchableOpacity >

           <TouchableOpacity
             style={{
             flex:1,
             top:130,
             right:100,
             position:'absolute'
             }}
             onPress={() => this.props.navigation.navigate({
               routeName: 'CommunicationChat',
                   params: {
                       transition: 'default'
                   }
                 }
             )}>
             <Image
               style={{height: 41,width: 40}}
                 source={require('../../assets/Chat-icon.png')}
             />
           </TouchableOpacity>

            <TouchableOpacity
              style={{
               flex:1,
               top:250,
               right:100,
               position:'absolute'
               }}
               onPress={() => this.props.navigation.navigate({
                 routeName: 'CommunicationMap',
                     params: {
                         transition: 'default'
                     }
                   }
               )}>
               <Image
                 style={{height: 40,width: 40}}
                   source={require('../../assets/Map-icon.png')}
               />
            </TouchableOpacity >

            <TouchableOpacity
              style={{
              flex:1,
              top:250,
              left:100,
              position:'absolute'
              }}
              onPress={() => this.props.navigation.navigate({
                routeName: 'CommunicationCalendar',
                    params: {
                        transition: 'default'
                    }
                  }
              )}>
              <Image
                style={{height: 40,width: 40}}
                  source={require('../../assets/Calendar-icon.png')}
              />
            </TouchableOpacity >

           <TouchableOpacity
             style={{
             flex:1,
             top:435,
             left:10,
             position:'absolute'
             }}
             onPress={() => this.props.navigation.navigate({
               routeName: 'CommunicationChat',
                   params: {
                       transition: 'default'
                   }
                 }
             )}>
             <Image
               style={{height: 41,width: 40}}
                 source={require('../../assets/Chat-icon.png')}
             />
           </TouchableOpacity>

           <TouchableOpacity
             style={{
             flex:1,
             top:555,
             left:10,
             position:'absolute'
             }}
             onPress={() => this.props.navigation.navigate({
               routeName: 'CommunicationCalendar',
                   params: {
                       transition: 'default'
                   }
                 }
             )}>
             <Image
               style={{height: 41,width: 40}}
                 source={require('../../assets/Events-icon.png')}
             />
           </TouchableOpacity>

           <Animated.ScrollView
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

               style={styles.scrollViewChats}
               >

               {this.state.chatSessions.map((chatSession, index) => (
                 <View style={styles.card} key={index}>
                   <Image
                     source={chatSession.image}
                     style={styles.cardImage}
                     resizeMode="cover"
                   />
                   <View style={styles.textContent}>
                     <Text numberOfLines={1} style={styles.cardtitle}>{chatSession.title}</Text>
                     <Text numberOfLines={1} style={styles.cardDescription}>
                       {chatSession.description}
                     </Text>
                   </View>
                 </View>
               ))}
           </Animated.ScrollView>

           <Animated.ScrollView
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
               style={styles.scrollViewEvents}
               >

               {this.state.gsEvents.map((gsEvent, index) => (
                 <View style={styles.cardEvents} key={index}>
                   <Image
                     source={gsEvent.image}
                     style={styles.cardImage}
                     resizeMode="cover"
                   />
                   <View style={styles.textContent}>
                     <Text numberOfLines={1} style={styles.cardtitle}>{gsEvent.title}</Text>


                   </View>
                 </View>
               ))}
           </Animated.ScrollView>


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
  endPadding: {
  },
  card: {
    padding: 0,

    backgroundColor: "transparent",
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardEvents: {
    padding: 0,

    backgroundColor: "transparent",
    marginHorizontal: 10,
    height: CARD_HEIGHT,
    width: CARD_WIDTH+13,
    overflow: "hidden",
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