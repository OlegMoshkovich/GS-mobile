'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    // icons next to ava
    navMenu: {
        flex:1,
        flexDirection: 'row',
        position: 'absolute',
        left:20,
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

    avaImage: {
        width: 100, height: 100,
    },



});

export default styles;
