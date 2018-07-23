// likely will need to become native code for better graphics / physics on device -@vomc

import React, { Component } from 'react';
import { Animated, StyleSheet,Text } from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from './config';

export class DraggableBox2 extends Component {
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._onGestureEvent = Animated.event(
      [{ nativeEvent: {
          translationX: this._translateX,
          translationY: this._translateY,},
        }],{ useNativeDriver: USE_NATIVE_DRIVER }
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
        id="dragbox2">
        <Animated.View
          style={[ styles.box,
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY }]
            },
          ]}
        >
          <Text style={styles.text}>Volunteer</Text>
        </Animated.View>
      </PanGestureHandler>);
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    position:'absolute',
  },

  box: {
    bottom:70,
    right:60,
    width: 90,
    height: 90,
    borderRadius: 90,
    alignSelf: 'center',
    backgroundColor: 'white',
    opacity:.4,
    zIndex: 0,
  },

  text: {
    borderRadius:150,
    alignSelf: 'center',
    top:25,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
    zIndex: 0,
  },
});
