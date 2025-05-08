import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { jest, describe, it, expect, beforeEach } from "@jest/globals";

import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  const mockSetIsFocused = jest.fn();
  const mockOnChangeText = jest.fn();
  const mockHandleGifsSearch = jest.fn();
  const mockClearTextInput = jest.fn();

  const defaultProps = {
    searchValue: "",
    isFocused: false,
    setIsFocused: mockSetIsFocused,
    onChangeText: mockOnChangeText,
    handleGifsSearch: mockHandleGifsSearch,
    clearTextInput: mockClearTextInput,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    expect(getByPlaceholderText("Search")).toBeTruthy();
  });

  it("calls onChangeText when input text changes", () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    const input = getByPlaceholderText("Search");

    fireEvent.changeText(input, "new text");
    expect(mockOnChangeText).toHaveBeenCalledWith("new text");
  });

  it("sets focus state on input focus", () => {
    const { getByPlaceholderText } = render(<SearchBar {...defaultProps} />);
    const input = getByPlaceholderText("Search");

    fireEvent(input, "focus");
    expect(mockSetIsFocused).toHaveBeenCalledWith(true);
  });

//   it("clears search on clear button press", () => {
//     const props = { ...defaultProps, searchValue: "test", isFocused: true };
//     const { getByTestId } = render(<SearchBar {...props} />);

//     fireEvent.press(getByTestId("clear-button"));
//     expect(mockOnChangeText).toHaveBeenCalledWith("");
//   });

  it("renders cancel button when focused and calls clearTextInput on press", () => {
    const props = { ...defaultProps, isFocused: true };
    const { getByText } = render(<SearchBar {...props} />);

    fireEvent.press(getByText("Cancel"));
    expect(mockClearTextInput).toHaveBeenCalled();
  });
});
