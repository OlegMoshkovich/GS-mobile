import React from 'react';
import Dimensions from 'Dimensions';
import { Text, TouchableWithoutFeedback,Image,View} from 'react-native';
import { LinearGradient } from "expo";
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel'; // 3.4.0
import { PanGestureHandler, ScrollView, State} from 'react-native-gesture-handler';

import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';
import assetPaths from '../assetPaths';
import s from '../styles/explorescreen.js';

import articles from '../../data/articles/articleContent.js';

const {width} = Dimensions.get('window');
const color = '#BACDFF';

class ExploreScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = { screenKey: this.props.navigation.state.key};
  }

  _renderItem ({item}) {
    const { width } = Dimensions.get('window');
    const itemWidth = width - 100;
    return (<View style={[styles.slide, { width: itemWidth, height:400}]}>
      <Text style={styles.title}>{ item.title }</Text>
    </View>);
  }
  
  renderCard = ({item}) => {
    return(<TouchableWithoutFeedback
      onPress={() => {this.props.navigation.navigate('ArticleModal', {id: item.id})}}>
        <Card key={item.id} containerStyle ={[s.cardContainer, { position: 'absolute', width:width-70}]}>
          <Image resizeMode="cover" source={ item.image } style={{width:963/2.95,height:1320/2.95, top:-20,left:-20}} />
        </Card>
        </TouchableWithoutFeedback>);
  }

  render () {
    const { width, height } = Dimensions.get('window');
    return (
      <LinearGradient colors={[color, color]} style={{ height: height, width:width} }>
        <TopMenu navigation={this.props.navigation} menuTitle="explore" iconPath={assetPaths.topMenu.exploreIcon} />
        <View style={{ flex: 5}}>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={articles}
              renderItem={this.renderCard}
              sliderWidth={width}
              itemWidth={width - 70}
              itemHeight={height}
          />
        </View>
        <AvaBottomMenu key={this.props.navigation.state.key} showTab={true} tabLeft={26} tabTitle={"Related"} currentSection={'explore'} contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>);
    }
  }

export default ExploreScreen