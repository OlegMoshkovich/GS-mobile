import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import { Text, View, Modal, TouchableOpacity,Image, Animated, ScrollView} from 'react-native';
import s from '../styles/avabottommenu';
import assetPaths from '../assetPaths.js'
import { Constants, Audio } from 'expo';

const {width, height} = Dimensions.get('window');
const heightResume = 560;
const heightRelated = 209;
const heightEvents = 550;
const heightBoard = 521;

const animationDuration = 1;
const initialBlurRadius = 0;
const maxBlurRadius = 10;

const avaLocationBottom_inactive = -35;
const avaLocationBottom_active = -112;
const avaHeight = 150;
const gradientBottom_active = -200;
const gradientBottom_inactive = 0;
const navMenu_active = -200;
const navMenu_inactive = 50;

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
        leaderboardAnim: new Animated.Value(0),
        allEventsAnim: new Animated.Value(0),
        routeName:this.props.navigation.state.routeName,
        tab: false,
        blurRadius: initialBlurRadius,
        tabOpacity: 1,
        expanded:true,
        relatedImages:[
            { image: require('../../assets/explore/related1.png'),},
            { image: require('../../assets/explore/related2.png'),},
            { image: require('../../assets/explore/related3.png'),},
            { image: require('../../assets/explore/related4.png'),},
            { image: require('../../assets/explore/related1.png'),},
            { image: require('../../assets/explore/related2.png'),},
            { image: require('../../assets/explore/related3.png'),},
            { image: require('../../assets/explore/related4.png'),}],
        longPress: false,
        chatInterface: false,
        wishlistModal: false};
        console.log("ava navigation:", this.state.routeName)
}

tabAnimation = () => {
    if (this.props.tabTitle == 'Resume'){
        Animated.timing(this.state.resumeAnim,{ toValue:this.state.expanded ? -heightResume:0, duration:500 }).start();
        if (this.state.expanded == true) { this.setState({ expanded: false });
        } else { this.setState({ expanded: true}); }
    }
    if (this.props.tabTitle == 'Related'){
        Animated.timing(this.state.relatedAnim,{ toValue:this.state.expanded ? -heightRelated:0, duration:300 }).start();
        if (this.state.expanded == true) { this.setState({expanded: false });
        } else { this.setState({ expanded: true}); }
    }
    if (this.props.tabTitle == 'All Events'){
        Animated.timing(this.state.allEventsAnim,{ toValue:this.state.expanded ? -heightEvents:0, duration:500 }).start();
        if (this.state.expanded == true) { this.setState({ expanded: false });
        } else { this.setState({ expanded: true}); }
    }
    if (this.props.tabTitle == 'Leaderboard'){
        Animated.timing(this.state.leaderboardAnim,{ toValue:this.state.expanded ? -heightBoard:0, duration:500 }).start();
        if (this.state.expanded == true) { this.setState({ expanded: false });
        } else { this.setState({ expanded: true}); }
    }
}
renderTabContent() {
    console.log('rendering contextual content');
    switch(this.props.navigation.state.routeName){

    case 'SystemModal':
        return(
            <Animated.View style={[{ top:0, left:5, zIndex: 12, position:'absolute'},]}>
              <ScrollView style={{  height:560, paddingBottom:200}} bounces={false}>
                <Image style={{ width: 359, height:1196}} source={assetPaths.staticScreens.resume} />
              </ScrollView>
            </Animated.View>);

    case 'Explore':
        return(<Animated.View style={{ top:0, zIndex: 12,  position:'absolute'}}>
            <View >
              <Image style={{ width: width, height:heightRelated}} source={require('../../assets/relatedBackground.png')} />
                <ScrollView
                  horizontal
                  scrollEventThrottle={1}
                  showsHorizontalScrollIndicator={false}
                  style = {{zIndex:12, position:'absolute'}}>
                  {this.state.relatedImages.map((image) => (
                    <View key={'view_' + Math.random()*2} style = {{paddingTop:15}}>
                      <Image key={'img_' + Math.random()*10} source={image.image} style={{width:119*1.2,height:161*1.2}} resizeMode="cover"/>
                    </View>
                  ))}
                </ScrollView>
            </View>
            </Animated.View>);

    case 'Dashboard':
      return(<Animated.View style={{ top:0, left:5, zIndex: 12, position:'absolute'}}>
              <ScrollView style={{  height:521, paddingBottom:200}} bounces={false}>
                <Image style={{ width: 366, height:1027}} source={assetPaths.staticScreens.leaderBoard} />
              </ScrollView>
            </Animated.View>);

    case 'Events':
      return(<Animated.View key={'fooYes3838'} style={{ left:5, zIndex: 14, position:'absolute',}}>
                <ScrollView style={{height: 820, paddingBottom: 200 }} bounces={false}>
                    <Image key={'eventAllEvents'} style={{top: -32, width: 365, height: 1055 , zIndex: 999, marginBottom: 230}} source={assetPaths.staticScreens.eventScreen} />
                </ScrollView>
            </Animated.View> )
  }
}
animate = async () => {
  console.log(this.state.tab)
    this.setState({
      tab: !this.state.tab,
    })

      const source = {
        uri: "http://soundimage.org/wp-content/uploads/2016/04/UI_Quirky34.mp3"
      };

      try {
        await Audio.setIsEnabledAsync(true);
        const sound = new Audio.Sound();
        await sound.loadAsync(source);
        await sound.playAsync();
      } catch(error) {
        console.error(error);
      }


    if (this.state.blurRadius == maxBlurRadius) { this.setState({ blurRadius: initialBlurRadius });
    } else { this.setState({ blurRadius: maxBlurRadius }); }

    // note: needs to be reversed
    if (this.state.activated == true) {
        this.setState({ tabOpacity: 1, activated: false });
    } else { this.setState({tabOpacity: 0, activated: true,}); }

    Animated.timing(this.state.fadeAnim, { toValue: this.state.activated ? 1: 0, duration: animationDuration}).start(
        () => { if (this.state.activated == true) {this.setState({tabOpacity: 1}) } else { this.setState({tabOpacity: 0}) }});
}

// render contextual icon based on route
renderContextIcon() {
    switch (this.props.navigation.state.routeName) {
        case 'Community':
            return(<TouchableOpacity  onPress={() => this.props.navigation.navigate({
                   routeName: 'PostModal', params: { transition: 'default' } }
                 )}>
                    <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.addStory} />
                </TouchableOpacity>);
        case 'Calendar':
            return(<TouchableOpacity>
                    <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.addCalendar} />
                </TouchableOpacity>);
        case 'Chat':
            return(<TouchableOpacity>
                        <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.addChat} />
                </TouchableOpacity>);
        case 'Events':
            return(<TouchableOpacity onPress={() => this.props.contextFunction()}>
                    <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.seeFriends} />
                </TouchableOpacity>);
        case 'Dashboard':
            return(<TouchableOpacity>
                    <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.refresh} />
                </TouchableOpacity>);
        case 'Explore':
            return(<TouchableOpacity>
                    <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.star} />
                </TouchableOpacity>);
        case 'SystemModal':
            return(<TouchableOpacity>
                <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.profile} />
                </TouchableOpacity>);
        case 'ShopModal':
            return(<TouchableOpacity onPress={() => this.showWishlist()}>
                <Image style={[s.contextIcon]} source={assetPaths.bottomMenu.contextIcons.wishlist} />
                </TouchableOpacity>);
        default:
            return;
        }
}

showWishlist() {
    this.setState({wishlistModal: true});
}

renderMenu() {
    return(
        <View style={[s.navStyle, {bottom: this.state.activated ? navMenu_active: navMenu_inactive,}]}>
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
    );
}
renderMenu() {
    return(
        <View style={[s.navStyle, {bottom: this.state.activated ? navMenu_active: navMenu_inactive,}]}>
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
    );
}

renderRandomAva() {
    function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }

    let randomAva = getRandomInt(16);
    switch (randomAva) {
            case 0: return (<Image key={'ava00'} style={s.avaImage} source={assetPaths.bottomMenu.default} />);
            case 1: return (<Image key={'ava01'} style={s.avaImage} source={assetPaths.bottomMenu.frown} />);
            case 2: return (<Image key={'ava02'} style={s.avaImage} source={assetPaths.bottomMenu.capShout} />);
            case 3: return (<Image key={'ava03'} style={s.avaImage} source={assetPaths.bottomMenu.capSmileEyesClosed} />);
            case 4: return (<Image key={'ava04'} style={s.avaImage} source={assetPaths.bottomMenu.capSmile} />);
            case 5: return (<Image key={'ava05'} style={s.avaImage} source={assetPaths.bottomMenu.capSmile2} />);
            case 6: return (<Image key={'ava06'} style={s.avaImage} source={assetPaths.bottomMenu.capSmile3} />);
            case 7: return (<Image key={'ava07'} style={s.avaImage} source={assetPaths.bottomMenu.capWave} />);
            case 8: return (<Image key={'ava08'} style={s.avaImage} source={assetPaths.bottomMenu.capFrown} />);
            case 9: return (<Image key={'ava09'} style={s.avaImage} source={assetPaths.bottomMenu.wave} />);
            case 10:    return (<Image key={'ava10'} style={s.avaImage} source={assetPaths.bottomMenu.cap} />);
            case 11:    return (<Image key={'ava11'} style={s.avaImage} source={assetPaths.bottomMenu.shout} />);
            case 12:    return (<Image key={'ava12'} style={s.avaImage} source={assetPaths.bottomMenu.eyesClosed} />);
            case 13:    return (<Image key={'ava13'} style={s.avaImage} source={assetPaths.bottomMenu.eyesClosed2} />);
            case 14:    return (<Image key={'ava14'} style={s.avaImage} source={assetPaths.bottomMenu.smile3} />);
            case 15:    return (<Image key={'ava15'} style={s.avaImage} source={assetPaths.bottomMenu.smile2} />);
            case 16:    return (<Image key={'ava16'} style={s.avaImage} source={assetPaths.bottomMenu.smile1} />);
    }
}

renderAva() {

    return(<TouchableOpacity
                style = {{  alignSelf: 'flex-end', position: 'absolute', right: 5, zIndex: 1,
                        bottom: this.state.activated ? avaLocationBottom_active : avaLocationBottom_inactive,
                        height: avaHeight,}} onLongPress={() => this.setState({chatInterface: true})}
                        onPress={this.animate
                        } >
                { this.props.contextIcon ? this.renderContextIcon() : null }
                { this.renderRandomAva()}
        </TouchableOpacity>);
}

renderTab() {
  switch(this.props.navigation.state.routeName){

    case 'SystemModal':
        const resumeStyles = { transform:[ {translateY:this.state.resumeAnim} ] }
        return(
            <Animated.View style={[{zIndex:13},resumeStyles]}>
                <TouchableOpacity style={[s.tabButton, {height: tabHeight, opacity: this.state.tabOpacity, zIndex:13,}]}
                    onPress={this.tabAnimation} disabled={this.state.tab}>
                    <Image style={[s.tabImage, {opacity: this.state.tabOpacity}]} source={assetPaths.bottomMenu.tabBackground}/>
                    <Text style={[s.tabText, {left: this.props.tabLeft, opacity: this.state.tabOpacity}]}>{this.props.tabTitle}</Text>
                </TouchableOpacity>
                {this.renderTabContent()}
            </Animated.View>);

    case 'Explore':
        const relatedStyles = { transform:[ {translateY:this.state.relatedAnim} ] }
            return(<Animated.View style={[{zIndex:13},relatedStyles]}>
                <TouchableOpacity style={[s.tabButton, { height: tabHeight, opacity: this.state.tabOpacity, zIndex:13,}]}
                    onPress={this.tabAnimation} disabled={this.state.tab}>
                    <Image style={[s.tabImage, {opacity: this.state.tabOpacity}]} source={assetPaths.bottomMenu.tabBackground} />
                    <Text style={[s.tabText, {left: this.props.tabLeft, opacity: this.state.tabOpacity}]}>{this.props.tabTitle}</Text>
                </TouchableOpacity>
                {this.renderTabContent()}
            </Animated.View>);

    case 'Events':
        const eventsStyles = { transform:[ {translateY:this.state.allEventsAnim} ] }
            return(<Animated.View style={[{zIndex:13},eventsStyles]}>
                    <TouchableOpacity style={[s.tabButton, {height: tabHeight, opacity: this.state.tabOpacity, zIndex:13,}]}
                        onPress={this.tabAnimation} disabled={this.state.tab}>
                        <Image style={[s.tabImage, {opacity: this.state.tabOpacity}]} source={assetPaths.bottomMenu.tabBackground}/>
                        <Text style={[s.tabText, {left: this.props.tabLeft, opacity: this.state.tabOpacity}]}>{this.props.tabTitle}</Text>
                        </TouchableOpacity>
                        {this.renderTabContent()}
                </Animated.View>);

      case 'Dashboard':
        const leaderboardStyles = { transform:[ {translateY:this.state.leaderboardAnim} ] }
        return(<Animated.View style={[{zIndex:13},leaderboardStyles]}>
                    <TouchableOpacity style={[s.tabButton, {height: tabHeight, opacity: this.state.tabOpacity, zIndex:13,}]}
                        onPress={this.tabAnimation} disabled={this.state.tab}>
                        <Image style={[s.tabImage, {opacity: this.state.tabOpacity}]} source={assetPaths.bottomMenu.tabBackground}/>
                        <Text style={[s.tabText, {left: this.props.tabLeft, opacity: this.state.tabOpacity}]}>{this.props.tabTitle}</Text>
                    </TouchableOpacity>
                    {this.renderTabContent()}
                </Animated.View>);
    }
}
renderGradient() {
    return(
        <Image style={[s.gradientStyle, { width: width, bottom: this.state.activated ? gradientBottom_active: gradientBottom_inactive}]} source={assetPaths.bottomMenu.gradient} />
    );
}

showChatInterface() { console.log("showing chat"); }
hideChatInterface() { console.log("hide chat"); }

renderChatInterface() {
    return (<View style={{top: 0}}>
    <Modal animationType="slide" transparent={true} visible={this.state.chatInterface}
        onRequestClose={() => console.log("modal closed")}>
        <TouchableOpacity onPress={() => this.setState({chatInterface: false})}>
            <Image key={'foobar123'} style={{width: width, height: height}} source={assetPaths.bottomMenu.avaChatInterface} />
        </TouchableOpacity>
    </Modal></View>);
}
renderWishlistModal() {

    return (<View style={{top: 0}}>
        <Modal animationType="slide" transparent={true} visible={this.state.wishlistModal}
            onRequestClose={() => console.log("modal closed")}>
            <TouchableOpacity onPress={() => this.setState({wishlistModal: false})}>
                <Image key={'wishlistImage'} style={{width: width, height: height}} source={assetPaths.staticScreens.wishlist} />
            </TouchableOpacity>
        </Modal>
    </View>);
}

render() {
    return (<View style={s.container}>

            {this.renderAva()}
            {this.props.showTab ? this.renderTab() : null }
            {this.renderGradient()}
            {this.renderMenu()}
            {this.renderTabContent()}
            {this.renderChatInterface() }
            {this.renderWishlistModal() }
        </View>);
    }
}


export default AvaBottomMenu;
