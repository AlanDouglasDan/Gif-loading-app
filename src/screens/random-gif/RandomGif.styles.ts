import { StyleSheet, Dimensions } from "react-native";

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
  },
  flex: {
    flex: 1,
  },
  text14: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.GRAY,
  },
  marginTop24: {
    marginTop: 24,
  },
  flexWrapContainer: {
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
  },
  searchedGif: {
    width: Dimensions.get("screen").width / 3 - 20,
    height: Dimensions.get("screen").width / 3 - 20,
    borderWidth: 1,
    borderColor: palette.GRAY,
  },
});
