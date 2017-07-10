import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';

var HomeHot = React.createClass({
	getInitialState:function(){
		return {
			topData:[],
			bottomData:[]
		}
	},
	componentDidMount:function(){
	    var url = COMMON + 'HomeHotData.json';
	    fetch(url)
	      .then((response)=>response.json())
	        .then((responseData)=>{
	            this.setState({
	              topData:responseData.topData,
	              bottomData:responseData.bottomData,
	            });
	        });
	},
	render:function(){
		return (
			<View style={styles.container}>
				{/*头部*/}
				{this.HotTitle()}
				{/*详细上半部分*/}
				<View style={styles.topStyle}>
					{this.DetailTop()}
				</View>
				{/*详细上半部分*/}
				<View style={styles.botStyle}>
					{this.DetailBot()}
				</View>
			</View>
		);
	},
	HotTitle:function(){
		return (<View style={styles.titleStyle}>
					<View style={styles.titDetailStyle}>
						<Image source={{uri:'rm'}} 
							style={styles.iconStyle}/>
						<Text style={styles.txtLeftStyle}>热门频道</Text>
					</View>
					<View style={styles.titDetailStyle}>
						<Text style={styles.txtRightStyle}>查看全部</Text>
						<Image source={{uri:'icon_cell_rightarrow'}} 
							style={styles.iconStyle}/>
					</View>
				</View>);
	},
	DetailTop:function(){
		var arr = [];
		if (this.state.topData.length != 0) {
			var datas = this.state.topData;
			for(var i=0;i<datas.length;i++){
				var data = datas[i];
				arr.push(<View key={i} style={styles.topDetailStyle}>
							<View>
								<Text style={styles.topTitleStyle}>{data.title}</Text>
								<Text>{data.subTitle}</Text>
								<Image source={{uri:"icon_hot"}} style={styles.topIconStyle} />
							</View>
							<Image source={{uri:data.hotImage}} style={styles.topImgStyle} />
						</View>);
			}
		}
		return arr;
	},
	DetailBot:function(){
		var arr = [];
		if (this.state.bottomData.length != 0) {
			var datas = this.state.bottomData;
			for(var i=0;i<datas.length;i++){
				var data = datas[i];
				arr.push(<View key={i} style={styles.botDetailStyle}>
							<Text style={styles.botTitleStyle}>{data.title}</Text>
							<Text>{data.subTitle}</Text>
							<Image source={{uri:data.hotImage}} style={styles.botImgStyle}/>
						</View>);
			}
		}
		return arr;
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
	topStyle:{
		flexDirection:"row",
		marginTop:2
	},
	topDetailStyle:{
		flex:1,
		flexDirection:"row",
		justifyContent:"space-around",
		alignItems:"center",
		paddingLeft:15,
	},
	topTitleStyle:{
		fontSize:20,
		color:"#555"
	},
	topIconStyle:{
		marginTop:5,
		width:50,
		height:20,
	},
	topImgStyle:{
		width:width/4-10,
		height:width/4-10,
	},
	botStyle:{
		flexDirection:"row",
		justifyContent:"space-around",
		marginTop:5
	},
	botDetailStyle:{
		alignItems:"center",
	},
	botTitleStyle:{
		fontSize:20,
		color:"#555",
	},
	botImgStyle:{
		width:width/4-10,
		height:width/4-20,
	}
});
module.exports = HomeHot;