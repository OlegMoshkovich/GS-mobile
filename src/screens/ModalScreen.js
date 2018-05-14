import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import {Card, Button,Icon} from 'react-native-elements';


class ModalScreen extends React.Component {


  render() {
    const { params } = this.props.navigation.state;
    const text = params ? params.text : null;
    const title = params ? params.title : null;
    const imageUri = params ? params.image_uri : null;
    const sourceUri = { uri: imageUri }

    return (
      <View style={{
          backgroundColor: 'rgba(52,52,52,alpha)',

        }}>


       <View style={{position: 'absolute',flex: 1, flexDirection: 'row',marginTop:60,marginLeft:20,height:100 , alignItems:'flex-start'}}>
           <TouchableOpacity style={{ margin: 5}} >
           <Image
             style={{height: 30,width: 30, right:0, top:0}}
             source={require('../../assets/Share.png')}
           />
           </TouchableOpacity>

           <TouchableOpacity style={{margin: 5}} >
           <Image
             style={{height: 30,width: 30, right:0, top:0}}
             source={require('../../assets/Star.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity style={{margin: 5 }} >
           <Image
             style={{height: 30,width: 30, right:0, top:0}}
             source={require('../../assets/Comment.png')}
           />
           </TouchableOpacity>
           <TouchableOpacity style={{margin: 5}} >
           <Image
             style={{height: 30,width: 30, right:0, top:0}}
             source={require('../../assets/Clap.png')}
           />
           </TouchableOpacity>
       </View>


      <TouchableOpacity
           style={{
               borderWidth:1,
               borderColor:'transparent',
               marginTop:60,
               marginBottom:10,
               position:'relative',
               left:332,
               width:27,
               height:27,
               backgroundColor:'transparent',
               borderRadius:100,
             }}
             onPress={() => this.props.navigation.goBack()}
         >
         <Image
           style={{height: 40,width: 40, right:10}}
           source={require('../../assets/Exit-icon.png')}
         />
      </TouchableOpacity>

     <ScrollView >
       <Text style ={{marginTop:24,marginBottom:0,left:26,color:"black",fontSize: 22,fontWeight:'bold' }}>{JSON.stringify(title)}</Text>
       <Image
          style={{height: 225,marginTop:41,marginBottom:41,marginLeft:0,marginRight:0,}}
          resizeMode="cover"
          source={sourceUri}
       />
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
       <Text style ={{marginTop:10,marginBottom:10,marginLeft:30,marginRight:30, color:"black",fontSize: 17 }}>{JSON.stringify(text)}</Text>
     </ScrollView>

      </View>
    );
  }
}

export default ModalScreen;
