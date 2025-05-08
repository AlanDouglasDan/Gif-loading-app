import { StyleSheet } from "react-native";

import { palette } from "../../core/palette";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.WHITE,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  innerContainer: {
    paddingHorizontal: 20,
    height: "100%",
  },
});
