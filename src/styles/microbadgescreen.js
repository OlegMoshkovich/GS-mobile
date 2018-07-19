'use strict'
import React from 'react';
import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
var styles = StyleSheet.create({

    container: {
        top:0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    profileContainer: {
      position:'absolute',
      top:101,
      left:50,
      width:width-100,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },

    microbadgeIcon:{
      flex: 1,
      top:20,
      height:240,
      width:240,
      alignSelf:'center'
    },

    featuredStoriesScrollView: {
      marginTop: 180,
    },

    featuredStoriesTitle: {
        color: "#51258A",
        top:150,
        fontSize: 18,
        left: 16,
        fontFamily: 'trefoil-sans-semibold'
    },

    featuredStoryImage: {
        height: 198,
        width: 148,
        marginBottom: 10,
        left: 10,
        marginRight: 8,
    },
});

export default styles;
