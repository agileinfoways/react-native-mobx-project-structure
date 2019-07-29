import { StyleSheet } from "react-native";
import { COLORS, CONST, FONTS } from "../global/constants.global";

export default  styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.WHITE
  },
  safeAreaStyle: {
    backgroundColor: COLORS.SCREEN_BG
  }
});