'use strict'
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({



    container: {
        top:20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
         },


         menuText: {color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15},

         profileContainer: {
            bottom:180,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center'
             },

             profileImage: 
                 {height:55*1.6,width:80*1.6,}
             ,

profileCompleteText: 
{color:"white",fontSize: 14,fontFamily: 'Helvetica',  margin:5, right:10},



systemIconsContainer: {
    flex:1,
    alignSelf:'center',
    bottom:200
  },

  systemIconsImage: {height:480/1.2,width:330/1.2},

  





});

export default styles;
