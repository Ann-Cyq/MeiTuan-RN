import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var LogoCell = React.createClass({
	render:function(){
		return (
			<TouchableOpacity activeOpacity={0.5}>
				<View style={styles.container}>
					<View style={styles.leftStyle}>
						<View style={styles.logoStyle}>
						  <Image source={require('../../images/meituan.png')}
							style={styles.imgStyle} />
						</View>
						<Text style={styles.txtStyle}>安谧1994</Text>
						<Image source={require('../../images/avatar_vip.png')}
							style={styles.iconStyle} />
					</View>
					<Image source={{uri:'icon_cell_rightarrow'}} style={styles.rightIconStyle} />
				</View>
			</TouchableOpacity>
		);
	}
})

var styles = StyleSheet.create({
	container:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		marginTop:35
	},
	leftStyle:{
		flexDirection:"row",
		alignItems:"center",
	},
	logoStyle:{
		width:70,
		height:70,
		borderStyle:"solid",
		borderWidth:5,
		borderColor:"orange",
		borderRadius:40,
		marginLeft:20,
		marginRight:20,
		backgroundColor:"#FEFEFE",
	},
	imgStyle:{
		height:30,
		resizeMode:"contain",
		position:"absolute",
		top:18,
		left:-53,
	},
	txtStyle:{
		color:"#fff",
		fontSize:20,
	},
	iconStyle:{
		width:20,
		height:20,
	},
	rightIconStyle:{
		width:15,
		height:25,
	}
});

module.exports = LogoCell;
