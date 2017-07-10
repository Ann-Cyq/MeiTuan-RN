
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var OrderDetail =React.createClass({
	render:function(){
		return (
			<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.container}>
					<Image source={{uri:this.props.icon}} style={styles.iconStyle} />
					<Text style={styles.txtStyle}>{this.props.txt}</Text>
				</View>
			</TouchableOpacity>
		);
	}
})
var styles = StyleSheet.create({
	container:{
		alignItems:"center"
	},
	iconStyle:{
		width:35,
		height:30,
	},
	txtStyle:{
		color:"#666"
	}
});
module.exports = OrderDetail;
