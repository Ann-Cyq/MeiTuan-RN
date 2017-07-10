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

var ADIcon = React.createClass({
	render:function(){
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					activeOpacity = {0.6}
					onPress = {()=>{alert(this.props.title)}}
				>
					<Image source={{uri:this.props.icon}} 
						style={styles.iconStyle} />
				</TouchableOpacity>
				<Text style={styles.txtStyle}>{this.props.title}</Text>
			</View>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		justifyContent:"center",
		alignItems:"center",
		width:width/5,
		height:80,
		paddingTop:20,
	},
	iconStyle:{
		width:width/6-10,
		height:width/6-10,
	},
	txtStyle:{
		color:"#666",
		fontSize:12,
	}
});

module.exports = ADIcon;
