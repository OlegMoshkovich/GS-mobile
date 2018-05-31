'use strict'
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
import React from 'react';
import {
    StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    // icons next to ava

    container:{
    height:height-120,
    top:300,
    flex:1,
    left:20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    position:'absolute',
    }



});


export default styles;
