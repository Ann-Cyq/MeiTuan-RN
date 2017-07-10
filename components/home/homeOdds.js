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

var HomeOdds = React.createClass({
	getInitialState:function(){
		return {
			data:[],
		}
	},
	componentDidMount:function(){
	    var url = COMMON + 'Home_D4.json';
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
				{this.renderChild()}
			</View>
		);
	},
	renderChild:function(){
		if (this.state.data.length != 0) {
			var arr = [];
			var datas = this.state.data;
			for(var i=0;i<4;i++){
				var data = datas[i];
				arr.push(<View key={i} style={styles.comPartStyle}>
							{/*通用部分*/}
							{this.renderComPart(data.maintitle,
								data.deputytitle,data.imageurl,data.typeface_color)}
						</View>);
			}
			return arr;
		}
	},
	renderComPart:function(title,subTitle,imageUrl,color){
		imageUrl = imageUrl.replace("w.h","50.50");
		return (
			<View style={styles.partStyle}>
				<View style={styles.leftStyle}>
					<Text style={[styles.titleStyle,{color:color}]}>{title}</Text>
					<Text style={styles.subStyle}>{subTitle}</Text>
				</View>
				<Image source={{uri:imageUrl}} 
					style={styles.iconStyle}/>
			</View>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		width:width,
		backgroundColor:"#fefefe",
		flexDirection:"row",
		alignItems:"center",
		flexWrap:"wrap",
		marginTop:1,
	},
	comPartStyle:{
		width:width/2-2,
		height:60,
		margin:1,
	},
	partStyle:{
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
	},
	leftStyle:{
		marginLeft:15,
	},
	titleStyle:{
		fontSize:15,
		color:"red"
	},
	subStyle:{
		fontSize:12,
		color:"#666"
	},
	iconStyle:{
		width:50,
		height:50,
		marginRight:15,
	}
});

module.exports = HomeOdds;