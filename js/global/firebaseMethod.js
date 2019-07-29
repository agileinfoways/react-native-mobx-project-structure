import { Platform } from "react-native";
import firebase from "react-native-firebase";
import { GM } from "./methods.global";

const iosConfig = {
  clientId: "",
  appId: "",
  apiKey: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: "",
  projectId: "",
  persistence: true
};

const androidConfig = {
  clientId: "",
  appId: "",
  apiKey: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: "",
  projectId: "",
  persistence: true
};

const FB = {
  initialize: () => {
    if (firebase.app()) {
      return firebase.app();
    } else {
      return firebase.initializeApp(
        Platform.OS === 'ios' ? iosConfig : androidConfig,
        "Your App Name"
      );
    }
  },
  getToken: () => {
    return firebase.messaging().getToken().then((fcmToken) => {
      if (fcmToken) {
        GM.showLog("FCM TOKEN ==> " + JSON.stringify(fcmToken))
        return fcmToken;
      }
    })
  },
  onReady: () => {
    return new Promise((resolve, reject) => {
      firebase
        .app()
        .onReady()
        .then(
          app => {
            resolve(true);
          },
          error => {
            reject(false);
          }
        );
    });
  },
  onNotificationOpened: () => {
    firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      if(notificationOpen.notification) {
        const notification = notificationOpen.notification;
        GM.showLog("onNotificationOpened ==> " + JSON.stringify(notification))
      }
    });
  },
  checkNotificationPermission: () => {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          GM.showLog("User has notification permission")
        } else {
          GM.showLog("User doesn't have permission asking it")
          firebase.messaging().requestPermission()
            .then(() => {
              GM.showLog("User has provided notification permission")
            })
            .catch(error => {
              GM.showLog("User has rejected notification permission")
            });
        }
      });
  },
  removeAllNotification: () => {
    firebase.notifications().removeAllDeliveredNotifications();
  }
};
export default FB;