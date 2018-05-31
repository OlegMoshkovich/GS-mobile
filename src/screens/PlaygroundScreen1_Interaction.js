
import React, { Component } from 'react';
import { Alert, StyleSheet, View, PanResponder, Animated,TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DraggableBox } from '../TestComponents/draggable';
import { LoremIpsum } from '../TestComponents/common';
import { CardTest } from '../components/CardTest';
import { GiftedChat } from 'react-native-gifted-chat'

var CIRCLE_SIZE = 80;

class PlaygroundScreen extends React.Component{


  constructor(props) {
     super(props);

     this.state = {
  messages: [],
}

     this.state = {
       animation: new Animated.Value(1)

     };
   }

   startAnimation = () =>{
     Animated.timing(this.state.animation, {
       toValue:2,
       duration:1000
     }).start(()=>{
      this.state.animation.setValue(1)
     });

   }



  render() {

    const boxInterpolation =
    this.state.animation.interpolate({
      inputRange:[1,2],
      outputRange:["lightgrey","red"]
    });

    const boxlocation =
    this.state.animation.interpolate({
      inputRange:[1,2],
      outputRange:[100,300]
    });

    const rotateInterpolate =
    this.state.animation.interpolate({
      inputRange:[1,360],
      outputRange:['0deg','360deg']
    });

    const boxAnimatedStyle = {
      backgroundColor:boxInterpolation
    }

    const animatedStyles = {
      transform:[
        {
        translateY:boxlocation,
      },
      {
        scale:this.state.animation
      },
      {
        rotate:rotateInterpolate
      }
      ]
    };

    return (
      <ScrollView
        waitFor={['dragbox', 'image_pinch', 'image_rotation', 'image_tilt']}
        style={styles.scrollView}>




  <DraggableBox />
        <CardTest />
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress = {this.startAnimation} >
          <Animated.View style={[styles.box,animatedStyles,boxAnimatedStyle]} />
          </TouchableWithoutFeedback>
        </View>



      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    width:150,
    height:150,
    backgroundColor:'tomato'
  }
});




export default PlaygroundScreen;
