import { useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { formatEmptyValue } from "../../core/utils";
import { StackNavParams } from "../../navigation/StackNav";

type UseGifDetailsLogicProps = {
  navigation: NativeStackNavigationProp<StackNavParams, "Gif Details">;
  gifObject: { title: string };
};

export const useGifDetailsLogic = ({
  navigation,
  gifObject,
}: UseGifDetailsLogicProps) => {
  useEffect(() => {
    // set header title for the gif details screen using the navigation header options
    navigation.setOptions({
      headerTitle: formatEmptyValue(gifObject.title),
    });
  }, [navigation, gifObject]);
};
