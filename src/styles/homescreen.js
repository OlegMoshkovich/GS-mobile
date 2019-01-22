'use strict'
import React from 'react';
import {  StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    notificationContainer: {
        position: 'absolute',
        top: 50,
        left: 20
    },

    notificationIcon: {
        width: 35,
        height: 35,
    },

    homeChatContainer: {
        height: 200,
        position: 'absolute',
        left: 220,
        zIndex: 12,
        top: 120
    },

    

    homeChatImage: {
        resizeMode: 'contain',
        width: 140,
        height: 180,
        left: -40,
        opacity: 0.8,

    },
    homeTutorialImage: {
        width: 60,
        resizeMode: 'contain',
    },
    chatQuestions: {width: 50, left: 80, top: -30},

    // speech on bottom
    speechInput: {
        position: 'absolute',
        left: 0,
        top: 580,
    },

    speechInputImage: {
        alignSelf: 'center'
    },

    //important
    profileButton: { top: 50, position: 'absolute', zIndex: 12, alignSelf: 'center', },
    shopButton: { bottom: 70, position: 'absolute', zIndex: 12, alignSelf: 'center', },
    upDownButtonIcon: { width: 40, height: 40 },

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },

    // likely need to abstract this further, most screens will have
    // 3 colors so maybe gradientStart, gradientMid, gradientEnd ?
    gradientColorStart: {
        color: '#CCDBE6'
    },


    // stand in chat text - temporary for now until we have
    // live dialog w ava
    homeChatText: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 420,
    },

    homeChatTextImage: {
        width: 144,
    },

    // ava pop in from bottom (currently not shown)
    avaBottomView: {
        position: 'absolute',
        top: 60,
        bottom: 0,
        left: 0,
        right: 0,
    },

    avaBottomViewChatBubble: {
        height: 93,
        width: 272,
        left: 20,
        position: 'absolute',
        top: 20,
    },

    avaBottomViewTextInput: {
        height: 26,
        width: 343,
        left: 20,
        position: 'absolute',
        bottom: 35,
        zIndex: 10
    },

    avaBottomViewButton: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        right: 0,
    },
    avaBottomViewAvaWaving: {
        height: 150,
        width: 100,
        right: 20,
    },



    // icons on bottom menu
    menuBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    menuBottomIcon: {
        height: 50,
        width: 50
    },






});

export default styles;
