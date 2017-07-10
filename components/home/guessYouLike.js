import React, { Component } from 'react';
import {
  SwRefreshScrollView,
  SwRefreshListView,
  RefreshStatus, //刷新状态 用于自定义
  LoadMoreStatus //上拉加载状态 用于自定义
} from 'react-native-swRefresh'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Button,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
var width =Dimensions.get('window').width;
//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';

var GuessYouLike =React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({
			rowHasChanged:function(r1,r2){
				return r1!==r2;
			}
		});
		return {
			dataSource:ds,
		}
	},
	componentDidMount:function(){
		var url = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';
		fetch(url)
			.then((res)=>res.json())
				.then((resData)=>{
					var datas = resData.data;
					this.setState({
						dataSource:this.state.dataSource.cloneWithRows(datas)
					});
				})	
	},
	render:function(){
		return (
			<ListView 
				dataSource = {this.state.dataSource}
				renderRow = {this.renderRow}
				renderHeader = {this.renderHeader}
				renderFooter = {this.renderFooter}
				style={styles.lvStyle}/>
		);
	},
	// 头部
	renderHeader:function(){
		return (<View style={styles.titleStyle}>
					<View style={styles.titDetailStyle}>
						<Image source={{uri:'cnxh'}} 
							style={styles.iconStyle}/>
						<Text style={styles.txtLeftStyle}>猜你喜欢</Text>
					</View>
					<View style={styles.titDetailStyle}>
						<Image source={{uri:'icon_cell_rightarrow'}} 
							style={styles.iconStyle}/>
					</View>
				</View>);
	},
	renderRow:function(rowData){
		var squareImgUrl = rowData.squareimgurl.replace('w.h','80.80');
		var imgUrl = rowData.imgurl.replace('w.h',`${width}.200`);
		return (
			<TouchableOpacity
				activeOpacity={0.6}
				onPress={this.props.func(rowData.id,imgUrl,rowData.price,rowData.value,rowData.solds)}
			>
				<View style={styles.cellStyle}>
					<Image source={{uri:squareImgUrl}}
						style={styles.imgStyle}/>
					<View style={styles.middleStyle}>
						<Text style={styles.mainTitleStyle}>{rowData.mname}</Text>
						<Text>{rowData.title}</Text>
						<Text style={styles.priceStyle}>￥{rowData.price}</Text>
					</View>
					<View style={styles.rightStyle}>
						<Text>{'>100'}</Text>
						<Text>已售{rowData.solds}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	},
	// 尾部
	renderFooter:function(){
		return (
			<View style={styles.footerStyle}>
				<View style={styles.footerTopStyle}>
					<Text style={{color:"red",fontSize:18}}>查看全部商品</Text>
				</View>
				<View style={styles.footerBotStyle}>
					<Text>愿意让我们更了解你嘛</Text>
					<Text>点击按钮</Text>
					<View style={styles.footerBtnStyle}>
						<Text style={{color:"#fefefe"}}>点击了解更多</Text> 
					</View>
				</View>
			</View>
		);
	}
})

var styles = StyleSheet.create({
	titleStyle:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		height:50,
		marginTop:20,
		marginBottom:10,
		backgroundColor:"#fefefe"
	},
	titDetailStyle:{
		flexDirection:"row",
		alignItems:"center",
	},
	iconStyle:{
		width:20,
		height:20,
		margin:10,
	},
	txtLeftStyle:{
		fontSize:22,
		color:"#333",
	},
	lvStyle:{
		marginTop:2,
	},
	cellStyle:{
		marginTop:2,
		backgroundColor:"#fefefe",
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
	},
	imgStyle:{
		width:80,
		height:80,
	},
	middleStyle:{
		marginLeft:-5,
		justifyContent:"space-between",
		width:width/2,
	},
	mainTitleStyle:{
		color:"#333",
		fontSize:18,
	},
	priceStyle:{
		fontSize:15,
		color:"orange"
	},
	rightStyle:{
		width:100,
		height:80,
		justifyContent:"space-between",
		alignItems:"flex-end",
	},
	footerStyle:{
		alignItems:"center",
		marginTop:15,
	},
	footerTopStyle:{
		width:width,
		height:40,
		marginBottom:15,
		backgroundColor:"#fefefe",
		alignItems:"center",
		justifyContent:"center",
	},
	footerBotStyle:{
		width:width,
		height:100,
		alignItems:"center",
		backgroundColor:"#fefefe",
		justifyContent:"space-around",
	},
	footerBtnStyle:{
		width:width/10*9,
		height:30,
		backgroundColor:"red",
		alignItems:"center",
		justifyContent:"center",
		borderRadius:5,
	}
});

module.exports = GuessYouLike;
