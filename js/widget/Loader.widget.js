import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import GS from '../global/styles.global';
import { COLORS } from "../global/constants.global";

export default class Loader extends Component {
  render() {
    return (
      <View style={GS.loaderContainer}>
        <ActivityIndicator size={'large'} color={COLORS.BLACK} />
      </View>
    );
  }
}