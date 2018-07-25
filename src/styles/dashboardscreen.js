'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    // icons next to ava
    container: {
        top: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    menuText: {
        color: "#51258A",
        fontSize: 40,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        margin: 15
    },

    menuTapHereIcon: {
        height:18,
        width:22,
        top:40,
        right:15
    },

    badgeImage: {
      height: 75,
      width:75,
      padding:30
    },

    imagePadding:{
      paddingLeft:5,
      paddingRight:5
    },

    dashboardIconButton: {
        margin: 20
    },

    dashboardIconImage: {
        width: 40,
        height: 40,
    },

    mainDashboard: {
        top:35,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    progressImage: {
        height: 41,
        width: 41
    },

    badgeContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom:5,
    },

    avaProfile: {
      height: 207,
      width: 162,
      alignSelf:'center',
      bottom:20
    },

    progressBar: {
      height: 8,
      width: 270,
      alignSelf:'center',
      top:12
    },

});


export default styles;
