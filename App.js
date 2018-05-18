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
import ArticleModalScreen from './src/screens/ArticleModalScreen';
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

// adding fonts
import { Font } from 'expo';


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

/*
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

*/






const transitionConfig = () => {


  return {

      transitionSpec: {
        duration: 200,
        //easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true


      },


      screenInterpolator: sceneProps => {

        const {layout, position, scene} = sceneProps;


        const params = scene.route.params || {}


        
        //const transition = params.transition;




        const thisSceneIndex = scene.index

        console.log("thisSceneIndex", scene.index);

        const width = layout.initWidth

        let yVariable = height;


        if (params.hasOwnProperty("transition")) {
          if (params.transition == 'systemTransition') {
           // yVariable *= -1;

          }
        }



        let translateY = position.interpolate({

              inputRange: [thisSceneIndex-1,thisSceneIndex],




              outputRange: [ yVariable, 0],
    
            }) 
          
          
/*
        console.log("translateY", translateY);
        console.log("params", params);

        if (params.hasOwnProperty('transition')) {
          if (params.transition == 'shopTransition') {
            translateY = position.interpolate({

              inputRange: [0,1],
              outputRange: [0, height],
    
            })
          }

        }


        */



        


        return {




          transform: [ {translateY}]
        }



      }


  }


}
  

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      swiping: true,

    }
  }

  componentDidMount() {

    /*


    topMenu font is: trefoil sans black
otherwise for section titles (new articles, featured stories, whats new in shop): trefoil sans semibold
explore section article font: trefoil sans light
chat font: trefoil slab light


*/
    Font.loadAsync({
      'trefoil-sans-black': require('./assets/fonts/TrefoilSans-Black.otf'),
      'trefoil-sans-semibold': require('./assets/fonts/TrefoilSans-SemiBold.otf'),
      'trefoil-sans-light':  require('./assets/fonts/TrefoilSans-Light.otf'),
      'trefoil-sans-regular': require('./assets/fonts/TrefoilSans-Regular.otf'),
    });
  }


  render() {




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
        swipeEnabled:this.state.swiping,

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
    
        SystemModal: {
          screen: SystemScreen,
        },
    
    
        ShopModal: {
          screen: ShopScreen
        },
        
        ArticleModal: {
          screen: ArticleModalScreen,
        },
        
      },
      
      
      {
    
        transitionConfig,
        mode: 'modal',
        headerMode: 'none',
      }
    
    
    
    );

    

    TabStack.navigationOptions = ({ navigation }) => {
      let { routeName } = navigation.state.routes[navigation.state.index];
      if (routeName === 'Explore') {
        console.log("explore route");
    /*    this.setState({
          swiping: false,
        })
*/
        
      }
   }



    return (
      



        <RootStack />
  
  
    );
  }
}


export default App;
