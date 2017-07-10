import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;

var LogoDetail = React.createClass({
	render:function(){
		return (
			<View style={styles.container}>
				{this.renderDetail(100,"优惠券")}
				{this.renderDetail(12,"评价")}
				{this.renderDetail(50,"收藏",0)}
			</View>
		);
	},
	renderDetail:function(num,des,id){
		if (id == 0) {
			return (
			<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.specialStyle}>
					<Text style={styles.txtStyle}>{num}</Text>
					<Text style={styles.txtStyle}>{des}</Text>
				</View>
			</TouchableOpacity>
		);
		}
		return (
			<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.detailStyle}>
					<Text style={styles.txtStyle}>{num}</Text>
					<Text style={styles.txtStyle}>{des}</Text>
				</View>
			</TouchableOpacity>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		height:45,
		flexDirection:"row"
	},
	specialStyle:{
		width:width/3,
		alignItems:"center",
	},
	detailStyle:{
		width:width/3,
		borderRightWidth:1,
		borderColor:"#fefefe",
		borderStyle:"solid",
		alignItems:"center",
	},
	txtStyle:{
		color:"#fefefe",
		fontSize:15,
	}
});

module.exports = LogoDetail;
