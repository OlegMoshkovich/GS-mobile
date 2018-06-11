'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({

    container: {
        alignItems: 'center',

        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',

        padding: 100,

    },
    text: {
        color: '#3f2949',
        marginTop: 10
    },


    communityView: {
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


    tapIcon: {
        height: 72 / 4,
        width: 90 / 4,
        top: 40,
        right: 15
    },

    communityIconImage: {
        height: 40,
        width: 40
    },

    featuredStoriesView: {
        top: 100,
        position: 'absolute',

    },

    featuredStoriesScrollView: {
        marginTop: 40,
    },




    featuredStoriesTitle: {
        color: "white",
        fontSize: 22,
        top: 20,
        left: 30,
        fontFamily: 'trefoil-sans-semibold'
    },




    featuredStoryImage: {
        height: 198,
        width: 148,
        marginBottom: 10,
        left: 10
    },


    newStoriesTitle: {
        color: "white",
        fontSize: 22,
        left: 30,
        marginBottom: 10,
        fontFamily: 'trefoil-sans-regular'
    },


    newStoryImage: {
        height: 212,
        width: 156,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        left: 20
    },


    // stories section
    storySectionView: {
        marginBottom: 200
    },


    // story modal - probably should
    // go into its own file
    storyModalView: {
        top: 200
    },

    storyModalImage: {
        height: 211,
        width: 224,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        left: 20
    },










});

export default styles;