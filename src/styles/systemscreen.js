'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        top:0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconText:{
      color:"white",
      fontSize: 10,
      fontFamily: 'Helvetica',
      marginTop:10,
      alignSelf:'center'

    },
     menuText: {
       color:"white",
       fontSize: 40,
       fontFamily: 'Helvetica',
       fontWeight:'bold',
       margin:15
     },

   profileContainer: {
      position:'absolute',
      top:101,
      left:50,
      width:width-100,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },


   avaProfile:{
      // left:width/2-51.6,
      height:119,
      width:123,
    },
    percentage:{
       // left:width/2-51.6,
       height:162/3,
       width:165/3,
     },
     addUser:{
        // left:width/2-51.6,
        width:78/3,
        height:60/3,
      },
     userName:{
         color:"white",
         fontSize: 14,
         fontFamily: 'Helvetica',
         margin:5,
         position:'absolute',
         alignSelf:'center',
         top:230
    },

    systemIconsContainer: {
        flex:1,
        alignSelf:'center',
        bottom:200
      },

  systemIconsImage: {height:480/1.2,width:330/1.2},
  exit: {alignSelf:'center',position:'absolute', top:40,right:20},

});

export default styles;
