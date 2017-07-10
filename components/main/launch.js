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
var height = Dimensions.get('window').height;

var Main = require('./main.js');

var Launch =React.createClass({
	getInitialState:function(){
		return {
			sec:3,
		}
	},
	componentDidMount:function(){
		var sec = this.state.sec;
		var that = this;
		this.timer = setInterval(function(){
			sec--;
			that.setState({
				sec:sec
			});
			if (sec == 0) {
				clearInterval(that.timer);
				that.props.navigator.replace({
					component:Main,
					title:"main"
				})
			}
		},1000);
  	},
	render:function(){
		return (
			<View>
				<Text style={{alignSelf:'flex-end'}}>{this.state.sec}秒后自动跳转</Text>
				<Image source={require('../../images/launch.png')} 
					style={{width:width,height:height}}/>
			</View>
		);
	}
})
module.exports = Launch;