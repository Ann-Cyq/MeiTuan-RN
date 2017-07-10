
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Launch = require('./components/main/launch.js');

import Navigator from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
var MeiTuan = React.createClass({
  render:function(){
    return (   
        <Navigator.Navigator
          initialRoute={{title:"launch",component:Launch}}
          renderScene = {(route,navigator)=>{
            var Component = route.component;
            return <Component {...route.passProps}
            navigator={navigator} /> 
          }} />
    );
  }
})

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
