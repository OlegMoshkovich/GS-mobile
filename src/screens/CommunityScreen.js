import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert, Animated} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

class CommunityScreen extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      moveAnim     : new Animated.Value(0),
      activated    : true,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
    };
  }


  setModalVisible(visible) {
     this.setState({modalVisible: visible});
  }

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({
        blurRadius: 0
      });
    } else {
      this.setState({
        blurRadius: 10
      });
    }

    Animated.timing(
        this.state.fadeAnim,
        {
          toValue: this.state.activated ? 1: 0,
          duration: 1000,
        }
      ).start();
      this.setState({
        activated : !this.state.activated,
        }
      )
  }
  render() {
    return (
        <LinearGradient
         colors={['#b98031', '#f5d340', 'white']}
         style={{ height: height, width:width}}>

         <Modal
           animationType="slide"
           transparent={false}
           visible={this.state.modalVisible}
           onRequestClose={() => {
             alert('Modal has been closed.');
           }}>


           <LinearGradient
            colors={['#b98031', '#f5d340', 'white']}
            style={{ height: height, width:width}}>

             <View style={{ top:200}}>
               <Text>The first ever White House Camp Out</Text>
               <Image
                 style={{height:211,width:224,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}

                   source={require('../../assets/Article_Image_3.png')}
               />
               <TouchableOpacity
                 onPress={() => {
                   this.setModalVisible(!this.state.modalVisible);
                 }}>
                 <Text>close</Text>
               </TouchableOpacity>
             </View>

            </LinearGradient>


         </Modal>


        <View style ={{
         top:20,
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between'
          }}>

          <Text style ={{color:"white",fontSize: 40,fontFamily: 'Helvetica', fontWeight:'bold', margin:15}}>#community</Text>
          <Image
            style={{height:72/4, width:90/4, top:40,right:15 }}
            source={require('../../assets/Tap_here_icon.png')}
          />

          <TouchableOpacity style ={{margin:20}}
            onPress={() => this.props.navigation.navigate({
              routeName: 'Home'
                }
            )}>
            <Image
              style={{height: 40,width: 40}}
              source={require('../../assets/Community-icon.png')}
            />

          </TouchableOpacity>
        </View>

        <ScrollView
         style ={{
          top:100,
          position:'absolute',
          height: height,
           }}>
            <Text style ={{color:"white",fontSize: 22,top:20,left:30,fontWeight:'bold', }}>Featured</Text>

            <ScrollView horizontal= {true} style={{marginTop:40}}>

            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('MyModal', {
                  text: "Last year on a fourth-grade field trip, I noticed that all the boys stood in the front and raised their hands while most of the girls politely stayed in the back and were quiet. It made me upset.",
                  title:"I’m 10. And I Want Girls to Raise Their Hands. ",
                  image_uri:'https://static01.nyt.com/images/2017/10/31/opinion/31tapper1web/31tapper1web-superJumbo.jpg?quality=90&auto=webp'

                });
            }}>

            <Image
              style={{height: 428/1.3,width:291/1.3,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
              resizeMode="cover"
              source={require('../../assets/Article_1.2.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {this.props.navigation.navigate('MyModal', {
                  text: "Text",
                  title:"Title"

                });
              }}>
              <Image
                style={{height: 428/1.3,width:291/1.3,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                  source={require('../../assets/Article_1.1.png')}
              />
              </TouchableOpacity>



              <TouchableOpacity
              onPress={() => {
                   this.setModalVisible(true);

                }}>
              <Image
                style={{height: 428/1.3,width:291/1.3,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                  source={require('../../assets/Article_1.3.png')}
              />
              </TouchableOpacity>

            </ScrollView >


          <Text style ={{color:"white",fontSize: 22,left:30,fontWeight:'bold',marginBottom:10 }}>Whats New</Text>
            <ScrollView horizontal= {true}  >
              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.1.png')}
              />
              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.2.png')}
              />
              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.3.png')}
              />
            </ScrollView >

            <Text style ={{color:"white",fontSize: 22,left:30,fontWeight:'bold',marginBottom:10 }}>All Stories</Text>

            <ScrollView horizontal= {true} style={{marginBottom:200}} >
              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.3.png')}
              />


              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.2.png')}
              />
              <Image
                style={{height: 212,width:156,marginBottom:10,marginTop:10,marginRight:10,marginLeft:10,left:20}}
                resizeMode="cover"
                source={require('../../assets/Article_2.1.png')}
              />

             </ScrollView >

        </ScrollView>

        <View style={{ //Navigational Menu
          flex:1,
          flexDirection: 'row',
          position: 'absolute',
          bottom: this.state.activated ? -50: 30,
          left:20

          }}>
            <TouchableOpacity style ={{margin:5}}  onPress={() => this.props.navigation.navigate('Explore')}>
            <Image
              style={{height: 35,width: 35}}
              source={require('../../assets/Explore-icon.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Map')}>
            <Image
              style={{height: 35,width: 35}}
              source={require('../../assets/Map-icon.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Community')}>
            <Image
              style={{height: 35,width: 35}}
              source={require('../../assets/Community-icon.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Calendar')} >
            <Image
              style={{height: 35,width: 35}}
              source={require('../../assets/Calendar-icon.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style ={{margin:5}} onPress={() => this.props.navigation.navigate('Shop')} >
            <Image
              style={{height: 35,width: 35}}
              source={require('../../assets/Shop-icon.png')}
            />
            </TouchableOpacity>
        </View>

        <TouchableOpacity //Ava
              style = {{
              alignSelf: 'flex-end',
              position: 'absolute',
              bottom: this.state.activated ? -100:-50,
              right: 20,
              width: this.state.activated ? 100: 100,
              height: this.state.activated ? 150: 150,
              }}
              onPress={this.animate} onLongPress={this.animate}>
              <Image
                style={{height:100,width:100,}}
                source={require('../../assets/Nav_Avatar_Face_Animations.png')}
              />
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',

      padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',

      padding: 100,

   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})
export default CommunityScreen;
