
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class DetailNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={this.props.backFunc}
        >
          <Image source={require("../../images/home_arrow.png")} style={styles.leftIconStyle} />
        </TouchableOpacity>
        <Text style={{fontSize:20}}>{this.props.txt}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require("../../images/icon_navigationItem_share@2x.png")} style={styles.rightIconStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    height:44,
    backgroundColor:"#fefefe",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  leftIconStyle:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:15,
    transform:[{rotate:'180deg'}],
  },
  rightIconStyle:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:15,
  }
});
module.exports = DetailNav;
