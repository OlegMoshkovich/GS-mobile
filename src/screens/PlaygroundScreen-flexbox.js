
import React, { Component } from 'react';
import { Alert, StyleSheet, View,Image, PanResponder, Animated,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DraggableBox } from '../TestComponents/draggable';
import { LoremIpsum } from '../TestComponents/common';
import { CardTest } from '../components/CardTest';
import { GiftedChat } from 'react-native-gifted-chat'
import assetPaths from '../assetPaths';

var CIRCLE_SIZE = 80;

class PlaygroundScreen extends React.Component{

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }



  render() {
   const {flexDirection, alignItems, justifyContent} = this.state
   const layoutStyle = {flexDirection, justifyContent, alignItems}

   const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
   const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'


    return (




<View style={{
  flex:1,
  top:0,
  zIndex:12
}}>
      <View style={{
        flex:6,
      }}>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.account} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.users} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.notification} style={styles.image}/>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.avatar} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.language} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.permissions} style={styles.image}/>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.orders} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.security} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.updates} style={styles.image}/>
       </TouchableOpacity>
      </View>

      <View style={styles.row}>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.about} style={styles.image}/>

       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.info} style={styles.image}/>
       </TouchableOpacity>
       <TouchableOpacity>
          <Image source={assetPaths.systemScreen.icons.help} style={styles.image}/>
       </TouchableOpacity>
      </View>


      <View style={{
        flex:1,
      }}>

      </View>


</View>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row:{
    flex:1 ,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    width:46,
    height:46,
    borderRadius:46,
    backgroundColor: 'lightgrey',
    margin: 5,
  },
  image: {
    width:46,
    height:46,
  },

})




export default PlaygroundScreen;
