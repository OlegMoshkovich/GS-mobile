import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, TouchableHighlight,ScrollView,Toggle, Alert} from 'react-native';
import assetPaths from '../assetPaths';
import s from '../styles/featuredProduct.js';

const {width, height} = Dimensions.get('window');



class FeaturedProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bubbleShowing: false,

        }
    }


    render() {






        return(
            <View style={s.featuredContainer}>
                <Image style={s.featuredProductImage} resizeMode="contain"
                source={assetPaths.shop.featuredProductImages[this.props.imageNumber]} />
                <Text style={s.featuredTextInImage}>{this.props.imageTitle}</Text>
                <Image style={s.featuredLookIcon} source={assetPaths.shop.icons.see} />


            </View>

        );
    }


}

export default FeaturedProduct

