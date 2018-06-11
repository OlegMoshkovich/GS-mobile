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
        top: 80,
        position: 'absolute',
        paddingBottom: 1400,
        marginBottom: 3300,
        


    },

    featuredStoriesScrollView: {
        marginTop: 40,
    },




    featuredStoriesTitle: {
        color: "white",
        fontSize: 18,
        top: 20,
        left: 16,
        fontFamily: 'trefoil-sans-semibold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },




    featuredStoryImage: {
        height: 198,
        width: 148,
        marginBottom: 10,
        left: 10,
        marginRight: 8,

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

        

    }







});

export default styles;