
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ComNavgator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_navigationItem_message_white@2x.png")} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={{fontSize:20}}>{this.props.txt}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_navigationItem_set_white@2x.png")} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    );
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
  iconStyle:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:15,
  }
});
module.exports = ComNavgator;
