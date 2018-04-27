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
  screenInterpolator : sceneProps => {
    console.log('sceneProps'+sceneProps)

    return CardStackStyleInterpolator.forHorizontal(sceneProps);
  },
});

//not using
let MyTransition = (index, position) => {
  console.log('index -- ' + index)
 
  
  const inputRange = [index - 1, index, index + 1];

  const opacity = position.interpolate({
      inputRange,
      outputRange: [.3, 1, .2],
  });
  const scaleX = position.interpolate({
      inputRange,
      outputRange: ([0.8, 1, 1]),
  });

  const translateX = position.interpolate({
    inputRange,
    outputRange: [width* -0.3, 0, width ]
  
  });
  const translateY = 0;

  return {
      opacity,
      transform: [{ translateX }, { translateY }]
  };
};
let MyCustomTransition = (index, position) => {
  console.log('index -- ' + index)
 
  
  const inputRange = [index - 1, index, index + 1];

  const opacity = position.interpolate({
      inputRange,
      outputRange: [.3, 1, .2],
  });
  const scaleX = position.interpolate({
      inputRange,
      outputRange: ([0.8, 1, 1]),
  });

  const translateXright = position.interpolate({
    inputRange,
    outputRange: [width, 0, width* -0.3 ]
  });

  const translateXleft = position.interpolate({
    inputRange,
    outputRange: [width* -0.3 , 0, width]
  });
  const translateY = 0;
  const translateX = translateXright;


  return {
      opacity,
      transform:[
              {translateX},{translateY}
          ]
  };
};


//not using
const TransitionConfiguration = () => {
  return {
      // Define scene interpolation, eq. custom transition
      screenInterpolator: sceneProps => {
          const {position, scene} = sceneProps;
          const {index, route} = scene;      
          const params = route.params || {}; // <- That's new
          const transition = params.transition || 'default'; // <- That's new
          // return MyCustomTransition(index, position);
          return {
            myCustomTransition: MyCustomTransition(index, position),
            default: MyTransition(index, position),
        }[transition];
      }
  }
};

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
    transitionConfig: TransitionConfiguration,
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
