import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var MineCell = React.createClass({
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
  	return (
  		<View style={styles.cellStyle}>
  			<Image source={{uri:this.props.leftImg}} style={styles.leftIconStyle} />
  			<Text style={styles.leftTxtStyle}>{this.props.leftTxt}</Text>
  		</View>	
  	);
  },
  renderRight:function(){
  	if (this.props.type == "new") {
  		return (
	  		<View style={styles.cellStyle}>
	  			<Image source={{uri:"me_new"}} style={{width:30,height:20}}/>
	  			<Image source={{uri:"icon_cell_rightarrow"}} style={styles.rightIconStyle} />
	  		</View>
	  	);
  	}
  	return (
  		<View style={styles.cellStyle}>
  			<Text style={styles.rightTxtStyle}>{this.props.rightTxt}</Text>
  			<Image source={{uri:"icon_cell_rightarrow"}} style={styles.rightIconStyle}/>
  		</View>
  	);
  }
});
  
var styles = StyleSheet.create({
	container:{
		height:44,
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		backgroundColor:"#fefefe",
		marginTop:1,
	},
	cellStyle:{
		flexDirection:"row",
		alignItems:"center",
	},
	leftIconStyle:{
		width:25,
		height:25,
		borderRadius:25,
		marginLeft:10,
		marginRight:5,
	},
	rightIconStyle:{
		width:15,
		height:15,
		marginLeft:5,
		marginRight:10,
	},
	rightTxtStyle:{
		color:"#666",
		fontSize:12,
	},
	leftTxtStyle:{
		color:"#282828",
		fontSize:16,
	}
});

module.exports = MineCell;