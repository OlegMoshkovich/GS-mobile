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
        height: 400,
        left:-27
    },

    // not sure if this is even used


    cardSource: {
        marginBottom: 19,
        color: "black",
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'trefoil-sans-light'
    },
    cardBadge: {
        marginBottom: 19,
        position:'absolute',
        height:30,
        width:30,
        right:0

    },


    articleTitle: {
        marginBottom: 24,
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontFamily: 'trefoil-sans-semibold',
    },

    articleText: {
        marginBottom: 17,
        color: "black",
        fontFamily: 'trefoil-sans-light'
    },

    articleCover: {
        height: 150
    },

 scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }



});

export default styles;
