
import React, { Component } from 'react';
// 引入 Navigator
import Navigator from 'react-native-deprecated-custom-components';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
var Home = require('../home/home.js');
var Business = require('../business/business.js');
var Mine = require('../mine/mine.js');
var More = require('../more/more.js');

var Main = React.createClass({
  getInitialState:function(){
    return {
      selectedTab:"home"
    }
  },
  render:function(){
    return (   
      <TabNavigator>
        {/*首页*/}
        {this.renderNavItem("home","Home","icon_tabbar_homepage","icon_tabbar_homepage_selected",Home)}
        {/*首页*/}
        {this.renderNavItem("business","Business","icon_tabbar_merchant_normal","icon_tabbar_merchant_selected",Business)}
        {/*首页*/}
        {this.renderNavItem("mine","Mine","icon_tabbar_mine","icon_tabbar_mine_selected",Mine)}
        {/*首页*/}
        {this.renderNavItem("more","More","icon_tabbar_misc","icon_tabbar_misc_selected",More)}
      </TabNavigator>
    );
  },
  renderNavItem:function(selTab,title,normalImg,selImg,Component){
    return (
        <TabNavigator.Item
          selected={this.state.selectedTab === selTab}
          title={title}
          renderIcon={() => <Image source={{uri:normalImg}} style={styles.iconStyle} />}
          renderSelectedIcon={() => <Image source={{uri:selImg}} style={styles.iconStyle} />}
          onPress={() => this.setState({selectedTab:selTab})}
          selectedTitleStyle={styles.selTxtStyle}
          titleStyle={styles.normalTxtStyle}
        >
          <Navigator.Navigator
              initialRoute={{name:selTab,component:Component}}
              configureScene={(route) => {
                return Navigator.Navigator.SceneConfigs.HorizontalSwipeJump;
              }}
              renderScene = {(route,navigator) => {
                var Component = route.component;
                return <Component {...route.passProps}
                navigator={navigator} />
              }}
           />
        </TabNavigator.Item>
      );
  }
})
const styles = StyleSheet.create({
  iconStyle:{
    width:30,
    height:30,
  },
  selTxtStyle:{
    color:"red"
  },
  normalTxtStyle:{
    color:"black"
  }
});
module.exports = Main;
