import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle} from 'react-native';
import Ball from './src/Ball';
import Community from './src/Community';
import Deck from './src/Deck';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo"
import {Card, Button,Icon} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'

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
        <Button
          onPress={() => navigation.navigate('Community')}
          title=">"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Community')}
          title=""
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      )
    };
  };

  renderCard = (item) => {
    return(
      <Card
        key = {item.id}
        containerStyle ={{backgroundColor:"white",borderColor: "lightgrey",borderRadius: 7,height: 460,width:width-50,left:12}}>
        <Text style ={{marginBottom:19,color:"black",fontSize: 10,fontWeight:'normal' }}>Source, duration </Text>
        <Text style ={{marginBottom:24,color:"black",fontSize: 22,fontWeight:'bold' }}>{item.title} </Text>
        <Text style ={{marginBottom:17,color:"black"}}>{item.text}</Text>
        <TouchableOpacity
        onPress={() => {this.props.navigation.navigate('MyModal', {
              text: item.text,
              title: item.title,
              image_uri: item.uri,

            });
          }}>
          <Image
             style={{height: 225}}
             resizeMode="cover"
             source={{ uri:item.uri }}
           />
        </TouchableOpacity>
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


      </LinearGradient>
    );
  }
}
class TestScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Community')}
          title=""
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Community')}
          title="<"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
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
        <Button
          onPress={() => navigation.navigate('Test')}
          title=">"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Home')}
          title="<"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
    )
    };
  };


  render() {
    return (

        <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={{ height: height, width:width}}>
         <ScrollView>
             <ScrollView horizontal= {true} style={{marginTop:40}}>
             <Image
                style={{height: 470,width:240,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={{ uri:'https://lakeimagesweb.artic.edu/iiif/2/0e00606e-ba41-f556-51b7-656a593ce8bc/full/!800,800/0/default.jpg' }}
              />
               <Image
                  style={{height: 470,width:240,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                  source={{ uri:'https://lakeimagesweb.artic.edu/iiif/2/0e00606e-ba41-f556-51b7-656a593ce8bc/full/!800,800/0/default.jpg' }}
                />
                <Image
                   style={{height: 470,width:240,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                   resizeMode="cover"
                   source={{ uri:'https://lakeimagesweb.artic.edu/iiif/2/0e00606e-ba41-f556-51b7-656a593ce8bc/full/!800,800/0/default.jpg' }}
                 />

             </ScrollView >

             <ScrollView horizontal= {true} style={{marginBottom:200}} >
             <Image
                style={{height: 180,width:140,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={{ uri:'https://use2-uploads7.wikiart.org/images/joan-miro/maternity.jpg' }}
              />
              <Image
                 style={{height: 180,width:140,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                 resizeMode="cover"
                 source={{ uri:'https://use2-uploads7.wikiart.org/images/joan-miro/maternity.jpg' }}
               />
               <Image
                  style={{height: 180,width:140,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                  resizeMode="cover"
                  source={{ uri:'https://use2-uploads7.wikiart.org/images/joan-miro/maternity.jpg' }}
                />
                <Image
                   style={{height: 180,width:140,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                   resizeMode="cover"
                   source={{ uri:'https://use2-uploads7.wikiart.org/images/joan-miro/maternity.jpg' }}
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
         <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:30,marginLeft:30,height:100, alignItems:'center'}}>
             <TouchableOpacity style={{width: 27, height: 27,borderRadius:100, margin: 5, backgroundColor: 'dimgrey'}} />
             <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
             <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
             <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
         </View>


      <TouchableOpacity
         style={{
             borderWidth:1,
             borderColor:'rgba(0,0,0,0.2)',
             marginTop:65,
             marginBottom:10,
             position:'relative',
             left:332,
             width:27,
             height:27,
             backgroundColor:'black',
             borderRadius:100,
           }}
           onPress={() => this.props.navigation.goBack()}
       />
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

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
            gesturesEnabled: true,
            title: `#explore`,
            headerTintColor: 'lightgrey',
            headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent' },
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
            headerTintColor: 'lightgrey',
            headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent' },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
          }),
    },
    Community: {
        screen: CommunityScreen,
        navigationOptions: ({ navigation }) => ({
              gesturesEnabled: true,
              title: `#community`,
              headerTintColor: 'lightgrey',
              headerStyle: { backgroundColor: '#56CCF2', borderWidth: 0, borderBottomColor: 'transparent' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30
              },
            }),
      },
  },
  {
    initialRouteName: 'Home',
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



export default TabNavigator(
  {
    Home: { screen: RootStack },
    explore: { screen: HomeScreen },
    community: { screen: CommunityScreen },
    test: { screen: TestScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

      },
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
