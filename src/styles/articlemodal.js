'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
    },

    modalMenuContainer: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },

    modalButton: {
        marginRight: 10,
    },

    modalIconImage: {
        height:17,
        width: 17,
        marginRight: 25,
    },

    exitButton: {
        right: -170
    },

    exitIconImage: {
        height: 25,
        width: 25,
    },

    addFriend: {
        top: 0,
        right: -36,
    },

    addFriendImage: {
        width: 98,
        height: 27,
    },

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

    storyTitle: {
        marginTop: 24,
        marginBottom: 0,
        left: 26,
        padding: 10,
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'trefoil-sans-semibold'
    },

    storyContentContainer: {
        paddingTop: 20,
        zIndex: -1,
        paddingBottom: 0,
    },

    storyImage: {
        height: 225,
        marginTop: 41,
        marginBottom: 41,
        marginLeft: 0,
        marginRight: 0,
    },

    storyText: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        color: "black",
        fontSize: 17,
        fontFamily: 'trefoil-sans-light'
    },

    articleImage: {
        height: 225,
        marginTop: 41,
        marginBottom: 41,
        marginLeft: 0,
        marginRight: 0,
    },

    articleText: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        color: "black",
        fontSize: 17,
        fontFamily: 'trefoil-sans-light'
    }

});

export default styles;
