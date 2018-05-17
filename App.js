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
import CommsDashboardScreen from './src/screens/CommsDashboardScreen.js'
import ModalScreen from './src/screens/ModalScreen.js';
import ShopScreen from './src/screens/ShopScreen.js';
import DashboardScreen from './src/screens/DashboardScreen.js';
import PlaygroundScreen from './src/screens/PlaygroundScreen.js';
import ExploreScreen from './src/screens/ExploreScreen.js';
import GiftedChatScreen from './src/screens/GiftedChatScreen.js';
import AvaEndYellow from './src/screens/AvaEndYellow';
import EventScreen from './src/screens/EventScreen';
import BadgeScreen from './src/screens/BadgeScreen';
import JourneyScreen from './src/screens/JourneyScreen';
import AwardScreen from './src/screens/AwardScreen';
import AvaEndBlue from './src/screens/AvaEndBlue';



import Dimensions from 'Dimensions';
import SystemScreen from './src/screens/SystemScreen';
const {width, height} = Dimensions.get('window');

let MyTransition = (index, position) => {

    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0.8, 1, 1]),
    });

    return {
        opacity
    };
};
let TransitionConfiguration = () => {

    return {

        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index} = scene;
            return MyTransition(index, position);
        }
    }
};

const CommunicationStack = StackNavigator(
  { //Screens
    CommunicationDashboard: {
            screen: CommsDashboardScreen,
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
      CommunicationChat: {
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
      CommunicationGifterdChat: {
              screen: GiftedChatScreen,
      },
      CommunicationMap: {
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
      CommunicationCalendar: {
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
      },

      {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
      transitionConfig: TransitionConfiguration,
      },

    );





const TabStack =  TabNavigator({
  AvaYellow: { screen: AvaEndYellow },
  Map: {screen: MapScreen},
  Calendar: { screen: CalendarScreen},
  Events: { screen: EventScreen},
  Chat: { screen: ChatScreen},
  Connect: { screen: CommsDashboardScreen},
  Community: { screen: CommunityScreen },
  Home: { screen: HomeScreen},
  Explore: { screen: ExploreScreen },
  Dashboard: { screen: DashboardScreen },
  Badges: { screen: BadgeScreen},
  Journey: { screen: JourneyScreen},
  Award: {screen: AwardScreen},
  AvaBlue: { screen: AvaEndBlue }
  },

  {
    swipeEnabled:true,
  initialRouteName:'Home',
  navigationOptions: {
    tabBarVisible: false
   },
});



//https://stackoverflow.com/questions/43974979/react-native-react-navigation-transitions/43981835#43981835


const RootStack = StackNavigator(
  {
    Main: {
      screen: TabStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
    SystemModal: {
      screen: SystemScreen,
    },
    ShopModal: {
      screen: ShopScreen
    }


  },
  
  
  {

    transitionConfig: TransitionConfiguration,
    mode: 'modal',
    headerMode: 'none',
  }



);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
