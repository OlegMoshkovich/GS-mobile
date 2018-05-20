'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({


    container: {
        top: 20,
        flex: 1, // this needs to be rewritten...
        flexDirection: 'row',
        justifyContent: 'space-between',
        //borderColor: 'black',
        //borderWidth: 1,
    },


    menuText: {
        color: "white",
        fontSize: 40,
        fontFamily: 'trefoil-sans-black',
        // fontFamily: 'helvetica',
        margin: 15,
        opacity: 0.8,

    },

    menuNavButton: {
        margin: 20,
        //borderWidth: 1,
        height: 20,
    },

    menuNavButtonImage: {
        height: 40,
        width: 40
    },



    menuTapIconImage: {
        height: 72 / 4,
        width: 90 / 4,
        top: 40,
        right: 45,
        //borderWidth: 1,
        height: 20,
    },







});

export default styles;