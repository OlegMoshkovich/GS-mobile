import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';

import s from '../styles/calendarscreen.js';



class AvaBottomMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activated: true,
            moveAnim     : new Animated.Value(0),
            fadeAnim : new Animated.Value(0),

        };

    }


  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }
 
    Animated.timing(
        this.state.fadeAnim,
        { toValue: this.state.activated ? 1: 0, duration: 1000, }
      ).start();
      this.setState({activated : !this.state.activated});
   }

   

    render() {
        return (

            <View>
 <TouchableOpacity //Ava
           style = {[

            s.avaMenu,
           
           {
            bottom: this.state.activated ? -100:-50,
            width: this.state.activated ? 100: 100,
            height: this.state.activated ? 150: 150,
           }]}
           onPress={this.animate} onLongPress={this.animate}>
           <Image
             style={s.avaImage}
             source={require('../../assets/Nav_Avatar_Face_Animations.png')}
           />
     </TouchableOpacity>

            <View style={[s.navMenu, { bottom: this.state.activated ? -50: 30}]}>
        
         
         <TouchableOpacity style ={s.navButton}  onPress={() => this.props.navigation.navigate('Explore')}>
         <Image
           style={{height: 35,width: 35}}
           source={require('../../assets/Explore-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={s.navButton} onPress={() => this.props.navigation.navigate('Map')}>
         <Image
           style={s.navImage}
           source={require('../../assets/Map-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={s.navButton} onPress={() => this.props.navigation.navigate('Community')}>
         <Image
           style={s.navImage}
           source={require('../../assets/Community-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={s.navButton} onPress={() => this.props.navigation.navigate('Calendar')} >
         <Image
           style={s.navImage}
           source={require('../../assets/Calendar-icon.png')}
         />
         </TouchableOpacity>
         <TouchableOpacity style ={s.navButton} onPress={() => this.props.navigation.navigate('Shop')} >
         <Image
           style={s.navImage}
           source={require('../../assets/Shop-icon.png')}
         />
         </TouchableOpacity>
     </View>
     </View>
        );
    }

}


export default AvaBottomMenu;