import { PermissionsAndroid } from "react-native";
import { Alert, AsyncStorage } from "react-native";
import { CONST } from "./constants.global";
import NetInfo from "@react-native-community/netinfo";
import { CONFIG } from "./config.global";
import { NavigationActions, StackActions } from "react-navigation";
import LoginStore from "../store/login.store";

export const GM = {
  showLog: msg => {
    console.log(msg);
  },
  showAlertWithButtonCallback: (msg, press) => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        CONST.APP_NAME,
        "" + msg,
        [
          {
            text: "OK",
            onPress: () => {
              GM.showLog("OK Pressed");
              if (press) {
                press();
                resolve();
              } else {
                resolve();
              }
            }
          }
        ],
        {
          cancelable: false
        }
      );
    });
  },
  showNetworkAlert: () => {
    let msg = CONST.INTERNET_ERROR;
    Alert.alert(
      CONST.APP_NAME,
      "" + msg,
      [
        {
          text: "OK",
          onPress: () => {
            GM.showLog('OK Pressed')
          }
        }
      ],
      {
        cancelable: false
      }
    );
  },
  async getHeaders() {
    let headers;
    let authToken = await GM.getAuthToken();
    if (authToken) {
      headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        token: authToken
      };
    } else {
      headers = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
    }
    return await headers;
  },
  getAuthToken: async () => {
    let res = await GM.getValueFromPref("user");
    if (res) {
      return res.token;
    } else {
      return null;
    }
  },
  getUserId: async () => {
    let res = await GM.getValueFromPref("user");
    if (res) {
      GM.showLog("id ==> " + res.id);
      return res.id;
    } else {
      return null;
    }
  },
  async callAPI(url, methodType, params, success, failure, navigation) {
    var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let headers = await GM.getHeaders();

    let link = CONFIG.BASE_URL + url;
    GM.showLog("Method Type ==>" + methodType);
    GM.showLog("Link ==>" + link);
    GM.showLog("Form Body ==>" + formBody);
    GM.showLog("Header ==>" + JSON.stringify(headers));
    GM.showLog("navigation ==>" + JSON.stringify(navigation));
    fetch(link, {
      method: methodType,
      headers: headers,
      body: formBody
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        return GM.checkStatus(res, navigation);
      })
      .then(dictSuccess => {
        return success(dictSuccess);
      })
      .catch(error => {
        return failure(error);
      });
  },  
  checkStatus: (response, navigation) => {
    console.log(" STATUS CHECK", response);
    if (response.status_code == 200) {
      return Promise.resolve(response);
    } else if (response.status_code == 401) {
      GM.showAlert(CONST.SESSION_EXPIRED, async () => {
        if (navigation) {
          await AsyncStorage.clear(
            success => {
              GM.showLog("Logout success => " + JSON.stringify(success));
            },
            failure => {
              GM.showLog("Logout failure => " + JSON.stringify(failure));
            }
          );
          // Reset All Stores
          LoginStore.reset();

          GM.resetStack( navigation, 'Login');
        }
      });
    } else {
      return Promise.reject(response);
    }
  },
  netStatus: callback => {
    // Please checkout for more details: https://facebook.github.io/react-native/docs/netinfo
    NetInfo.isConnected.fetch().then(isConnected => {
      callback(isConnected);
    });
  },
  netStatusEvent: callback => {
    NetInfo.isConnected.addEventListener("connectionChange", status => {
      callback(status);
    });
  },
  resetStack: (navigation, key) => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: key })]
    });
    navigation.dispatch(resetAction);
  },
  setValueInPref: async (key, obj) => {
    // Please checkout for more details: https://facebook.github.io/react-native/docs/asyncstorage
    try {
      await AsyncStorage.setItem(key, obj);
    } catch (error) {
      GM.showLog("error setValueInPref==> " + JSON.stringify(error));
      return null;
    }
  },
  getValueFromPref: async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        GM.showLog("Pref Data for " + key + " ==> " + value);
        return JSON.parse(value);
      } else {
        return null;
      }
    } catch (error) {
      GM.showLog("getValueFromPref ==> " + JSON.stringify(error));
    }
  },
  logoutDialog(onYesClick) {
    Alert.alert(
      CONST.APP_NAME,
      CONST.LOGOUT_CONFIRM,
      [
        {
          text: "OK",
          onPress: () => {
            console.log(" LOGOUT YES CLICK ");
            onYesClick();
          }
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  },
  redirectWithInternetCheck: (props, routeName) => {
    GM.netStatus(isConnect => {
      if (isConnect) {
        props.navigation.navigate(routeName);
      } else {
        GM.showNetworkAlert();
      }
    });
  }
};