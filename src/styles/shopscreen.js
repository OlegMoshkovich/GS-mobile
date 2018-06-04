'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({

    shopHeaderRight: {
        height: 40,
        width: 40,
        right: 20
    },


    shopHeaderLeft: {
        height: 40,
        width: 0,
        left: 20

    },


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

    menuButton: {
        margin: 20
    },

    menuButtonImage: {
        height: 40,
        width: 40,
    },



    closeButton: {
        width: 40,
        height: 40,
    },

    // products

    featuredTitle: {
        color: "white",
        fontSize: 18,
        fontFamily: 'trefoil-sans-semibold',
        marginBottom: 10,
        marginTop: 20,
        left: 20,

    },


    featuredTextInImage: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: 'white',

    },

    featuredLookIcon: {
        width: 40,
        height: 40,
    },

    featuredProductDot: {
        height: 20,
        width: 20,

    },




    featuredProductImage: {
        height: 401,
        width: 336,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 5,
        left: 10
    },

    whatsNewTitle: {
        color: "white",
        fontSize: 22,
        left: 30,
        marginBottom: 10,
        fontFamily: 'trefoil-sans-regular',

    },

    productContainer: {

        flex: 1,
        flexDirection: 'row',



    },

    productImage: {
        height: 226,
        width: 170,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 5,
        left: 10
    },


    // category nav on bottom

    categoryMenu: {
        marginBottom:20, 
    },

    searchIcon: {
        width: 54,
        height: 54,
        marginLeft: 20,

    },

    pill: {
        backgroundColor: "white",
        borderRadius: 24,
        height: 40,
        width: 130,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginLeft: 5,
        marginRight: 10,
    },


    pillText: {
        fontFamily: 'trefoil-sans-regular',
        color: 'grey',
        fontSize: 18,

        

    }










});

export default styles;