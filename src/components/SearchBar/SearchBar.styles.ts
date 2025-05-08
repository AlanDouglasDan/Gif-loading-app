import { StyleSheet } from "react-native";

import { palette } from "../../core/palette";

export default StyleSheet.create({
  flex: {
    flex: 1,
    gap: 4,
  },
  flexedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text14: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.GRAY,
  },
  inputContainer: {
    backgroundColor: palette.LIGHT_GRAY,
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
});
