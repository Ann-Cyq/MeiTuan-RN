
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableOpacity
} from 'react-native';
//获得webView所需要的数据
var URL = 'https://www.baidu.com';
var BusinessNav = require('./businessNav.js');

var Business = React.createClass({
    render:function(){
      return (
          <View>
            {/*导航条部分*/}
            {this.renderNav()}
            {/*webView主体部分*/}
            <WebView
              source={{uri: URL}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              decelerationRate="normal"
              startInLoadingState={true}
            />
          </View>
      );
    },
    renderNav:function(){
      return (
          <BusinessNav txt={"商家"} />
      );
    }
});

module.exports = Business;
