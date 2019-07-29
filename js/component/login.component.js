import { observer } from 'mobx-react';
import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { CONST } from "../global/constants.global";
import { GM } from "../global/methods.global";
import LoginStore from "../store/login.store";
import styles from "../style/login.style.js";

@observer
export default class LoginComponent extends Component {
  constructor() {
    super();
    this.inputs = {};
    this.state = {
      isLoading: false,
      isLoggedInUser: null
    }
  }
  
  componentDidMount = async () => {
    let res = await GM.getValueFromPref('user');
    if (res) {
      this.setState({ isLoggedInUser: true })
      LoginStore.userData = res
    } else {
      this.setState({ isLoggedInUser: false })
    }
  };


  checkValidations = async () => {
    let fcmToken = await FB.getToken();
    this.setState({ isLoading: true })
    let params = {
      email: LoginStore.email,
      device_type: (CONST.DEVICE_OS == "ios") ? '0' : '1',
      fcm_token: fcmToken,
      password: LoginStore.password
    };

    LoginStore.callLoginApi(params, async (success) => {
      try {
        await GM.setValueInPref('user', JSON.stringify(success.data));
        await GM.setValueInPref('password', JSON.stringify(LoginStore.password));
        LoginStore.userData = success.data
        this.setState({ isLoading: false })
      } catch (error) {
        GM.showLog("error callLoginApi==> " + JSON.stringify(error))
      }
    }, failure => {
      this.setState({ isLoading: false })
      LoginStore.email = "";
      LoginStore.password = "";
    });
  }

  checkInternet = () => {
    GM.netStatus(async (isConnect) => {
      if (isConnect) {
        this.checkValidations();
      } else {
        GM.showNetworkAlert();
      }
    })
  }

  render() {
    let store = LoginStore;
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <Text
          onPress={() => {
            GM.showAlertWithButtonCallback("Test Message", () => {
              alert('Button pressed');
            });
          }}
        >
          {CONST.TITLE_HOME}
        </Text>
      </View>
    </SafeAreaView>
    );
  }
}
