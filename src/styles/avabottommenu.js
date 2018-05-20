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
        height: 100,
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


    // the tab that appears sometimes
    tabButton: {
        alignSelf: 'flex-start', position: 'absolute', left: 15, zIndex: 1,
        bottom: -4,

    },
    // background image
    tabImage: {
        width: 101,
        height: 47,
    },

    // text on top
    tabText: {
        // fontFamily: 'trefoil-sans-regular',

        position: 'absolute',
        top: 15,
        left: 14,
        zIndex: 2,

        fontSize: 12,
    },



    // context icon
    contextIcon: {
        width: 50, height: 50, position: 'absolute',
        right: 25, top: -45, zIndex: 12
    }


});

export default styles;
