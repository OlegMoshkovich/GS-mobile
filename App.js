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
import StoryModalScreen from './src/screens/StoryModalScreen';
import PostModalScreen from './src/screens/PostModalScreen';

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


      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      })

      return { opacity }


          } else {
            let translateY = position.interpolate({
              inputRange: [thisSceneIndex-1,thisSceneIndex],
              outputRange: [ yVariable, 0],
            })


        return {


          transform: [ {translateY}]
        }


          }
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

    const ConnectStack = StackNavigator(
      { //Screens
      ConnectDashboard: {
              screen: CommsDashboardScreen,
      },
      Chat: {
              screen: ChatScreen,
      },
      Map: {
        screen: MapScreen,
      },
      Calendar: {
          screen: CalendarScreen,
      },
      Events: {
          screen: EventScreen,
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

    const EducationStack = StackNavigator(
      { //Screens
      Dashboard: {
              screen: DashboardScreen,
      },
      Badges: {
              screen: BadgeScreen,
      },
      Journey: {
              screen: JourneyScreen,
      },
      Award: {
              screen: AwardScreen,
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
      // AvaYellow: { screen: AvaEndYellow },
      // Calendar: { screen: CalendarScreen},
      // Events: { screen: EventScreen},
      // Chat: { screen: ChatScreen},
      // Connect: { screen: CommsDashboardScreen},
      Connect:{screen: ConnectStack},
      Community: { screen: CommunityScreen },
      Home: { screen: HomeScreen},
      Explore: { screen: ExploreScreen },
      Dashboard: { screen: EducationStack },
      // Badges: { screen: BadgeScreen},
      // Journey: { screen: JourneyScreen},
      // Award: {screen: AwardScreen},
      // AvaBlue: { screen: AvaEndBlue },
      // Playground: { screen: PlaygroundScreen },
      },

      {
        swipeEnabled:this.state.swiping,

        initialRouteName:'Connect',

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
        StoryModal: {
          screen: StoryModalScreen,

        },
        PostModal: {
          screen: PostModalScreen,

        }
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
