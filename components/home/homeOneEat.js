import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';

var HomeOneEat = React.createClass({
	getInitialState:function(){
		return {
			leftData:[],
			rightData:[],
		}
	},
	componentDidMount:function(){
		var url = COMMON + "HomeTopMiddleLeft.json";
		fetch(url)
			.then((res)=>res.json())
				.then((resData)=>{
					this.setState({
						leftData:resData.dataLeft,
						rightData:resData.dataRight
					});
				})
	},
	render:function(){
		return (
			<View style={styles.container}>
				{/*左边部分*/}
				{this.renderLeft()}
				{/*右边部分*/}
				{this.renderRight()}
			</View>
		);
	},
	renderLeft:function(){
		if (this.state.leftData.length != 0) {
			var data = this.state.leftData[0];
			return (
				<View style={styles.leftStyle}>
					<Image source={{uri:data.img1}} style={styles.leftIconStyle} />
					<Image source={{uri:data.img2}} style={styles.leftIconStyle} />
					<Text>{data.title}</Text>
					<View style={styles.leftTxtStyle}>
						<Text>{data.price}</Text>
						<Text style={styles.saleStyle}>{data.sale}</Text>
					</View>
				</View>
			);
		};
	},
	renderRight:function(){
		var data = this.state.rightData;
		if (data.length != 0) {
			var data1 = data[0];
			var data2 = data[1];
			return (
				<View style={styles.rightStyle}>
					{/*右边的上半部分*/}
					{this.rendercomPart(data1.title,data1.subTitle,data1.rightImage,data1.titleColor)}
					{/*右边的下半部分*/}
					{this.rendercomPart(data2.title,data2.subTitle,data2.rightImage,data2.titleColor)}
				</View>
			);
		};
	},
	rendercomPart:function(title,subTitle,imgUrl,color){
		return (
			<View style={styles.comPartStyle}>
				<View>
					<Text style={{fontSize:18,color:color}}>{title}</Text>
					<Text style={{fontSize:12}}>{subTitle}</Text>
				</View>
				<Image source={{uri:imgUrl}} style={styles.rightIconStyle} />
			</View>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		flexDirection:"row",
		backgroundColor:"#fefefe",
		marginTop:15,
		height:130
	},
	leftStyle:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		borderColor:"#f7f7f7",
		borderWidth:2,
	},
	leftIconStyle:{
		// resizeMode:"contain",
		width:80,
		height:30,
	},
	leftTxtStyle:{
		flexDirection:"row",
	},
	saleStyle:{
		backgroundColor:"yellow",
		color:"#ccc",
	},
	rightStyle:{
		flex:1,
	},
	rightIconStyle:{
		width:80,
		height:50,
	},
	comPartStyle:{
		flex:1,
		flexDirection:"row",
		justifyContent:"space-around",
		alignItems:"center",
		borderBottomWidth:1,
		borderTopWidth:1,
		borderColor:"#f7f7f7",
	}
});

module.exports = HomeOneEat;
