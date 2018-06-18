// @OlegMoshkovich - should we delete?

import React from 'react';
import { Text, View, TouchableOpacity,Image, ScrollView} from 'react-native';
import s from '../styles/articlemodal';
import assetPaths from '../assetPaths';

class ModalScreen extends React.Component {


  render() {
    const { params } = this.props.navigation.state;
    const text = params ? params.text : null;
    const title = params ? params.title : null;
    const imageUri = params ? params.image_uri : null;
    const sourceUri = { uri: imageUri }

    return (<View style={s.modalBackground}>
  <View style={s.modalContainer}>
    <TouchableOpacity style={s.modalButton} >
      <Image
        style={s.modalIconImage}
        source={assetPaths.modals.articleModal.shareIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={s.modalButton} >
      <Image
        style={s.modalIconImage}
        source={assetPaths.modals.articleModal.starIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={s.modalButton} >
      <Image
        style={s.modalIconImage}
        source={assetPaths.modals.articleModal.commentIcon}
           />
           </TouchableOpacity>
           <TouchableOpacity style={s.modalButton} >
           <Image
             style={s.modalIconImage}
             source={assetPaths.modals.articleModal.clapIcon}
           />
           </TouchableOpacity>
       </View>
    <TouchableOpacity
           style={s.exitButton} onPress={() => this.props.navigation.goBack()}
    >
      <Image style={s.exitIconImage}
              source={assetPaths.modals.articleModal.exitIcon}/>
      </TouchableOpacity>

     <ScrollView >
       <Text style ={s.articleTitle}>{title}</Text>
       <Image
          style={{height: 225,marginTop:41,marginBottom:41,marginLeft:0,marginRight:0,}}
          resizeMode="cover"
          source={sourceUri}
       />
       <Text style ={s.articleText}>{text}</Text>
       <Text style ={s.articleText}>{text}</Text>
       <Text style ={s.articleText}>{text}</Text>
       <Text style ={s.articleText}>{text}</Text>

       
     </ScrollView>

      </View>
    );
  }
}

export default ModalScreen;
