import React from 'react';
import Dimensions from 'Dimensions';
import { Text, View } from 'react-native';
import { LinearGradient } from "expo";
const color = '#FFF2AD';

import TopMenu from '../components/TopMenu';
import AvaBottomMenu from '../components/AvaBottomMenu';
import assetPaths from '../assetPaths';

// global styles
import s from '../styles/calendarscreen';

const {width, height} = Dimensions.get('window');

class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      blurRadius: 0,
    };
  }

  render() {
    return (<LinearGradient
      colors={[color, color]} style={{ height: height, width:width}}>
      <TopMenu navigation={this.props.navigation} menuTitle="when" iconPath={assetPaths.topMenu.connectIcon} />
        <View style = {{ flex:4 }}>
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={'2018-04-18'}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            theme={{
                calendarBackground: '#F9C025',
                textSectionTitleColor: 'white',
                dayTextColor: 'white',
                todayTextColor: 'white',
                selectedDayTextColor: 'white',
                monthTextColor: 'white',
                selectedDayBackgroundColor: '#333248',
                arrowColor: 'white',
                'stylesheet.calendar.header': {
                  week: { marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }
                }
               }} />
        </View>
        <AvaBottomMenu currentSection={'connect'} contextIcon={true} navigation={this.props.navigation}/>
      </LinearGradient>);
 }

 loadItems(day) {
   setTimeout(() => {
     for (let i = -15; i < 85; i++) {
       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
       const strTime = this.timeToString(time);
       if (!this.state.items[strTime]) {
         this.state.items[strTime] = [];
         const numItems = Math.floor(Math.random() * 5);
        
         for (let j = 0; j < numItems; j++) {
           this.state.items[strTime].push({
             name: 'Events:', height: Math.max(50, Math.floor(Math.random() * 150))
           });
         }
       }
     }
     const newItems = {};
     Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
     this.setState({ items: newItems });
    }, 1000);
  }

 renderItem(item) {
   return (<View style={[s.item, {height: item.height}]}><Text>{item.name}</Text></View>);
 }

 renderEmptyDate() {
   return (
     <View style={s.emptyDate}><Text>Nothing yet.</Text></View>
   );
 }

 rowHasChanged(r1, r2) {
   return r1.name !== r2.name;
 }

 timeToString(time) {
   const date = new Date(time);
   return date.toISOString().split('T')[0];
 }
}

export default CalendarScreen