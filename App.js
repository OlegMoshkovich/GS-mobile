console.disableYellowBox = true;


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';

<<<<<<< HEAD
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen.js';
import CommunityScreen from './screens/CommunityScreen.js';
import ResumeScreen from './screens/ResumeScreen.js';
import CalendarScreen from './screens/CalendarScreen.js';
import ChatScreen from './screens/ChatScreen.js';
import ModalScreen from './screens/ModalScreen.js';
import ShopScreen from './screens/ShopScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';
import PlaygroundScreen from './screens/PlaygroundScreen.js';
=======
import HomeScreen from './src/screens/HomeScreen.js';
import CommunityScreen from './src/screens/CommunityScreen.js';
import ResumeScreen from './src/screens/ResumeScreen.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import ChatScreen from './src/screens/ChatScreen.js';



class ModalScreen extends React.Component {
  static navigationOptions = {
  };


  render() {
    const { params } = this.props.navigation.state;
    const text = params ? params.text : null;
    const title = params ? params.title : null;
    const imageUri = params ? params.image_uri : null;
    const sourceUri = { uri: imageUri }

    return (
      <View >


         <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:60,marginLeft:20,height:100 , alignItems:'flex-start'}}>
             <TouchableOpacity style={{ margin: 5}} >
             <Image
               style={{height: 30,width: 30, right:0, top:0}}
               source={require('./assets/Share.png')}
             />
             </TouchableOpacity>

             <TouchableOpacity style={{margin: 5}} >
             <Image
               style={{height: 30,width: 30, right:0, top:0}}
               source={require('./assets/Star.png')}
             />
             </TouchableOpacity>
             <TouchableOpacity style={{margin: 5 }} >
             <Image
               style={{height: 30,width: 30, right:0, top:0}}
               source={require('./assets/Comment.png')}
             />
             </TouchableOpacity>
             <TouchableOpacity style={{margin: 5}} >
             <Image
               style={{height: 30,width: 30, right:0, top:0}}
               source={require('./assets/Clap.png')}
             />
             </TouchableOpacity>
         </View>


      <TouchableOpacity
         style={{
             borderWidth:1,
             borderColor:'transparent',
             marginTop:60,
             marginBottom:10,
             position:'relative',
             left:332,
             width:27,
             height:27,
             backgroundColor:'transparent',
             borderRadius:100,
           }}
           onPress={() => this.props.navigation.goBack()}
       >

       <Image
         style={{height: 40,width: 40, right:10}}
         source={require('./assets/Exit-icon.png')}
       />
       </TouchableOpacity>


       <ScrollView >
         <Text style ={{marginTop:24,marginBottom:0,left:26,color:"black",fontSize: 22,fontWeight:'bold' }}>{JSON.stringify(title)}</Text>
         <Image
            style={{height: 225,marginTop:41,marginBottom:41,marginLeft:0,marginRight:0,}}
            resizeMode="cover"
            source={sourceUri}
         />
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
         <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       </ScrollView>
      </View>
    );
  }
}
>>>>>>> 49933c0a938b9e8c57d8da667c098f4666a54ccd

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            gestureDirection: 'inverted',
            title: `#explore`,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent',height:50 },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 35
            },
          }),
          transitionConfig: () => ({
          screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            const width = layout.initWidth;

            return {
              transform: [{
                translateX: position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [-width, 0, width],
                }),
              }]
            };
          },
        })
    },
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            title: `#map`,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }),
    },
    Resume: {
      screen: ResumeScreen,
      navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            title: `#resume`,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40
            },
          }),
    },
    Community: {
        screen: CommunityScreen,
        navigationOptions: ({ navigation }) => ({
              gesturesEnabled: true,
              title: `#community`,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30
              },
            }),
      },
    Calendar: {
          screen: CalendarScreen,
          navigationOptions: ({ navigation }) => ({
                gesturesEnabled: true,
                title: `#calendar`,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30
                },
              }),
        },
      Chat: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => ({
                  gesturesEnabled: true,
                  title: `#chat`,
                  headerTintColor: 'white',
                  headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30
                  },
                }),
          },
      Shop: {
          screen: ShopScreen,
          navigationOptions: ({ navigation }) => ({
                gesturesEnabled: true,
                title: `#Shop`,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30
                },
              }),
        },
      Dashboard: {
          screen: DashboardScreen,
          navigationOptions: ({ navigation }) => ({
                gesturesEnabled: true,
                title: `#Dashboard`,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30
                },
              }),
        },
      Playground: {
          screen: PlaygroundScreen,
          navigationOptions: ({ navigation }) => ({
                gesturesEnabled: true,
                title: `#Playground`,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent', height:50},
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30
                },
              }),
        },
  },
  {
    initialRouteName: 'Playground',
  }
);
const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
