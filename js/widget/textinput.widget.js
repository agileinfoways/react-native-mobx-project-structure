import React, { Component } from "react";
import { StyleSheet,TextInput } from "react-native";
import { COLORS, CONST,FONTS } from "../global/constants.global";

export default class CustomTextInput extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <TextInput 
        style={[styles.inputStyle,this.props.customStyle]}
        ref={this.updateRef}
        placeholderTextColor={COLORS.GRAYBLACK}
        value={(this.props.value) && this.props.value}
        onChangeText={this.props.onChangeText}
        {...this.props}
      />
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    width:CONST.DEVICE_WIDTH,
    borderColor: COLORS.GRAYBLACK,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding:5
  },
  inputStyle: {
    paddingLeft: 10,
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
});
  