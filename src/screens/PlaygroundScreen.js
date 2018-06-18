
import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';

var CIRCLE_SIZE = 80;

class PlaygroundScreen extends React.Component{

  state = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }





  render() {
   const {flexDirection, alignItems, justifyContent} = this.state
   const layoutStyle = {flexDirection, justifyContent, alignItems}

   const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
   const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'


    return (

    <View style={{
      flex:1,
      }}>
        


    </View>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {

    width:30,
    height:30,
    borderRadius:30,
    backgroundColor: 'lightgrey',
    margin: 5,
  },
})




export default PlaygroundScreen;
