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


    showBubble(dot) {
        console.log("showing bubble for ", dot);
    }

    render() {



        let num = 0;


        return(
            <View style={s.featuredContainer}>
                <Image style={s.featuredProductImage}
                source={assetPaths.shop.featuredProducts[this.props.imageNumber].image} />
                <Text style={s.featuredTextInImage}>{this.props.imageTitle}</Text>
                <Image style={s.featuredLookIcon} source={assetPaths.shop.icons.see} />

                {this.props.productDots.map((dot) => {
                    num += 1;

                    return <Image style={[s.featuredProductDot, {top: dot.top, left: dot.left}]} source={assetPaths.shop.icons.dot} />
                        
                        

                }) }
            </View>

        );
    }


}

export default FeaturedProduct

