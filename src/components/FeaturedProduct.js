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


    showBubble(dot, num) {
        console.log("showing bubble for ", dot, num);

     //   dot.bubbleOpacity == 0.4 ? dot.bubbleOpacity = 0 : bubbleOpacity = 0.4






    }

    showBubbles() {
        console.log("showing bubbles");

        this.setState({bubbleShowing: !this.state.bubbleShowing});





    }

    render() {



        let num = 1000;



        return(
            <View style={s.featuredContainer}>
                <Image style={s.featuredProductImage}
                source={assetPaths.shop.featuredProducts[this.props.imageNumber].image} />
                <Text style={s.featuredTextInImage}>{this.props.imageTitle}</Text>
                <TouchableOpacity onPress={() => this.showBubbles()}><Image style={s.featuredLookIcon} source={assetPaths.shop.icons.see} /></TouchableOpacity>
                {this.props.productDots.map((dot) => {
                    num += 1;
                    

                    return <View style={
                        
                        {position: 'absolute', top: dot.top, left: dot.left}
                        
                    
                        }>
                        <TouchableOpacity onPress={() => this.showBubbles()}>
                            <Image style={s.productDot} source={assetPaths.shop.icons.dot} />
                        </TouchableOpacity>

                        
                        <Image style={[s.productBubble, {top: dot.bubbleOffset.top, left: dot.bubbleOffset.left}, this.state.bubbleShowing ? {opacity: 0.85 } : 
                                {opacity: 0}]} source={dot.productBubble} />
                        </View>
                        
                        

                }) }
            </View>

        );
    }


}

export default FeaturedProduct

