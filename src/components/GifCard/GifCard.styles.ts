import { StyleSheet } from "react-native";

import { palette } from "../../core/palette";

export default StyleSheet.create({
  flex: {
    flex: 1,
    gap: 4,
  },
  flexedRow: {
    flexDirection: "row",
    gap: 12,
  },
  text14: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.GRAY,
  },
  header16: {
    fontSize: 16,
    fontWeight: "700",
    color: palette.GRAY,
  },
  gifImage: {
    width: "100%",
    height: 350,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: palette.GRAY,
  },
  badge: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: palette.GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: palette.WHITE,
    fontSize: 26,
    fontWeight: "500",
  },
});
