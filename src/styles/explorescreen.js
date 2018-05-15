'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({


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

    menuNavButton: {
        margin: 20,
    },

    menuNavButtonImage: {
        height: 40, 
        width: 40
    },
    


    menuTapIconImage: {
        height: 72 / 4,
        width: 90 / 4,
        top: 40,
        right: 45
    },


    cardContainer: {

        backgroundColor: "white",
        borderColor: "lightgrey",
        borderRadius: 7,
        height: 460,
        left: 12
    },

    // not sure if this is even used


    cardSource: {
        marginBottom: 19,
        color: "black",
        fontSize: 10,
        fontWeight: 'normal'
    },


    articleTitle: {
        marginBottom: 24,
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    articleText: {
        marginBottom: 17,
        color: "black"
    },

    articleCover: {
        height: 225
    },





});

export default styles;