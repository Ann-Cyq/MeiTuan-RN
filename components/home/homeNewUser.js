import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Dimensions from 'Dimensions';
var width =Dimensions.get('window').width;
//定义公用的网络连接
var COMMON = 'http://or6aio8tr.bkt.clouddn.com/';

var HomeNewUser = React.createClass({
	getInitialState:function(){
		return {
			data:[],
		}
	},
	componentDidMount:function(){
	    var url = COMMON + 'HomeTopMiddle.json';
	    fetch(url)
	      .then((response)=>response.json())
	        .then((responseData)=>{
	            this.setState({
	              data:responseData.data,
	            });
	        });
	},
	render:function(){
		if (this.state.data.length != 0) {
			var data = this.state.data[0];
			return (
				<View style={styles.container}>
					<View style={styles.leftStyle}>
						<Text style={styles.titleStyle}>{data.title}</Text>
						<Text style={styles.subStyle}>{data.subTitle}</Text>
					</View>
					<Image source={{uri:data.image}} 
						style={styles.iconStyle}/>
				</View>
			);
		}else{
			return (<View></View>);
		}
	}
})

var styles = StyleSheet.create({
	container:{
		width:width,
		backgroundColor:"#fefefe",
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		marginTop:15,
	},
	leftStyle:{
		marginLeft:15,
	},
	titleStyle:{
		fontSize:25,
		color:"red"
	},
	subStyle:{
		fontSize:18,
		color:"#666"
	},
	iconStyle:{
		width:150,
		// resizeMode:"contain",
		height:60,
		marginRight:15,
	}
});

module.exports = HomeNewUser;