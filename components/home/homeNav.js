
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class HomeNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={this.searchCity}>
          <Text style={styles.cityStyle}>厦门</Text>
        </TouchableOpacity>
        <Text style={styles.txtStyle}>{this.props.txt}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_homepage_search.png")} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
  searchCity() {

  }
}
var styles = StyleSheet.create({
  container:{
    height:44,
    backgroundColor:"#fd4b1f",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  cityStyle:{
    fontSize:20,
    color:"#fff",
    marginLeft:10
  },
  txtStyle:{
    fontSize:20,
    color:"#282828",
  },
  iconStyle:{
    width:25,
    height:25,
    marginLeft:15,
    marginRight:15,
  }
});
module.exports = HomeNav;
