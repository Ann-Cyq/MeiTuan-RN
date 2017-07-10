
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
//获取界面的宽高
import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// 很行的组件
var MoreCell = require('./moreCell.js');
var More = React.createClass({
  render:function(){
    return (
        <View style={styles.moreStyle}>
          {/*页面的头部*/}
          {this.renderNavBar()}
          {/*ScrollView部分*/}      
          <ScrollView>
            <View style={styles.marginStyle}>
              <MoreCell txt={"扫一扫"} />
            </View>
            <View style={styles.marginStyle}>
              <MoreCell txt={"省流量模式"} type={"switch"} />
              <MoreCell txt={"消息提醒"} />
              <MoreCell txt={"邀请好友使用"} />
              <MoreCell txt={"清空缓存"} type={"clear"} />
            </View>
            <View style={styles.marginStyle}>
              <MoreCell txt={"意见反馈"} />
              <MoreCell txt={"问卷调查"} />
              <MoreCell txt={"支付帮助"} />
              <MoreCell txt={"网络诊断"} />
              <MoreCell txt={"关于代码"} />
              <MoreCell txt={"我要应聘"} />
            </View>
            <View style={[styles.marginStyle,{marginBottom:20}]}>
              <MoreCell txt={"精品应用"} />
              <MoreCell txt={"其他推荐"} />
              <MoreCell txt={"邀请好友使用"} />
            </View>
          </ScrollView>
        </View>
    );
  },
  renderNavBar:function(){
    return (
        <View style={styles.navBarStyle}>
          <Text style={styles.navTxtStyle}>更多</Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  moreStyle:{
    flex:1,
    backgroundColor:"#f7f7f7",
  },
  navBarStyle:{
    height:40,
    backgroundColor:"#fefefe",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  navTxtStyle:{
    color:"#282828",
    fontSize:20
  },
  marginStyle:{
    marginTop:10,
  }
});

module.exports = More;
