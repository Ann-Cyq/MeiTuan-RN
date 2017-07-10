
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var MoreCell = React.createClass({
  getInitialState:function(){
    return {
      switchValue:false
    }
  },
  render:function(){
    if (this.props.type == "clear") {
      return (
        <TouchableOpacity onPress={this.touch} activeOpacity={0.5}>
          <View style={styles.cellStyle}>
            <Text style={styles.txtStyle}>{this.props.txt}</Text>
            <View style={styles.clearRightStyle}>
              <Text>2.00M</Text>
              <Image source={{uri:'icon_cell_rightarrow'}} style={styles.imgStyle} />
            </View>
          </View>
        </TouchableOpacity>
      );
    }else if(this.props.type == "switch"){
      return (
      <TouchableOpacity onPress={this.touch} activeOpacity={0.5}>
        <View style={styles.cellStyle}>
          <Text style={styles.txtStyle}>{this.props.txt}</Text>
          <Switch value={this.state.switchValue} onValueChange={this.switchChange} />
        </View>
      </TouchableOpacity>
      );
    } 
    return (
      <TouchableOpacity onPress={this.touch} activeOpacity={0.5}>
        <View style={styles.cellStyle}>
          <Text style={styles.txtStyle}>{this.props.txt}</Text>
          <Image source={{uri:'icon_cell_rightarrow'}} style={styles.imgStyle} />
        </View>
      </TouchableOpacity>
    );
  },
  switchChange:function(value){
    this.setState({
      switchValue:value
    });
  }
});

var styles = StyleSheet.create({
  cellStyle:{
    height:40,
    backgroundColor:"#fefefe",
    marginTop:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  txtStyle:{
    fontSize:15,
    color:"#282828",
    marginLeft:10
  },
  imgStyle:{
    width:15,
    height:15,
    marginRight:10
  },
  clearRightStyle:{
    flexDirection:"row",
    alignItems:"center"
  }
});

module.exports = MoreCell;
