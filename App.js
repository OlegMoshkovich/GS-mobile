console.disableYellowBox = true;


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import MapScreen from './src/screens/MapScreen';
import HomeScreen from './src/screens/HomeScreen.js';
import CommunityScreen from './src/screens/CommunityScreen.js';
import ResumeScreen from './src/screens/ResumeScreen.js';
import CalendarScreen from './src/screens/CalendarScreen.js';
import ChatScreen from './src/screens/ChatScreen.js';
import ModalScreen from './src/screens/ModalScreen.js';
import ShopScreen from './src/screens/ShopScreen.js';
import DashboardScreen from './src/screens/DashboardScreen.js';
import PlaygroundScreen from './src/screens/PlaygroundScreen.js';
import ExploreScreen from './src/screens/ExploreScreen.js';





const customAnimationFunc = () => ({
  screenInterpolator : sceneProps => {
    return CardStackStyleInterpolator.forHorizontal(sceneProps);
  },
});

const MainStack = StackNavigator(
  {
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
         
        
          gestureDirection: 'inverted',
          title: ``,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#CCDBE6', borderWidth: 0, borderBottomColor: 'transparent',height:50 },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 35
               },
            }),
            
      },
      Explore: {
        screen: ExploreScreen,
        navigationOptions: ({ navigation }) => ({
          
              gestureDirection: 'inverted',
              title: `#explore`,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent',height:50 },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 35
              },
            }),
            
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
                gesturesDirection: 'inverted',
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
    transitionConfig: customAnimationFunc,
  },  
  {
    initialRouteName: 'Home',
    
  },
    
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
