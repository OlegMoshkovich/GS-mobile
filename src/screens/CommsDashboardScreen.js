import React from 'react';
import { Text, View, TouchableOpacity,Image,TouchableWithoutFeedback, Animated} from 'react-native';
import { LinearGradient } from "expo";
import Dimensions from 'Dimensions';

import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';

import assetPaths from '../assetPaths';
import s from '../styles/connectscreen';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT =120;
const CARD_WIDTH = CARD_HEIGHT - 29;
const color = '#FFF2AD';

class DashboardScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moveAnim     : new Animated.Value(0),
      activated    : true,
      environmentSwitch: false,
      fadeAnim : new Animated.Value(0),
      blurRadius: 0,
      chatSessions: [
        { title: "Nicole Clark", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_1.png'),
        },
        { title: "Emma Brownstein", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_2.png'),
        },
        { title: "Nicole Clark", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_3.png'),
        },
        { title: "Emma Brownstein", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_1.png'),
        },
        { title: "Nicole Clark", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_2.png'),
        },
        {
          title: "Emma Brownstein", description: "",
          image: require('../../assets/icons/Connect/Chat_Avatar_3.png'),
        }],
      gsEvents: [
        { title: "", description: "",
          image: require('../../assets/icons/Connect/Event_1.png'),},
        { title: "", description: "",
          image: require('../../assets/icons/Connect/Event_2.png'),},
        { title: "", description: "",
          image: require('../../assets/icons/Connect/Event_1.png'),
        },{ title: "", description: "",
          image: require('../../assets/icons/Connect/Event_2.png'),
        },],};
  };

  animate = () => {
    if (this.state.blurRadius == 10) {
      this.setState({ blurRadius: 0 });
    } else {
      this.setState({ blurRadius: 10 });
    }
    Animated.timing(
      this.state.fadeAnim,
        { toValue: this.state.activated ? 1: 0, duration: 500, }
      ).start();
      this.setState({ activated : !this.state.activated});
  }

  render() {
    return (
      <LinearGradient colors={[color, color]} style={{ height: height,width:width, flex:1}}>
        <TopMenu navigation={this.props.navigation} menuTitle="connect" iconPath={assetPaths.topMenu.connectIcon} />
          <View style={s.container}>
            <View>
              <TouchableOpacity style={{ top:70 }} 
                onPress={() => this.props.navigation.navigate({ routeName: 'Chat'})}>
                <Image style={s.chatIcon} source={require('../../assets/icons/Connect/Icon_chat.png')} />
              </TouchableOpacity>
              <Animated.ScrollView
                style={s.chatScrollView}
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                onScroll={Animated.event([
                  { nativeEvent: { contentOffset: { x: this.animation}, },},
                ], { useNativeDriver: true } )}>
                {this.state.chatSessions.map((chatSession, index) => (
                <View style={s.chatCard} key={index}>
                  <TouchableWithoutFeedback
                    onPress={() => {this.props.navigation.navigate('Chat'); }}>
                    <Image source={chatSession.image} style={s.cardImage}     resizeMode="cover"/>
                  </TouchableWithoutFeedback>
                  <View>
                    <Text numberOfLines={1} style={s.cardtitle}>{chatSession.title}</Text>
                    <Text numberOfLines={1} style={s.cardDescription}>{chatSession.description}</Text>
                  </View>
                </View>))}
              </Animated.ScrollView>
            </View>
            <View>
              <TouchableOpacity style={{top:70}}
                onPress={() => this.props.navigation.navigate({
                  routeName: 'Events', params: { transition: 'default' }})}>
                <Image
                  style={s.chatIcon}
                  source={require('../../assets/icons/Connect/Icon_events.png')} />
              </TouchableOpacity>
              <Animated.ScrollView
                style={{ left:60 }}
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                onScroll={Animated.event([
                  { nativeEvent: {
                    contentOffset: {x: this.animation},
                    },
                  }], { useNativeDriver: true }
                )}>
                {this.state.gsEvents.map((gsEvent, index) => (
                <View style={s.eventCard} key={index}>
                  <TouchableWithoutFeedback
                    onPress={() => {this.props.navigation.navigate('Events'); }}>
                    <Image source={gsEvent.image} style={s.eventImage} />
                  </TouchableWithoutFeedback>
                </View>))}
               </Animated.ScrollView>
              </View>
              <View style={{bottom:7}}>
                <TouchableOpacity style={{ top:70 }}
                  onPress={() => this.props.navigation.navigate({
                  routeName: 'Calendar', params: { transition: 'default' } }
                )}>
                  <Image style={s.chatIcon}
                    source={require('../../assets/icons/Connect/Icon_calendar.png')} />
                </TouchableOpacity>
                <Animated.ScrollView
                  style={{ left:60}}
                  horizontal
                  scrollEventThrottle={1}
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={CARD_WIDTH}
                  onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: this.animation},},},
                    ], { useNativeDriver: true })}>
                  <View>
                    <TouchableWithoutFeedback
                      onPress={() => {this.props.navigation.navigate('Calendar'); }}>
                      <Image source={require('../../assets/icons/Connect/Calendar2.png')}
                        style={s.calendarImage} />
                    </TouchableWithoutFeedback>
                  </View>
                </Animated.ScrollView>
              </View>
            </View>
            <AvaBottomMenu currentSection={'connect'} showTab={false}  tabLeft={15} navigation={this.props.navigation}/>
          </LinearGradient>);
  }
}

export default DashboardScreen