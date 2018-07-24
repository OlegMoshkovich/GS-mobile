'use strict'
import Dimensions from 'Dimensions';
const {
    height,
    width
} = Dimensions.get('window');
import {
    StyleSheet
} from 'react-native';

const CARD_HEIGHT =120;
const CARD_WIDTH = CARD_HEIGHT - 29;


var styles = StyleSheet.create({
    // icons next to ava

    container: {
        height: height - 120,
        top: 300,
        flex: 1,
        left: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        position: 'absolute',
    },

    chatIcon: {
        height: 45,
        width: 45,
    },

    chatScrollView: {
        left: 60,
    },

    chatCard: {
        padding: 0,
        backgroundColor: "transparent",
        marginHorizontal: 10,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },

    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },

    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        color: 'white',
        backgroundColor: 'transparent'
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },

    scrollViewChats: {
        position: "absolute",
        top: 400,
        left: 60,
        right: 0,
        paddingVertical: 10,
    },

    
    scrollViewEvents: {
        position: "absolute",
        top: 520,
        left: 60,
        right: 0,
        paddingVertical: 10,
    },

    eventCard: {
        padding: 0,
        backgroundColor: "transparent",
        marginHorizontal: 10,
        height: CARD_HEIGHT,
        width: 210,
        overflow: "hidden",
    },
    eventImage: {
        flex: 3,
        height: CARD_HEIGHT,
        width: 210,
        alignSelf: "center",
    },

    calendarImage: {
        width: 288,
        height: 131,
        right: 0,
        top: 10,
    },
});


export default styles;
