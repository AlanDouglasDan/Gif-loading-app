import React, { FC } from "react";
import { View, SafeAreaView, KeyboardAvoidingView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StackNavParams } from "../../navigation/StackNav";
import { useGifHandlerLogic } from "./RandomGifLogic";
import { RandomGifUI } from "./RandomGifUI";
import styles from "./RandomGif.styles";

const RandomGifScreen: FC<
  NativeStackScreenProps<StackNavParams, "Random Gif">
> = ({ navigation }) => {
  const {
    randomGif,
    searchedGifs,
    searchValue,
    isFocused,
    setIsFocused,
    clearTextInput,
    onChangeText,
    navigateToGifDetails,
    handleInfiniteScroll,
  } = useGifHandlerLogic(navigation);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <RandomGifUI
            randomGif={randomGif}
            searchedGifs={searchedGifs}
            searchValue={searchValue}
            isFocused={isFocused}
            clearTextInput={clearTextInput}
            onChangeText={onChangeText}
            navigateToGifDetails={navigateToGifDetails}
            setIsFocused={setIsFocused}
            handleInfiniteScroll={handleInfiniteScroll}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default RandomGifScreen;
