import React, { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackNavParams } from "../../navigation/StackNav";
import { useGifDetailsLogic } from "./GifDetailsLogic";
import { GifDetailsUI } from "./GifDetailsUI";
import styles from "./GifDetails.styles";

const GifDetailsScreen: FC<
  NativeStackScreenProps<StackNavParams, "Gif Details">
> = ({ navigation, route }) => {
  const { gifObject } = route.params ?? {};

  // Custom hook to handle gif details logic
  useGifDetailsLogic({ navigation, gifObject });

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <GifDetailsUI gifObject={gifObject} />
      </SafeAreaView>
    </View>
  );
};

export default GifDetailsScreen;
