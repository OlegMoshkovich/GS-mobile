'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({


    awardContainer: {
        flex: 1,
        top: -60,
    },

    awardHeader: {
        top: -100,
        marginBottom: 30,
    },

    awardHeadlineContainer: {
        top: -100,
        marginBottom: 30
    },

    awardHeadline: {
        color: 'white',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 24,
        alignSelf: 'center',
    },
    awardCarouselContainer: {
        top: -140,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 250,
        marginTop: 50,
    },

    awardCarouselCenterImage: {
        width: 200,
        height: 200
    },

    awardCompletedContainer: {
        height: 80,
        top: -140,
        justifyContent: 'space-around'
    },
    awardCompletedImage: {
        width: 200,
        alignSelf: 'center'
    },

    awardAwardNameTitle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'trefoil-sans-semibold',
        paddingLeft: 10,

    },
    awardBottomContainer: {
        top: -120,
        justifyContent: 'space-around',
        padding: 20,

    },

    exploreMoreContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    exploreMoreItem: {
        marginTop: 20,
        alignItems: 'center'

    },
    exploreAwardTitle: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 14,

    },
    exploreMoreTitle: {
        color: 'white',
        fontFamily: 'trefoil-sans-semibold',
        fontSize: 22,

    },
    awardIcon: {
        height: 70,
        alignSelf: 'center'

    }



});

export default styles;
