
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
//导航条
var ComNavgator = require("./comNavgator.js");
//每行的样式
var MineCell = require("./mineCell.js");
//订单详情组件
var OrderDetail = require("./orderDetail.js");
//广告图标组件
var LogoCell = require("./mineLogoCell.js");
//广告图标中的详细信息组件
var LogoDetail= require("./logoDetail.js");
export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*导航条*/}
        <ComNavgator txt={'我的'}/>
        <ScrollView>
          {/*广告部分*/}
          {this.renderLogo()}
          <TouchableOpacity activeOpacity={0.5}>
            {/*我的订单*/}
            <View>
              <MineCell leftTxt={"我的订单"} rightTxt={"查看全部订单"} leftImg={"collect"} />
            </View>
          </TouchableOpacity>
          {/*订单详情*/}
          <View style={styles.orderStyle}>
            {this.renderOrderDetail()}
          </View>
          {/*钱包部分*/}
          <View style={styles.margin_t_15}>
            <TouchableOpacity activeOpacity={0.5}>
              <MineCell leftTxt={"我的钱包"} rightTxt={"账户余额:100"} 
                leftImg={"draft"} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <MineCell leftTxt={"抵用券"} rightTxt={"0"} 
                leftImg={"like"}/>
            </TouchableOpacity>
          </View>  
          {/*积分商城*/}
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.margin_t_15}>
              <MineCell leftTxt={"积分商城"} rightTxt={""} leftImg={"card"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            {/*今日推荐*/}
            <View style={styles.margin_t_15}>
              <MineCell type={"new"} leftTxt={"今日推荐"} rightTxt={""} leftImg={"new_friend"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            {/*我要合作*/}
            <View style={[styles.margin_t_15,{marginBottom:20}]}>
              <MineCell leftTxt={"我要合作"} rightTxt={"轻松开店,招财进宝"} 
                leftImg={"pay"} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
  renderOrderDetail() {
    var arr = [];
    var icons = ["one","two","three","four"];
    var txts = ["待付款","待使用","待评价","退款/售后"];
    for (var i = 0;i<icons.length; i++) {
      arr.push(<OrderDetail key={i} icon={icons[i]} txt={txts[i]} />)
    };
    return arr;
  }
  renderLogo(){
    return (
      <View style={styles.logoStyle}>
        {/*广告图标部分*/}
        <LogoCell />
        {/*广告详情部分*/}
        <LogoDetail />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0eff5"
  },
  logoStyle:{
    height:160,
    backgroundColor:"#fd4b1f",
    justifyContent:"space-between",
  },
  orderStyle:{
    marginTop:1,
    backgroundColor:"#fefefe",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingBottom:10,
    paddingTop:10,
  },
  margin_t_15:{
    marginTop:15,
  }
});
module.exports = Mine;
