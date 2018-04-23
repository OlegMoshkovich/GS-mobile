import React from 'react';
import Dimensions from 'Dimensions';
import { Animated,Platform,StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Button, ActivityIndicator, Alert} from 'react-native';
import Ball from './Ball.js';
import {Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient ,Constants, MapView, Location, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons'
const RandomNumber = Math.floor(Math.random() * 100) + 1
const {width, height} = Dimensions.get('window');
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
const Images = [
  { uri: "..assets/Avatar_1.png" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
  const params = navigation.state.params || {};

  return {
          headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                style={{height: 40,width: 40, right:20}}
                source={require('../assets/Explore-icon.png')}
              />
            </TouchableOpacity>
          ),
          headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <Image
                style={{height: 40,width: 40,left:20}}
                source={require('../assets/Chat-icon.png')}
              />
            </TouchableOpacity>
          )
        };
      };

  state = {
    location: {coords: { latitude: 40.750859, longitude: -73.983324}},
    markers: [
      {
        coordinate: {
          latitude: 40.74,
          longitude: -74,
        },
        title: "Nicole Clark",
        description: "",
        image: require('../assets/Avatar_1.png'),
      },

      {
        coordinate: {
          latitude: 40.731,
          longitude: -73.985428,
        },
        title: "Emma Brownstein",
        description: "",
        image: require('../assets/Avatar_3.png'),
      },
      {
        coordinate: {
          latitude: 40.785091,
          longitude: -73.968285,
        },
        title: "Chloe Miller",
        description: "",
        image: require('../assets/Avatar_4.png'),
      },
      {
        coordinate: {
          latitude: 40.74,
          longitude: -74,
        },
        title: "Nicole Clark",
        description: "",
        image: require('../assets/Avatar_1.png'),
      },

      {
        coordinate: {
          latitude: 40.731,
          longitude: -73.985428,
        },
        title: "Emma Brownstein",
        description: "",
        image: require('../assets/Avatar_3.png'),
      },
      {
        coordinate: {
          latitude: 40.785091,
          longitude: -73.968285,
        },
        title: "Chloe Miller",
        description: "",
        image: require('../assets/Avatar_4.png'),
      },

    ],
    region: {
      latitude: 40.74,
      longitude: -74,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
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

  render() {
    const interpolations = this.state.markers.map((marker, index) => {

      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];

      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 1.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
          showsCompass={false}
        >

          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <Image
                    style={styles.marker}
                    source={marker.image}
                  />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH-30}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >

          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>

        <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:30,marginLeft:30,height:10, alignItems:'flex-start'}}>
               <TouchableOpacity onPress={this._onPressButton} >
               <Image
                 style={{height: 80,width: 80, right:25}}
                 source={require('../assets/Ava-Cap.png')}
               />
             </TouchableOpacity>
           </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: 260,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "transparent",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT/1.5,
    width: CARD_WIDTH/1.5,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
    color:'white',
    backgroundColor:'#56CCF2'
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 30,
    height: 30,

  },
  ring: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: "transparent",
    position: "absolute",
    borderWidth: 1,
    borderColor: "red",
  },
});

export default MapScreen;
