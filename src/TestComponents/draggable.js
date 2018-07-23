// likely will need to become native code for better graphics / physics on device -@vomc

import React, { Component } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { PanGestureHandler, State} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from './config';

export class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._onGestureEvent = Animated.event(
      [{nativeEvent: {
          translationX: this._translateX,
          translationY: this._translateY,}},
      ], { useNativeDriver: USE_NATIVE_DRIVER }
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
          style={[ styles.box,
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            },
          ]}>
          <Text style={styles.text}>Outdoor</Text>
        </Animated.View>
      </PanGestureHandler>);
  }
}

const styles = StyleSheet.create({
  box: {
    bottom:40,
    right:80,
    width: 150,
    height: 150,
    borderRadius:150,
    alignSelf: 'center',
    backgroundColor: 'white',
    opacity:.4,
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
