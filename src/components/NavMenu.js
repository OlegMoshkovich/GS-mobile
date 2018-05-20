import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { Text, View, Image} from 'react-native';
const {width, height} = Dimensions.get('window');

// global style
import s from '../styles/navmenustyle';

// asset path locations
import assetPaths from '../assetPaths'

class NavMenu extends Component {
    constructor(props) {
        super(props);

    }


    render() {

        var dots = []
        let opacity;
        // render active dot based on props
        for (let x = 0; x < 5; x++) {
            if (x == this.props.highlighted) { opacity = {opacity: 1}
            } else { opacity = {opacity: 0.5} }
            dots.push(
                <Image source={assetPaths.navMenu.dotOn} style={[s.navDotIcon, opacity]}/>
            )
        }


        return(
            <View style={s.navContainer}>
                { dots }
            </View>
        );
    }


}

export default NavMenu;
