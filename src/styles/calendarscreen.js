'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({

    item: {
        backgroundColor: 'transparent',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
      },
      container: {
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent:'center'
      },
      // This pushes the view out of the viewport, but why the negative bottom?
      hiddenContainer: {
        top: window.height,
        bottom: -window.height
      },

      menuText: {color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15,top:20, marginBottom:40},


      // TODO make global
      // comms menu at the top
    commsDashboardIcon: {
        margin: 5,
        position: 'absolute',
        top: 42,
        right: 90
    },

    commsChatIcon: {
        margin: 5,
        position: 'absolute',
        top: 42,
        right: 50
    },

    commsCalendarIcon: {
        margin: 5,
        position: 'absolute',
        top: 42,
        right: 10
    },

    commsMenuIconImage: {
        height: 30,
        width: 30
    },


    // calendar agenda specific
    // TODO abstract to globals
    navMenu: {
        flex:1,
        flexDirection: 'row',
        position: 'absolute',
        left:20,

    },

    navButton: {
        margin: 5,
    },
    navImage: {
        height: 35,
        width: 35,
    },


    // ava -- to be abstracted
    avaMenu: {
        alignSelf: 'flex-end',
           position: 'absolute',
           right: 20,
    },

    avaImage: {
        width: 100, height: 100,
    }





});

export default styles;
