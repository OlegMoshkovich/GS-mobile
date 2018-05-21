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

    // products

    featuredTitle: {
        color: "white",
        fontSize: 18,
        fontFamily: 'trefoil-sans-semibold',
        marginBottom: 10,
        marginTop: 20,

        left: 20,

    },


    featuredProductImage: {
        height: 401,
        width: 336,
        marginBottom: 10,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        left: 10
    },

    whatsNewTitle: {
        color: "white",
        fontSize: 22,
        left: 30,
        marginBottom: 10,
        fontFamily: 'trefoil-sans-regular',

    },


    productImage: {height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20},

    




});

export default styles;