import React from 'react';
import Dimensions from 'Dimensions';
import { TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CustomActions from '../components/CustomActions';
import CustomView from '../components/CustomView';
import CollapseView from "react-native-collapse-view";
const {width, height} = Dimensions.get('window');


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../components/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('../components/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
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

            <GiftedChat
              messages={this.state.messages}
              onSend={this.onSend}
              loadEarlier={this.state.loadEarlier}
              onLoadEarlier={this.onLoadEarlier}
              isLoadingEarlier={this.state.isLoadingEarlier}

              user={{
                _id: 1, // sent messages should have same user._id
              }}

              renderActions={this.renderCustomActions}
              renderBubble={this.renderBubble}
              renderSystemMessage={this.renderSystemMessage}
              renderCustomView={this.renderCustomView}
              renderFooter={this.renderFooter}
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
                  routeName: 'CommunicationGifterdChat',
                      params: {
                          transition: 'default'
                      }
                    }
                )}>
                <Image
                  style={{height: 30,width: 30}}
                  source={require('../../assets/Chat-icon.png')}
                />
              </TouchableOpacity>
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
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
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
