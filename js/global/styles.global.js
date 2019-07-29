import { StyleSheet } from "react-native";
import { COLORS, CONST, FONTS } from "../global/constants.global";

export default styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: FONTS.BOLD,
    fontSize: 15,
  },
  collapsableView: {
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    borderWidth: CONST.DEVICE_OS == "ios" ? 1 : 0.5,
    backgroundColor: COLORS.VIEW_BG,
  },
  loaderContainer: {
    height: CONST.DEVICE_HEIGHT,
    width: CONST.DEVICE_WIDTH,
    backgroundColor: COLORS.TRANSPARENT,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999999
  },
});