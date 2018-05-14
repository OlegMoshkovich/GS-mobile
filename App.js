console.disableYellowBox = true;
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import getSceneIndicesForInterpolationInputRange from 'react-navigation/src/utils/getSceneIndicesForInterpolationInputRange';
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
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

//custom transition using Navigator Options
const customAnimationFunc = () => ({
  ransitionSpec: {
		duration: 10,
		timing: Animated.timing,
  },

  screenInterpolator : sceneProps => {
    const {position, scene} = sceneProps;
    const {index, route} = scene;
    const params = route.params || {};
    const transition = params.transition || 'default';
    console.log('parameters'+transition)
    return {
      right: CardStackStyleInterpolator.forHorizontalRight(sceneProps),
      left: CardStackStyleInterpolator.forHorizontalLeft(sceneProps),
      default: CardStackStyleInterpolator.forFade(sceneProps),
      }[transition];
    return
  },
});
const MainStack = StackNavigator(
  { //Screens
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          header: null,
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
              header: null,
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
                header: null,
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
const TabStack =  TabNavigator({

  Map: { screen: MapScreen },
  Community: { screen: CommunityScreen },
  Home: { screen: HomeScreen },
  Explore: { screen: ExploreScreen },
  Dashboard: { screen: DashboardScreen }

  },
  {swipeEnabled:true,
  initialRouteName:'Home',
  navigationOptions: {
    tabBarVisible: false
   },
});

const RootStack = StackNavigator(
  {
    Main: {
      screen: TabStack,
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
