import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, Animated} from 'react-native';

// global style
import s from '../styles/avabottommenu';

// asset path locations
import assetPaths from '../assetPaths.js'

class AvaBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: true,
            moveAnim: new Animated.Value(0),
            fadeAnim: new Animated.Value(0),
            blurRadius: 0
        };
    }
    animate = () => {
        if (this.state.blurRadius == 10) {
            this.setState({ blurRadius: 0 });
        } else {
            this.setState({ blurRadius: 10 });
        }
        Animated.timing(
            this.state.fadeAnim,
            { toValue: this.state.activated ? 1: 0, duration: 1000, }
        ).start();
        this.setState({activated : !this.state.activated});
    }

    render() {
        return (
            <View>
                <TouchableOpacity style = {[s.avaMenu,
                    {
                        bottom: this.state.activated ? -100:-50,
                        width: this.state.activated ? 100: 100,
                        height: this.state.activated ? 150: 150,
                    }]}
                    onPress={this.animate} onLongPress={this.animate}>
                    <Image
                        style={s.avaImage}
                        source={assetPaths.bottomMenu.avaFace}
                    />
                </TouchableOpacity>
                <View style={[s.navMenu, 
                    { bottom: this.state.activated ? -50: 30}]}>
                    <TouchableOpacity style ={s.navButton} 
                        onPress={() => this.props.navigation.navigate('Explore')}>
                        <Image style={s.navImage}
                            source={assetPaths.bottomMenu.exploreIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style ={s.navButton} 
                        onPress={() => this.props.navigation.navigate('CommunicationMap')}>
                        <Image style={s.navImage}
                            source={assetPaths.bottomMenu.mapIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style ={s.navButton} 
                        onPress={() => this.props.navigation.navigate('Community')}>
                        <Image style={s.navImage}
                            source={assetPaths.bottomMenu.communityIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style ={s.navButton} 
                        onPress={() => this.props.navigation.navigate('CommunicationCalendar')} >
                        <Image style={s.navImage}
                            source={assetPaths.bottomMenu.calendarIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style ={s.navButton} 
                        onPress={() => this.props.navigation.navigate('Shop')} >
                        <Image style={s.navImage}
                            source={assetPaths.bottomMenu.shopIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default AvaBottomMenu;