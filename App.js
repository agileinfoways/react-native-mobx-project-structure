import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./js/screen/login.screen";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default createAppContainer(AppNavigator);
