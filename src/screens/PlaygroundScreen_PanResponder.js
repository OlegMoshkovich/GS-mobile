// @OlegMoshkovich - should we delete?

import React, { Component } from 'react';
import {  StatusBar,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
  Dimensions, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DraggableBox } from '../TestComponents/draggable';
import { LoremIpsum } from '../TestComponents/common';
import { CardTest } from '../components/CardTest';
import { GiftedChat } from 'react-native-gifted-chat'
const { width, height } = Dimensions.get("window");

const getDirectionAndColor = ({ moveX, moveY, dx, dy}) => {
  const draggedDown = dy > 30;
  const draggedUp = dy < -30;
  const draggedLeft = dx < -10;
  const draggedRight = dx > 10;
  const isRed = moveY < 90 && moveY > 40 && moveX > 0 && moveX < width;
  const isBlue = moveY > (height - 50) && moveX > 0 && moveX < width;
  let dragDirection = '';

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += 'dragged down '
    if (draggedUp) dragDirection +=  'dragged up ';
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += 'dragged left '
    if (draggedRight) dragDirection +=  'dragged right ';
  }

  if (isRed) return `red ${dragDirection}`
  if (isBlue) return `blue ${dragDirection}`
  if (dragDirection) return dragDirection;
}

class PlaygroundScreen_PanResponder extends React.Component{


  state = {
    zone: "Still Touchable",
  };
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => !!getDirectionAndColor(gestureState),
      onPanResponderMove: (evt, gestureState) => {
        const drag = getDirectionAndColor(gestureState);
        console.log('gesture state:'+gestureState.dx)
        this.setState({
          zone: drag,
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
    });
  }

  onPress = () => {
    this.setState({
      zone: "I got touched with a parent pan responder",
    });
  };

  render() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <StatusBar hidden />
        <View style={styles.zone1} />
        <View style={styles.center}>
          <TouchableOpacity onPress={this.onPress}>
            <Text>{this.state.zone}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.zone2} />
      </View>
    );
  }
}

 const styles = StyleSheet.create({
   container: {
     flex: 1
   },
   center: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center"
   },
   zone1: {
     top: 40,
     left: 0,
     right: 0,
     height: 50,
     position: 'absolute',
     backgroundColor: "red"
   },
   zone2: {
     left: 0,
     right: 0,
     bottom: 0,
     height: 50,
     position: 'absolute',
     backgroundColor: "blue"
   }
 });
export default PlaygroundScreen_PanResponder;
