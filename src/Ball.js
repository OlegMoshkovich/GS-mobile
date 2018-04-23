import React, {Component} from 'react';
import {View, Animated, PanResponder,Dimensions, Vibration, Text} from 'react-native';
import { Constants, Accelerometer } from 'expo';
import { LinearGradient } from "expo";
const {width, height} = Dimensions.get('window');

class Ball extends Component{

  constructor(props){

    const PATTERN = [1,2,10]
    super(props);
    var width = Dimensions.get('window').width*.4
    var radius=60;
    var position = new Animated.ValueXY({x:width, y:200});

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Vibration.vibrate();
        // Vibration.cancel();
        position.setValue({x:gesture.dx+width+this.state.accelerometerData.x*100, y:gesture.dy+200+this.state.accelerometerData.y*100});
        radius = 60 + gesture.dx;
      },
      onPanResponderRelease: () => {
        Vibration.vibrate(PATTERN, true);
        position.setValue({x:width, y:200});
         Vibration.cancel()
      }
    });
    this.state = { panResponder,position,radius, accelerometerData: { x: 0, y: 0, z: 0 } }
  }

    componentWillUnmount() {
      this._unsubscribeFromAccelerometer();
    }

    componentDidMount() {
      this._subscribeToAccelerometer();
    }

    _subscribeToAccelerometer = () => {
      this._acceleroMeterSubscription = Accelerometer.addListener(accelerometerData =>
        this.setState({ accelerometerData })
      );
    };

    _unsubscribeFromAccelerometer = () => {
      this._acceleroMeterSubscription && this._acceleroMeterSubscription.remove();
      this._acceleroMeterSubscription = null;
    };

  render() {

    return(
      <LinearGradient
       colors={['#56CCF2', '#56CCF2', 'white']}
       style={{ height: height, width:width}}>
    <View>
          <Animated.View style={this.state.position.getLayout()}
          {...this.state.panResponder.panHandlers}>
          <View style = {{
            height:60,
            width:60,
            borderRadius:60,
            borderWidth:2,
            borderColor:'lightgrey',
            backgroundColor:'lightgrey',
          }} />
          </Animated.View>


    </View>

    </LinearGradient>

    )
  }
}

const styles ={
  ball:{
    height:60,
    width:60,
    borderRadius:0,
    borderWidth:30,
    borderColor:'black'

  }
}

export default Ball;
