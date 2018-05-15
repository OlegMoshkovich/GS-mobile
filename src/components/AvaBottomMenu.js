import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, Animated} from 'react-native';
const {width, height} = Dimensions.get('window');

// global style
import s from '../styles/avabottommenu';

// asset path locations
import assetPaths from '../assetPaths.js'

// ava bottom menu specific configuration
const animationDuration = 1000;
const initialBlurRadius = 0;
const maxBlurRadius = 10;

// problem is that activated true false is reversed...

const avaLocationBottom_inactive = -32;
const avaLocationBottom_active = -100;
const avaHeight = 150;
const gradientBottom_active = -100;
const gradientBottom_inactive = 0;
const navMenu_active = -200;
const navMenu_inactive = 50;


class AvaBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: true,
            moveAnim: new Animated.Value(0),
            fadeAnim: new Animated.Value(0),
            blurRadius: initialBlurRadius
        };
    }
    animate = () => {
        if (this.state.blurRadius == maxBlurRadius) {
            this.setState({ blurRadius: initialBlurRadius });
        } else {
            this.setState({ blurRadius: maxBlurRadius });
        }
        Animated.timing(
            this.state.fadeAnim, { toValue: this.state.activated ? 1: 0, duration: animationDuration, }
        ).start();
        this.setState({activated : !this.state.activated});
    }

    render() {
        return (
            <View>
              
              {/* old ava menu with small icons 
              }
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

                */}


            {/* must keep this inline style or else things look messed up */}
            <TouchableOpacity
                style = {{
                alignSelf: 'flex-end', position: 'absolute', right: 20, zIndex: 1,
                bottom: this.state.activated ? avaLocationBottom_active : avaLocationBottom_inactive,
                height: avaHeight,
                }}
                onPress={this.animate} onLongPress={this.animate}>
                <Image style={s.avaImage}
                    source={assetPaths.bottomMenu.avaFace} />
            </TouchableOpacity>
            <Image
                style={[s.gradientStyle, { width: width,
                    bottom: this.state.activated ? gradientBottom_active: gradientBottom_inactive}]}
                source={assetPaths.bottomMenu.darkGradient} />
            <View style={[s.navStyle, {
                bottom: this.state.activated ? navMenu_active: navMenu_inactive,
                }]}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Map')}>
                    <Image style={s.navIconImage} source={assetPaths.bottomMenu.chatIcon} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Community')}>
                    <Image style={s.navIconImage} source={assetPaths.bottomMenu.communityIcon} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
                    <Image style={s.navIconImage} source={assetPaths.bottomMenu.homeIcon} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Explore')} >
                    <Image style={s.navIconImage} source={assetPaths.bottomMenu.exploreIcon} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboard')} >
                    <Image style={s.navIconImage} source={assetPaths.bottomMenu.dashboardIcon} />
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

export default AvaBottomMenu;