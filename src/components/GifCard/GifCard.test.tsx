import React from "react";
import { render } from "@testing-library/react-native";
import { jest, describe, it, expect, beforeEach } from "@jest/globals";

import GifCard from "./GifCard";
import { GifObject } from "../../core/types";

// Mock data for the gif object
const mockGifObject: GifObject = {
  title: "Sample GIF",
  url: "https://samplegif.com/sample.gif",
  rating: "pg",
  images: {
    original: { url: "https://samplegif.com/sample.gif" },
    preview_gif: { url: "https://samplegif.com/preview.gif" },
  },
};

describe("GifCard Component", () => {
  // Clear mock history before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display the GIF title", () => {
    const { getByText } = render(<GifCard gifObject={mockGifObject} />);
    const titleText = getByText("Sample GIF");
    expect(titleText).toBeTruthy();
  });

  it("should display the GIF image with placeholder", () => {
    const { getByTestId } = render(<GifCard gifObject={mockGifObject} />);
    const imageComponent = getByTestId("original-gif-image"); // assuming a testID prop
    expect(imageComponent.props.source.uri).toBe(
      mockGifObject.images.original.url
    );
  });

  it("should display the age restriction badge", () => {
    const { getByText } = render(<GifCard gifObject={mockGifObject} />);
    const ratingText = getByText("PG"); // should be uppercase
    expect(ratingText).toBeTruthy();
  });
});
