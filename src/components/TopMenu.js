import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated} from 'react-native';
const {width, height} = Dimensions.get('window');

// global style
import s from '../styles/topmenu';

// asset path locations
import assetPaths from '../assetPaths'

class TopMenu extends Component {
    constructor(props) {
        super(props);

    }

    updateData() {

        // to be implemented

    }


    navigateBack() {
        console.log("navigation routeName:::",this.props.navigation.state.routeName);

        // console.log(this.props.navigation);
        switch (this.props.navigation.state.routeName) {
            case 'Badges':
            case 'Journey':
            case 'Award':

                this.props.navigation.navigate('Dashboard');
                break;
            case 'Chat':
            case 'Events':
            case 'Calendar':
            case 'Map':
                this.props.navigation.navigate('ConnectDashboard');
                break;
            default:
                console.log("no navigation yet");
                break;

        }

    }



    render() {

        //console.log(this.props);



        return (
        <View style ={s.container}>

            <Text style ={s.menuText}>{this.props.menuTitle}</Text>

            <TouchableOpacity style ={s.menuNavButton}
              onPress={() => this.navigateBack()}>
              <Image style={s.menuNavButtonImage}
                source={this.props.iconPath} />
            </TouchableOpacity>

        </View>
        );
    }
}

export default TopMenu;
