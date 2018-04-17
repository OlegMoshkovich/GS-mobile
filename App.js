import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle} from 'react-native';
import Ball from './src/Ball';
import Test from './src/Test';
import MapScreen from './src/MapScreen';
import Community from './src/Community';
import Deck from './src/Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const {width, height} = Dimensions.get('window');

const DATA = [
  { id: 1, title: 'Oyster-tecture', uri: 'https://99percentinvisible.org/app/uploads/2017/10/new-york-estuary.jpg' , text:'Standing on the sidewalk in Manhattan’s financial district in the shadows of glass skyscrapers, it is easy to forget how close you are to the water. But just a few blocks away, there are docks, and sea gulls, and ferry boats ready to take you island hopping.'},
  { id: 2, title: 'Women and Guns', uri: 'https://hips.hearstapps.com/mac.h-cdn.co/assets/16/06/1455152746-bottomgun.jpg?fill=320:259&resize=320:*',text:'Beneath the surface of the guns discussion in America—one traditionally dominated by men—theres a complex world of females and firearms. Here, in the following 10 stories, we shed light on what often goes unseen: how women feel about, live with, and die by guns.' },
  { id: 3, title: 'The Fear of Water in Flint', uri: 'https://res.cloudinary.com/versemedia/image/fetch/q_60,c_fill,f_auto,fl_lossy,dpr_2.0/https://verse-api-image-source-files.s3.amazonaws.com/users/c92a4fcbaefff57714cf443cc322229f84d1af52/i1v308nuyk4daer5.jpg',text:'The story of the poisoning of the water in Flint, Michigan, has become a dark fable about government negligence, woeful infrastructure, and the hubris of public officials. ' },
  { id: 4, title: 'A Brief History of Speedrunning', uri: 'https://readonlymemory.vg/wp-content/uploads/2017/02/s_2-1280x1280.jpg',text:'Of all the iD Software games from the early ’90s, I only hazily remember Wolfenstein 3D at best. My mother’s big beige block PC in her upstairs office had it installed.' },
  { id: 5, title: 'Summertime Instagram catch', uri: 'https://s20843.pcdn.co/wp-content/uploads/2013/07/photo-38.jpg',text:'Close your eyes and imagine the spoils of travel: different cultures, breathtaking vistas, exotic foods. You might picture zooming down a zip line in the Amazon, tasting a classic New York hot dog, ' },
];

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Community')}>
          <Image
            style={{height: 40 ,width: 40, right:20}}
            source={require('./assets/Community-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('./assets/Map-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  renderCard = (item) => {
    return(
      <Card
        key = {item.id}
        containerStyle ={{backgroundColor:"white",borderColor: "lightgrey",borderRadius: 7,height: 460,width:width-50,left:12}}>
        <Text style ={{marginBottom:19,color:"black",fontSize: 10,fontWeight:'normal' }}>Source, duration </Text>
        <TouchableOpacity
        onPress={() => {this.props.navigation.navigate('MyModal', {
              text: item.text,
              title: item.title,
              image_uri: item.uri,
            });
          }}>
        <Text style ={{marginBottom:24,color:"black",fontSize: 22,fontWeight:'bold' ,textDecorationLine:'underline'}}>{item.title} </Text>
        </TouchableOpacity>
        <Text style ={{marginBottom:17,color:"black"}}>{item.text}</Text>

          <Image
             style={{height: 225}}
             resizeMode="cover"
             source={{ uri:item.uri }}
           />

      </Card>
    )
  }
  render() {
    return (
      <LinearGradient
       colors={['#56CCF2', '#56CCF2', 'white']}
       style={{ height: height, width:width}}>
         <Deck
         data = {DATA}
         renderCard = {this.renderCard}
         renderNoMoreCards = {this.renderNoMoreCards}/>
         <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:0,marginLeft:30,bottom:200,right:20, alignItems:'flex-end'}}>
         <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
         >
          <Image
            style={{height: 150,width: 100, right:0, top:120}}
            source={require('./assets/Nav_Avatar_Face_Animations.png')}
          />
         </TouchableOpacity>



                   </View>

                   <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:30,marginLeft:20,height:10,top:600 , alignItems:'flex-start'}}>
                       <TouchableOpacity style={{ margin: 5}} >
                       <Image
                         style={{height: 30,width: 30, right:0, top:0}}
                         source={require('./assets/Explore-icon.png')}
                       />
                       </TouchableOpacity>

                       <TouchableOpacity style={{margin: 5}} >
                       <Image
                         style={{height: 30,width: 30, right:0, top:0}}
                         source={require('./assets/Community-icon.png')}
                       />
                       </TouchableOpacity>
                       <TouchableOpacity style={{margin: 5 }} >
                       <Image
                         style={{height: 30,width: 30, right:0, top:0}}
                         source={require('./assets/Map-icon.png')}
                       />
                       </TouchableOpacity>
                       <TouchableOpacity style={{margin: 5}} >
                       <Image
                         style={{height: 30,width: 30, right:0, top:0}}
                         source={require('./assets/Chat-icon.png')}
                       />
                       </TouchableOpacity>
                   </View>
      </LinearGradient>
    );
  }
}
class TestScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('./assets/Dashboard-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('./assets/Explore-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };
  render() {
    return (
      <View >
        <Ball/>
      </View>
    );
  }
}
class CommunityScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Test')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('./assets/Resume-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 40,width: 40,left:20}}
            source={require('./assets/Explore-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };


  render() {
    return (

        <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{ height: height, width:width}}>
         <Text style ={{color:"white",fontSize: 22,top:30,left:30,fontWeight:'bold', }}>Featured Stories</Text>
         <ScrollView>
             <ScrollView horizontal= {true} style={{marginTop:40}}>
             <Image
                style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                 source={require('./assets/Article_1.png')}
              />
              <Image
                 style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                  source={require('./assets/Article_1.png')}
               />
               <Image
                  style={{height: 428,width:291,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                   source={require('./assets/Article_1.png')}
                />

             </ScrollView >
             <Text style ={{color:"white",fontSize: 22,left:30,fontWeight:'bold',marginBottom:10 }}>Friends Stories</Text>

             <ScrollView horizontal= {true} style={{marginBottom:200}} >
             <Image
                style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('./assets/Article_2.png')}
              />

              <Image
                 style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                 source={require('./assets/Article_2.png')}
               />
               <Image
                  style={{height: 213,width:161,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                  source={require('./assets/Article_2.png')}
                />


             </ScrollView >

         </ScrollView>

      </LinearGradient>
    );
  }
}
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
class CalendarScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Image
            style={{height: 40,width: 40, right:20}}
            source={require('./assets/Map-icon.png')}
          />
        </TouchableOpacity>

      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{height: 0,width: 0,left:20}}
            source={require('./assets/Explore-icon.png')}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    return (

      <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{ height: height, width:width}}>
          <Calendar
            // Specify style for calendar container element. Default = {}
            style={{
              borderWidth: 1,
              top:50,
              borderColor: 'transparent',
              height: 350
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: 'lightgrey',
              selectedDayTextColor: '#ffffff',
              todayTextColor: 'orange',
              dayTextColor: 'white',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'white',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
          <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            style={{
              borderWidth: 1,
              top:50,
              borderColor: 'transparent',
              height: 350
            }}
            // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: 'orange',
              dayTextColor: 'white',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'orange',
              monthTextColor: 'white',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
      </LinearGradient>
    );
  }
}

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
  Test: {
      screen: TestScreen,
      navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            title: `#test`,
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
  },
  {
    initialRouteName: 'Calendar',
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

// export default TabNavigator(
//   {
//     Map: {screen:MapScreen},
//     // Home: { screen: RootStack },
//     explore: { screen: HomeScreen },
//     community: { screen: CommunityScreen },
//     // test: { screen: TestScreen },
//     testScreen: {screen:Test},
//
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//
//       },
//     }),
//
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'grey',
//
//       style: {
//         backgroundColor: 'blue'
//       },
//     },
//     animationEnabled: false,
//     swipeEnabled: false,
//   }
// );
