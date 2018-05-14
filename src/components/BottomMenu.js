import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';

class BottomMenu extends React.Component {

  <View style={{ //Navigational Menu
    flex:1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: this.state.activated ? -50: 30,
    left:20
    }}>
      <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate('CommunicationMap')}>
      <Image
        style={{height: 35,width: 35}}
        source={require('../../assets/Nav/1_Communication.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Map')}>
      <Image
        style={{height: 35,width: 35}}
        source={require('../../assets/Nav/2_Lead.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Community')}>
      <Image
        style={{height: 35,width: 35}}
        source={require('../../assets/Nav/3_System.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Calendar')} >
      <Image
        style={{height: 35,width: 35}}
        source={require('../../assets/Nav/4_Explore.png')}
      />
      </TouchableOpacity>
      <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Shop')} >
      <Image
        style={{height: 35,width: 35}}
        source={require('../../assets/5_Dashboard.png')}
      />
      </TouchableOpacity>
  </View>

  <TouchableOpacity //Ava
        style = {{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: this.state.activated ? -100:-50,
        right: 20,
        width: this.state.activated ? 100: 100,
        height: this.state.activated ? 150: 150,
        }}
        onPress={this.animate} onLongPress={this.animate}>
        <Image
          style={{height:100,width:100,}}
          source={require('../../assets/Nav_Avatar_Face_Animations.png')}
        />
  </TouchableOpacity>
}

export
