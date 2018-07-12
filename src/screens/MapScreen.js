import React from 'react';
import Dimensions from 'Dimensions';
import {Platform,StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Button, ActivityIndicator, Alert, Animated} from 'react-native';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient ,Constants, MapView, Location, Permissions } from 'expo';
import Swiper from 'react-native-swiper';
import CalendarScreen from './CalendarScreen.js';
import ChatScreen from './ChatScreen.js';
import PlaygroundScreen from './PlaygroundScreen.js';


import assetPaths from '../assetPaths';


import {GiftedChat } from 'react-native-gifted-chat';
import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
const color = '#FFF2AD';



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
    activated    : true,
    location: mapLocation,
    markers: mapMarkers,
    region: mapRegion,
  };

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
          colors={[color, color]}
            style={{ height: height, width:width}}>

            <TopMenu navigation={this.props.navigation} menuTitle="where" iconPath={assetPaths.topMenu.connectIcon} />

            <View style={{
              flex:6
            }}>
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

            <AvaBottomMenu   currentSection={'connect'} navigation={this.props.navigation}/>


          </LinearGradient>
        </View>
    );
  }
}
export default MapScreen;
