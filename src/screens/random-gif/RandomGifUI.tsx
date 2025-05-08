import React, { FC } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import { SearchBar } from "../../components/SearchBar";
import { GifCard } from "../../components/GifCard";
import { GifObject } from "../../core/types";
import styles from "./RandomGif.styles";

type RandomGifUIProps = {
  randomGif: GifObject | undefined;
  searchedGifs: GifObject[];
  searchValue: string;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  clearTextInput: () => void;
  onChangeText: (text: string) => void;
  navigateToGifDetails: (gif: GifObject) => void;
  handleInfiniteScroll: (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => void | undefined;
};

export const RandomGifUI: FC<RandomGifUIProps> = ({
  randomGif,
  searchedGifs,
  searchValue,
  isFocused,
  setIsFocused,
  clearTextInput,
  onChangeText,
  navigateToGifDetails,
  handleInfiniteScroll,
}) => (
  <ScrollView
    style={styles.innerContainer}
    contentContainerStyle={styles.contentContainer}
    keyboardShouldPersistTaps="handled"
    onScroll={handleInfiniteScroll}
    scrollEventThrottle={160}
  >
    <SearchBar
      searchValue={searchValue}
      isFocused={isFocused}
      onChangeText={onChangeText}
      setIsFocused={setIsFocused}
      handleGifsSearch={onChangeText} // Use the debounced version from logic
      clearTextInput={clearTextInput}
    />

    {randomGif !== undefined ? (
      <View style={styles.marginTop24}>
        <Text style={styles.text14}>
          {isFocused ? "Search results:" : "Random selected GIF:"}
        </Text>

        {searchedGifs.length !== 0 || isFocused ? (
          <View style={styles.flexWrapContainer}>
            {searchedGifs.map((gif) => (
              <Pressable
                key={gif.id}
                style={styles.searchedGif}
                onPress={() => navigateToGifDetails(gif)}
              >
                <Image
                  source={{ uri: gif.images.original_still?.url }}
                  resizeMode="cover"
                  style={styles.flex}
                />
              </Pressable>
            ))}
          </View>
        ) : (
          <GifCard gifObject={randomGif} />
        )}
      </View>
    ) : (
      <ActivityIndicator size={"large"} style={styles.marginTop24} />
    )}
  </ScrollView>
);

// 1) detect when the scrollview is at the bottom
// 2) to increase the page number of the giphy api
// 3) fetch new data using the updated page number/offset
// 4) display a loading indicator at the bottom when fetching the new data
// 5) append the new data to the array of searchedGifs
