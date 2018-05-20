'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({


    modalBackground: {

        // backgroundColor: 'rgba(52,52,52,alpha)',

    },
    modalContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 20,
        height: 100,
        alignItems: 'flex-start'
    },


    // menu -- TODO component
    modalButton: {
        margin: 5
    },


    modalIconImage: {
        height: 30,
        width: 30,
        right: 0,
        top: 0
    },


    exitButton: {
        borderWidth: 1,
        borderColor: 'transparent',
        marginTop: 60,
        marginBottom: 10,
        position: 'relative',
        left: 332,
        width: 27,
        height: 27,
        backgroundColor: 'transparent',
        borderRadius: 100,
    },

    exitIconImage: {
        height: 40,
        width: 40,
        right: 10
    },


    articleTitle: {
        marginTop: 24,
        marginBottom: 0,
        left: 26,
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'trefoil-sans-semibold'
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