
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class BuninessNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_shop_local.png")} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.txtStyle}>{this.props.txt}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_shop_search.png")} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    height:44,
    // backgroundColor:"#fd4b1f",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  txtStyle:{
    fontSize:20,
    color:"#282828",
  },
  iconStyle:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:15,
  }
});
module.exports = BuninessNav;
