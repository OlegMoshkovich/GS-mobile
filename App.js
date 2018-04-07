import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight} from 'react-native';
import Ball from './src/Ball';
import Deck from './src/Deck';
import {StackNavigator} from 'react-navigation';
import { LinearGradient } from "expo"
import {Card, Button} from 'react-native-elements';
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
          onPress={() => navigation.navigate('Ball')}
          title="ball"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Ball')}
          title="ball"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
    };
  };

  renderCard = (item) => {
    return(

      <Card
        key = {item.id}
        containerStyle ={{backgroundColor:"white",borderColor: "lightgrey",borderRadius: 7,height: 460,width:width-50}}>

        <Text style ={{marginBottom:19,color:"black",fontSize: 10,fontWeight:'normal' }}>Source, duration </Text>
        <Text style ={{marginBottom:24,color:"black",fontSize: 22,fontWeight:'bold' }}>{item.title} </Text>
        <Text style ={{marginBottom:17,color:"black"}}>{item.text}</Text>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyModal')}>
          <Image
             style={{height: 225}}
             resizeMode="cover"
             source={{ uri:item.uri }}
           />
        </TouchableOpacity>



      </Card>

    )
  }

  renderNoMoreCards(){
    return(
      <Card
        containerStyle ={{backgroundColor:"white",borderColor: "lightgrey",borderRadius: 7,height: 460,width:360}}>
        <Text style ={{marginBottom:19,color:"black",fontSize: 10,fontWeight:'normal' }}>--- </Text>
        <Text style ={{marginBottom:24,color:"black",fontSize: 22,fontWeight:'bold' }}>The End </Text>
        <Text style ={{marginBottom:17,color:"black"}}>The ends</Text>
        <Image
           style={{height: 225}}
           resizeMode="cover"
           source={{ uri:'https://news.artnet.com/app/news-upload/2014/07/07-17-14-malevich-tate-modern-1.jpg' }}
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


      </LinearGradient>
    );
  }
}

class BallScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Ball')}
          title="ball"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Home')}
          title="home"
          color = 'lightgrey'
          backgroundColor='#56CCF2'
        />
      ),
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

class ModalScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Card
          containerStyle ={{backgroundColor:"transparent",borderColor: "transparent",borderRadius: 7,height: 460,width:360}}>
          <Image
             style={{height: 225}}
             resizeMode="cover"
             source={{ uri:'https://news.artnet.com/app/news-upload/2014/07/07-17-14-malevich-tate-modern-1.jpg' }}
          />
          <Text style ={{marginTop:24,marginBottom:24,color:"black",fontSize: 22,fontWeight:'bold' }}>Article text...</Text>
        </Card>

        <TouchableOpacity
           style={{
               borderWidth:1,
               borderColor:'rgba(0,0,0,0.2)',
               marginTop:24,
               alignItems:'center',
               justifyContent:'center',
               width:50,
               height:50,
               backgroundColor:'black',
               borderRadius:100,
             }}
             onPress={() => this.props.navigation.goBack()}
         />

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
  Ball: {
      screen: BallScreen,
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
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
