import React from 'react';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import assetPaths from '../assetPaths';
import s from '../styles/featuredProduct.js';

class FeaturedProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bubbleShowing: false,}
    }

    showBubbles() {
        this.setState({bubbleShowing: !this.state.bubbleShowing});
    }

    render() {
        let num = 1000;
        let bubbleOpacity = 0.9;
        return (
            <View style={s.featuredContainer} key={num*4}>
                <Image style={s.featuredProductImage}
                source={assetPaths.shop.featuredProducts[this.props.imageNumber].image} />
                <Text style={s.featuredTextInImage}>{this.props.imageTitle}</Text>
                
                {this.props.swaps == true ? 
   <TouchableOpacity onPress={() => this.showBubbles()}>
   <Image style={s.featuredLookIcon} source={assetPaths.shop.icons.trade} />
</TouchableOpacity>         :

            <TouchableOpacity onPress={() => this.showBubbles()}>
            <Image style={s.featuredLookIcon} source={assetPaths.shop.icons.see} />
        </TouchableOpacity>
        

                }
                



                {this.props.productDots.map((dot) => {
                    num += 1;
                    return <View key={num*2} style={[s.bubbleView, {top: dot.top, left: dot.left}]}>
                        <TouchableOpacity onPress={() => this.showBubbles()}>
                            <Image style={s.productDot} source={assetPaths.shop.icons.dot} />
                        </TouchableOpacity>
                        <Image style={[s.productBubble, {top: dot.bubbleOffset.top, left: dot.bubbleOffset.left}, this.state.bubbleShowing ? {opacity: bubbleOpacity } : {opacity: 0}]} source={dot.productBubble} />
                        </View>}) 
                }
            </View>);
    }


}

export default FeaturedProduct