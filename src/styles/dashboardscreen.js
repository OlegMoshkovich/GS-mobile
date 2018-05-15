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
        color: "white",
        fontSize: 40,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        margin: 15
    },
    menuTapHereIcon: {
        height:72/4, width:90/4, top:40,right:15 
    },

    dashboardIconButton: {
        margin: 20
    },

    dashboardIconImage: {
        width: 40,
        height: 40,
    },

    mainDashboard: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        top:5
    },

    progressImage: {height: 41,width: 40},

    badgeContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom:30,
        },

    avaProfile: {height: 290/1.2,width: 227/1.2,alignSelf:'center', bottom:20},

    progressBar: {height: 8,width: 270,alignSelf:'center',bottom:60},

    










});


export default styles;