
import React, { Component } from 'react';
import { Alert, StyleSheet, View, PanResponder, Animated,TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DraggableBox } from '../TestComponents/draggable';
import { LoremIpsum } from '../TestComponents/common';
import { CardTest } from '../components/CardTest';
import { GiftedChat } from 'react-native-gifted-chat'

var CIRCLE_SIZE = 80;

class PlaygroundScreen extends React.Component{

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  // constructor(props) {

     // super(props);
     //
     // this.state = {
     //    messages: [],
     //  }
     //
     // this.state = {
     //   animation: new Animated.Value(1)
     //   };
     // }

   // startAnimation = () =>{
   //   Animated.timing(this.state.animation, {
   //     toValue:2,
   //     duration:1000
   //   }).start(()=>{
   //    this.state.animation.setValue(1)
   //   });
 // }



  render() {
   const {flexDirection, alignItems, justifyContent} = this.state
   const layoutStyle = {flexDirection, justifyContent, alignItems}

   const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
   const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'


    return (

<View style={{
  flex:1,
}}>
      <View style={{
        flex:6,
      }}>

      </View>

      <View style={{
        flex:6,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'

      }}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />

      </View>
      <View style={{
        flex:3 ,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'

      }}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />

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
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {

    width:30,
    height:30,
    borderRadius:30,
    backgroundColor: 'lightgrey',
    margin: 5,
  },
})




export default PlaygroundScreen;
