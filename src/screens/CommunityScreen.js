import React from 'react';
import Dimensions from 'Dimensions';
import { Modal, StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import {StackNavigator,TabNavigator, TabBarBottom} from 'react-navigation';
import { LinearGradient } from "expo";
import {Card, Button,Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');




// styles
import s from '../styles/communityscreen.js';

// data
import stories from '../../data/stories/stories.js';

import AvaBottomMenu from '../components/AvaBottomMenu.js';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';





class CommunityScreen extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      activated    : true,
    };
  }


  setModalVisible(visible) {
     this.setState({modalVisible: visible});
  }

  renderNewStoriesSection() {

    // these images contain titles: TODO need to remove that 


    return(
      <ScrollView horizontal= {true}  >
      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.1.png')}
      />
      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.2.png')}
      />
      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.3.png')}
      />
    </ScrollView >
    );
  }
  renderAllStoriesSection() {

    // these images contain titles: TODO need to remove that 

    return(
      <ScrollView horizontal= {true} style={{marginBottom:200}} >
      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.3.png')}
      />


      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.2.png')}
      />
      <Image
        style={s.newStoryImage}
        resizeMode="cover"
        source={require('../../assets/Article_2.1.png')}
      />

     </ScrollView >
    );
  }

  renderStories() {
    return(
      <ScrollView
      style ={{
       top:100,
       position:'absolute',
       height: height,
        }}>
         <Text style ={s.featuredStoriesTitle}>Featured</Text>

         <ScrollView horizontal= {true} style={{marginTop:40}}>

         <TouchableOpacity
           onPress={() => {this.props.navigation.navigate('MyModal', stories.story01);
           }}>
           <Image style={s.featuredStoryImage} resizeMode="cover"
             source={require('../../assets/Article_1.2.png')} />
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => {this.props.navigation.navigate('MyModal', {
           text: "Text", title:"Title" });
           }}>
           <Image
             style={s.featuredStoryImage}
             resizeMode="cover"
               source={require('../../assets/Article_1.1.png')}
           />
           </TouchableOpacity>



           <TouchableOpacity
           onPress={() => {
                this.setModalVisible(true);

             }}>
           <Image
             style={s.featuredStoryImage}
             resizeMode="cover"
               source={require('../../assets/Article_1.3.png')}
           />
           </TouchableOpacity>

         </ScrollView >


       <Text style ={s.newStoriesTitle}>Whats New</Text>
       {this.renderNewStoriesSection()}


        
         <Text style ={s.newStoriesTitle}>All Stories</Text>
        {this.renderAllStoriesSection()}

     </ScrollView>

    );
  }

  render() {
    return (
        <LinearGradient
        colors={['#F9C025', '#FFDB2B']}
         style={{ height: height, width:width}}>
     
        {/* this feels wrong ... clicking on michelle o story results in a badly styled modal 
        
        */}
         <Modal
           animationType="slide"
           transparent={false}
           visible={this.state.modalVisible}
           onRequestClose={() => {
             alert('Modal has been closed.');
           }}>


           <LinearGradient
            colors={['#F9C025', '#FFDB2B']}
            style={{ height: height, width:width}}>

             <View style={{ top:200}}>
               <Text>The first ever White House Camp Out</Text>
               
               {/* why is this image styled differently??? */}
               
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

               
          <TopMenu menuTitle="#share" iconPath={assetPaths.topMenu.shareIcon} />

          
       {/* render featured stories */
       
        this.renderStories()
      }

           <AvaBottomMenu contextIcon={true} navigation={this.props.navigation}/> 

      </LinearGradient>
    );
  }
}

export default CommunityScreen;
