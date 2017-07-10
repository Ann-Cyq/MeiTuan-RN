import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';

var HomeShop = React.createClass({
	getInitialState:function(){
		return {
			data:[],
		}
	},
	componentDidMount:function(){
	    var url = COMMON + 'ShopCenterShops.json';
	    fetch(url)
	      .then((response)=>response.json())
	        .then((responseData)=>{
	            this.setState({
	              data:responseData.data,
	            });
	        });
	},
	render:function(){
		return (
			<View style={styles.container}>
				{/*title部分*/}
				{this.shopTitle()}
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={styles.svStyle}
				>
					<View style={styles.svContainer}>
						{this.renderShop()}
					</View>		
				</ScrollView>
			</View>
		);
	},
	renderShop:function(){
		if (this.state.data.length != 0) {
			var arr = [];
			var datas = this.state.data;
			for(var i=0;i<datas.length;i++){
				var data = datas[i];
				arr.push(<View key={i} style={styles.shopStyle}>
							{this.shopDetail(data.shopName,data.shopImage,data.saleCount)}
						</View>);
			}
			return arr;
		}
	},
	shopTitle:function(){
		return (<View style={styles.titleStyle}>
					<View style={styles.titDetailStyle}>
						<Image source={{uri:'gw'}} 
							style={styles.iconStyle}/>
						<Text style={styles.txtLeftStyle}>购物中心</Text>
					</View>
					<View style={styles.titDetailStyle}>
						<Text style={styles.txtRightStyle}>全部4家</Text>
						<Image source={{uri:'icon_cell_rightarrow'}} 
							style={styles.iconStyle}/>
					</View>
				</View>);
	},
	shopDetail:function(desc,iamgeUrl,price){
		return (
			<View>
				<View>
					<Image source={{uri:iamgeUrl}} style={styles.imageStyle}/>
					<Text style={styles.priceStyle}>{price}家优惠</Text>
				</View>
				<Text style={styles.descStyle}>{desc}</Text>
			</View>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		backgroundColor:"#fefefe",
		marginTop:15,
	},
	titleStyle:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		height:50,
		marginBottom:10,
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
	txtRightStyle:{
		fontSize:18,
		color:"#888",
	},
	svContainer:{
		flexDirection:"row",
	},
	shopStyle:{
		width:width/3,
		height:width/3+20,
	},
	imageStyle:{
		width:width/3-20,
		height:width/3-30,
	},
	priceStyle:{
		position:"absolute",
		bottom:15,
		left:0,
		backgroundColor:"yellow",
		fontSize:10,
	},
	descStyle:{
		fontSize:15,
		marginTop:10,
		color:"#333",
	}
});

module.exports = HomeShop;
