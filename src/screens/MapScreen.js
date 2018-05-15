import React from 'react';
import Dimensions from 'Dimensions';
import { Animated,Platform,StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Button, ActivityIndicator, Alert} from 'react-native';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient ,Constants, MapView, Location, Permissions } from 'expo';
import Swiper from 'react-native-swiper';
import CalendarScreen from './CalendarScreen.js';
import ChatScreen from './ChatScreen.js';
import PlaygroundScreen from './PlaygroundScreen.js';

// global styles
import s from '../styles/mapscreen';

// map specific data
import mapStyle from '../styles/map/mapstyle.js';
import mapMarkers from '../../data/map/markers.js';
import mapRegion from '../../data/map/region.js';
import mapLocation from '../../data/map/location.js';

const RandomNumber = Math.floor(Math.random() * 100) + 1
const {width, height} = Dimensions.get('window');

const Images = [
  { uri: "../../assets/Avatar_1.png" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]
const CARD_HEIGHT = height / 4.5;
const CARD_WIDTH = CARD_HEIGHT - 42;

class MapScreen extends React.Component {

  state = {
    moveAnim     : new Animated.Value(0),
    activated    : true,
    fadeAnim     : new Animated.Value(0),
    blurRadius   : 0,
    location: mapLocation,
    markers: mapMarkers,
    region: mapRegion,
  };
  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }

    Animated.timing(
        this.state.fadeAnim,
        { toValue: this.state.activated ? 1: 0, duration: 500, }
      ).start();
      this.setState({activated : !this.state.activated});
  }
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {

      let index = Math.floor(value / CARD_WIDTH+3)  ; // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);

      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  _onPressButton=()=>{
    console.log("Button is pressed")
    this.setState({
    region: { latitude: 	this.state.location.coords.latitude, longitude: 	this.state.location.coords.longitude, latitudeDelta: 0.0222, longitudeDelta: 0.0221 }
    })
    }
  onRegionChangeComplete = (region) => {
    console.log(region);
    this.setState({region});
  }


  renderMapView(interpolations) {
    return(
      <MapView
        ref={map => this.map = map}
        initialRegion={this.state.region}
        style={s.container}
        showsCompass={false}
        >{this.state.markers.map((marker, index) => {
          const scaleStyle = {transform: [{scale: interpolations[index].scale}]};
          const opacityStyle = {opacity: interpolations[index].opacity};

          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[s.markerWrap, opacityStyle]}>
                <Animated.View style={[s.ring, scaleStyle]} />
                <Image style={s.marker} source={marker.image} />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
    );
  }

  renderNavigation() {
    return(
      <View style={[s.mapNavMenu, {bottom: this.state.activated ? -50: 30}]}>
        <TouchableOpacity style ={s.mapNavButton}  onPress={() => this.props.navigation.navigate('Explore')}>
          <Image style={s.mapNavImage} source={require('../../assets/Explore-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style ={s.mapNavButton} onPress={() => this.props.navigation.navigate('Map')}>
          <Image style={s.mapNavImage} source={require('../../assets/Map-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style ={s.mapNavButton} onPress={() => this.props.navigation.navigate('Community')}>
          <Image style={s.mapNavImage} source={require('../../assets/Community-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style ={s.mapNavButton} onPress={() => this.props.navigation.navigate('Calendar')} >
          <Image style={s.mapNavImage} source={require('../../assets/Calendar-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style ={s.mapNavButton} onPress={() => this.props.navigation.navigate('Shop')} >
          <Image style={s.mapNavImage} source={require('../../assets/Shop-icon.png')} />
        </TouchableOpacity>
      </View>
    );
  }

  renderAva() {
    return(
      <TouchableOpacity style = {[s.avaBottom,
        { bottom: this.state.activated ? -100:-50, width: this.state.activated ? 100: 100, height: this.state.activated ? 150: 150}]}
        onPress={this.animate} onLongPress={this.animate}>
          <Image style={s.avaImage} source={require('../../assets/Nav_Avatar_Face_Animations.png')} />
      </TouchableOpacity>);
  }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {

      const inputRange = [(index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange, outputRange: [1, 1.5, 1], extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange, outputRange: [0.35, 1, 0.35], extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
 
        <View style={s.viewStyle}>
          <LinearGradient
            colors={['#b98031', 'white', 'white']}
            style={{ height: height, width:width}}>
            <Text style ={s.menuText}>where</Text>


{/*


            adding what oleg just added in
            d2df50e84f94c49d610791c6a4e800c7d37e2bdb

            -- sort of breaks things with the way the map comes in -- TODO resolve this tomorrow




*/}
             <TouchableOpacity style ={{margin:5,position:'absolute', top:42, right:90}}
        onPress={() => this.props.navigation.navigate({
          routeName: 'CommunicationDashboard',
              params: {
                  transition: 'default'
              }
            }
        )}>
        <Image
          style={{height: 30,width: 30}}
          source={require('../../assets/Dashboard-icon.png')}
        />
    </TouchableOpacity>

    <TouchableOpacity  style ={{margin:5,position:'absolute',  top:42, right:50}}
      onPress={() => this.props.navigation.navigate({
        routeName: 'CommunicationChat',
            params: {
                transition: 'default'
            }
          }
      )}>
      <Image
        style={{height: 30,width: 30}}
        source={require('../../assets/Chat-icon.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity  style ={{margin:5,position:'absolute',  top:42, right:10}}
      onPress={() => this.props.navigation.navigate({
        routeName: 'CommunicationCalendar',
            params: {
                transition: 'default'
            }
          }
        )}>
        <Image
          style={{height: 30,width: 30}}
          source={require('../../assets/Calendar-icon.png')}
        />
    </TouchableOpacity>

              <View style={s.container}>
              { /* render map */
                this.renderMapView(interpolations)
              }
                <Animated.ScrollView
                  horizontal
                  scrollEventThrottle={1}
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={CARD_WIDTH-30}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: this.animation}}}
                    ], { useNativeDriver: true }
                  )}
                  style={s.scrollView}>{this.state.markers.map((marker, index) => (
                  <View style={[s.card, {shadowOffset: { x: 2, y: -2 },
                    height: CARD_HEIGHT/1.5,
                    width: CARD_WIDTH/1.5,}]} key={index}>
                    <Image source={marker.image} style={s.cardImage} resizeMode="cover" />
                    <View style={s.textContent}>
                      <Text numberOfLines={1} style={s.cardtitle}>{marker.title}</Text>
                      <Text numberOfLines={1} style={s.cardDescription}>{marker.description}</Text>
                    </View>
                  </View>
                  ))}
                </Animated.ScrollView>
              </View>
            {/* menu */
              this.renderNavigation()
            }
            {/* ava */
              this.renderAva()
            }
          </LinearGradient>
        </View>
    );
  }
}
export default MapScreen;
