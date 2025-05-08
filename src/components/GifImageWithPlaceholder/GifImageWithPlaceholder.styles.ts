import { StyleSheet } from "react-native";

import { palette } from "../../core/palette";

export default StyleSheet.create({
  gifImage: {
    width: "100%",
    height: 350,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: palette.GRAY,
  },
  hiddenImage: {
    opacity: 0,
  },
  previewImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
