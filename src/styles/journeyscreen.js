'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({


    journeyContainer: {
        flex: 1,
    },
    journeyHeader: {
        top: -100,
        marginBottom: 30,
    },

    journeyHeadlineContainer: {
        top: -100,
        marginBottom: 30
    },
    journeyHeadline: {
        color: 'white',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 24,
        alignSelf: 'center',
    },
    journeyCarouselContainer: {
        top: -140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 250,
        marginTop: 50,
    },
    journeyCarouselSwipeImage: {
        width: 20,
        height: 200
    },
    journeyCarouselCaretImage: {
        width: 20,
        height: 200
    },
    journeyCarouselCenterImage: {
        width: 200,
        height: 200
    },

    journeyCompletedContainer: {
        height: 80,
        top: -60,
        justifyContent: 'space-around'
    },
    journeyCompletedImage: {
        width: 200,
        alignSelf: 'center'
    },

    journeyAwardNameTitle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: 'trefoil-sans-semibold',
    },
    journeyBottomContainer: {
        height: 100,
        top: 10,
        justifyContent: 'space-around'
    },





});

export default styles;