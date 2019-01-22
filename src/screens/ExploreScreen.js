import React from 'react';
import Dimensions from 'Dimensions';
import { Text, TouchableWithoutFeedback,Image,View} from 'react-native';
import { LinearGradient } from "expo";
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel'; // 3.4.0

import AvaBottomMenu from '../components/AvaBottomMenu';
import TopMenu from '../components/TopMenu';

import assetPaths from '../assetPaths';
import s from '../styles/explorescreen.js';

import articles from '../../data/articles/articleContent.js';

const {width} = Dimensions.get('window');
const color = '#BACDFF';

class ExploreScreen extends React.Component {

  renderCard = ({item,index}) => {

    return(
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('ArticleModal', {id: item.id})
          }}>
          <Card containerStyle ={[s.cardContainer, { position: 'absolute', width:width-70}]}>
            <Image resizeMode="cover"
                   source = { item.image }
                   style = {{width:326,height:448, top:-20,left:-20}} />
          </Card>
        </TouchableWithoutFeedback>
      )
    }

  render () {
    const { width, height } = Dimensions.get('window');
    return (
      <LinearGradient colors={[color, color]}
          style={{ height: height, width:width} }>
        <TopMenu
          navigation={this.props.navigation}
          menuTitle="explore"
          iconPath={assetPaths.topMenu.exploreIcon} />
        <View style={{ flex: 5}}>
          <Carousel
              data={articles}
              renderItem={this.renderCard}
              sliderWidth={width}
              itemWidth={width - 70}
              itemHeight={height} />
        </View>
        <AvaBottomMenu
          showTab={true}
          tabTitle={"Related"}
          currentSection={'explore'}
          contextIcon={true}
          navigation={this.props.navigation} />
      </LinearGradient>
      );
    }
  }

export default ExploreScreen
