import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, CONST } from "../global/constants.global";

export default class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.btnStyleLogin,this.props.buttonStyle]}
        onPress={this.props.onPress}
      >
        <Text style={styles.submitButtonText}> {this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: CONST.DEVICE_WIDTH,
    borderColor: COLORS.GREY,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding:5
  },
  btnStyleLogin: {
    backgroundColor: COLORS.BUTTON_BG,
    padding: 10,
    margin: 15,
    height: 40,
    width: 162,
    borderRadius: 3,
    alignItems: 'center',
    alignSelf: 'center',
    opacity : 1,
    elevation: (CONST.DEVICE_OS=='ios') ? 0.1 : 4,
    shadowRadius:(CONST.DEVICE_OS=='ios') ? 0.2 : 0.2,
    shadowOpacity: (CONST.DEVICE_OS=='ios') ? 1 : 1,
    shadowOffset: {
      height: (CONST.DEVICE_OS=='ios') ? 3 : 3,
      width: 0,
    },
    shadowColor: COLORS.SHADOW_COLOR     
  },
  submitButtonText: {
    color: 'white',
    fontFamily: FONTS.BOLD,
    fontSize: 14,
  }  
});