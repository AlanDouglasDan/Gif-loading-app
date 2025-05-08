import { useState, useCallback } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StackNavParams } from "../../navigation/StackNav";
import { fetchRandomGif, searchGifs } from "../../http/api";
import { GifObject } from "../../core/types";
import { debounce } from "../../core/utils";

export const useGifHandlerLogic = (
  navigation: NativeStackNavigationProp<StackNavParams, "Random Gif", undefined>
) => {
  // to store the current random gif displayed
  const [randomGif, setRandomGif] = useState<GifObject>();

  // to store the list of gifs returned from the search
  const [searchedGifs, setSearchedGifs] = useState<GifObject[]>([]);

  // the current value in the search bar
  const [searchValue, setSearchValue] = useState<string>("");

  // to hold the intervalId used to load a random gif in state so i can clear the interval using the id in a function outside the useCallback hook where the setInterval is defined
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();

  // to keep track of whether the keyboard is in focus which is used to know whether to display the random gif or the search ui
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // to know when the scrollview has reached the bottom
  const [hasReachedBottom, setHasReachedBottom] = useState<boolean>(false);

  const [offset, setOffset] = useState<number>(0);

  const fetchSearchedGifs = (text: string, _offset: number) => {
    setHasReachedBottom(true);

    searchGifs(text, _offset)
      .then((res) => {
        setSearchedGifs((prev) => [...prev, ...res]);

        setHasReachedBottom(false);

        setOffset((prev) => prev + 20);
      })
      .catch((err) => console.error(err));
  };

  const handleGifsSearch = useCallback(
    async (text: string) => {
      setSearchValue(text);

      if (text.length >= 2) {
        searchGifs(text, offset)
          .then((res) => setSearchedGifs(res))
          .catch((err) => console.error(err));
      } else if (text.length >= 1) {
        setIsFocused(true);
      } else {
        setSearchedGifs([]);
      }
    },
    [searchValue]
  );

  // this function waits for 350ms after user actively stops typing in the search bar
  const debouncedSearch = useCallback(debounce(handleGifsSearch, 350), []);

  const getRandomGif = () =>
    fetchRandomGif()
      .then((res) => setRandomGif(res))
      .catch((err) => console.error(err));

  useFocusEffect(
    useCallback(() => {
      // only fetch random Gifs when the searchbar isn't actively in use
      if (!isFocused) {
        // initially fetch the randomGif on page load
        getRandomGif();

        // Set up interval to change GIF every 10 seconds
        const interval = setInterval(() => {
          getRandomGif();
        }, 10000); // 10000ms = 10 secs

        setIntervalId(interval);

        return () => clearInterval(interval); // Cleanup on unmount
      } else {
        // Clear the interval if focused on search or search results are present
        if (intervalId) clearInterval(intervalId);
      }
    }, [isFocused])
  );

  // when cancel is pressed
  const clearTextInput = () => {
    handleGifsSearch("");
    setIsFocused(false);
    Keyboard.dismiss();
  };

  // when you type in text in the search bar
  const onChangeText = (text: string) => {
    setSearchValue(text);
    debouncedSearch(text);
  };

  const navigateToGifDetails = (gif: GifObject) => {
    // cleanup the interval running so it doesn't continue fetching random gifs
    clearInterval(intervalId);

    navigation.navigate("Gif Details", { gifObject: gif });
  };

  const handleInfiniteScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ): void | undefined => {
    const { layoutMeasurement, contentSize, contentOffset } = event.nativeEvent;

    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;

    if (isAtBottom && !hasReachedBottom) {
      console.log(isAtBottom);

      fetchSearchedGifs(searchValue, offset + 20);
    }
  };

  return {
    randomGif,
    searchedGifs,
    searchValue,
    isFocused,
    setIsFocused,
    getRandomGif,
    debouncedSearch,
    clearTextInput,
    onChangeText,
    navigateToGifDetails,
    handleInfiniteScroll,
  };
};
