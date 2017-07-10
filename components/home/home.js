import React, { Component } from 'react';
import { PullList , PullView } from 'react-native-pull';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  ActivityIndicator
} from 'react-native';

import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';
//导航条组件
var HomeNav = require('./homeNav.js');
//广告小图标组件
var ADIcon = require('./adIcon.js');
//一元吃部分组件
var HomeOneEat = require('./homeOneEat.js');
//新用户专享部分
var HomeNewUser = require('./homeNewUser.js');
// 特惠部分组件
var HomeOdds = require('./homeOdds.js');
// 购物中心组件
var HomeShop = require('./homeShop.js');
//热门频道
var HomeHot = require('./homeHot.js'); 
//猜你喜欢和尾部
var GuessYouLike = require('./guessYouLike.js'); 
// 引入详情页
var Detail = require('../detail/detail.js');

var Home = React.createClass({
  getInitialState:function(){
    return {
      pageIndex:0,
      data:[],
    }
  },
  componentDidMount:function(){
    var url = COMMON + 'TopMenu.json';
    fetch(url)
      .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
              data:responseData.data,
            });
        });
  },
  onPullRelease:function(resolve) {
      var id = this.props.id;
      var url = 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
      fetch(url)
        .then((res)=>res.json())
          .then((resData)=>{
            this.setState({
              dataSource:this.state.dataSource.cloneWithRows(resData.data.deals),
              title:resData.data.title
            });
          });
      setTimeout(() => {
              resolve();
          }, 1500);
    },
    topIndicatorRender:function(){
      return  (
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                  <ActivityIndicator size="small" color="gray" />
                  <Text>玩命加载中...</Text>
          </View>
          );
    },
  render:function(){
    return (
        <View style={styles.container}>
          {/*导航条*/}
          {this.renderHomeNav()}
          <PullView 
            onPullRelease={this.onPullRelease}
            topIndicatorRender={this.topIndicatorRender}
          >
            {/*小广告部分*/}
            <View style={styles.adsStyle}>
              {/*广告小图标部分 ScrollView*/}
              <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd = {this.endScroll}
                style={styles.svStyle}
              >
                {/*第一个页面*/}
                <View style={styles.iconStyle}>
                  {this.renderADIcon(0)}
                </View>
                {/*第二个页面*/}
                <View style={styles.iconStyle}>
                  {this.renderADIcon(1)}
                </View>
              </ScrollView>
              {/*两个指示器*/}
              <View style={styles.indicStyle}>
                {this.renderIndicator()}
              </View>
            </View>
            {/*中间广告部分 一元吃*/}
            <HomeOneEat />
            {/*中间广告 新用户专享*/}
            <HomeNewUser />
            {/*中间特惠产品 odds*/}
            <HomeOdds />
            {/*购物中心*/}
            <HomeShop />
            {/*热门频道*/}
            <HomeHot />
            {/*猜你喜欢和尾部*/}
            {this.guessYouLike()}
          </PullView>
        </View>
    );
  },
  //渲染导航头
  renderHomeNav:function(){
    return (
        <View>
          <HomeNav />
        </View>
    );
  },
  //渲染广告菜单
  renderADIcon:function(id){
    var arr = [];
    if (Array.isArray(this.state.data[id])) {
      var datas = this.state.data[id]; 
      for(var i=0;i<datas.length;i++){
        arr.push(<ADIcon key={i+id*10} icon={datas[i].image} title={datas[i].title} />);
      }
    }; 
    return arr; 
  },
  //sv滑动一帧出发的事件
  endScroll:function(e){
    var x = e.nativeEvent.contentOffset.x;
    var pageIndex = Math.ceil(x/width);
    this.setState({
      pageIndex:pageIndex
    });
  },
  //渲染指示器
  renderIndicator:function(){
    var arr = [];
    var indiColor;
    for(var i=0;i<2;i++){  
      if (this.state.pageIndex == i) {
        indiColor = "#333";
      }else{
        indiColor = "#ccc";
      }    
      arr.push(<Text key={i} style={[styles.indicatorStyle,{backgroundColor:indiColor}]}></Text>);
    }
    return arr;
  },
  //猜你喜欢部分
  guessYouLike:function(){
    return <GuessYouLike func={this.goToDetail}/>
  },
  goToDetail:function(id,imgUrl,price,value,solds){
    var that = this;
    var obj = {
      id:id,
      imgUrl:imgUrl,
      price:price,
      value:value,
      solds:solds
    }
    return function(){
      that.props.navigator.push({
        component:Detail,
        title:'detail',
        passProps:obj
      });
    }
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f7f7f7"
  },
  adsStyle:{
    backgroundColor:"#fefefe",
    justifyContent:"space-between",
    alignItems:"center",
  },
  svStyle:{
    height:180,
  },
  iconStyle:{
    backgroundColor:"#fefefe",
    width:width,
    height:180,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    flexWrap:"wrap",
  },
  indicStyle:{
    flexDirection:"row",
  },
  indicatorStyle:{
    width:10,
    height:10,
    borderRadius:10,
    margin:5,
  }
});

module.exports = Home;
