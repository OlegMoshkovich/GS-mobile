'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({

    featuredContainer: {

      
    },


    featuredTextInImage: {
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: 'white',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 32,
        position: 'absolute',
        left: 26,
        bottom: 16,

        

    },

    featuredLookIcon: {
        width: 40,
        height: 40,
        position: 'absolute',
        bottom: 10,
        right: 2,

    },

    featuredProductDot: {
        position: 'absolute',
        top: 10,
        left: 100,
        zIndex: 100,



    },

    productDot: {
        width: 20, 
        height: 20,


    },

    productBubble: {
        width: 111,
        height: 49,

    },




    featuredProductImage: {
        height: 401,
        width: 336,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 5,
        left: 10,
        borderRadius: 15,
    },


});

export default styles;
