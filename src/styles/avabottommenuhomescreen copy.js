'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    // icons next to ava
    navMenu: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        left: 20,
    },

    navButton: {
        margin: 5,
    },

    navImage: {
        height: 35,
        width: 35,
    },


    // ava 
    avaMenu: {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 20,
    },
// revised ava 
avaImage: {
    height: 150,
    width: 100,
},


    gradientStyle: {
        height: 87,
        zIndex: 0,
        position: 'absolute',
    },

    navStyle: {

        flex: 1,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },


    navIconImage: {
        height: 40,
        width: 40,
    },




});

export default styles;