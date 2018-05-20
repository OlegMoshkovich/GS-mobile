
import React, { Component } from 'react';
import { Animated, StyleSheet, View,Text } from 'react-native';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from './config';
import { LoremIpsum } from './common';

export class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._translateX,
            translationY: this._translateY,
          },
        },
      ],
      { useNativeDriver: USE_NATIVE_DRIVER }
    );
  }
  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.x += event.nativeEvent.translationX;
      this._lastOffset.y += event.nativeEvent.translationY;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  };
  render() {
    return (
      <PanGestureHandler
        {...this.props}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}
        id="dragbox">
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            },
          ]}
        >
        <Text style={styles.text}>Outdoor</Text>
        </Animated.View>

      </PanGestureHandler>
    );
  }
}

export default class Example extends Component {
  _onClick = () => {
    Alert.alert("I'm so touched");
  };
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <DraggableBox minDist={30} />


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {

    flex: 1,
    position:'absolute',
    top:100
  },
  box: {
    bottom:200,
    width: 150,
    height: 150,
    borderRadius:150,
    alignSelf: 'center',
    backgroundColor: 'white',
    opacity:.4,
    margin: 10,
    zIndex: 0,
  },
  text: {
    borderRadius:150,
    alignSelf: 'center',
    top:50,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    zIndex: 0,
  },
});
