import React from 'react';
import Dimensions from 'Dimensions';
import { Platform,StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Button, ActivityIndicator} from 'react-native';
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

class MapScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
        headerRight: (
          <Button
            onPress={() => navigation.navigate('Home')}
            title=">"
            color = 'lightgrey'
            backgroundColor='#56CCF2'
          />
        ),
        headerLeft: (
          <Button
            onPress={() => navigation.navigate('Community')}
            title=""
            color = 'lightgrey'
            backgroundColor='#56CCF2'
          />
        )
      };
    };


    state = {
            mapLoaded: false,
            region: { latitude: 45.524698, longitude: -122.6655507, latitudeDelta: 0.0222, longitudeDelta: 0.0221 },
            locationResult: null,
            location: {coords: { latitude: 40.750859, longitude: -73.983324}},
            errorMessage: null,
            markers: [
    {
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: "Best Place",
      description: "This is the best place in Portland",

    },
    {
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Second Best Place",
      description: "This is the second best place in Portland",

    },
    {
      coordinate: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Third Best Place",
      description: "This is the third best place in Portland",

    },
    {
      coordinate: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Fourth Best Place",
      description: "This is the fourth best place in Portland",

    },
  ],
          };
    componentDidMount() {
      this.setState({mapLoaded: true});
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
        errorMessage: 'does not work',
      });
      } else {
        this._getLocationAsync();
      }
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
      console.log(this.state.location.coords.latitude);
      console.log(this.state.location.coords.longitude);


      let text = 'Waiting..';
      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
      }

      return (
        <LinearGradient
         colors={['#56CCF2', '#56CCF2', 'white']}
         style={styles.container}>

        <View style={styles.container}>
          <MapView
            style={{ alignSelf: 'stretch', height: height }}
            region={this.state.region}
            onRegionChangeComplete={this.onRegionChangeComplete}

            customMapStyle={mapStyle}
          >

          {this.state.markers.map((marker, index) => {
           return (
             <MapView.Marker key={index} coordinate={marker.coordinate}>

             </MapView.Marker>
           );
         })}
          <Marker coordinate ={{ latitude: 	this.state.location.coords.latitude, longitude: 	this.state.location.coords.longitude}} />
          </MapView>
          <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:50,marginLeft:30,height:10, alignItems:'flex-start'}}>
              <TouchableOpacity style={{width: 27, height: 27,borderRadius:100, margin: 5, backgroundColor: 'dimgrey'}} />
              <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
              <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
              <TouchableOpacity style={{width: 27, height: 27, borderRadius:100,margin: 5, backgroundColor: 'dimgrey'}} />
          </View>
          <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:50,marginLeft:30,bottom:50,right:40, alignItems:'flex-end'}}>
              <TouchableOpacity style={{width: 40, height: 40,borderRadius:100, margin: 5, backgroundColor: 'dimgrey'}} onPress={this._onPressButton} />
          </View>
        </View>
          </LinearGradient>

      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});



export default MapScreen;
