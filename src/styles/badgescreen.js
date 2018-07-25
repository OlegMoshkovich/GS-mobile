'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    myBadgesContainer: {
        flex: 1,
        left: 14,
        backgroundColor: 'red',
        height: 200,
        marginBottom: 20,
    },

    myBadgesTitle: {
        color: '#51258A',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 18,
        marginBottom: 10,
        left: 5,
    },

    badgeContainer: {
        width: 100,
        marginRight: 10,
        height: 100,
    },

    badgeCarousel: {
        width: 75,
        height: 70,
        alignSelf: 'center',
        marginBottom: 10,
    },

    badgeTitleText: {
        alignSelf: 'center',
        color: '#51258A',
        fontSize: 12,
        fontFamily: 'trefoil-sans-semibold'
    },

    badgeTitle: {
        color: '#51258A',
        fontSize: 88
    },

    badgeCompletion: {
        alignSelf: 'center',
        color: '#51258A',
        fontSize: 12,
        fontFamily: 'trefoil-sans-regular'
    },

    exploreContainer: {
        alignItems: 'center',
        width: 180,
        height: 180,
        marginBottom: 40,
        paddingTop: 30,
    },

    exploreBadge: {
        width: 140,
        height: 140,
        marginBottom: 20,
    },

    exploreBadgeTitle: {
        color: '#51258A',
        fontSize: 12,
        fontFamily: 'trefoil-sans-semibold',
    },
});

export default styles;
