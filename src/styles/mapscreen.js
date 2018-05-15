'use strict'
import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 17
    },

    viewStyle: {
        flex: 1
    },

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {

    },
    card: {
        padding: 0,
        elevation: 2,
        backgroundColor: "transparent",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#56CCF2'
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 30,
        height: 30,

    },
    ring: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "transparent",
        position: "absolute",
        borderWidth: 1,
        borderColor: "red",
    },



    // navigation in map

    mapNavMenu: { //Navigational Menu
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        left: 20
    },
    mapNavButton: {
        margin: 5,
    },
    mapNavImage: {
        height: 35,
        width: 35,
    },


    // ava on bottom
    avaBottom: {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 20,
    },

    avaImage: {
        width: 100,
        height: 100,
    },

    // rest of the ui -- these will become global
    // gradient
    gradientStart: {
        color: '#b98031'
    },
    gradientMid: {
        color: 'white',
    },
    gradientEnd: {
        color: 'white',
    },

    // menu text
    menuText: {
        color: "white",
        fontSize: 40,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        margin: 15,
        top: 20,
    },




});

export default styles;