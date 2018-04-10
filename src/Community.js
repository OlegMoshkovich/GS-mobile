import React, {Component} from 'react';
import {View, Animated, PanResponder,Dimensions, Vibration, Text, Button, LayoutAnimation,UIManager} from 'react-native';
import { Constants, Accelerometer } from 'expo';
import { withNavigation } from 'react-navigation'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = .25*SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 100;

class Community extends Component{

  static defaultProps ={
    onSwipeRight:()=>{},
    onSwipeLeft:()=>{}
  }

  constructor(props){
    super(props);
    const position = new Animated.ValueXY({x:0, y:0});
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          if (gesture.dx>0){
          position.setValue({x:gesture.dx, y:0})} },
        onPanResponderRelease: (event,gesture) => {
            if (gesture.dx>SWIPE_THRESHOLD){
              this.forceSwipe('right');
            }else if(gesture.dx<-SWIPE_THRESHOLD){
              // this.forceSwipe('left');
            }else{
              this.resetPosition();
            };

        }
    });

    this.state= {panResponder, position, index:0};

  };

  componentWillUpdate(){
    // UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.linear();
  };


  forceSwipe(direction){
    const x = direction === 'right' ? SCREEN_WIDTH-100 : -SCREEN_WIDTH+100;
    Animated.timing(this.state.position,{
      toValue: { x:x, y:0 },
      duration:SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }



  onSwipeComplete(direction){
    const { onSwipeLeft,onSwipeRight,data } = this.props;
    const item = data[this.state.index];
    direction =='right' ? onSwipeRight(item) : onSwipeLeft(item)
    this.state.position.setValue({x:0,y:0});
    this.setState({index: this.state.index+1});
  }

  resetState(){
    this.setState({index: 0});
  }


  resetPosition(){
    Animated.spring(this.state.position,{
      toValue:{x:0,y:0}
    }).start();
  }

  getCardStyle(){
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange:[-SCREEN_WIDTH*8,0,SCREEN_WIDTH*8],
      outputRange:['-20deg','0deg','20deg']
    })

    return {
      ...position.getLayout(),
      transform:[{rotate:rotate}]
    };
  };

  renderCards(){
    if (this.state.index >= this.props.data.length) {


    this.resetState();

    }

    return this.props.data.map((item,i) =>{
      if (i<this.state.index){return null;}


      if(i===this.state.index){

        return(
          <Animated.View
           key = {item.id}
           style = {[this.getCardStyle(),styles.cardStyle]}
           {...this.state.panResponder.panHandlers}>

          {this.props.renderCard(item)}
          </Animated.View>

        )
      }

         return  (
           <Animated.View
           key= {item.id}
           style = {[styles.cardStyle,{left:-3*(i-this.state.index)}]}>
          { this.props.renderCard(item)}


           </Animated.View>
         );
    }).reverse();
  }

  render() {
    return (
    <View>
    {this.renderCards()}
    </View>
  )


  }
}

const styles = {
  cardStyle: {
    position:'absolute',
    top:100,



  }
};



export default withNavigation(Community);
