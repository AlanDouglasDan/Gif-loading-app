import { FC } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import styles from "./SearchBar.styles";
import { palette } from "../../core/palette";

interface SearchBarProps {
  searchValue: string;
  isFocused: boolean;
  setIsFocused: (val: boolean) => void;
  onChangeText: (val: string) => void;
  handleGifsSearch: (val: string) => void;
  clearTextInput: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  searchValue,
  isFocused,
  setIsFocused,
  onChangeText,
  handleGifsSearch,
  clearTextInput,
}) => {
  return (
    <View style={styles.flexedRow}>
      <View style={[styles.inputContainer, { borderWidth: isFocused ? 1 : 0 }]}>
        <AntDesign name="search1" size={18} color={palette.GRAY} />

        <TextInput
          placeholder="Search"
          placeholderTextColor={palette.GRAY}
          value={searchValue}
          onChangeText={(text) => onChangeText(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !searchValue && setIsFocused(false)}
          style={styles.flex}
          returnKeyLabel="Search"
          returnKeyType="search"
        />

        {/* display cancel icon only when text has been entered into the search bar */}
        {searchValue && (
          <Pressable onPress={() => handleGifsSearch("")}>
            <MaterialIcons name="cancel" size={20} color={palette.GRAY} />
          </Pressable>
        )}
      </View>

      {/* dispolay cancel button only when the textinput is in focus */}
      {isFocused && (
        <Pressable onPress={clearTextInput} testID="clear-button">
          <Text style={styles.text14}>Cancel</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
