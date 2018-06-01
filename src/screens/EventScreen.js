import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient ,Constants, MapView, Location, Permissions } from 'expo';
import {Card, Button,Icon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import NavMenu from '../components/NavMenu';
import assetPaths from '../assetPaths';
import s from '../styles/eventscreen';

// map specific data
import mapStyle from '../styles/map/mapstyle.js';
import mapMarkers from '../../data/map/markers.js';
import mapRegion from '../../data/map/region.js';
import mapLocation from '../../data/map/location.js';

const CARD_WIDTH = 664 / 2;
const CARD_HEIGHT = 334 / 2;
const {width, height} = Dimensions.get('window');

class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activated  : true,
      location   : mapLocation,
      markers    : mapMarkers,
      region     : mapRegion,
    };
 }
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentDidMount() {
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
        style={{height: height, width: width}}
        showsCompass={false}>
          {this.state.markers.map((marker, index) => {
          const scaleStyle = {transform: [{scale: interpolations[index].scale}]};
          const opacityStyle = {opacity: interpolations[index].opacity};
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[s.markerWrap, opacityStyle]}>
                <Animated.View style={[s.ring, scaleStyle]} />
                <Image style={s.marker} source={marker.mapIcon} />
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
        ((index + 1) * CARD_WIDTH)];
    const scale = this.animation.interpolate({
        inputRange, outputRange: [1, 1.5, 1], extrapolate: "clamp"});
    const opacity = this.animation.interpolate({
        inputRange, outputRange: [0.35, 1, 0.35], extrapolate: "clamp",
    });
      return { scale, opacity };
    });

    return (
      <LinearGradient
        colors={['#F9C025', '#FFDB2B']}
        style={{ height: height, width:width}}>
        <TopMenu navigation={this.props.navigation} menuTitle="what" iconPath={assetPaths.topMenu.connectIcon} />
        <NavMenu highlighted={1} />
          <View style={[s.container, {height: 330}]}>
            { this.renderMapView(interpolations) }
            <Animated.ScrollView
              horizontal
              scrollEventThrottle={1}
              showsHorizontalScrollIndicator={false}
              snapToInterval={CARD_WIDTH-30}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {x: this.animation}}}], { useNativeDriver: true }
              )}
              style={s.scrollView}>{this.state.markers.map((marker, index) => (
                <View style={[s.card, {shadowOffset: { x: 2, y: -2 },
                  height: CARD_HEIGHT, width: CARD_WIDTH,}]} key={index}>
                  <Image source={marker.image} style={s.cardImage} resizeMode="cover" />
                </View>))}
            </Animated.ScrollView>
          </View>
          <AvaBottomMenu currentSection={'connect'} contextIcon={true} showTab={true} tabTitle={"All Events"} tabLeft={19} navigation={this.props.navigation}/>
        </LinearGradient>);
  }

}

export default EventScreen;
