'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({



    mainScrollView: {
        flex:2,
        top: 80,
        marginBottom:100,
    },

    storiesScrollView: { top: 0 },

    featuredStoriesScrollView: { marginTop: 30, },

    searchBarView: { height: 200, top: 15, },
    tagAndAtViews: {marginTop: 20, height: 300, },

    tagIcon: {
        width: 30, height: 30, left: 20, position: 'absolute', top: 35},

    atIcon: {
        width: 30, height: 30, left: 20, position: 'absolute', top: 75},





    // tags etc


    tagMenu: {
        paddingLeft: 56,
        position: "absolute",
        top: 33,
        zIndex: -1,
        paddingRight: 20,

    },

    atMenu: {
        paddingLeft: 56,
        position: "absolute",
        top: 73,
        zIndex: -1,
        paddingRight: 20,


    },

    searchBarStyle: {
        width: 335,
        height: 50,
        marginLeft: 15.


    },

    searchIcon: {
        width: 54,
        height: 54,
        marginLeft: 10,
        position: 'absolute',
        zIndex: 3,
        top: 37,


    },

    pill: {
        backgroundColor: "white",
        borderRadius: 24,
        height: 30,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginLeft: 5,
        marginRight: 5,
    },


    pillText: {
        fontFamily: 'trefoil-sans-regular',
        color: 'grey',
        fontSize: 14,



    },


    featuredStoriesTitle: {
        color: "white",
        fontSize: 18,
        top: 20,
        left: 16,
        fontFamily: 'trefoil-sans-semibold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 5
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
