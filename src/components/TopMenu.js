import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import s from '../styles/topmenu';
import assetPaths from '../assetPaths'
import { Text, View, TouchableOpacity, Image, Modal} from 'react-native';
const {width, height} = Dimensions.get('window');

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { badgesShowing: false, }
    }

    navigateBack() {
        switch (this.props.navigation.state.routeName) {
            case 'Explore': this.setState({badgesShowing: true}); break;
            case 'Journey':
            case 'Award':
            case 'Badges':
                this.props.navigation.navigate('Dashboard'); break;
            case 'Chat':
            case 'Events':
            case 'Calendar':
            case 'Map':
                this.props.navigation.navigate('ConnectDashboard'); break;
            case 'ShopModal': this.props.navigation.goBack(); break;
            case 'SystemModal': this.props.navigation.goBack(); break;
            default: console.log("no navigation yet"); break;
        }
    }

    render() {
        return (
          <View style ={s.container}>
            <Text style ={s.menuText}>{this.props.menuTitle}</Text>
              <TouchableOpacity style ={s.menuNavButton}
                  onPress={() => this.navigateBack()}>
                  <Image style={s.menuNavButtonImage} source={this.props.iconPath} />
              </TouchableOpacity>

            {this.state.badgesShowing ?
                <Modal  animationType="fade" transparent={true} visible={this.state.badgesShowing}
                        onRequestClose={() => console.log("modal closed")}>
                    <TouchableOpacity onPress={() => this.setState({badgesShowing: false})}>
                        <Image key={'foobar123'} style={{width: width, height: height}} source={assetPaths.staticScreens.badgesOverview} />
                    </TouchableOpacity>
                </Modal> : null}
            </View>
          );
    }
}

export default TopMenu
