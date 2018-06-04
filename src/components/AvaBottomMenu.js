import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, Text, View, TouchableOpacity,Image, Animated} from 'react-native';
const {width, height} = Dimensions.get('window');

// global style
import s from '../styles/avabottommenu';

// asset path locations
import assetPaths from '../assetPaths.js'

// ava bottom menu specific configuration
const animationDuration = 1;
const initialBlurRadius = 0;
const maxBlurRadius = 10;

// problem is that activated true false is reversed...
const avaLocationBottom_inactive = -35;
const avaLocationBottom_active = -112;
const avaHeight = 150;

const gradientBottom_active = -200;
const gradientBottom_inactive = 0;

const navMenu_active = -200;
const navMenu_inactive = 50;

// tab
const tabLocationBottom_inactive = -2;
const tabLocationBottom_active = -100;
const tabHeight = 50;

class AvaBottomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: true,
            moveAnim: new Animated.Value(0),
            fadeAnim: new Animated.Value(0),
            resumeAnim: new Animated.Value(0),
            relatedAnim: new Animated.Value(0),
            blurRadius: initialBlurRadius,
            tabOpacity: 1,
            expanded:true,
        };

    }


tabAnimation = () => {

 console.log('expanded:'+ this.state.expanded)

    if (this.props.tabTitle == 'Resume'){
      Animated.timing(this.state.resumeAnim,{
        toValue:this.state.expanded ? -560:0,
        duration:500
      }).start();
      if (this.state.expanded == true) {
        console.log( ' I am in the true loop')
          this.setState({
              expanded: false
          });
      } else {
          this.setState({ expanded: true});
      }

    }

    if (this.props.tabTitle == 'Related'){
      Animated.timing(this.state.relatedAnim,{
        toValue:this.state.expanded ? -135:0,
        duration:500
      }).start();
      if (this.state.expanded == true) {
        console.log( ' I am in the true loop')
          this.setState({
              expanded: false
          });
      } else {
          this.setState({ expanded: true});
      }

    }

}
    animate = () => {
        if (this.state.blurRadius == maxBlurRadius) {
            this.setState({ blurRadius: initialBlurRadius });
        } else {
            this.setState({ blurRadius: maxBlurRadius });
        }

        Animated.timing(this.state.fadeAnim, { toValue: this.state.activated ? 1: 0, duration: animationDuration}).start(
            //console.log("animation done, now do something, ", this.state);
            () => {

                if (this.state.activated == true) {
                    console.log('activated ')
                    this.setState({tabOpacity: 1})
                } else {
                    //console.log('deacrtivated')
                    this.setState({tabOpacity: 0})
                }
            }
        );

        if (this.state.activated == true) {
            this.setState({
                tabOpacity: 1,
                activated: false
            });
        } else {
            this.setState({tabOpacity: 0, activated: true,});
        }

    }


    renderContextIcon() {
        // render contextual icon based on route
        switch (this.props.navigation.state.routeName) {
            case 'Community':
                return(

                    <TouchableOpacity  onPress={() => this.props.navigation.navigate({
                       routeName: 'PostModal',
                           params: {
                               transition: 'default'
                           }
                         }
                     )}>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.addStory} />
                    </TouchableOpacity>
                );
            case 'Calendar':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.addCalendar} />
                    </TouchableOpacity>
                );
            case 'Chat':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.addChat} />
                    </TouchableOpacity>
                );
            case 'Events':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.seeFriends} />
                    </TouchableOpacity>
                );
            case 'Dashboard':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.refresh} />
                    </TouchableOpacity>
                );
            case 'Explore':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.star} />
                    </TouchableOpacity>
                );
            case 'SystemModal':
                return(
                    <TouchableOpacity>
                        <Image style={[s.contextIcon]}
                            source={assetPaths.bottomMenu.contextIcons.profile} />
                    </TouchableOpacity>
                );



            default:
                // nothing
                return;



        }



    }

    render() {
    const resumeStyles = {
      transform:[
        {translateY:this.state.resumeAnim}
      ]
    }
    const relatedStyles = {
      transform:[
        {translateY:this.state.relatedAnim}
      ]
    }

            return (

                <View style={s.container}>

                <TouchableOpacity
                    style = {{
                    alignSelf: 'flex-end', position: 'absolute', right: 5, zIndex: 1,
                    bottom: this.state.activated ? avaLocationBottom_active : avaLocationBottom_inactive,
                    height: avaHeight,
                    }}
                    onPress={this.animate} onLongPress={this.animate}>
                    { this.props.contextIcon ? this.renderContextIcon() : null }
                    <Image style={s.avaImage}
                        source={assetPaths.bottomMenu.avaFace} />
                </TouchableOpacity>


                { this.props.showTab ?
                <Animated.View style={[{zIndex:13},resumeStyles]}>
                <TouchableOpacity style={[s.tabButton, {
                    height: tabHeight,
                    opacity: this.state.tabOpacity,
                    zIndex:13,
                  }]} onPress={this.tabAnimation}>
                    <Image style={[s.tabImage, {opacity: this.state.tabOpacity}]}
                        source={assetPaths.bottomMenu.tabBackground} />
                    <Text style={[s.tabText, {
                        left: this.props.tabLeft, opacity: this.state.tabOpacity}]}>{this.props.tabTitle}</Text>
                </TouchableOpacity>
                </Animated.View> : null }



                <Image
                    style={[s.gradientStyle, { width: width,
                        bottom: this.state.activated ? gradientBottom_active: gradientBottom_inactive}]}
                    source={assetPaths.bottomMenu.gradient} />


                <View style={[s.navStyle, {
                    bottom: this.state.activated ? navMenu_active: navMenu_inactive,
                    }]}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Connect')}>
                        {this.props.currentSection == 'connect' ? <Image style={s.navIconImage} source={assetPaths.bottomMenu.connectIconOn} /> :
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.connectIcon} />}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Community')}>
                        {this.props.currentSection == 'community' ?
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.communityIconOn} /> :
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.communityIcon} />}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Home')}>
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.homeIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Explore')} >
                        {this.props.currentSection == 'explore' ?
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.exploreIconOn} /> :
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.exploreIcon} />}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dashboard')} >
                        {this.props.currentSection == 'dashboard' ?
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.dashboardIconOn} /> :
                        <Image style={s.navIconImage} source={assetPaths.bottomMenu.dashboardIcon} />}
                    </TouchableOpacity>
                </View>

                <Animated.View style={[{
                                top:0,
                                left:5,
                                zIndex: 12,
                                position:'absolute'},resumeStyles]}>
                <Image
                    style={{ width: 1101/3.07,
                               height:1722/3.07,
                              }}
                    source={assetPaths.staticScreens.resume} />
                </Animated.View>

                <Animated.View style={[{
                                top:0,
                                left:5,
                                zIndex: 12,
                                position:'absolute'},relatedStyles]}>
                <Image
                    style={{ width: 366,
                               height:156,
                              }}
                    source={assetPaths.staticScreens.related} />
                </Animated.View>

            </View>
            );
        }



    }


export default AvaBottomMenu;
